# (DRAFT) Observability Reference Architecture

## Overview

Why Observability and Monitoring? If we don’t know how our systems are performing – how do we know they meet our needs? Observability monitoring provide performance monitoring of our systems so that we can detect and be informed if a service or capability is performing as expected or has become degraded. This then allows us to take preventative and remedial action in a timely manner. A reliable and performant system gives our end-users confidence and the desire to continue using our systems, while improving our reputation. “the most important feature of any system is its reliability” - Google

![Screenshot 2024-05-23 113220](https://github.com/UKHO/docs/assets/3432241/8eb37689-e48c-4fe3-999e-95c41379afa8)


[Observability Reference Architecture](https://ukho.sharepoint.com/sites/eagwiki/Pages/Observability%20Reference%20Architecture.aspx)

## Vision – to provide:

* a standardised way of collecting software application performance metrics across the UKHO.
* the business with a simple way of understanding what state the UKHO production estate is in.
* developers and support staff with fast insight into an application state.
* product status transparency to UKHO distributors to improve reliability.
* easy ways of accessing product status internally and externally via an API and UI.
* a cloud agnostic solution, which can join differing silos of information.

## Implementation

Add the APM code and libraries and configuration to the Application at the root level. The APM library will then be able to provide metrics on the most of the application. There are specific libraries and hooks for each type of application: http web applications/API/Desktop/Containers etc. Follow the provider documentation for implementation and the existing implemented projects for examples – e.g.: Fleet Manager HTTP UI and B2B API. The Application will need to be configured to point to the relevant provider instance – see the Support SME for the credentials. Extra traces and meta data can be added into the code to allow finer-grained collection of metrics within the application. Probes(Synthetic tests) will need to be set up. These are external tests that run as if a user was using the application – very similar to automated testing and provide the “gold standard” for quality assurance. APM and Solarwinds are connected for integration and Support processes. Terraform to be used to script the APM and Synthetics tests for deployment and supportability.Internal and external view dashboards are available for the services monitored as well as the SLI+SLO and alerts for BAU Support- see the Support SME.Alerts are created along with connectors to the Status Page and other Systems - see the Support SME.Cloud-specific metrics e.g. Azure App Insights can be used for specific cloud components and linked/reported on in the APM data if required

![Screenshot 2024-05-23 111542](https://github.com/UKHO/docs/assets/3432241/be02b69c-54ec-4657-b879-a18a54703334)

### Outage Budget “Burn rate” 

Fine tuning the SLOs over time will improve the reliability for services monitored. The SLOs play the critical part in setting the number of 9s (nines) that determine the outage budget (burn rate) that allow deployment times, planned maintenance and unplanned downtimes to be managed and improved.

![Screenshot 2024-05-23 112051](https://github.com/UKHO/docs/assets/3432241/6eb19313-84e6-4e4b-8f5f-e1727cc3a171)

## Architectural Issues/Risks Addressed

* Information quality of application performance is low.
* Can be rolled out to the UKHO software estate - addressing coverage and ability to respond to issues.
* Improves reputation by providing public transparent service status.
* Improves reliability of services as issues are found faster.
* Provides formal definition of observability practice that all software teams can follow (like logging), ensures observability is a “first class” standard practice

## Definitions

**APM**: Application Performance Monitor<br>
**SLI**: Service Level Indicator – a quantifiable measure of service reliability<br>
**SLO**: Service Level Objective – set a reliability target for an SLI e.g. 99.5%<br>
**Probe/Synthetic Test**: A test that probes the system as if it was a real user. <br>
**MI**: Management Information<br>
**SME**: Subject Matter Expert<br>

## Policy Guidelines

* Elastic APM is the standard method to add metrics/observability to application services. This specifically covers:
  * [Distributed tracing](https://www.elastic.co/guide/en/observability/current/apm-distributed-tracing.html#apm-how-distributed-tracing)
  * [Browser level journey monitoring (probes/synthetics)](https://www.elastic.co/guide/en/observability/current/monitor-uptime-synthetics.html)
  * [Browser interactions (experience monitoring)](https://www.elastic.co/guide/en/observability/current/user-experience.html)
  * [SLI's/SLO's](https://www.elastic.co/guide/en/observability/current/slo.html)  
* Solarwinds is the standard for 'endpoint/host' monitoring and extended support callouts
* Specific service based monitoring can also be used if relevant i.e. Azure insights for specific cloud based services like azure event hubs


## APM Integration


### API Keys/Secrets

TBC: API keys are currently issued on request via Mark Norman. A self service facility is under investigation/development by DDC
API keys are secrets and need to be treated 

