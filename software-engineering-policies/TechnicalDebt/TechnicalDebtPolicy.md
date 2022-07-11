# Technical Debt Policy

## Technical Debt Definition

Deficiencies in internal quality or capability that make a product/service/application more costly than it would ideally be to modify, extend or maintain a system over time.

## Guide

Each team **MUST** maintain a register of technical debt for their system.

The team should consider all types of technical debt for inclusion, i.e.:

* Architectural – Tightly coupled systems (lots of criss-crossed dependencies), restrictive to extension or automation
* Code – Low quality code or ineffective patterns
* Knowledge – lack of documentation or inaccessible documentation
* Automation – Lack of automated tasks forcing manual intervention (Testing, deployments, backup/restore)
* Testing – Unknown or unrecorded test scenarios, lack of test coverage
* Maintenance – Out-of-support products, usually leading to security vulnerabilities
* Security - Known and exploitable vulnerabilities

## Raising Technical Debt

Technical debt that will not be resolved in the sprint identified **MUST** be raised as a PBI in the relevant area of Azure DevOps or Azure DevOps Server. The relevant location is based on whether the technical debt is related to a product or a team.

When raising Technical Debt, please add the following information to the Technical Debt PBI:

### Title

```Technical Debt - {Concise outline of Technical Debt item}```

### Description

The description of the Technical Debt item must include the following as a minimum:

* The repository the Technical Debt lives within (a link to the repo would be good but the name would suffice)
* Description of the issue in as much detail as you can provide, including class/file names if this can be included
* A proposed solution or ideas for a fix **
* Cost/Benefit and risk of the Technical Debt item, simply as a "why should this be fixed?/How long would it take?"

### Tagging Strategy

