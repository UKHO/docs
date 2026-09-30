# Secure Development Policy

This policy defines the required secure development controls for UKHO software development teams.

## Objective

UKHO software must be secure as feasibly possible. This policy helps teams catch vulnerabilities during development and provides evidence of security as part of the software development lifecycle.

## Roles and responsibilities

### Security Champion(s)

A Security Champion is any skill-level engineer who is enthusiastic about building secure applications. They must:

- collaborate with other security functions at UKHO;
- encourage and facilitate threat modelling; and
- champion secure development practices.

### Security Working Groups

The Security Working Group (SWG) is a security-focused forum between stakeholders and security functions at UKHO. Security concerns are raised at this forum where owners must decide whether to accept the risk or seek mitigations. Any unfulfilled security requirements may be raised at this forum. Anyone, including developers, can raise an item for discussion at the SWG.

### Risk Owner

The risk owner is the person responsible for the product. This may be the person responsible for the system or service delivery the solution is part of. It is important to clarify the risk owner because they decide the risk tolerance. The risk owner must:

- provide the PO or team with a description of risk tolerance;
- authorise exceptions when risks diverge from security requirements or tolerance.

## Controls

### Team Roles

Teams must appoint the necessary security roles within the project. A Security Champion must be appointed.

### SCRUM

Security must be included within the software development lifecycle and the agile methodology incorporated by the team.

- Security considerations must be included within the Definition of Done.
- Security-related stories, including vulnerabilities and upgrades, must be raised in TFS with the `Security` and `Security Concern` tag.
- See also the [Managing Security Concerns Policy](managing-security-concerns.md).

### Skills Matrix

Each project will have different security nuances, so each project must maintain a skills matrix to ensure all developers have a common baseline understanding of application security.

- Each team must keep a list of security resources that are relevant to the team's technology stack.
- Team members should complete baseline training on an approved secure development training platform.
- There must be evidence that all engineers are progressing with their security training.

### On-boarding

New team members need to be onboarded into the project. This includes adding them to the skills matrix, discussing common scenarios and mitigations, security tooling, and encouraging further reading.

- Each team must have an onboarding checklist.
- Confirmation must be provided to the team lead or lead technical engineer (security) once onboarding is completed.

### Source Control

Source control is a key requirement for projects because it provides role-based access control to code, change management, and a changelog.

- All project code intended for delivery should be stored as required by the UKHO source control policy.
- Source control repositories should conform to the policies set out in [Source Control Policy](SourceControlPolicy.md).

### 3rd Party Dependency/Package Management

We are responsible for ensuring that third-party packages within our solutions are from authorised repositories, have appropriate licensing, and are checked for known vulnerabilities.

- Packages must be downloaded from a package management tool, such as ProGet or Nexus, or any Digital Delivery Team authorised tool.
- The team must use the designated dependency scanning tool.
- The tool must be configured to run before code is released to production, such as via a build or release pipeline.
- The team should decide what acceptable threshold is used to prevent code from being released to production, such as via a build or release pipeline.
- The team must provide proof that the code is not released to production when this threshold is breached. Decisions to release even in the presence of a known vulnerability must be recorded and approved by the risk owner.
- Where a suppression of a vulnerability has been discussed and accepted, a suitable comment must be added to the suppression so that it can be audited by our security teams.
- If a suppression has been added which requires a review at a later time, this should be expressed directly in the suppression using the supported format or within a comment with a next review date. This should be dated at an agreed review date.

### SAST Tooling

Static analysis tooling is required to add an extra layer of verification to developers' code around catching vulnerabilities before they are released to production.

- The team must use the designated SAST scanning tool.
- Each team member must have a basic understanding of interpreting the results of static analysis, both manual and automated.
- The team should decide what acceptable threshold is used to prevent code from being released to production, such as a build or release failure.
- Teams should have a plan in place to assess SAST results within the tooling so technical debt can be discussed and dealt with, or false positives can be marked as such.

### Threat Library & Mitigations

Each project will have recurring pieces of functionality. These generic PBIs should be captured, threat-modelled, and have code mitigations agreed. OWASP vulnerabilities should be discussed, such as XSS, SQL injection, broken authentication or authorisation, and direct object referencing. It is easier to review and catch vulnerabilities during code reviews if everyone tackles vulnerabilities with the same techniques.

- Each team must document a set of generic scenarios for their project.
- The team must follow the [threat modelling process](../../security/ThreatModelling/ThreatModelling.md).
- Each team must agree on standard code approaches to mitigate common vulnerabilities.
- A code review checklist must be generated from the results of threat modelling.
- Testing criteria must be agreed and recorded within the solution.

## Related documents

- [Why secure development matters](secure-development-explanation.md)
