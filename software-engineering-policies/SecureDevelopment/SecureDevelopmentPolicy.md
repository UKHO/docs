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

Vulnerabilities in software exist due to poor design or mistakes in implementation.

This can be due to several reasons, including lack of training, accidental, insufficient guidance, poor-quality controls or resource constraints. UKHO software needs to be secure as feasibly possible. This policy is to aid teams in catching vulnerabilities during development.

The purpose of this document is to ensure that:

- It is clear what controls are expected - see [Managing Security Concerns Policy](../../security/ManagingSecurityConcerns/ManagingSecurityConcerns.md)
  
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

- Championing secure development practices.

### Security Working Groups

The SWG is a security-focused meeting between stakeholders and security functions at UKHO. Security concerns are raised at this forum where owners must decide on whether to accept the risk or seek mitigations. Any unfulfilled security requirements will likely come to this forum. Anyone, including developers, can raise an item to be discussed at the SWG.

### Risk Owner

The risk owner is the person who is responsible for the product. This may be the person responsible for the system or service delivery the solution is part of. It is important to clarify the risk owner as they will be the decider on what the risk tolerance is. Responsibilities include:

- Provide the PO/Team with a description of Risk Tolerance.

- To authorise exceptions when risks diverge from security requirements or tolerance.

## Controls

### Team Roles

>_Teams must appoint the necessary security roles within the project._

- A Security Champion must be appointed.

### SCRUM

>_Security must be included within the software development lifecycle and the agile methodology incorporated by the team._

- Security considerations must be included within the Definition of Done.
- Security-related stories (vulnerabilities, upgrades) must be raised in TFS with the ‘Security’ and ‘Security Concern’ tag.
- See also the [Managing Security Concerns Policy](../../security/ManagingSecurityConcerns/ManagingSecurityConcerns.md)

### Skills Matrix

>_Each project will have different security nuances, so it is appropriate to have skills matrixes for the project. This is to ensure all developer have a common baseline understanding of application security._

- Each team must keep a list of security resources that are relevant to the team's technology stack.
- Team members should complete baseline training on an approved secure development training platform.
- There must be evidence that all engineers are progressing with their security training.

### On-Boarding

>_New team members need to be onboarded into the project. This includes adding them to the skills matrix, discussing the common scenarios and mitigations, security tooling and encouraging further reading._

- Each team must have an onboarding checklist.
- Confirmation needs to be provided to the team lead/lead technical engineer (security) once on-boarding is completed.

### Source Control

>_Source control is a key requirement for projects as it provides role-based access control to code, change management and a changelog._

- All project code intended for delivery should be stored as per the UKHO source control policy.
- Source control repositories should conform to the policies as found [here](../SourceControl/SourceControlPolicy.md)

### 3rd Party Dependency/Package Management

>_We are responsible for ensuring that 3rd party packages within our solutions are from authorised repositories, have appropriate licensing and are checked for known vulnerabilities._

- Packages must be downloaded from a package management tool e.g. Proget or Nexus (or any Digital Delivery Team authorised tool).
- The team must use the designated dependency scanning tool.
- The tool must be configured to run before code is released to production e.g. via a build/release pipeline.
- The team should decide what the acceptable threshold is to prevent code from being released to production e.g. via a build/release pipeline.
- The team must provide proof that the code is not released to production when this threshold is breached. Decisions to release even in the presence of a known vulnerability should be recorded and approved by the risk owner.
- Where a suppression of a vulnerability has been discussed and accepted, a suitable comment must be added to the suppression so that it can be audited by our security teams.
- If a suppression has been added which requires a review at a later time, this should be expressed directly in the suppression using the supported format or within a comment with a next review date. This should be dated at an agreed upon review date. 

### SAST Tooling

>_Static analysis tooling is required to add an extra layer of verification to the developer’s code around catching vulnerabilities before they are released to production._

- The team must use the designated SAST scanning tool.
- Each team member must have a basic understanding of interpreting the results of static analysis (manual and automated).  
- The team should decide what the acceptable threshold is to prevent code from being released to production e.g. a build or release fails.
- Teams should have a plan in place to assess SAST results within the tooling so that technical debt can be discussed and dealt with or false positives can be marked as such.  

### Threat Library & Mitigations

>_Each project will have recurring pieces of functionality. These generic PBIs should be captured, threat-modelled, and have code mitigations agreed. OWASP vulnerabilities should be discussed such as XSS, SQL Injections, broken authentication/authorisation, direct object referencing etc. It is easier to review and catch vulnerabilities during code reviews if everyone tackles vulnerabilities with the same techniques._

- Each team must document a set of generic scenarios for their project.
- The team must follow a [threat modelling process](../../security/ThreatModelling/ThreatModelling.md).
- Each team must agree on standard code approaches to mitigate common vulnerabilities.
- A code review checklist must be generated from the results of threat modelling.
- Testing criteria must be agreed and recorded within the solution.
