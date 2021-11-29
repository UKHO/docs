# Overview
This document is intended to provide some guidance as to what level of testing should be considered within the project when 
tackling security testing, and is aimed at the Shift Left approach to test early. This will look at the OWASP as a source of 
the test area that needs to be covered.

# Types of testing
Following the should be considered within the project / application with regards to security testing
<ul>
	<li>Access Control Management
		<p>We need to baseline this off the least access as a default. Testing the systems access control will cover 
		<ul>
			<li>Logic for user aproval/li>
			<li>Ensure that the trust boundaries are clearly defined</li>
			<li>Deny by default</li>
			<li>Ensure that session access is enforced for every request</li>
			<li>Ensure that Authentication is enforced on statis resources</li>
		</ul></p>
	</li>	
	<li>Static analysys 
	<p>part of the white box testing this is best performed as suggested in OWASP as part of the code review
		This is best suited for the multitude of tooling currently on the market
	</p></li>
	<li>Server Access Control
	<p>In order to test this then the tester should,
	<ul>
		<li>Make sure that intra and inter access points via expected IPs</li>
		<li>Open access points are tested from Trusted and Untrusted Machines</li>
		<li>Test the upload of a file exceeding the maximum permitted file size, 
			try to upload a restricted file type, or 
			download data from a restricted site</li>
	</ul>
	</p>
	</li>
	<li>Ingress/ Egress points</li>
	<li>Session management
	<p>TBD</p></li>
	<li>Password Management
	<p>TBD</p></li>
	<li>Brute-Force attacks
	<p>TBD</p></li>
	<li>SQL injection
	<p>TBD</p></li>
	<li>Cross-Site Scripting (XSS)
	<p>TBD</p></li>
	<li>URL manipulation</li>
</ul>
These are areas of concern which can be tackles using a combination of			
<UL>
	<LI>Manual testing </LI>
	<LI>Test Automation</LI>	
</UL>

## Manual testing
	
### Testing Approaches

there are a few techniques that we need to consider from a testing point of view at a high level, these are:-
<ul>
	<li>Manual Inspections & Reviews</li>
	<li>Threat Modeling</li>
	<li>Code Review</li>
</ul>
	
#### Manual Inspections & Reviews
As part of the overall then an understanding of the architecture, as well as possibly a high level walk through of the code will help
in the detailed code review. TBC ...
	
#### Thread Modeling
these are the basic steps :-
<ul>
	<li>use manual inspection to understand how the application works, its assets, functionality, and connectivity.</li>
	<li>classify the assets into
tangible and intangible assets and rank them according to
business importance</li>
	<li>Exploring potential vulnerabilities</li>
	<li>Exploring potential threats</li>
	<li>Creating mitigation strategies </li>

</ul>

#### Code Reviews
This is intended to highlight flaws in the business logic any concurrency issues, access control, weaknes in encyrption and melisious code.
		
## Automation testing
The following are the automation tools currently in the top sector of the market 
<ul>
	<li> Zap (Open Source)- used specifically for testing web applications and is geared to address some of the following
		<ul>
		<li>SQL injection,</li>
		<li>XSS injection and </li>
		<li>Session ID in URL rewrite</li>
		</ul>
	</li>
	<li> Wfuss (Open Source)- This ahs been developed mainly for Brute-Force testing
		<ul>
			<li>LDAP injection</li>
			<li>SQL injection</li>
			<li>XSS injection</li>
		</ul>
	 </li>
	<li> SonarQube (Open Source version)
	<ul>
		<li>Cross-site scripting</li>
		<li>Denial of Service (DoS) attacks</li>
		<li>HTTP response splitting</li>
		<li>Memory corruption</li>
		<li>SQL injection</li>
	</ul>
	</li>	
</ul>

# Security Training courses

# Security testing skill set

	
