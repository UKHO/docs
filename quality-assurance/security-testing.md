# Overview

This document is intended to provide some guidance as to what level of testing should be considered within a project when 
tackling security testing, and is aimed at the Shift-Left approach to test early. This will look at the OWASP as a source of 
test areas that need to be covered.

# Types of testing

The following the should be considered within the project / application with regards to security testing

1. Access Control Management

	We need to baseline this off the least access as a default. Testing the systems access control will cover
	* Logic for user approval
	* Ensure that the trust boundaries are clearly defined
	* Deny by default
	* Ensure that session access is enforced for every request
	* Ensure that Authentication is enforced on static resources

2. Static analysis 

	part of the white box testing this is best performed as suggested in OWASP as part of the code review. The following link 
	covers the OWASP testing for this in more detail - https://owasp.org/www-community/controls/Static_Code_Analysis
		Currently we are using Coverity to provide this coverage
	
3. Server Access Control

	The following link will help to explain this topic in more detail 
	https://www.zaproxy.org/docs/desktop/addons/access-control-testing/ 
	but to summarise some of the points then the tester should consider the areas below
	* Make sure that all intra and inter access points to an applicatin are by expected via expected IPs
	* Open access points are tested from Trusted and Untrusted Machines
	* Test the upload of a file exceeding the maximum permitted file size, 
			try to upload a restricted file type, or 
			download data from a restricted site
	
	
4. Ingress/ Egress points

	This form of testing concentrates on how data enters or leaves the organisation. The following links are intended to provide more details on 
	some techniques to cover this subject -
	https://istio.io/latest/docs/tasks/traffic-management/egress/egress-gateway/ ,
	https://cloud.google.com/vpc-service-controls/docs/ingress-egress-rules and
	https://www.fortinet.com/resources/cyberglossary/data-egress
	
	
5. Session management

	This is targeting testing of the web sessions that a user experiences through the sequence of network HTTP request and response transactions associated with the same user. In order to find out more information - 
	https://kennel209.gitbooks.io/owasp-testing-guide-v4/content/en/web_application_security_testing/session_management_testing.html
	https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
	
	
6. Password Management
	
	This can be split down into the following sub topics
	Password Storage - https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
	Forgotten Password - https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html
	Authentication - https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
	
	Further information can be found from the link here - https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/04-Authentication_Testing/09-Testing_for_Weak_Password_Change_or_Reset_Functionalities
	
	
7. Brute-Force attacks
	
	Taking an extract from the link provided then "A brute force attack can manifest itself in many different ways, but primarily consists in an attacker configuring predetermined values, making requests to a server using those values, and then analyzing the response". The link provides more on the subject - https://owasp.org/www-community/attacks/Brute_force_attack
	
8. SQL injection
	
	SQL injection, also known as SQLI, is a common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed. This information may include any number of items, including sensitive company data, user lists or private customer details.
	
	the link here axplains more detail on the subject - https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/
	
	further help on common attacks and how to test for them is  - https://portswigger.net/web-security/sql-injection/cheat-sheet
	
9. Cross-Site Scripting (XSS)
	
	Information on the typical vectors for this form of attack can be found here - https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html
	
	
10. URL manipulation

These are areas of concern which can be tackles using a combination of			

* Manual testing
* Test Automation	

## Manual testing
	
### Testing Approaches

There are a few techniques that we need to consider from a testing point of view at a high level, these are:-
* Manual Inspections & Reviews
* Threat Modelling
* Code Review

the below is detailed in the following link - https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf

	
1. Manual Inspections & Reviews

As part of the overall then an understanding of the architecture, as well as possibly a high level walk through of the code will help
in the detailed code review. Please see the OWASP link above for details
	
2. Threat Modelling

	These are the basic steps, the full details can be found in the above OWASP link above:-

	* use manual inspection to understand how the application works, its assets, functionality, and connectivity.</li>
	* classify the assets into
	tangible and intangible assets and rank them according to
	business importance
	* Exploring potential vulnerabilities
	* Exploring potential threats
	* Creating mitigation strategies 


#### Code Reviews

This is intended to highlight flaws in the business logic any concurrency issues, access control, weaknes in encyrption and melisious code.
the current policy for UKHO is  
https://github.com/UKHO/docs/blob/main/software-engineering-policies/CodeReview/CodeReviewPolicy.md
		
## Automation testing

The following are the automation tools currently in the top sector of the market the following link provides 
the top 10 list of tools https://hackr.io/blog/top-10-open-source-security-testing-tools-for-web-applications
i have just listed a sample that seem to provide a wide coverage pere possible.

1. Zap (Open Source)- used specifically for testing web applications and is geared to address some of the following
	- SQL injection,
	- XSS injection and 
	- Session ID in URL rewrite

	the following links provide more details on installing the tooling
	https://www.zaproxy.org/getting-started/
	
	
2. Wfuss (Open Source)- This has been developed mainly for Brute-Force testing
	* LDAP injection
	* SQL injection
	* XSS injection
3. SonarQube (Open Source version)
	* Cross-site scripting
	* Denial of Service (DoS) attacks
	* HTTP response splitting
	* Memory corruption
	* SQL injection


# Security skill set

	
