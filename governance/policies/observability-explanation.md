# Why Observability Matters

This document explains the context in the [draft Observability Policy](observability.md) and the linked [Observability Reference Architecture](https://ukho.sharepoint.com/sites/eagwiki/Pages/Observability%20Reference%20Architecture.aspx) (internal only).

## Purpose

Observability monitoring provides information about system performance so teams can detect whether a service or capability is performing as expected or has degraded. This information supports timely preventative and remedial action. Reliable, performant systems can give end users confidence and encourage continued use, while supporting the organisation’s reputation.

The stated vision is a standardised way to collect application performance metrics across UKHO; a simple view of production-estate state; fast application-state insight for developers and support staff; transparent product status for UKHO distributors; internal and external status access through an API and UI; and a cloud-agnostic solution that can join information across silos.

## Metrics and logging

Logging is primarily text data covering a wide range of issues. Metrics are real-time numeric data or counters that summarise service performance. The source identifies lower resource use, focus on key performance indicators, easier interpretation, and easier alerting as advantages of metrics over logging.

Metrics do not replace good logging practice. They work together, and specific APM events, such as errors, can be linked automatically to underlying log details.

## Reliability objectives and outage budget

Service Level Indicators (SLIs) measure service reliability, and Service Level Objectives (SLOs) set reliability targets for SLIs. The source describes SLOs as a high-level health check. Fine-tuning them over time is intended to improve reliability. SLOs help set the number of “nines”, which determines the outage budget or burn rate used to manage and improve deployments, planned maintenance, and unplanned downtime.

## Issues addressed

The architecture identifies low-quality application performance information as an issue. Wider rollout across the UKHO software estate is intended to improve monitoring coverage and response; faster discovery of issues is intended to improve service reliability. Publicly transparent service status is intended to support the organisation’s reputation. The architecture also aims to establish observability as a first-class practice for software teams, like logging.

## Related experience

- [Calypso team APM report](https://ukho.sharepoint.com/:w:/s/TeamCalypso/ES2EMMsWEodDvs1TGAVTD6YBW3vOS85EMKolsZtTsBe-gA?e=YOTfLO&CID=477063B6-7517-4502-AED3-F22C0DD61F13&wdLOR=c7F21236B-A776-441B-A98A-5182517A6561)
- [TechRadar APM and RUM example pull request](https://github.com/UKHO/tech-radar/pull/682/files)
