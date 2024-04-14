# Threat Modelling in the UKHO

## Why do we practice threat modelling

As we develop our applications and try to provide a service to our users, there will always be malicious actors that will try to access any data we hold or just try to circumnavigate our controls for fun. Whilst our frameworks and techniques become more advanced, so do the attackers and this is why we must always ask the questions. 

Our aim to try and adhere to the CIA triad:

- __Confidentiality__: Only authorised users and processes may access or modify the data it is allow to
- __Integrity__: Data should be maintained in a correct state and nothing or nobody should be able to improperly modify or delete it, either accidentally or maliciously
- __Availability__: Authorised users should be able to access data whenever they need to.

By performing threat modelling, we shift security practices left within the software development lifecycle which helps promote catching issues earlier in process when the cost is lower. Whilst it has a security benefit, there is a business benefit due to the return on investment by doing this whilst the cost of an issue is low. 

> [!TIP]
> The 3 laws of OPSEC
>
> 1.	If you don’t know the threat, how do you know what to protect.
> 2.	If you don’t know what to protect, how do you know you’re protecting it.
> 3.	If you are not protecting it, the dragon wins. 

## What is threat modelling

At its basic, threat modelling is identifying and prioritizing potential attacks, threats, and vulnerabilities within your assets. This is done by identifying assets utilising methods such as data flow diagrams to help discuss scenarios, surface areas and counter measures. 

There are different approaches and methodologies to threat modelling that help support different operational functions. Approaches help support the methodology chosen and neither are used in isolation. 

### Approaches

- Asset based – Best to describe assets when working with multi disciplined team.
- Attacker based – Best used when working with experienced security team members.
- Application based – ideal when the team is made up of mostly developers.

### Methodologies

- PASTA – Process Attack Simulation and Threat Analysis
- STRIDE – Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
- OCTAVE – Operationally Critical Threat, Asset and Vulnerability Evaluation
- TRIKE – Risk based security auditing from top level down.
- VAST – Visual, Agile, Simple Threat modelling

## How do we perform threat modelling

Threat modelling should be performed at the beginning of a project, to assist with understanding potential attack vectors and allow for designs to be changed before anything is created, or whenever there is a change to the attack surface of the application.

Wherever possible, a data flow diagram should be created to help visualise and define the assets that are apart of the application, so that a conversation can be started about attack vectors of the different areas. The data flow diagram should be a growing diagram that exists alongside the project to maintain knowledge.

To start the conversation, the following will need to be understood so that the session can focus on what is required from the threat modelling:

- Scope – What is in scope for this session?
- Stakeholders – Who has input into this system design and needs to be involved in this modelling.
- Risk management – Who will support you in assessing and devising a plan for any risks that are found.

Depending on the stage of the project, facilitation can be handled in two ways:

- Early project – Facilitated by Security personnel (Principals, Lead Tech, ITSO)
- Mature project – Facilitated by team with Security champion/Lead Tech support

All findings that come out of a session should be logged so that if required it can be looked over and verified. This should also serve as a maintenance guide as to what to attack in the case of BAU work if required. Prioritisation of issues are to be discussed with the Product Owner and support can be provided from a Security Champion/Tech Lead.

Questions around the system should utilise the 6 aspects of STRIDE. There can be some crossover with these aspects so wherever possible call out the most prominent one (or if there are indeed multiple aspects for a single issue, log them as such)

|Name |	Meaning | Desired Security Property | Example |
| --- | ------- | ------------------------- | ------- |
| Spoofing | Pretending to be another user/system |	Authentication | Unauthenticated API with username header |
| Tampering	| Modifying data in the application | Integrity | SQL Injection through unvalidated parameters |
| Repudiation |	Accountability of action | Non-repudiation | Deletion of data with information logged as to who and what. |
| Information Disclosure | Access of allowed information | Confidentiality  |Bleed of information between users |
| Denial of Service	| Availability of application |	Availability | Degradation of service due to high volumes of requests |
| Elevation of Privilege | Access to the right privileged information | Authorization | Ability to self-promote to admin via a unvalidated parameter |

Any issues found will need an action assigning to it with an action owner. This owner is accountable for chasing up the issue and not responsible for the issue. 

The actions are as follows:

- __Accept__ - decide that the business impact is acceptable, and document who has chosen to accept the risk.
- __Eliminate__ - remove components that make the vulnerability possible.
- __Mitigate__ - add checks or controls that reduce risk impact, or the chances of occurrence. This should have a review date attached to it or an action against it as to help remove the issue. 
- __Transfer__ - Transfer risk to an insurer or customer.

The tooling of choice to support this is the Microsoft Threat Modelling Tool. Utilising the data flow diagram within the tooling, it can analyse and support the STRIDE method of giving potential attack vectors to your application. This should not be a replacement for the conversation however and such compliment your process. 

>[!NOTE]
>Any documentation around threat modelling should not be stored in a public >domain. As an effort to provide a secure and robust service to our users, we do >not want to expose any potential weaknesses to bad actors. 

## Training

- [Threat Modeling Path | Pluralsight](https://app.pluralsight.com/paths/skill/threat-modeling)
- [Microsoft Threat Modeling Tool overview - Azure | Microsoft Learn](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)
- [Conducting a STRIDE-based threat analysis - GOV.UK (www.gov.uk)](https://www.gov.uk/government/publications/secure-connected-places-playbook-documents/conducting-a-stride-based-threat-analysis)
