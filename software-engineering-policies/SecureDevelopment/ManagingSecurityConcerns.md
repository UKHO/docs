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
    - [Exploitability Metrics](#exploitability-metrics)
      - [Attack Vector (AV)](#attack-vector-av)
      - [Attack Complexity (AC)](#attack-complexity-ac)
      - [Privileges Required (PR)](#privileges-required-pr)
      - [User Interaction (UI)](#user-interaction-ui)
      - [Scope (S)](#scope-s)
    - [Impact Metrics](#impact-metrics)
      - [Confidentiality (C)](#confidentiality-c)
      - [Integrity (I)](#integrity-i)
      - [Availability (A)](#availability-a)
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

Each security concern requires a risk assessment and the Security Advisor will ensure that an initial risk assessment will be carried out within 2 working days of the concern being raised (although this may be carried out by another team member on their behalf). This should give the Security Concern a standard Common Vulnerability Scoring System (CVSS) score (see Common Vulnerability Scoring below for details). Security Concerns that score 7.0+ (High) will be highlighted with ITSO.

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

- Team works in conjunction with ITSO and PO to prioritise and schedule a fix.

:arrow_down:

### Implement

- Team implements a fix for the security concern.
- The fix is deployed and tested.

:arrow_down:

### Monitor

- Continuous monitoring of security concerns.

### Changes and New Features with a Security Impact

During development, a team will make some changes that will have a security impact. This may be introducing new security features or changing the way that some existing security feature works. These features will be **tagged** with **Security** to highlight to ITSO.

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

### Exploitability Metrics

The five Exploitability Metrics capture how the vulnerability is accessed and whether or not extra conditions are required to exploit it.

#### Attack Vector (AV)

This metric reflects the context by which vulnerability exploitation is possible. This metric value (and consequently the Base Score) will be larger the more remote (logically, and physically) an attacker can be in order to exploit the vulnerable component. The assumption is that the number of potential attackers for a vulnerability that could be exploited from across a network is larger than the number of potential attackers that could exploit a vulnerability requiring physical access to a device, and therefore warrants a greater

#### Attack Complexity (AC)

This metric describes the conditions beyond the attacker’s control that must exist in order to exploit the vulnerability. As described below, such conditions may require the collection of more information about the target, or computational exceptions. Importantly, the assessment of this metric excludes any requirements for user interaction in order to exploit the vulnerability (such conditions are captured in the User Interaction metric). If a specific configuration is required for an attack to succeed, the Base metrics should be scored assuming the vulnerable component is in that configuration. The Base Score is greatest for the least complex attacks.

#### Privileges Required (PR)

This metric describes the level of privileges an attacker must possess *before* successfully exploiting the vulnerability. The Base Score is greatest if no privileges are required.

#### User Interaction (UI)

This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner. The Base Score is greatest when no user interaction is required.

#### Scope (S)

The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its *security scope*.

Formally, a *security authority* is a mechanism (e.g., an application, an operating system, firmware, a sandbox environment) that defines and enforces access control in terms of how certain subjects/actors (e.g., human users, processes) can access certain restricted objects/resources (e.g., files, CPU, memory) in a controlled manner. All the subjects and objects under the jurisdiction of a single *security authority* are considered to be under one *security scope*. If a vulnerability in a vulnerable component can affect a component which is in a different *security scope* than the vulnerable component, a Scope change occurs. Intuitively, whenever the impact of a vulnerability breaches a security/trust boundary and impacts components outside the security scope in which vulnerable component resides, a Scope change occurs.

The security scope of a component encompasses other components that provide functionality solely to that component, even if these other components have their own security authority. For example, a database used solely by one application is considered part of that application’s security scope even if the database has its own security authority, e.g., a mechanism controlling access to database records based on database users and associated database privileges.

The Base Score is greatest when a scope change occurs.

### Impact Metrics

#### Confidentiality (C)

This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones. The Base Score is greatest when the loss to the impacted component is highest.

#### Integrity (I)

This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. The Base Score is greatest when the consequence to the impacted component is highest.

#### Availability (A)

This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. While the Confidentiality and Integrity impact metrics apply to the loss of confidentiality or integrity of *data* (e.g., information, files) used by the impacted component, this metric refers to the loss of availability of the impacted component itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of an impacted component. The Base Score is greatest when the consequence to the impacted component is highest.

More information on the CVSS score metrics can be found on the specification document [here](https://www.first.org/cvss/v3.1/specification-document).

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

Once a security concern has been identified, it should be raised in the teams backlog. The bug should have the following characteristics:

- Tagged with **Security Concern**.
- Title starts with **Security Concern**.
- Title contains detail such as the service name and type of security issue.
- CVSS score should be included in the title.
- The CVSS severity should be included as a tag. For example if the severity is high, tag as **Severity - High**
- Include a detailed description of the security concern e.g. Services affected.
- Bug should contain steps to reproduce the issue (if possible).
- Detail information on key stakeholders (such as the service owner).
- Any conversations captures regarding the issue should be captured in the comments section.

### Example

A penetration test of the Contoso website has identified a XSS vulnerability on the customer details form.

1. A bug is raised in the Azure DevOps backlog
2. The bug is given the following title: *Security Concern: Contoso Website, XSS possible on customer details form. CVSS Score: 5.2 (Medium)*
3. The bug is tagged with the following: Security Concern, Severity - Medium

## Prioritising and Fixing Security Concerns

Discussions of prioritisation will usually happen during the teams planning session. In most cases, the team has the capability to address the security concern within their sprint. ITSO will drive very high priority security concerns, this is usually discussed during SWGs (Security Working Groups) or ad-hoc meetings. In order to escalate an issue use the following guidance:

1. Raise the issue with the Security Advisor for the team (usually the Lead Developer)

2. The Security Advisor will inform next step i.e. raise to an ITSO (IT Security Officer).
3. ITSO will have an initial discussion with the Security Advisor to enable a review of the bug labelled **Security Concern** during the weekly IT Security Team meeting. With appropriate tagging, queries can be used to easily identify items of interest.
4. In this review ITSO will discuss and verify the risk score. This may require further follow-up meetings with either the Security Advisor, or member of staff who raised the concern. Discussions are recorded in the bug.
5. If the issue is directly related to an existing project and benefits from an opportunity to easily address in a following sprint, this must be pursued first. If required ITSO can contact the Delivery Manager for inclusion in the next sprint planning meeting.
6. If the issue fails to be remediated, ITSO will ensure that item is added to the agenda of the next Security Working Group (SWG).
7. SWG will discuss the issue, assign a risk owner, agree an action and assign an action owner.
8. The SWG will monitor progress of the issue and if no progress is made, the item will be escalated to the Information Assurance Governance Board managed by the Head of Business Resilience reporting to ExCo.
