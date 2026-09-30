# Why Technical Debt Is Tracked

This document explains the context for the [Technical Debt Policy](technical-debt.md). The policy remains the authoritative source for requirements.

## Purpose and impact

The policy aims to provide UKHO with detailed data about technical debt across the organisation. This data can support business intelligence and more informed decision-making at all levels.

Outstanding technical debt can affect an application's life cycle. Common impacts include:

* Increased time to deliver
* Unplanned work
* Inaccurate planning
* Disengaged development teams
* Longer recovery times
* Instability
* Security concerns

## Balancing technical debt

Technical debt can result from a compromise on quality made to develop something quickly in the short term. The additional effort required to improve the result may need to be paid later. As debt grows, code can become more difficult to work with, making feature development harder, slower and more likely to introduce bugs.

When a team decides that a short-term quality compromise is necessary, the policy requires the debt to be recorded even if there is no plan to resolve it. The source also recommends agreeing a plan to keep it under control. The policy cites [GOV.UK's account of managing technical debt](https://insidegovuk.blog.gov.uk/2013/12/10/paying-down-technical-debt-in-the-departments-and-policy-publishing-platform/) as an example.

## RAID and future planning

Technical debt should be recorded even when a team does not plan to address it in the current sprint. The source advises creating technical debt work items alongside RAID analysis. Some debt items have been long-lived; recording them can help current and future development teams consider them during future resolution and planning.

## Tracking and legacy context

Near-real-time technical debt monitoring is available for projects in the UKHydro Azure DevOps tenant through the DDC technical debt Prometheus exporter. It relies on accurately tracked technical debt PBIs. See [Technical Debt Monitoring](../../software-engineering-policies/TechnicalDebt/TechnicalDebtMonitoring.md) for information about the exporter and its technology.

The source describes a legacy approach in which items would be added to one collection where possible. Where that was not possible, a symbolic Technical Debt work item could provide some tracking even if it did not have the same fields. It also says each team should have its own queries and dashboard, copied into the team by the Project Collection Admin.

## Further reading

* [Technical Debt](https://martinfowler.com/bliki/TechnicalDebt.html)
* [Estimated Interest](https://martinfowler.com/bliki/EstimatedInterest.html)
* [Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)
