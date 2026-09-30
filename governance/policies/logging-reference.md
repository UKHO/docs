# Logging Definitions and Retention

This reference supports the [Logging Policy](logging.md) with field definitions, log-level meanings, Elastic Cloud index naming, ingestion patterns, and retention details.

## Log fields

| Field | Meaning or allowed value |
| --- | --- |
| `projectName` | The overarching project that the service belongs to. |
| `serviceName` | The name of an individual service. |
| `environment` | `Development`, `Test`, `PreProduction`, or `Production`. |
| `level` | `Information`, `Warning`, `Error`, or `Fatal`. |
| `message` | The log message from the application. |
| `traceId` | An OpenTelemetry-format trace ID, if available; sometimes called a correlation ID. |

## Log levels

| Level | Meaning |
| --- | --- |
| Information | Regular messages that can be aggregated into a metric. |
| Warning | Expected problems that the service can recover from. |
| Error | Unexpected problems requiring investigation that should trigger an alert. |
| Fatal | Situations where the service is broken and requires immediate human intervention. |

## Retention

Log retention is managed by the Observability team:

| Environment | Retention |
| --- | --- |
| Non-live | 7 days |
| Live | 90 days |

Logs are not recoverable after the retention period.

## Elastic Cloud index naming

Logs should be indexed using the convention `fullServiceName.environment.category`. The Observability team automation discovers new Event Hubs, creates the required indexes, and configures index lifecycle management.

| Log category | Example index |
| --- | --- |
| Diagnostic | `salesCatalogueService.dev1.diagnostic` |
| Audit/metric | `salesCatalogueService.dev1.audit` |
| Request/response | `salesCatalogueService.dev1.http` |

## Elastic Cloud tiers

| Time in retention | Tier or action |
| --- | --- |
| Ingestion | Hot tier for indexing and search performance |
| After 2 days | Cold tier for data likely to be searched but infrequently updated |
| After 7 days, non-live | Deleted and cannot be recovered |
| After 90 days, live | Deleted and cannot be recovered |

## Ingestion patterns

### Azure-hosted services

Services held in Azure send logs to an Azure Event Hub. A managed Elastic Agent policy in Elastic Cloud pulls from all Event Hubs. A dedicated storage account container tracks log processing. An automated process discovers new Event Hubs, adds them to the Elastic Agent policy, and configures the necessary indexes and index lifecycle management.

### On-premise services

On-premise services send logs to an Azure Event Hub. The [UKHO.Logging.Serilog package](https://github.com/UKHO/UKHO.Logging.Serilog) provides support for logging to Event Hubs.

### Cloud-native resource logs

Teams may use cloud resource-specific logging, such as native activity or diagnostic logs, where beneficial. These logs are not usually ingested into Elastic; teams should monitor the costs associated with using them.

### Legacy patterns

The UKHO.EventHubLogging provider has been superseded by UKHO.Logging.Serilog. LogShipper ingestion from on-premise services to on-premise Elasticsearch is deprecated. For the supported migration checks, see the [Elastic Cloud migration how-to](logging-how-to.md).
