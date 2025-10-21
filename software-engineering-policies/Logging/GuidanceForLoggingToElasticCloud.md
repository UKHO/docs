# Guidance for Logging to Elastic Cloud

To be read in conjunction with the [Logging Policy](LoggingPolicy.md).

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
