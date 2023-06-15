# Installation of ZAP into Pipeline 

The ZAP tool can be installed within the azure pipeline using the following step: 

1. Download the following file and place it in your desired repo 
download the file OWASPToNUnit3.xslt, and keep it inside the repository. This file is needed to convert OWASP ZAP Security Test result XML file to publish results in Azure DevOps.
Here is the link to the git repo for the file [Github repo for ZAP](https://dev.azure.com/francislacroix/_git/CodeShare?path=/OWASPBlog/OWASPToNUnit3.xslt)

2.	Create a new pipeline in Azure Dev 
Go to the Pipeline section within the azure Devops and select the new pipeline option 

3.	Repositor selection 
The next stage is to select a repo for the pipeline, in our case we selected GIT 

- The repo we setup was - UKHO/Gridded-Bathymetry-Service-UI
- Setting up the branch we need to trigger off was => refs/heads/OwaspZAPSecurityTests 
-	Set the clean option to TRUE 
-	Set clean options to SOURCE 
-	Tag sources are set to NEVER 
-	And select the Report build status 

4.	Initial setup for the Agent Job in Azure pipeline
![Azure Agent setup](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zapazuresetup.jpg)

5.	The setup for the installation for the Docker
   
   ![Azure docker setup](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zap2.jpg)

6. Next stage is to setup the test using a BASH script
   
   ![Bash script](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zap3.jpg)

> Within the script section of the page then you will need to add similar text to –  
chmod -R 777  ./ 
 
> docker run --name ZapContainer -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable zap-full-scan.py -t https://gbsstorageaccountdev.z33.web.core.windows.net/ -g gen.conf -x OWASP-ZAP-Report.xml -r scan-report.html 
 
> docker cp ZapContainer:/zap/wrk/OWASP-ZAP-Report.xml $(System.DefaultWorkingDirectory)/AutoTests/OWASP-ZAP-Report.xml 
 
> docker rm /ZapContainer 
true

7.	The next stage is to setup the conversion into NUnit reports using a PowerShell script
   
   ![Bash script](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zap4.jpg)

> Now setup the ZAP reporting, this is needed to view the results of performing the security checks on the application. Ensure that you have entered the following text in the scripting section: -

> $XslPath = "$(System.DefaultWorkingDirectory)/AutoTests/OWASPToNUnit3.xslt" 
$XmlInputPath = "$(System.DefaultWorkingDirectory)/AutoTests/OWASP-ZAP-Report.xml" 
$XmlOutputPath = "$(System.DefaultWorkingDirectory)/Converted-OWASP-ZAP-Report-$(Build.BuildNumber).xml" 
$XslTransform = New-Object System.Xml.Xsl.XslCompiledTransform 
$XslTransform.Load($XslPath) 
$XslTransform.Transform($XmlInputPath, $XmlOutputPath) 
 
> Get-Content $XmlOutputPath 


8.	The last stage is to publish the results
   
   ![Bash script](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zap5.jpg)

This stage is the final one for configuration an Agent Job and ensures that you publish the results. 

9.	Setting up API testing for ZAP using BASH script
    
   ![Bash script](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zap6.jpg)
   
> The above illustrates the 3rd step in configuring the agent to test API’s. this is setting up the Bash Script. You must enter the text into the script section as:- 
chmod -R 777 ./ 
docker run --name ZapContainer -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-weekly zap-api-scan.py -t [your-api-url] -f openapi -g api-scan.conf -x OWASP-ZAP-Report.xml -r api-scan-report.html 
docker cp ZapContainer:/zap/wrk/OWASP-ZAP-Report.xml $(System.DefaultWorkingDirectory)/AutoTests/OWASP-ZAP-Report.xml 
docker rm /ZapContainer 
true 

10.	Adding PowerShell script to convert report to NUnit
    
   ![Bash script](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zap7.jpg)

> The next stage is to convert the ZAP report into an Nunit report. 
Display name  - this can be anything you like that is meaningful 
Type and the Script – these need to be inline 
The text in the script box should be :- 
$XslPath = "$($Env:SYSTEM_DEFAULTWORKINGDIRECTORY)/_Quality/SecurityTesting/OWASPToNUnit3.xslt" 
$XmlInputPath = "$($Env:SYSTEM_DEFAULTWORKINGDIRECTORY)/OWASP-ZAP-Report.xml" 
$XmlOutputPath = "$($Env:SYSTEM_DEFAULTWORKINGDIRECTORY)/Converted-OWASP-ZAP-Report.xml" 
$XslTransform = New-Object System.Xml.Xsl.XslCompiledTransform 
$XslTransform.Load($XslPath) 
$XslTransform.Transform($XmlInputPath, $XmlOutputPath) 
 

11.	Publish the reports
    
   ![Bash script](https://github.com/UKHO/docs/blob/Security-test-automation/quality-assurance/images/zap8.jpg)

The final stage is to publish the report
