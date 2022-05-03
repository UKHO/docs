# Logging Policy

This policy aims to provide guidance to software engineering teams on how the services they develop or support should be logging. Given our logging repository of choice is ElasticSearch, some of the guidance will be influenced by that service.

## Log types and levels

This section will cover the different log types that services are expected to produce, what log levels they should be at, how they should be indexed in ElasticSearch, retention periods and any other related guidance.

Services can produce logs that fall into three main categories: diagnostic, audit, and request/response. Each type will have an expected level and ElasticSearch index pattern that is named according to the following convention: **FullServiceName-environment-category**.

### Diagnostic logs - Error, warning logs

- Expected minimum log levels for Production: Warning or Error
- Should ingest into a dedicated ElasticSearch index named as e.g., SalesCatalogueService-Dev1-Diagnostic

### Audit/Metric logs

- Expected minimum log levels for Production: Information, but may differ based on the individual type of audit or metric log
- Should ingest into a dedicated ElasticSearch index named as e.g., SalesCatalogueService-Dev1-Audit

### Request/response logging

- Expected minimum log levels for Production: Information
- Should ingest into a dedicated ElasticSearch index named as e.g., SalesCatalogueService-Dev1-HTTP

### Further related guidance

- Healthcheck logging is not essential and can cause log saturation. We should prefer instead to use healthcheck endpoints that can be polled.
- Consider the value of logs – e.g., we don’t need to log that an Azure Event Hub is in existence and healthy.
- Avoid logging binary data to ElasticSearch. We should instead log a reference to the object that is stored in blob storage.
- Consideration needs to be given to what is included in logs. Teams should avoid logging many different properties in the hope that they will then have captured everything.
- On premise services need to have known mitigations for failures that may occur upon trying to ingest logs to Elastic (e.g. log to EventViewer, send an email notification to supporting team).
- UKHO.StructuredLogging.LogShipper is deprecated, so alternative patterns for ingesting logs from on premise services should be used, for example Serilog's ElasticSearch sink, or Filebeat.

***

## Retention

### Elastic Cloud

By default, services that are using the UKHO’s Elastic Cloud instance will come under the following retention policy:

- Logs will remain in the "Hot" phase for 7 days. This tier provides the best indexing and search performance.
- After 7 days, logs will move to the "Warm" tier. This tier is optimal for data that is still likely to be searched, but infrequently updated.
- After 30 days, logs will move to the "Cold" tier. This tier is used when searching data less often and where we don’t need to update it.
- After 90 days, logs will move to the "Frozen" tier for a longer term retention. This is the most cost-effective way to store data and still be able to search it.
- After 365 days, logs will be deleted.

### On premise ElasticSearch (legacy)

Currently the retention policy for logs differs by Elastic Search instance:

- Engineering – once indexes are created, they are subject to a 90 day deletion policy.
- Live – logs are retained indefinitely. Although a policy exists that will delete logs after a year, this  is only used by one service.

***

## Testing and assuring logging

This section will cover how to test the logging implemented by a service.

Teams should look to leverage their definitions of Ready and Done to drive their logging practices:

**Definition of Ready** to include:

- Agreeing a common field or value, for example a TraceId or CorrelationId, and how to test for this property across logs
- A consideration of the different log types and how to develop towards that
- What to log where

**Definition of Done** to include:

- Ensure log levels are correct for each environment

### Test Approach and TSR documents

Teams will be expected to demonstrate observability for the service and prove this is working as expected.

### Support team handovers

When receiving a service, support/CI teams will ensure that good logging practice has been adhered to, and this should be demonstrated.

### Smoke test/monitor log ingestion

Teams should ensure when creating logs in Elastic that they have ingested successfully to the correct index and are discoverable. This could be via an automated test or a manual check.

If teams are using the legacy Azure Event Hub > LogStash > on premise ElasticSearch pattern for ingesting logs, they must check LogStash for errors at every stage of the development process, using the DDC Grafana monitor set up for this purpose.

### Unit tests

Logging is a first class citizen when it comes to unit testing. At a code level, unit tests should assert that logs are logging to the level they should be.

In later environments as log levels become more restrictive, teams should test that the correct log levels are being used in accordance with the environment.

### Load testing

Load tests should be set to Production level logging, so the capacity generated from logs targeting Production is understood. The load testing environment should be as live-like as possible.

***

## Migrating services to Elastic Cloud

Existing services that are currently using the legacy Azure Event Hub > LogStash > on premise ElasticSearch pattern will need to have no errors (and ideally no warnings) being reported in LogStash before they are migrated to Elastic Cloud. Furthermore, these services should be adhering to this logging policy before migration.
