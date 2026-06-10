# Managing Security Concerns

- [Managing Security Concerns](#managing-security-concerns)
  - [Introduction](#introduction)
  - [Managing a list of current Security Concerns](#managing-a-list-of-current-security-concerns)
  - [Security Concern Lifecycle](#security-concern-lifecycle)
    - [New](#new)
    - [Risk Assessment](#risk-assessment)
    - [Prioritise Fix](#prioritise-fix)
    - [Implement](#implement)
    - [Monitor](#monitor)
    - [Changes and New Features with a Security Impact](#changes-and-new-features-with-a-security-impact)
  - [Raising a Security Concern](#raising-a-security-concern)
    - [Example](#example)
  - [Prioritising and Fixing Security Concerns](#prioritising-and-fixing-security-concerns)

## Introduction

Security concerns are any issues that are related to the security of our applications. They may be items identified by the team during development, as part of formal penetration testing, by analysis tooling (SAST. DAST, SCA, IAC or Container scanning) or reading security bulletins.

To help ensure the security of applications, this process provides a common process to help manage all security concerns related to UKHO software.

## Managing a list of current Security Concerns

Every software development team will keep a **prioritised** list of **current security concerns**. This list should be stored in the same work item tracking system that the team uses for bugs and general work (usually Azure DevOps) and identified using a ticket type of Risk with a tag of Security.

Each security concern requires an assessment and the Security Champion or Lead Technical Software Engineer (Security) will ensure that an initial assessment will be carried out within 2 working days of the concern being raised (although this may be carried out by another team member on their behalf). This should give the Security Concern a standard scoring using the Inherent, Residual and Target risk measures.

> - Inherent Risk: Baseline risk before any preventative measures taken
> - Residual Risk: Remaining risk after mitigations are in place
> - Target Risk: The risk appetite your team/application/product is willing to accept

Every sprint, the list of current security concerns should be reviewed by the team and all new security concerns should be highlighted as part of the sprint review.

Additionally, each concern should be assessed to determine if additional training is required to prevent further issues.

------

## Security Concern Lifecycle

### New

- New security concern raised by team.
- Static analysis identification of vulnerability.
- Dynamic analysis identification of vulnerability.
- Vulnerability identified in a security bulletin.
- Vulnerability identified in third-party dependency.
- Vulnerability identified during penetration testing (usually 3rd party).

:arrow_down:

### Risk Assessment

- Given a risk assessment score.
- More in-depth risk assessment as required, for example research online.

:arrow_down:

### Prioritise Fix

- Team works in conjunction with the IT Security Team, Product Owner and relevant Security Champions to prioritise and schedule a fix.

:arrow_down:

### Implement

- Team implements a fix for the security concern.
- The fix is deployed and tested.
- Any testing tools that indicated an issue are to retest the issue to ensure this has been resolve or that new issues are not being presented. 

:arrow_down:

### Monitor

- Continuous monitoring of security concerns.

### Changes and New Features with a Security Impact

During development, a team will make some changes that will have a security impact. This may be introducing new security features or changing the way that some existing security feature works. These features will be **tagged** with **Security** to highlight to the IT Security Team.

------

## Raising a Security Concern

Once a security concern has been identified, it should be raised in the team's backlog. The Risk should have the following characteristics:

- Tagged with **Security**.
- Title contains detail such as the service name and type of security issue.
- Include a detailed description of the security concern e.g. Services affected.
- Risk should contain steps to reproduce the issue (if possible).
- Detail information on key stakeholders (such as the service owner).
- Any conversations relevant to the issue should be recorded in the comments section.

### Example

A penetration test of the Contoso website has identified a XSS vulnerability on the customer details form.

1. A Risk is raised in the Azure DevOps backlog
2. The bug is given the following title: *Contoso Website, XSS possible on customer details form.*
3. The bug is tagged with the following: Security

## Prioritising and Fixing Security Concerns

Discussions of prioritisation will usually happen during the team's planning session. In most cases, the team has the capability to address the security concern within their sprint. The IT Security Team will drive very high priority security concerns, this is usually discussed during SWGs (Security Working Groups) or ad-hoc meetings. In order to escalate an issue use the following guidance:

1. Raise the issue with the Security Champion for the team or Lead Technical Software Engineer (Security)
2. You will inform next steps i.e. raise to an ITSO (IT Security Officer).
3. ITSO will have an initial discussion with the relevant parties to enable a review of the risk labelled **Security**. With appropriate tagging, queries can be used to easily identify items of interest.
4. In this review ITSO will discuss and verify the risk score. This may require further follow-up meetings with either the Security Champion, or member of staff who raised the concern. Discussions are recorded in the bug.
5. If the issue is directly related to an existing project and benefits from an opportunity to easily address in a following sprint, this must be pursued first. If required ITSO can contact the Delivery Manager for inclusion in the next sprint planning meeting.
6. If the issue fails to be remediated, the issue may need to be risk accepted in which a further conversation with ITSO will be required.
7. ITSO will discuss the issue and will guide you through the process.
