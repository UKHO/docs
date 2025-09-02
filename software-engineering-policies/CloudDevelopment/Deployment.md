# Deployment

[Back to main Readme](README.md)

## Preferred Security Tooling

Before releasing applications and infrastructure into our cloud environments, it is important that we scan our assets for any potential vulnerabilities and remediate issues that exceed our risk appetite. Our current preffered security tooling for the various scanning outlets is [Snyk.io](https://app.eu.snyk.io/login) which is connected to our Github repos for Static Analysis testing and Software Composistion testing as a PR is raised. However it is greatly encouraged that the below scanning is added to your pipelines using the [provided task](https://github.com/UKHO/ukho-azure-pipeline-scan-task) so that any vulnerabilities exceeding your risk appetite do not reach your cloud environment.

Its important to understand that the tooling doesnt have context so can sometimes provide false positives or you will have a need to be excused from a issue. In these cases you can reach out to our [Cyber Security team](mailto:ukho-itso@ukho.gov.uk), your lead developer or one of the security champions for advice on mitigation/suppression of the issue. 

## Code Scanning

As mentioned above, Static Application Security Testing (SAST) takes place when a PR is raised within your repository and on a regular basis to analyse your code to prevent potential vulnerabilities being released. It is strongly encouraged that your pipeline includes a SAST check to protect from potential vulnerable code being released into your environment that exceeds your risk appetite. 

## Container Scanning

Once a container has been built within your pipeline, but prior to being pushed into a container registry it is advised to perform a Container Scan to check for vulnerabilities. Further information around our container policies can be found within the [Containers area.](/software-engineering-policies/Containers/)

## Dependency Checking for Cloud Applications

3rd party dependecies are a threat vector in which we have little control and is why it is important we do not allow this to be the weak link in our security chain. Performing Software Composition Analysis testing allows us to identify any packages which may have vulnerabilities that exceed our risk appetite. From here a concious decision can be made about the right steps forward.

## Infrastructure as Code

Just as the code we are deploying, we need to scan the Infrastructure code to ensure that we are not deploying vulnerable cloud assets to our enviroment. Where possible use already produced Terraform Modules that have been security scanned to provide you with the safest implementation.

[Back to main Readme](README.md)
