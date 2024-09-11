# (DRAFT) Observability Reference Architecture
[Observability Reference Architecture](https://ukho.sharepoint.com/sites/eagwiki/Pages/Observability%20Reference%20Architecture.aspx) (internal only)

## Overview

Why Observability and Monitoring? If we don’t know how our systems are performing – how do we know they meet our needs? <br> 
Observability monitoring provide performance monitoring of our systems so that we can detect and be informed if a service or capability is performing as expected or has become degraded. <br>
This then allows us to take preventative and remedial action in a timely manner. A reliable and performant system gives our end-users confidence and the desire to continue using our systems, while improving our reputation. <br>
<br>
**“the most important feature of any system is its reliability” - Google**<br>
<br>
![Screenshot 2024-05-23 113220](https://github.com/UKHO/docs/assets/3432241/8eb37689-e48c-4fe3-999e-95c41379afa8)

## How observability differs from logging

Logging is primarily text data that covers a wide range of issues, whereas metrics are focussed on real-time numeric data or counters which summarise the performance of a service.<br>
For example in Solarwinds the counters would be things like CPU & diskspace. Observability metrics are similar but can go much deeper to show how the internals of a service are performing.<br>
Metrics provide other advantages over logging:<br>

* Use less resource (logging use signifcantly more storage/processing)
* Focussed on key performance indicators 
* Easier to interpret as logs suffer from 'finding the needle in the haystack' type problem
* Easier to alert on

This is a general guide to the most useful metrics in a service:<Br>

### The 5 Golden signals:

* a count of what is going in 
* a count of what is going out 
* a count of what has been processed
* a count of any errors/exceptions
* latency of processing in the service

These are usually further repeated if multiple business object types are processed in the same service e.g. they might be replicated for each order type.<br>
Metrics of course do not replace good logging practice but they do work well together. Specific APM event e.g. errors can be automatically linked with the underlying log detail.

## Vision – to provide:

* a standardised way of collecting software application performance metrics across the UKHO.
* the business with a simple way of understanding what state the UKHO production estate is in.
* developers and support staff with fast insight into an application state.
* product status transparency to UKHO distributors to improve reliability.
* easy ways of accessing product status internally and externally via an API and UI.
* a cloud agnostic solution, which can join differing silos of information.

## Implementation overview

Add the APM code and libraries and configuration to the Application at the root level. The APM library will then be able to provide metrics on the most of the application (APM will intercept the HTTP pipeline to automatically trace all calls passing through). 
There are specific libraries and hooks for each type of .NET application flavour: http web applications/API/Desktop/Containers etc. Follow the provider documentation for implementation and the existing implemented projects for examples – e.g.: Fleet Manager HTTP UI and B2B API. <br>
The Application will need to be configured to point to the relevant provider instance – see the Support SME for the credentials. <br>
Extra traces and meta data can be added into the code to allow finer-grained collection of metrics within the application e.g. custom or business specific metrics known as 'labels' in Elastic APM. <br>
Probes(Synthetic tests) will need to be set up. These are external tests that run as if a user was using the application – very similar to automated testing and provide the “gold standard” for quality assurance. <br>
APM and Solarwinds are connected for integration and Support processes. Terraform to be used to script the APM and Synthetics tests for deployment and supportability.<br>
Internal and external view dashboards are available for the services monitored as well as the SLI+SLO and alerts for BAU Support- see the Support SME.<br>
Alerts are created along with connectors to the Status Page and other Systems - see the Support SME.Cloud-specific metrics e.g. Azure App Insights can be used for specific cloud components and linked/reported on in the APM data if required<br>

![Screenshot 2024-05-23 111542](https://github.com/UKHO/docs/assets/3432241/be02b69c-54ec-4657-b879-a18a54703334)

### Outage Budget “Burn rate” 

SLO's (Service Level Objectives) use SLIs (Service Level Indicators) to track the performance of a service at a high level. SLOs provide a quick but deep health check about the performance of a service.
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

TBC: API keys are currently issued on request via Support SME. A self service facility is under investigation/development by DDC
API keys are secrets and need to be help in key vault

### Environment Names

For all live environments logging the environment name should be: **TBC**

## Documentation for the APM library: 

[APM .NET Agent Reference [1.x] | Elastic] (https://www.elastic.co/guide/en/apm/agent/dotnet/current/index.html)

Settings: 

These are the settings that will need to be added either as resource settings or in the pipeline 
(depending on how your pipeline works and .NET flavour - the doc linked about has more examples): 

```
<add key="ElasticApm:ServiceName" value="FM External API" /> 
<add key="ElasticApm:ServerUrl" value="<ask-the-support-sme>" /> 
<add key="ElasticApm:ApiKey" value="" /> 
<add key="ElasticApm:Environment" value="local" /> 
Or 
ELASTIC_APM_ENVIRONMENT: local 
ELASTIC_APM_SECRET_TOKEN: 
ELASTIC_APM_SERVER_URL: <ask-the-support-sme>
ELASTIC_APM_SERVICE_NAME : Test Local Service 
Or 
 "ElasticAPM": { 
 "ApiKey": "", 
 "ServerURL": "", 
 "ServiceName": "Tech Radar", 
 "Environment": "Local Dev" 
 } 
} 
Typical integration for a .net core app: 
using Elastic.Apm.AspNetCore; 
. 
. 
var app = builder.Build(); 
app.UseElasticApm(app.Configuration);
```


## Runtime User Monitoring 

https://www.elastic.co/guide/en/apm/agent/rum-js/5.x/intro.html

```
<script src="https://<your-cdn-host>.com/path/to/elastic-apmrum.umd.min-<version>.js" crossorigin></script>
<script>
 elasticApm.init({ 
 serviceName: '<instrumented-app>', 
 serverUrl: '<apm-server-url>', 
 }) 
</script>
```

### APM RUM setup 

Angular integration | APM Real User Monitoring JavaScript Agent Reference [5.x] | Elastic<br>

(https://www.elastic.co/guide/en/apm/agent/rum-js/current/angular-integration.html)

Install the Agent | APM Real User Monitoring JavaScript Agent Reference [5.x] | Elastic <br>

(https://www.elastic.co/guide/en/apm/agent/rum-js/5.x/install-the-agent.html)

Please download the latest version of RUM agent from GitHub or UNPKG and host the file in your Server/CDN before deploying to production. <br>
Remember to use a proper versioning scheme and set a far future max-age and immutable in the cache-control header, as the file never changes

### Example of adding APM and RUM to the TechRadar: 

Add Elastic APM Instrumentationto the Tech-Radar by rockydevnet · Pull Request #682 · UKHO/techradar (github.com)

(https://github.com/UKHO/tech-radar/pull/682/files)

Elastic integration examples: 

apm-agent-dotnet/sample at main · elastic/apm-agent-dotnet (github.com)

(https://github.com/elastic/apm-agent-dotnet/tree/main/sample)

## Calypso team experience adding APM

[APM Report](https://ukho.sharepoint.com/:w:/s/TeamCalypso/ES2EMMsWEodDvs1TGAVTD6YBW3vOS85EMKolsZtTsBe-gA?e=YOTfLO&CID=477063B6-7517-4502-AED3-F22C0DD61F13&wdLOR=c7F21236B-A776-441B-A98A-5182517A6561)

