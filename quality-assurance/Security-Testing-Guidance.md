
# Security Testing Guidance

## **Overview**

This document is intended to provide guidance to the UKHO test community and development tests on what testing needs to be considered for their applications / systems they are involved with. It is not intended to replace a formal Penetration testing stage but help in providing a more shift left approach to capture more obvious issues / defects that may otherwise creep through.

For the Avatao platform exercises please contact Raymond.sneddon-jenkins@ukho.gov.uk to arrange access.

## **Typical Scenarios and types of testing to consider**

This section is broken down into the common areas that we need to consider security testing in that you may come across.

## **Login and User Privileges**

### ***Login – Password checks***

As a tester then the basic checks for the strength and resilience of the applications login can be achieved through,

-	Ensuring that the PBI have clearly defined the rules around password construction and strength to aid testing.
-	Confirm that if Cookies are used and store the user's details that these are encrypted

For more details then read the link [Website Cookie Testing](https://www.softwaretestinghelp.com/website-cookie-testing-test-cases)

Examples can be practices on the Avatao security training platform at the following link [testing how to keep secrets with Avatao](https://next.avatao.com/collections/c26b8ef1-18c9-419a-a023-ac187af3864c/owasp-top-10-intro-in-c/challenges/keeping-secrets-in-c?tab=windows) for password secrets.

### ***User Privileges***

As a tester you will want to confirm that users with various roles in the application can gain access and only alter information, they have permission for. In order to perform the basic tests then the tester will need to create several accounts. This tests the authentication process as in who you are and the authorised flow of what you are entitled to view. An example of what to check for would be if there are 2 or more users say 
User johnny and user Billy, Johnny and billy have some common access for data and functionality, but Johnny has addition access to see more sensitive data and also has privileges to additional functionality. 
The tests for this are to basically confirm that the users only have access to the correct level of data and functionality with in the application.

There are cases where user privilege should also be confirmed via the API’s, where necessary the following best explains some of the top 10 API checks you can make are in the following link [top 10 API checks](https://apisecurity.io/encyclopedia/content/owasp-api-security-top-10-cheat-sheet-a4.pdf)

Practice the basic scenarios on the following link [Avatao -example for Hardening authentication](https://next.avatao.com/collections/c26b8ef1-18c9-419a-a023-ac187af3864c/owasp-top-10-intro-in-c/challenges/hardening-authentication-with-asp-ne?tab=windows)

## **Web based form entry / submission**

If your application accepts any input from the user, then the following security testing needs to be considered.

###	SQL injection 

> This targets application vulnerabilities and is focused on gaining access to privileged information in the database via user inputs.
As a tester there are some basic techniques to determine if the system is susceptible to attack. Entering a single quote (‘), resulting in a database error being thrown would suggest to the tester that user input has been inserted into some query to the DB which has been executed.
The next stage would be that the tester confirms that a SQL query can be injected that will always return true state, e.g. ‘ or 1=1 --
Reference to the following links in the [SQL injection section](https://www.softwaretestinghelp.com/sql-injection-how-to-test-application-for-sql-injection-attacks/) for further details.

> The subsequent sections within the above link are worth noting, if you are required to as a tester to confirm more than just the basic vulnerability in an exploratory test type approach
- The essence of this attack
- Security testing of web applications against SQL injection
Practice basic SQL injection with the following link: [Avatao example](https://next.avatao.com/collections/c26b8ef1-18c9-419a-a023-ac187af3864c/owasp-top-10-intro-in-c/challenges/sql-injection-tutorial-in-asp-net)

###	XSS Injection

This form of testing is to determine whether the tester can make the web application serve user-entered data in a form that will be executed by the browser. HTTP or XSS are the most used. The usual points of attack are via user data entered through forms or passed by API endpoints.
XSS have three flavours

-	Persisted or Stored XSS
-	Reflective XSS
-	DOM XSS

Common points to consider when testing Persisted XSS are message forums, comment fields, or visitor logs e.g.
Reflective XSS, common points are search results and error messages where they are not properly escaped. 
An example to consider would be as below -

'http://socialize.com?search=latest&news
An attacker notices this and tries the following string as their search:
<script type=’text/javascript’>alert(‘test’);</script>
If the website does not properly sanitize inputs, this test script will appear in the 		URL, like this:
http://socialize.com?query=<script type=’text/javascript’>alert(‘test’);</script>
'
for further reading materials please click on the link [What is XSS attack](https://brightsec.com/blog/xss-attack/)

Dom XSS, this targets failures in JavaScript not properly validating the user input.
Some useful links to explore testing are
example links for [XSS snippets](https://www.veracode.com/security/xss) especially the XSS examples with code snippet section.
How to Test against XSS [XSS Testing](https://www.softwaretestinghelp.com/cross-site-scripting-xss-attack-test/) the section is recommended to help gain a better understanding of the testing needs.

Practice basic XSS injection with the following link [Practical example in Avatao for XSS](https://next.avatao.com/collections/c26b8ef1-18c9-419a-a023-ac187af3864c/owasp-top-10-intro-in-c/challenges/basics-of-reflected-xss)

## **Session Management**

The basic test to determine that the user session is secure, which focuses around the following points 

1.	The session identifier is secret
2.	That session identifier must be random, and
3.	The session identifier must end when the user logs out / times out
   
A basic test to determine if the application has got adequate protection is for the user to login to the application, then wait for a significant time for the session id to expire and attempt to perform an action on the application using the previously authorised token. The example addresses point 3 in the bullet points above.
Some useful links will help you expand on the basics 
[session management vulnerabilities](https://affinity-it-security.com/how-to-test-for-session-management-vulnerabilities/) will help with scenarios you may want to consider.

for additional information on the subject [cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html).

Practices the basic session management with the following link [Avatao practical example](https://next.avatao.com/collections/c26b8ef1-18c9-419a-a023-ac187af3864c/owasp-top-10-intro-in-c/challenges/the-mystery-of-clickjacking).

## **URL Manipulation**

As a tester then a basic check for vulnerability could be to alter an existing url e.g. 
The attacker notices 
'http://www.attackbank.com/default.asp?profile=741&debit=1000 could be altered by an attacker to, http://www.attackbank.com/default.asp?profile=852&debit=2000, the attack is attempting to manipulate the url to gain access to other site details they shouldn’t have permission for.'
for more information then read the link [Web_Parameter_Tampering](https://owasp.org/www-community/attacks/Web_Parameter_Tampering)

Practices the basic URL manipulation with the following link [Avatao practical example](https://next.avatao.com/collections/c26b8ef1-18c9-419a-a023-ac187af3864c/owasp-top-10-intro-in-c/challenges/swapping-the-id?tab=windows)

# **Automation Testing**

For test automation tools, then we will look at Zap as its open source and covers the basics which supplements the manual testing that needs to be conducted also.
Zap will provide:

-	SQL injection
-	XSS injection 
-	Session ID in URL rewrite

In general, though the following steps can be used to setup Zap and start testing your application. Zap is targeted for use by Novice and Advance users so seems to provide a good balance.

1.	Setup

-	Download Java 8 JRE or above as this is needed to run ZAP - [java JRE](https://www.java.com/en/download/manual.jsp)
-	Then download the ZAP exe from [ZAP exe](https://www.zaproxy.org/download/)
-	Once the ZAP download is completed double click on it to install and follow the instructions on the screen

2.	Running Zap initially through the automated Scan route
   
-	double click on the ZAP application under the installed folder e.g. C:\Program Files\OWASP\Zed Attack Proxy
-	ensure that you follow the instructions as stated in the ZAP getting started documentation and section “Persisting a Session” https://www.zaproxy.org/getting-started/
-	The Zap Desktop UI should then be displayed as in the get started guide
  
3.	Basic steps for a manual approach

This covers off some of the limitations with running the scan in an automated way, such as in cases where the application requires login authentication. Although Zap can be configured to handle the authentication its not out of the box functionality. Follow the link and read the “Exploring an Application Manually” for more details. https://www.zaproxy.org/getting-started/

Please foloow the training guide for awareness of securituy testing and what we need to consider relevant to your project
in [Avatao QA guild](https://next.avatao.com/teams). contact Raymond.sneddon-jenkins@ukho.gov.uk to arrange access or questions.
