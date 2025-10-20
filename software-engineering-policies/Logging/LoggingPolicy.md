# Logging Policy

This policy defines the logging requirements for services developed and
supported by software engineering teams at UKHO.

## Contents of Logs

Logs must contain the following information:

- projectName (The overarching project that the service belongs to)
- serviceName (The name of an individual service)
- environment (One of "Development", "Test", "PreProduction", "Production")
- level ("Information", "Warning", "Error", "Fatal")
    - Information is for regular messages that can be aggregated into a metric
    - Warning is for expected problems that the service can recover from
    - Error is for for unexpected problems that require investigation that should trigger an alert
    - Fatal is for situations where the service is broken and requires immediate human intervention
- message (The log message from the application)
- traceId (OpenTelemetry format trace id, if available. Sometimes called a
  "correlation id")

## Log types and levels

Services should produce logs that fall into three main categories: diagnostic,
audit/metric, and request/response.

### Diagnostic logs

These are logs that provide information about the service's operation and are
generally useful for debugging. Projects need to balance the need to provide
useful information with the risk of logging too much information.

Expected minimum log levels for Production: Warning or Error

### Audit/Metric logs

These are logs that provide information about the service's operation and are
generally useful for auditing and metrics. Where possible these logs should be
numeric or small enums to allow for aggregation.

Expected minimum log levels for Production: Information, but may differ based
on the individual type of audit or metric log

### Request/response logging

These are logs that record requests to and responses from a service. These logs
are useful to trace a request through different services and to identify
problems with requests.

Expected minimum log levels for Production: Information

### General logging guidance

- Health check logging is not essential and can cause log saturation. Prefer
  using health check endpoints that can be polled.

- Consider the value of logs – avoid logging information that provides no
  diagnostic or audit value, and include information that makes this request
  different from other requests.

- Consider the GDPR - avoid logging customer information.

- Avoid logging binary data or large files. Log references to objects stored in
  appropriate storage instead.

- Be consistent, use the same language and format across all logs.

- Teams should be selective about what is included in logs. Avoid logging
  many different properties in the hope of capturing everything.

- On-premise services need to have known mitigations for failures that may
  occur upon trying to ingest logs (e.g., log to EventViewer, send an email
  notification to supporting team).

## Security

When implementing logging, consider the following secure design practices:

- Use structured logging instead of string concatenation to avoid log injection vulnerabilities.

- Ensure that no sensitive information gets stored in logs, for example,
  passwords, secret keys, and session IDs.

- Ensure that no personal information gets stored in logs, for example,
  customer names, addresses, and email addresses.

## Retention

Log retention is managed by the Observability team and is set to:

- **Non-live environments**: 7 days
- **Live environments**: 90 days

Logs are not recoverable after this period.

## Testing and assuring logging

Teams should leverage their definitions of Ready and Done to drive logging
practices:

**Definition of Ready** should include:

- A common dictionary for log messages ensuring that values are comparable
  across services within a project.

- A consideration of the different log types and how to develop towards that

**Definition of Done** should include:

- Ensure log levels are correct for each environment

### Implementation

Teams should use the [UKHO.Logging.Serilog](https://github.com/UKHO/UKHO.Logging.Serilog)
package to implement logging in their services. This package provides a
standardised way of logging across services and provides built-in log
enrichments.

**Note**: Teams should prefer UKHO.Logging.Serilog over the legacy
UKHO.EventHubLogging provider. Existing projects using the legacy provider
should plan to migrate.

### Testing requirements

- **Test Approach and TSR documents**: Teams must demonstrate observability for
  the service and prove this is working as expected.

- **Support team handovers**: Support/CI teams will ensure that good logging
  practice has been adhered to, and this should be demonstrated.

- **Smoke test/monitor log ingestion**: Teams should ensure logs have ingested
  successfully and are discoverable. This could be via an automated test or a
  manual check.

- **Unit tests**: Logging is a first class citizen. Unit tests should assert
  that logs are logging to the expected level.

- **Load testing**: Load tests should use Production level logging, so the
  capacity generated from logs targeting Production is understood. The load
  testing environment should be as live-like as possible.

***

# Guidance for Elastic

This section provides technical guidance for implementing the Logging Policy
using ElasticSearch and Elastic Cloud.

## Technology Choice

Elastic is the business's logging platform. There can be good reasons to select
other logging platforms, however approval from the Observability team and
Architectural Practice Forum is required in these cases.

## Elastic Index Naming Convention

Logs should be indexed in ElasticSearch according to the following convention:
**FullServiceName-environment-category**. The Observability team automation
creates indexes, so teams should not need to create them manually. Teams
with legacy indexes should be migrated to the new naming convention.

### Diagnostic logs

Should ingest into a dedicated ElasticSearch index named as e.g.,
`SalesCatalogueService-Dev1-Diagnostic`

### Audit/Metric logs

Should ingest into a dedicated ElasticSearch index named as e.g.,
`SalesCatalogueService-Dev1-Audit`

### Request/response logging

Should ingest into a dedicated ElasticSearch index named as e.g.,
`SalesCatalogueService-Dev1-HTTP`

## Retention implementation in Elastic Cloud

Data logged to Elastic Cloud follows this retention implementation:

- Logs are ingested into the "Hot" tier for best indexing and search
  performance.

- After **2 days** logs are automatically moved to the "Cold" tier, optimal for
  data that is still likely to be searched but infrequently updated.

- After **7 days**, logs in **non-live** are deleted and cannot be recovered.

- After **90 days**, logs in **live** are deleted and cannot be recovered.

## Log ingestion patterns

### Cloud services - Elastic Cloud

Services held in Azure log to an Azure Event Hub. In Elastic Cloud, a managed
Elastic Agent policy has an integration that pulls from all Event Hubs, using a
dedicated storage account container to track the processing of logs.

An automated process discovers new Event Hubs, adds them to the Elastic Agent
policy, and sets up necessary indexes and index lifecycle management.

#### Cloud native logs

Cloud resource specific logging, such as native activity or diagnostic, can be
used by teams where beneficial. These logs aren't usually ingested in Elastic,
and teams need to keep a close eye on the costs associated with using them.

### On-premise services

On-premise services should also log to an Azure Event Hub as a step towards
becoming cloud services. The
[UKHO.Logging.Serilog](https://github.com/UKHO/UKHO.Logging.Serilog) package
provides support for logging to Event Hubs.

## Legacy patterns and migration

### Legacy - LogShipper and on-premise ElasticSearch

Using LogShipper to ingest logs from on-premise services to on-premise
ElasticSearch has been deprecated and should no longer be used in new code.
Existing projects using this pattern should look to migrate to Elastic Cloud as
soon as possible.

### Legacy - UKHO.EventHubLogging provider

The UKHO.EventHubLogging provider has been superseded by UKHO.Logging.Serilog.
Teams using the legacy provider should plan their migration path.

### Migrating services to Elastic Cloud

Existing services currently using the legacy Azure Event Hub > LogStash >
on-premise ElasticSearch pattern should have no errors (and no warnings) in
LogStash before they are migrated to Elastic Cloud.

If teams are using the legacy Azure Event Hub > LogStash > on-premise
ElasticSearch pattern for ingesting logs, they must check LogStash for errors
at every stage of the development process, using the DDC Grafana monitor set up
for this purpose.

Services should adhere to the logging policy before migration.
