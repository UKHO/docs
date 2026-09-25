# Managing Dependencies

- [Managing Dependencies](#managing-dependencies)
	- [Introduction](#introduction)
	- [Policy Statement](#policy-statement)
	- [Required Controls](#required-controls)
	- [Tooling Approach](#tooling-approach)
		- [Snyk](#snyk)
		- [Dependabot](#dependabot)
		- [Using Snyk and Dependabot Together](#using-snyk-and-dependabot-together)
	- [Vulnerability Prioritisation and Timescales](#vulnerability-prioritisation-and-timescales)
	- [Exceptions and Escalation](#exceptions-and-escalation)
	- [Evidence and Auditability](#evidence-and-auditability)
	- [References](#references)

## Introduction

Managing dependencies is a core part of maintaining secure, reliable software. This policy sets out the minimum expectations for repository-level dependency management, including the use of Dependabot, Snyk, or a combination of both.

## Policy Statement

All software repositories must have a defined and active dependency management approach that:

- Identifies vulnerable or outdated dependencies early.
- Creates a clear path to remediation through tracked work.
- Supports timely remediation in line with internal policy.
- Produces auditable evidence of decisions, fixes and exceptions.

Dependency and vulnerability management activities must follow the internal **Patch and Vulnerability Management Policy - POL218**.

## Required Controls

Teams must ensure that:

- Dependency and vulnerability checks are enabled for active repositories.
- Dependency updates are reviewed and merged through standard pull request controls.
- Security fixes are prioritised based on risk and business impact.
- Remediation work is tracked in the team's backlog and linked to pull requests.
- Suppressions, accepted risks or deferred fixes are documented with justification and review date.

## Tooling Approach

Teams may use Snyk, Dependabot, or both, provided policy outcomes are met.

### Snyk

Snyk dependency management is enabled by default for repositories.

- Teams should use Snyk results to identify vulnerable packages and prioritise remediation.
- Where tuning is needed (for example policy behaviour, project configuration or alert handling), contact the **Lead Technical Security Engineer (Security)** for support.

### Dependabot

Dependabot should be enabled to support:

- Dependabot alerts
- Dependabot security updates
- Dependabot version updates

Dependabot setup instructions:

- [Configuring Dependabot version updates](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)
- [Configuring Dependabot security updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)
- [About Dependabot alerts](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)

Repository baseline expectations for security tooling are also described in the [Repository Setup Policy](/software-engineering-policies/SourceControl/RepositorySetupPolicy.md).

### Using Snyk and Dependabot Together

Using both tools is recommended where possible:

- Dependabot supports automated pull requests for updates.
- Snyk provides additional vulnerability insight and policy-driven prioritisation.
- Combined usage improves visibility, remediation speed and confidence in dependency hygiene.

## Vulnerability Prioritisation and Timescales

All dependency vulnerabilities must be assessed and remediated in line with **POL218** severity and remediation timescales.

- Teams should adhere to POL218 timescales wherever possible.
- If a timescale cannot be met, teams must record rationale, mitigations and revised target date.
- Any decision to defer remediation must be agreed with the appropriate risk owner and captured in team tracking.

## Exceptions and Escalation

Where remediation cannot be completed within policy timescales, teams must:

- Raise and track the security concern in the team backlog.
- Define interim mitigations and owner.
- Escalate through the team's Security Champion and/or the Lead Technical Security Engineer (Security) where required.

For guidance on security concern handling, see [Managing Security Concerns](../ManagingSecurityConcerns/ManagingSecurityConcerns.md).

## Evidence and Auditability

Teams should retain evidence showing dependency management is operating effectively, including:

- Enabled tool configuration (Snyk and/or Dependabot).
- Open and closed dependency/security pull requests.
- Vulnerability remediation records and linked backlog items.
- Documented exceptions, suppressions and approvals.

## References

- Patch and Vulnerability Management Policy - POL218 (internal policy)
- [Repository Setup Policy](/software-engineering-policies/SourceControl/RepositorySetupPolicy.md)
- [Secure Development Policy](/software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md)
- [Managing Security Concerns](../ManagingSecurityConcerns/ManagingSecurityConcerns.md)
