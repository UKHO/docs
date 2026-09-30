# Technical Debt Policy

## Scope and definition

All UKHO employees engaged with digital product development should develop a basic understanding of technical debt, how it is generated, its impacts on the business and how it can be paid off.

Technical debt is a deficiency in internal quality or capability that makes a product, service or application more costly to modify, extend or maintain.

## Requirements

Each product **MUST** maintain a register of technical debt within its Azure DevOps project. The register must include all types of technical debt:

* Architectural: tightly coupled systems with many dependencies, or systems that restrict extension or automation
* Code: low-quality code or ineffective patterns
* Knowledge: missing or inaccessible documentation
* Automation: missing automated tasks that force manual intervention, such as testing, deployments or backup and restore
* Testing: unknown or unrecorded test scenarios, or lack of test coverage
* Maintenance: out-of-support products, usually leading to security vulnerabilities
* Process: inefficient or wasteful practice or tooling
* Security: known and exploitable vulnerabilities

Individuals who identify technical debt **MUST** record it using the [technical debt how-to](technical-debt-how-to.md). If they cannot record it, they must pass the information to the relevant team, product manager or service owner to be raised.

Technical debt identified in the current sprint that is not being resolved as part of the present work **MUST** be raised as a `Technical debt` work item in the relevant area of Azure DevOps. The location depends on whether the debt relates to a product or a team. Technical debt must be recorded even when there is no plan to resolve it.

Defects are technical debt only when the decision has been made to accept or otherwise leave them unresolved. In that case, the defect should be marked as technical debt. Do not mark a defect as technical debt when it is intended to be fixed within the current or next sprint.

## Related documents

* [How to record and refine technical debt](technical-debt-how-to.md)
* [Why technical debt is tracked](technical-debt-explanation.md)
* [Technical Debt Monitoring](../../software-engineering-policies/TechnicalDebt/TechnicalDebtMonitoring.md)

Policy owner: Principal Support Developer.
