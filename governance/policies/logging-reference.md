# Logging Definitions and Retention

This reference supports the [Logging Policy](logging.md) with the field definitions, log-level meanings, and retention periods specified by the source policy.

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
