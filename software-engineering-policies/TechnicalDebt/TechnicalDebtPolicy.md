# Technical Debt Policy

## Technical Debt Definition

Deficiencies in internal quality or capability that make a product/service/application more costly than it would ideally be to modify, extend or maintain a system over time.

## Guide

Each team **MUST** maintain a register of technical debt for their system.

The team should consider all types of technical debt for inclusion, i.e.:

* Architectural – Tightly coupled systems (lots of criss-crossed dependencies), restrictive to extension or automation
* Functional – Low quality code or ineffective patterns
* Knowledge – lack of documentation or inaccessible documentation
* Automation – Lack of automated tasks forcing manual intervention (Testing, deployments, backup/restore)
* Testing – Unknown or unrecorded test scenarios, lack of test coverage
* Maintenance – Out-of-support products, usually leading to security vulnerabilities
* Security - Known and exploitable vulnerabilities

See the [Technical Debt Guidance](TechnicalDebtGuidance.md) for details on recording this.

## Verification

The team's register of technical debt **MUST** be available for inspection. Each project should have an accessible and clear list of technical debt which should be available in the relevant area of either Azure DevOps or Azure DevOps Server.

See the [Technical Debt Guidance](TechnicalDebtGuidance.md) for details on building this capability.

## Additional Reading

​<https://martinfowler.com/bliki/TechnicalDebt.html>
<https://martinfowler.com/bliki/EstimatedInterest.html>
<https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>

### Balancing technical debt

>‘Technical debt’ is any compromise you make on quality to develop something quickly in the short-term. The extra effort (or ‘interest’) required to improve what you’ve built is something you’ll have to make (or ‘pay back’) in future.
>
>As your technical debt grows, your code will become more difficult to work with. This means adding new features will get harder, take longer and introduce more bugs.
>
>If you decide it’s necessary to compromise on quality so you can deliver something quickly, your team needs to understand the implications of taking on technical debt. You should also agree a plan for keeping it under control.
>
>Learn one of the ways [GOV.UK managed technical debt](https://insidegovuk.blog.gov.uk/2013/12/10/paying-down-technical-debt-in-the-departments-and-policy-publishing-platform/).

## Points of Contact

* Policy owner  - Matthew Slade
* Policy editor - Greg Zealley