* The Technical Debt PBI **MUST** be tagged with the `````Technical Debt````` tag and should have any further appropriate tags, such as the following:
  * Product Name (could be multiple, see the product list in AppRegister; http://appregister/)
  * Tech Debt Type:
    * Security
    * Knowledge
    * Automation
    * Testing
    * Architecture
    * Code
    * Infrastructure
  * Tech Debt Impact:
    * Availability
    * Portability
    * Compatibility
    * Performance
    * Maintainability
    * Extensibility  
  * Out-Of-Support
  * Date-of-Failure **
  * Investigate To Remove - This tag has been used to mark a Technical Debt item that may already have been completed or is going to be irrelevant due to other work.
  * UKHO TD priority tag:
    * TD1 - High business/technical value, high risk debt that needs to be paid off ASAP (a Security tag should automatically be considered for a TD1 prioritisation).
    * TD2 - High business/technical value (cost reduction, blocker removing, maintainability improvement), lower risk, a change that should be worked on when time/opportunity permits and is not something that can be accepted or supported long term.
    * TD3 - Tech debt that has been accepted as a risk but through paying off would add value through improving usability, maintainability, reliability or performance.
    * TD4 - Accepted risk from the business, safe to leave until service reaches end of life. Worth tracking in case developers are working in the area and can complete as quick wins.

### Tech Debt Metric Strategy

Teams **MUST** adopt the use of the TD metrics section in their PBI template. This enables the business to gather much more useful and accurate information about technical debt and empowers the automations available for tracking and monitoring. For support in adding this section to your PBI template, either request DDC to implement the change to your templates or discuss with your delivery manager.

#### TD Principle

(Integer) Technical Debt Principle is the estimated cost in work-hours to pay off the technical debt at the moment of identificaiton. The discovering team/individual is probably best placed to assess this though it could be put to a team decision and refined. If this is part of a legacy product and no known SME is available then this should be considered in the estimate. Don't be afraid of large values but attempt to be as accurate as possible.

#### TD Interest

(Integer) Technical Debt Interest is the possible cost in work-hours impacted whenever the technical debt is encountered. For security technical debt this may be difficult to quantify.

#### TD Risk

(Float, value between 0 and 1) Technical Debt Risk is the chance that the technical debt will be encountered whenever the product is worked on. For security type technical debt this should be set as a 1, it is assumed that eventually a security flaw will be exploited so must be resolved.

#### (Optional) Date of Failure

(Date) When packages or software versions are going out-of-support, if they are not addressed when found this should be recorded and if a date can be found for when the version goes out-of-support this should be reported here.

**IMPORTANT** the tagging of the technical debt PBI is used for automated metric assessments vital for visibility of the UKHOs technical debt, tagging tech debt PBIs is vital for the accuracy of this process.

** - Where appropriate/known

An example of the above:

![Example Tech Debt PBI](Example_TD_V2.png)

### How this meshes with RAID

A technical debt PBI should be created if the team is not planning on addressing the technical debt within the current sprint. We advise that teams carrying out RAID analysis create technical debt PBIs in addition to this analysis. Consider that some technical debt items have been long lived in the past this will help support or future development teams consider the technical debt for future resolution.

## Refining Technical Debt

If the technical debt item doesn't meet any of the above it should be considered as debt with little or no value to resolution and considered for removal from the backlog.

If during refinement an imminent issue is discovered (e.g. old Technical Debt, with high risk, which is time sensitive, but has not been addressed) this should be refined and flagged to a senior Solution Architect, Product Manager and relevant Delivery Manager.

When the technical debt PBI has been refined (i.e. each item on this page has been considered and applied) ensure that you add the tag ```TD-APPROVED``` to show this.

## Technical Debt Tracking/Monitoring

There is automated near-realtime monitoring of technical debt available for all projects within the Ukhydro Azure DevOps tenant. This is made available by the DDC technical debt prometheus exporter and relys on accurately tracked technical debt PBIs. For information on this exporter and the technology used please contact DDC.

## FAQ

**When is a defect (bug) technical debt?**  
Defects (also known as bugs) are only considered technical debt if the decision has been made to accept or otherwise leave the defect unresolved. In this case the defect should be marked as technical debt following the provided guidance. If the defect is something intended to be fixed within current or next sprint, then do not mark it as technical debt.

## Verification

The team's register of technical debt **MUST** be available for inspection. Each project should have an accessible and clear list of technical debt which should be available in the relevant area of either Azure DevOps or Azure DevOps Server.

See the [Technical Debt Guidance](TechnicalDebtGuidance.md) for details on building this capability.

## Additional Reading

​<https://martinfowler.com/bliki/TechnicalDebt.html>
<https://martinfowler.com/bliki/EstimatedInterest.html>
<https://martinfowler.com/bliki/TechnicalDebtQuadrant.html>

## Balancing technical debt

>‘Technical debt’ is any compromise you make on quality to develop something quickly in the short-term. The extra effort (or ‘interest’) required to improve what you’ve built is something you’ll have to make (or ‘pay back’) in future.
>
>As your technical debt grows, your code will become more difficult to work with. This means adding new features will get harder, take longer and introduce more bugs.
>
>If you decide it’s necessary to compromise on quality so you can deliver something quickly, your team needs to understand the implications of taking on technical debt. You **MUST** record technical debt even if you don't plan on resolving it. You **should** also agree a plan for keeping it under control.
>
>Learn one of the ways [GOV.UK managed technical debt](https://insidegovuk.blog.gov.uk/2013/12/10/paying-down-technical-debt-in-the-departments-and-policy-publishing-platform/).

## Legacy Technical Debt Tracking

There **MUST BE** a centralised shared query in each project area that can be run in Azure Dev Ops (TFS) and Azure Dev Ops Server (VSTS) which centralises all tagged technical debt PBIs into one result set. This pulls from all accessible backlogs.

Customer:

[Link to internal queries - UKHO access only](https://github.com/UKHO/docs-internal/blob/main/links.md)

### Team Technical Debt queries

Each team should have its own query. This should be named ```Technical Debt - Basic``` and be stored in a ```Shared Queries\Technical Debt``` folder. This will ensure consistency across all teams.

## Points of Contact

* Policy owner  - Matthew Slade
