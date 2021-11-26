# Overview
This document is intended to provide some guidance as to what level of testing should be considered within the project tests when 
tackling security. This will look at the OWASP as a source of the test area that needs to be covered.

# Types of testing
We need to consider two main approaches to security testing. these are 
## Manual testing 
## Test Automation

##Manual testing
	For OWASP testing then we need to consider the following points
<ul>
	<li>Access Control Management - who has access to what</li>
	<li>Static analysys -  part of the white box testing</li>
	<li>Server Access Control - this will cover intra and inter access points via expected IPs this is ususal to test via trusted and untrusted machines.
			Ingress/ Egress points</li>
	<li>Session management</li>
	<li>Password Management</li>
	<li>Brute-Force attacks</li>
	<li>SQL injection</li>
	<li>Cross-Site Scripting (XSS)</li>
	<li>URL manipulation</li>
	<li>High-Risk functions - file Upload/Download</li>
</ul>
		
		
		
## Automation testing

<ul>
<li> Zap </li>

</ul>
	
#Testing Approaches

there are a few techniques that we need to consider from a testing point of view at a high level, these are:-
• Manual Inspections & Reviews
• Threat Modeling
• Code Review
• Pen Testing (dynamic)

##Manual Inspections & Reviews
	This is a useful stage as it looks throught the architecture, code and the processes to access what the weak points could be in the application.
	
## Thread Modeling
	these are the basic steps we need to consider as taken from the OWASP Guidelines
	<ul>
		<li></li>
		
	</ul>
	• Decomposing the application – use a process of manual
inspection to understand how the application works, its assets,
functionality, and connectivity.
• Defining and classifying the assets – classify the assets into
tangible and intangible assets and rank them according to
business importance.
• Exploring potential vulnerabilities - whether technical,
operational,or management.
• Exploring potential threats – develop a realistic view of potential
attack vectors from an attacker’s perspective, by using threat
scenarios or attack trees.
• Creating mitigation strategies – develop mitigating controls for
each of the threats deemed to be realistic.

## Code Reviews
    This is intended to highlight flaws in the business logic any concurrency issues, access control, weaknes in encyrption and melisious code.
	
