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

	part of the white box testing this is best performed as suggested in OWASP as part of the code review
		This is best suited for the multitude of tooling currently on the market
	
3. Server Access Control

	In order to test this then the tester should
	* Make sure that intra and inter access points via expected IPs
	* Open access points are tested from Trusted and Untrusted Machines
	* Test the upload of a file exceeding the maximum permitted file size, 
			try to upload a restricted file type, or 
			download data from a restricted site
	* Ingress/ Egress points
	* Session management
	
		TBD
	
	* Password Management
	
		TBD
	
	* Brute-Force attacks
	
		TBD
	
	* SQL injection
	
		TBD
	
	* Cross-Site Scripting (XSS)
	
		TBD
	
	* URL manipulation

These are areas of concern which can be tackles using a combination of			

* Manual testing
* Test Automation	

## Manual testing
	
### Testing Approaches

There are a few techniques that we need to consider from a testing point of view at a high level, these are:-
* Manual Inspections & Reviews
* Threat Modeling
* Code Review

	
1. Manual Inspections & Reviews

As part of the overall then an understanding of the architecture, as well as possibly a high level walk through of the code will help
in the detailed code review. TBC ...
	
2. Thread Modeling

	These are the basic steps :-

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

The following are the automation tools currently in the top sector of the market 
1. Zap (Open Source)- used specifically for testing web applications and is geared to address some of the following
	- SQL injection,
	- XSS injection and 
	- Session ID in URL rewrite
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

	
