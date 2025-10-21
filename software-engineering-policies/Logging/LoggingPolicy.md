# Logging Policy

This policy defines the logging requirements for services developed and
supported by software engineering teams at UKHO.

UKHO uses Elastic Cloud for log storage, aggregation, and analysis. For
more detail about the use of Elastic for logging, see [the specific guidance](GuidanceForLoggingToElasticCloud.md).

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
