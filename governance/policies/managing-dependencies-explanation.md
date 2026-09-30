# Why We Manage Dependencies

Managing dependencies is a core part of maintaining secure, reliable software. Vulnerable or outdated dependencies need to be identified early, with remediation tracked and decisions, fixes and exceptions supported by auditable evidence.

## How the Tools Fit Together

Snyk and Dependabot provide complementary support for dependency management. Snyk provides vulnerability insight and policy-driven prioritisation. Dependabot supports alerts and automated pull requests for security and version updates. Using both improves visibility, remediation speed and confidence in dependency hygiene.

The policy permits teams to use Snyk, Dependabot or both, provided its outcomes are met. Repository baseline expectations for security tooling are described in the [Repository Setup Policy](repository-setup.md).

## Policy Context

Dependency and vulnerability management follows the internal **Patch and Vulnerability Management Policy - POL218**, which supplies the severity and remediation timescales used to assess dependency vulnerabilities. When remediation cannot meet those timescales, the policy requires the decision, rationale, mitigations and revised target date to be handled through team tracking and the appropriate risk owner.

See the [Managing Dependencies Policy](managing-dependencies.md) for the authoritative requirements, and [Managing Security Concerns](managing-security-concerns.md) for guidance on security concern handling.
