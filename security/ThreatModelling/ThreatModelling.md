# Threat Modelling in the UKHO

## Why do we practice threat modelling

As we develop our applications and try to provide a service to our users, there will always be malicious actors who will try to access any data we hold, or just try to circumnavigate our controls for fun. Whilst our frameworks and techniques become more advanced, so do the attackers - so this is why we must always ask these questions.  

Our aim to try and adhere to the CIA triad:

- __Confidentiality__: Only authorised users and processes may access or modify the data it is allowed to.
- __Integrity__: Data should be maintained in a correct state, and nothing or nobody should be able to improperly modify or delete it - whether accidentally or maliciously.
- __Availability__: Authorised users should be able to access data whenever they need to.

By performing threat modelling, we shift security practices left within the software development lifecycle, which will help us catch issues earlier in process when the cost is lower. Whilst there is a security benefit, there is also a business benefit as well due to the return on investment by doing this whilst the cost of an issue is low.  

> [!TIP]
> The 3 laws of OPSEC
>
> 1.	If you don’t know the threat, how do you know what to protect?
> 2.	If you don’t know what to protect, how do you know you’re protecting it?
> 3.	If you are not protecting it, the dragon wins. 

## What is Threat Modelling

At its most basic level; Threat Modelling is identifying and prioritising potential attacks, threats, and vulnerabilities within your assets. This is done by identifying assets (using methods such as data flow diagrams) to help discuss scenarios, "attack surface" areas, and countermeasures.  

There are different _approaches_ and _methodologies_ to threat modelling that help support different operational functions. "_Approaches_" help support the "_Methodology_" chosen, and neither are used in isolation.  

### Approaches

- Asset based – Best used to describe assets when working with a multi-disciplinary team.
- Attacker based – Best used when working with experienced security team members.
- Application based – Best used when working in/with a team made up mostly of developers.

### Methodologies

- __PASTA__ – Process Attack Simulation and Threat Analysis
- __STRIDE__ – Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
- __OCTAVE__ – Operationally Critical Threat, Asset and Vulnerability Evaluation
- __TRIKE__ – Risk based security auditing from top level down.
- __VAST__ – Visual, Agile, Simple Threat modelling

## How do we perform threat modelling

Threat modelling should be performed: 

 - At the beginning of a project - (to assist with understanding potential attack vectors, and allow for designs to be changed before anything is created),
 - Whenever there is a change to the _attack surface_ of the application.

Wherever possible, a **_Data Flow Diagram_** can be created to help visualise and define the assets that are apart of the application, so that a conversation can be started about attack vectors of the different areas. The data flow diagram should be a growing diagram that is maintained in tandem with the project.

The tooling of choice to support this is the **_Microsoft Threat Modelling Tool_**. Utilising the data flow diagram within the tooling, it can analyse and support the STRIDE method of giving potential attack vectors to your application. This tooling should be a compliment for the _conversation_ however, rather than a replacement for it. 

To start the conversation for a Threat Modelling session, the following will need to be understood so that the session can focus on what is required from the threat modelling:

- __Scope__ – What is in scope for this session?
- __Stakeholders__ – Who has input into this system design and needs to be involved in this modelling.
- __Risk management__ – Who will support you in assessing and devising a plan for any risks that are found.

Depending on the stage of the project, facilitation can be handled in two ways:

- Early project – Facilitated by Security personnel (Principals, Lead Tech, ITSO)
- Mature project – Facilitated by team with Security champion/Lead Tech support

All findings that come out of a session should be logged so that if required it can be looked over and verified. This should also serve as a maintenance guide as to what to attack in the case of BAU work if required. Prioritisation of issues are to be discussed with the Product Owner and support can be provided from a Security Champion/Tech Lead.

Questions around the system should utilise the 6 aspects of STRIDE. There can be some crossover with these aspects so wherever possible call out the most prominent one (or if there are indeed multiple aspects for a single issue, log them as such)

|Name |	Meaning | Desired Security Property | Example |
| --- | ------- | ------------------------- | ------- |
| __Spoofing__ | Pretending to be another user/system |	Authentication | Unauthenticated API with username header |
| __Tampering__	| Modifying data in the application | Integrity | SQL Injection through unvalidated parameters |
| __Repudiation__ |	Accountability of action | Non-repudiation | Deletion of data with information logged as to who and what. |
| __Information Disclosure__ | Access of allowed information | Confidentiality  |Bleed of information between users |
| __Denial of Service__	| Availability of application |	Availability | Degradation of service due to high volumes of requests |
| __Elevation of Privilege__ | Access to the right privileged information | Authorization | Ability to self-promote to admin via a unvalidated parameter |

Any issues found will need an **_Action_** assigned to it (see list below), as well as an **_Action Owner_**. This owner is not _responsible_ for the issue, but it accountable for _chasing up_ the issue.

The actions are as follows:

- __Accept__ - decide that the business impact is acceptable, and document who has chosen to accept the risk.
- __Eliminate__ - remove components that make the vulnerability possible.
- __Mitigate__ - add checks or controls that reduce risk impact, or the chances of occurrence. This should have a review date attached to it or an action against it as to help remove the issue. 
- __Transfer__ - Transfer risk to an insurer or customer.

>[!NOTE]
>Any documentation around threat modelling should not be stored in a public >domain. As an effort to provide a secure and robust service to our users, we do >not want to expose any potential weaknesses to bad actors. 

## Training

- [Threat Modeling Path | Pluralsight](https://app.pluralsight.com/paths/skill/threat-modeling)
- [Microsoft Threat Modeling Tool overview - Azure | Microsoft Learn](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)
- [Conducting a STRIDE-based threat analysis - GOV.UK (www.gov.uk)](https://www.gov.uk/government/publications/secure-connected-places-playbook-documents/conducting-a-stride-based-threat-analysis)
