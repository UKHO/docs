# Logging Policy

This policy defines the logging requirements for services developed and supported by software engineering teams at UKHO. UKHO uses Elastic Cloud for log storage, aggregation, and analysis. For detail about using Elastic, see [guidance for logging to Elastic Cloud](../../software-engineering-policies/Logging/GuidanceForLoggingToElasticCloud.md).

## Requirements

- Logs must contain `projectName`, `serviceName`, `environment`, `level`, and `message`. Include an OpenTelemetry-format `traceId` if available. Definitions and permitted values are in the [logging reference](logging-reference.md).
- Services should produce diagnostic, audit/metric, and request/response logs. Expected minimum Production levels are Warning or Error for diagnostic logs, Information for audit/metric logs (which may differ by log type), and Information for request/response logs.
- Teams should consider the diagnostic or audit value of each log, include information that distinguishes one request from others, and be selective about logged properties. Health-check logging is not essential and can cause log saturation; prefer health-check endpoints that can be polled.
- Consider GDPR and avoid logging customer information. Avoid logging binary data or large files; log references to objects stored in appropriate storage instead. Use the same language and format across logs.
- On-premise services need known mitigations for failures when attempting to ingest logs, such as logging to EventViewer or sending an email notification to the supporting team.
- When implementing logging, consider secure design practices: use structured logging instead of string concatenation to avoid log injection vulnerabilities, and ensure sensitive information (such as passwords, secret keys, and session IDs) and personal information (such as customer names, addresses, and email addresses) are not stored in logs.
- Teams should use [UKHO.Logging.Serilog](https://github.com/UKHO/UKHO.Logging.Serilog) to implement logging. Teams should prefer it over the legacy UKHO.EventHubLogging provider; existing projects using the legacy provider should plan to migrate.

## Testing and assurance

- Teams should use their Definitions of Ready and Done to drive logging practices. Definition of Ready should include a common dictionary for log messages so values are comparable across services in a project, and consideration of the different log types and how to develop towards them.
- Definition of Done should include ensuring log levels are correct for each environment.
- Test Approach and TSR documents must demonstrate observability for the service and prove it is working as expected.
- Support/CI teams will ensure good logging practice has been followed during support team handovers, and this should be demonstrated.
- Teams should ensure logs have ingested successfully and are discoverable, using an automated test or manual check.
- Unit tests should assert that logs use the expected level.
- Load tests should use production-level logging so the capacity generated from production-targeted logs is understood. The load-testing environment should be as live-like as possible.

## Related documents

- [Logging definitions and retention](logging-reference.md)
- [Understanding logging](logging-explanation.md)
- [Observability Policy](observability.md)
