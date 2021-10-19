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
  - [Common Vulnerability Scoring](#common-vulnerability-scoring)
    - [Base CVSS Score Metrics](#base-cvss-score-metrics)
  - [Recording the CVSS Risk Assessment](#recording-the-cvss-risk-assessment)
    - [Example: Service Account Credentials are Stored in Plain Text within Config File](#example-service-account-credentials-are-stored-in-plain-text-within-config-file)
  - [Raising a Security Concern](#raising-a-security-concern)
    - [Example](#example)
  - [Prioritising and Fixing Security Concerns](#prioritising-and-fixing-security-concerns)

## Introduction

Security concerns are any issues that are related to the security of our applications. They may be items identified by the team during development, as part of formal penetration testing, by static analysis (such as the Dependency-Check tool) or reading security bulletins.

To help ensure the security of applications, this process provides a common process to help manage all security concerns related to UKHO software.

## Managing a list of current Security Concerns

Every software development team will keep a **prioritised** list of **current security concerns**. This list should be stored in the same work item tracking system that the team uses for bugs and general work (usually Azure DevOps) and identified using a standardised Tag of **Security Concern**.

Each security concern requires a risk assessment and the Security Advisor will ensure that an initial risk assessment will be carried out within 2 working days of the concern being raised (although this may be carried out by another team member on their behalf). This should give the Security Concern a standard Common Vulnerability Scoring System (CVSS) score (see Common Vulnerability Scoring below for details). Security Concerns that score 7.0+ (High) will be highlighted with the IT Security Team.

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

- Given a CVSS risk assessment score.
- More in-depth risk assessment as required, for example research online.

:arrow_down:

### Prioritise Fix

- Team works in conjunction with the IT Security Team and Product Owner to prioritise and schedule a fix.

:arrow_down:

### Implement

- Team implements a fix for the security concern.
- The fix is deployed and tested.

:arrow_down:

### Monitor

- Continuous monitoring of security concerns.

### Changes and New Features with a Security Impact

During development, a team will make some changes that will have a security impact. This may be introducing new security features or changing the way that some existing security feature works. These features will be **tagged** with **Security** to highlight to the IT Security Team.

------

## Common Vulnerability Scoring

To provide a standard and quick way to characterise a security concern, every security concern will be scored using the NIST Standard Scoring for security concern assessment. An online calculator to assist the scoring can be found [here](https://www.first.org/cvss/calculator/3.1).

To provide a common risk severity, scores are mapped as follows:

| Severity | Base Score Range |
| -------- | ---------------- |
| Low      | 0.1-3.9          |
| Medium   | 4.0-6.9          |
| High     | 7.0-8.9          |
| Critical | 9.0-10.0         |

### Base CVSS Score Metrics

The CVSS v3.* score we are interested in are the Base Score Metrics (Exploitability Metrics & Impact Metrics). Although useful, the Temporal Score or Environmental Score are not required for initial assessment of a security concern.

The base metric group captures the characteristics of a vulnerability that are constant with time and across user environments.

A reference guide to the CVSS Scoring Metrics can be found [here](CvssScoringMetrics.md).

## Recording the CVSS Risk Assessment

To ensure that it is clear why a security concern has been given a score, the details for each metric selected should be recorded in the work item tracking system (Azure DevOps) along with a short description of why. To aid clarity of the calculation of the score, include the CVSS v3 Vector from the calculator.

### Example: Service Account Credentials are Stored in Plain Text within Config File

| Exploitability Metric | Rating    | Description                                                  |
| --------------------- | --------- | ------------------------------------------------------------ |
| Attack Vector         | Adjacent  | The attacker needs to be within UKHO network and exploit the vulnerability through other means e.g. Access to Azure DevOps. |
| Attack Complexity     | Low       | Stored in a plain text file - File can be opened to access credentials. |
| Privileges Required   | High      | Needs internal access to the UKHO network and an account that can access the source repository. |
| User Interaction      | None      | No user interaction is required to access the config file.   |
| Scope                 | Unchanged | Principle of least privilege ensures the scope remains unchanged. |
| Integrity             | None      | Integrity of information is not changed.                     |
| Availability          | High      | Having access to the service account could impact service availability i.e. changing the service account password. |

Overall score: 5.2 (Medium) CVSS:3.1/AV:A/AC:L/PR:H/UI:N/S:U/C:L/I:N/A:H

------

## Raising a Security Concern

Once a security concern has been identified, it should be raised in the team's backlog. The bug should have the following characteristics:

- Tagged with **Security Concern**.
- Title starts with **Security Concern**.
- Title contains detail such as the service name and type of security issue.
- CVSS score should be included in the title.
- The CVSS severity should be included as a tag. For example if the severity is high, tag as **Severity - High**
- Include a detailed description of the security concern e.g. Services affected.
- Bug should contain steps to reproduce the issue (if possible).
- Detail information on key stakeholders (such as the service owner).
- Any conversations relevant to the issue should be recorded in the comments section.

### Example

A penetration test of the Contoso website has identified a XSS vulnerability on the customer details form.

1. A bug is raised in the Azure DevOps backlog
2. The bug is given the following title: *Security Concern: Contoso Website, XSS possible on customer details form. CVSS Score: 5.2 (Medium)*
3. The bug is tagged with the following: Security Concern, Severity - Medium

## Prioritising and Fixing Security Concerns

Discussions of prioritisation will usually happen during the team's planning session. In most cases, the team has the capability to address the security concern within their sprint. The IT Security Team will drive very high priority security concerns, this is usually discussed during SWGs (Security Working Groups) or ad-hoc meetings. In order to escalate an issue use the following guidance:

1. Raise the issue with the Security Advisor for the team (usually the Lead Developer)

2. The Security Advisor will inform next step i.e. raise to an ITSO (IT Security Officer).
3. ITSO will have an initial discussion with the Security Advisor to enable a review of the bug labelled **Security Concern** during the weekly IT Security Team meeting. With appropriate tagging, queries can be used to easily identify items of interest.
4. In this review ITSO will discuss and verify the risk score. This may require further follow-up meetings with either the Security Advisor, or member of staff who raised the concern. Discussions are recorded in the bug.
5. If the issue is directly related to an existing project and benefits from an opportunity to easily address in a following sprint, this must be pursued first. If required ITSO can contact the Delivery Manager for inclusion in the next sprint planning meeting.
6. If the issue fails to be remediated, ITSO will ensure that item is added to the agenda of the next Security Working Group (SWG).
7. SWG will discuss the issue, assign a risk owner, agree an action and assign an action owner.
8. The SWG will monitor progress of the issue and if no progress is made, the item will be escalated to the Information Assurance Governance Board managed by the Head of Business Resilience reporting to ExCo.
