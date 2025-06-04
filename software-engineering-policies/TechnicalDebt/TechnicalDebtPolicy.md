# Technical Debt Policy

All UKHO employees engaged with digital product development should develop a basic understanding of technical debt, how it's generated, its impacts on the business and how it can be paid off.

All individuals who identify technical debt should record it as per the following strategy. Where the individual cannot, the information should be passed to the relevant team, product manager or service owner to be raised.

## Objective

To provide the UKHO with a detailed and expansive data set about technical debt across the organisation, enabling greater business intelligence at all levels of the organisation for more informed and effective decision making.

## Technical Debt Definition

Deficiencies in internal quality or capability that make a product/service/application more costly to modify, extend or maintain.

## Technical Debt Types

Each product **MUST** maintain a register of technical debt within its Azure DevOps project.

This should include all types of technical debt, i.e.:

* Architectural – Tightly coupled systems (lots of criss-crossed dependencies), restrictive to extension or automation
* Code – Low quality code or ineffective patterns
* Knowledge – lack of documentation or inaccessible documentation
* Automation – Lack of automated tasks forcing manual intervention (Testing, deployments, backup/restore)
* Testing – Unknown or unrecorded test scenarios, lack of test coverage
* Maintenance – Out-of-support products, usually leading to security vulnerabilities
* Process - inefficient or wasteful process steps, this could be related to practice or tooling
* Security - Known and exploitable vulnerabilities

## Technial Debt Impact

Technical debt impacts various aspects of an application's life cycle, this is often dictated by the type of technical debt but common impacts you can expect from outstanding technical debt are:

* Increased time to deliver
* Unplanned work
* Inaccurate planning
* Disengaged Development teams
* Longer times to recover
* Instability
* Security Concerns

---

## Raising Technical Debt

Technical debt identified in the current sprint but not being resolved as part of present work **MUST** be raised as a `Technical debt` work item type in the relevant area of Azure DevOps. The relevant location is based on whether the technical debt is related to a product or a team.

Ideally even if technical debt is going to be resolved immediately raising it is good for understanding its impact on UKHO work and identifying that technical debt was discovered.

When raising technical debt, please add the following information to the Technical Debt work item:

### Title

```{Concise outline of Technical Debt item}```

### Description

The description of the Technical Debt item must include the following as a minimum:

* The repository the Technical Debt lives within (a link to the repo would be good but the name would suffice)
* Description of the issue in as much detail as you can provide, including class/file names if this can be included
* A proposed solution or ideas for a fix **
* Cost/Benefit and risk of the Technical Debt item, simply as a "why should this be fixed?/How long would it take?"

### Strategy

* A **Technical debt** work item type **MUST** be created in target project. Using queries and dashboads it is then possible to monitor Technical Debt.

![Example Tech Debt work item](./Example_TD_V4.PNG)

 For more on requirements, review the information on [Technical Debt Monitoring](./TechnicalDebtMonitoring.md)

---

### How this meshes with RAID

A technical debt work item should be created, even if the team is not planning on addressing the technical debt within the current sprint. We advise that teams carrying out RAID analysis and create technical debt work items in addition to this analysis. Consider that some technical debt items have been long lived in the past this will help support or future development teams consider the technical debt for future resolution and when planning.

## Refining Technical Debt

If the technical debt item doesn't meet any of the above it should be considered as debt with little or no value to resolution and considered for removal from the backlog.

If during refinement an imminent issue is discovered (e.g. old Technical Debt, with high risk, which is time sensitive, but has not been addressed) this should be refined and flagged to a senior Solution Architect, Product Manager and relevant Delivery Manager.


## Technical Debt Tracking/Monitoring

There is automated near-realtime monitoring of technical debt available for all projects within the UKHydro Azure DevOps tenant. This is made available by the DDC technical debt Prometheus exporter and relies on accurately tracked technical debt PBIs. For information on this exporter and the technology used please refer to the [technical debt monitoring](../TechnicalDebt/TechnicalDebtMonitoring.md) document.

## FAQ

**When is a defect (bug) technical debt?**  
Defects (also known as bugs) are only considered technical debt if the decision has been made to accept or otherwise leave the defect unresolved. In this case the defect should be marked as technical debt following the provided guidance. If the defect is something intended to be fixed within current or next sprint, then do not mark it as technical debt.

**How do I balance technical debt?**

>‘Technical debt’ is any compromise you make on quality to develop something quickly in the short-term. The extra effort (or ‘interest’) required to improve what you’ve built is something you’ll have to make (or ‘pay back’) in future.
>
>As your technical debt grows, your code will become more difficult to work with. This means adding new features will get harder, take longer and introduce more bugs.
>
>If you decide it’s necessary to compromise on quality so you can deliver something quickly, your team needs to understand the implications of taking on technical debt. You **MUST** record technical debt even if you don't plan on resolving it. You **should** also agree a plan for keeping it under control.
>
>Learn one of the ways [GOV.UK managed technical debt](https://insidegovuk.blog.gov.uk/2013/12/10/paying-down-technical-debt-in-the-departments-and-policy-publishing-platform/).

## Additional Reading

- https://martinfowler.com/bliki/TechnicalDebt.html
- https://martinfowler.com/bliki/EstimatedInterest.html
- https://martinfowler.com/bliki/TechnicalDebtQuadrant.html

## Legacy Technical Debt Tracking

To properly manage this, everything will be added to one collection, but where that isnt possible we will use a symbolic Technical Debt work item, it might not have the same fields, but will allow for some sort of tracking.

### Team Technical Debt queries

Each team should have its own set of queries and a dashboard. These will be copied into the team by the Project Collection Admin.

## Points of Contact

* Policy Owner - Principal Support Developer
