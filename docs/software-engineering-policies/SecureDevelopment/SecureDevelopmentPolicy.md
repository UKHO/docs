# Objective

Vulnerabilities exist because engineers create them.

This can be due to several reasons including lack of training, accidental, lack of guidance, poor-quality controls or resource constraints. UKHO software needs to be secure as feasible and this policy is to aid teams in catching vulnerabilities during development.

The purpose of this document is to ensure that:

>* It is clear what controls are expected.
>* It is clear what roles are required.
>* Teams are using the correct processes.
>* Teams are using authorised tooling in the correct way.
>* Teams are shown to be continuous improving with security.
>* The teams are creating evidence of security as part of the SDLC.
>* To provide useful references for further learning.

# Roles

**Risk Owner**

The risk owner is the person who is responsible for the product. This may be person responsible for the system or service delivery the solution is part of. It is important to clarify the risk owner as they will be the decider on what the risk tolerance is.

>* Provide the PO/Team with a description of the Risk Tolerance.
>* To authorise exceptions when risks diverge from security requirements or tolerance.

**Security Champion(s)**

A Security Champion is any skill level engineer who is enthusiastic about building secure applications. They are responsible for:

>* Collaboration with other security functions at UKHO.
>* Encouraging and facilitating threat modelling.
>* Championing secure development practises.

**Security Advisor**

The Security Advisor is a lead or senior engineer who has additional responsibilities towards security. They are responsible for:

>* Ensuring security is considered throughout development.
>* Guiding the team to comply with security policies at UKHO.
>* Ensuring Security Requirement Specifications are available (if they exist).
>* Ensuring unfulfilled security requirements are documented.
>* Ensure a skills matrix is defined per project and developers complete this.
>* Assisting SAC where necessary.

**Security Working Groups**

The SWG is a security focused meeting between stakeholders and security functions at UKHO. Security concerns are raised at this forum where owners must decide on whether to accept the risk or seek mitigations. Any unfulfilled security requirements will likely come to this forum. Anyone, including developers, can raise an item to be discussed at the SWG.

**Accreditor**

Accreditation is simply the process of auditing a risk management process which is performed by the MOD. Accreditors (MOD staff) ‘sign-off’ the project by reviewing the evidence of risk management and ensuring risks are within the tolerance. Maintaining the evidence requires specialist skills which we usually contract in the form of Security Assurance Coordinators. However, as of the time of writing, only MINT and Dolphin required accrediting, most of the software teams are not involved in this.

**Security Assurance Coordinator (SAC)**

For a project that requires accreditation it is likely a SAC will be involved. A SAC is a MOD role that is used as liaison between project and the MOD accreditor. Their role is to ensure that risk management practises are being followed in accordance with the guidance set by MOD. Your SAC should know what they are doing but may require assistance from software engineers in fulfilling their role.

# Controls

**Roles**

>_Teams must appoint the necessary security roles within the project._

- [ ] A Security Advisor must be appointed.

**SCRUM**

>_Security must be included within the software development lifecycle and SCRUM._

- [ ] Security considerations must be included within the Definition of Done.

- [ ] Security related stories (vulnerabilities, upgrades) must be raised in TFS with the ‘Security’ tag.

- [ ] The process for prioritising security PBI’s must be methodical and transparent.

**Skills Matrix**

>_Each project will have different security nuances, so it is appropriate to have skills matrixes for the project. This is to ensure all developer have a common baseline understanding of application security._

- [ ] Each team must keep a list of training materials that need to be viewed per project.

- [ ] A skills matrix is required to track the progress of the team along the security training.

- [ ] There must be evidence that all engineers are progressing along the skills matrix.

**On Boarding**

>_New team members need to be on-boarded into the project. This include adding them to the skills matrix, discussing the common scenarios and mitigations, security tooling and encouraging further reading._

- [ ] Each team must have an on-boarding checklist

- [ ] A confirmation email should be sent to the security advisor once on-boarding is complete.

**Source Control**

>_Source control is a key requirement for projects as it provides role-based access control to code, change management and a change log._

- [ ] All project code intended for delivery should be stored as per the UKHO source control policy.

- [ ] Only ALM and Lead Engineers can provide commit access to a project.

- [ ] All projects should have read access for all engineers on the domains they have access to.

- [ ] All users with access to source code should have at least BPSS clearance.

- [ ] Code reviews must occur before code is released into production.

- [ ] Configuration should also be stored in source control and be subject to the code review process.

**3rd Party Dependency/Package Management**

>_We are responsible for ensuring that 3rd party packages within our solutions are from authorised repositories, have appropriate licensing and are checked for known vulnerabilities._

- [ ] Packages must be downloaded from Proget, Nexus, Gerrit (or any ALM authorised tool).

- [ ] The team must use a dependency checking tool such as Dependency Checker (or another ALM authorised tool).

- [ ] The tool must be configured to run as part of either/both a build or release pipeline. Code for production must have passed through this tool before release.

- [ ] The team should decide what the acceptable threshold is to fail a release.

- [ ] The team must provide proof that the release fails when this threshold is breached. Decisions to release even in the presence of a known vulnerability should be recorded and approved by the risk owner.

- [ ] The team should agree the schedule for updating the dependency checker.

**SAST Tooling**

>_Static analysis tooling is required to add an extra layer of verification to developer’s code and to catch vulnerabilities._

- [ ] The team must use a static analysis tool which ALM has approved.

- [ ] Each team member must have a basic understanding of interpreting the results.

- [ ] The tool must be configured to run as part of either/both a build or release pipeline. Code for production must have passed through this tool before release.

- [ ] The team should decide what the acceptable threshold is to fail a release.

- [ ] The team must provide proof that the release fails when this threshold is breached.

**Threat Library & Mitigations**

>_Each project will have recurring pieces of functionality. These generic PBI’s should be captured, threat modelled, and code mitigations agreed. OWASP vulnerabilities should be discussed such as XSS, SQL Injections, broken authentication/authorisation, direct object referencing etc. It is easier to review and catch vulnerabilities during code reviews if everyone tackles vulnerabilities with the same techniques._

- [ ] Each team must document a set of generic scenarios for their project.

- [ ] The team must threat model these scenarios are drive out common vulnerabilities.

- [ ] Each team must agree standard code approaches to mitigate these vulnerabilities.

- [ ] A code review checklist must be generated from the results of the threat modelling

- [ ] Testing criteria must be agreed and recorded as Gherkin within the solution.
