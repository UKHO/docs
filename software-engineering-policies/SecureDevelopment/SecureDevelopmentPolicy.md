# Secure Development Policy

- [Secure Development Policy](#secure-development-policy)
  - [Objective](#objective)
  - [Roles](#roles)
    - [Security Champion(s)](#security-champions)
    - [Security Advisor](#security-advisor)
    - [Security Working Groups](#security-working-groups)
    - [Accreditor](#accreditor)
    - [Security Assurance Coordinator (SAC)](#security-assurance-coordinator-sac)
    - [Risk Owner](#risk-owner)
  - [Controls](#controls)
    - [Team Roles](#team-roles)
    - [SCRUM](#scrum)
    - [Skills Matrix](#skills-matrix)
    - [On-Boarding](#on-boarding)
    - [Source Control](#source-control)
    - [3rd Party Dependency/Package Management](#3rd-party-dependencypackage-management)
    - [SAST Tooling](#sast-tooling)
    - [Threat Library & Mitigations](#threat-library--mitigations)

## Objective

Vulnerabilities exist because engineers create them.

This can be due to several reasons, including lack of training, accidental, insufficient guidance, poor-quality controls or resource constraints. UKHO software needs to be secure as feasibly possible. This policy is to aid teams in catching vulnerabilities during development.

The purpose of this document is to ensure that:

- It is clear what controls are expected.

- It is clear what roles are required.

- Teams are using the correct processes.

- Teams are correctly using authorised tooling.

- Teams have shown to be continually improving with security.

- The teams are creating evidence of security as part of the SDLC.

- To provide useful references for further learning.

## Roles

### Security Champion(s)

A Security Champion is any skill level engineer who is enthusiastic about building secure applications. They are responsible for:

- Collaboration with other security functions at UKHO.

- Encouraging and facilitating threat modelling.

- Championing secure development practises.

### Security Advisor

The Security Advisor is the team member primarily responsible for security in a software engineering team. This is either the team lead or a senior software engineer. The Security Advisor is expected to have security knowledge relevant to their domain and knowledge of security processes within the UKHO.

They are responsible for:

- Being the Point of Contact within the team for security considerations.

- Ensuring security is considered throughout development.

- Guiding the team to comply with security policies at UKHO.

- Ensuring Security Requirement Specifications are available (if they exist).

- Ensuring unfulfilled security requirements are documented.

- Ensure a skills matrix is defined per project and developers complete this.

- Assisting in security health checks with the ITSO Team.

- Assisting the Security Assurance Coordinator (SAC) where necessary.

### Security Working Groups

The SWG is a security-focused meeting between stakeholders and security functions at UKHO. Security concerns are raised at this forum where owners must decide on whether to accept the risk or seek mitigations. Any unfulfilled security requirements will likely come to this forum. Anyone, including developers, can raise an item to be discussed at the SWG.

### Accreditor

Accreditation is simply the process of auditing a risk management process which is performed by the MOD. Accreditors (MOD staff) ‘sign-off’ the project by reviewing the evidence of risk management and ensuring risks are within the tolerance. Maintaining the evidence requires specialist skills which we usually contract in the form of Security Assurance Coordinators.

### Security Assurance Coordinator (SAC)

For a project that requires accreditation, it is likely a SAC will be involved. A SAC is a MOD role that is used as a liaison between the project and the MOD accreditor. Their role is to ensure that risk management practises are being followed per the guidance set by MOD. Your SAC should know what they are doing but may require assistance from software engineers in fulfilling their role.

### Risk Owner

The risk owner is the person who is responsible for the product. This may be the person responsible for the system or service delivery the solution is part of. It is important to clarify the risk owner as they will be the decider on what the risk tolerance is. Responsibilities include:

- Provide the PO/Team with a description of Risk Tolerance.

- To authorise exceptions when risks diverge from security requirements or tolerance.

## Controls

### Team Roles

>_Teams must appoint the necessary security roles within the project._

- A Security Advisor must be appointed.

### SCRUM

>_Security must be included within the software development lifecycle and the agile methodology incorporated by the team._

- Security considerations must be included within the Definition of Done.
- Security-related stories (vulnerabilities, upgrades) must be raised in TFS with the ‘Security’ and ‘Security Concern’ tag.
- See also the [Managing Security Concerns Policy](../../security/ManagingSecurityConcerns/ManagingSecurityConcerns.md)

### Skills Matrix

>_Each project will have different security nuances, so it is appropriate to have skills matrixes for the project. This is to ensure all developer have a common baseline understanding of application security._

- Each team must keep a list of security resources that are relevant to the team's technology stack.
- Team members should complete baseline training on an approved secure development training platform (Avatao).
- There must be evidence that all engineers are progressing with their security training.

### On-Boarding

>_New team members need to be onboarded into the project. This includes adding them to the skills matrix, discussing the common scenarios and mitigations, security tooling and encouraging further reading._

- Each team must have an onboarding checklist.
- Confirmation needs to be provided to the security advisor once on-boarding is completed.

### Source Control

>_Source control is a key requirement for projects as it provides role-based access control to code, change management and a changelog._

- All project code intended for delivery should be stored as per the UKHO source control policy.

### 3rd Party Dependency/Package Management

>_We are responsible for ensuring that 3rd party packages within our solutions are from authorised repositories, have appropriate licensing and are checked for known vulnerabilities._

- Packages must be downloaded from a package management tool e.g. Proget or Nexus (or any Digital Delivery Team authorised tool).
  The team must use a dependency checking tool such as Dependency Checker (or another Digital Delivery Team authorised tool).
- The tool must be configured to run before code is released to production e.g. via a build/release pipeline.
- The team should decide what the acceptable threshold is to prevent code from being released to production e.g. via a build/release pipeline.
- The team must provide proof that the code is not released to production when this threshold is breached. Decisions to release even in the presence of a known vulnerability should be recorded and approved by the risk owner.
- The team should agree on the schedule for updating the dependency checker.

### SAST Tooling

>_Static analysis tooling is required to add an extra layer of verification to the developer’s code around catching vulnerabilities before they are released to production._

- The team must have a SAST process, either automated or manual via code reviews. (It is strongly recommended that the team use a static analysis tool which the Digital Delivery Team has approved).
- Each team member must have a basic understanding of interpreting the results of static analysis (manual or automated).
- If using an automated tool, it must be configured to run as part of either/both a build or release pipeline.  
- The team should decide what the acceptable threshold is to prevent code from being released to production e.g. a build or release fails.  

### Threat Library & Mitigations

>_Each project will have recurring pieces of functionality. These generic PBI’s should be captured, threat modelled, and code mitigations agreed. OWASP vulnerabilities should be discussed such as XSS, SQL Injections, broken authentication/authorisation, direct object referencing etc. It is easier to review and catch vulnerabilities during code reviews if everyone tackles vulnerabilities with the same techniques._

- Each team must document a set of generic scenarios for their project.
- The team must follow a threat modelling process.
- Each team must agree on standard code approaches to mitigate common vulnerabilities.
- A code review checklist must be generated from the results of threat modelling.
- Testing criteria must be agreed and recorded within the solution.
