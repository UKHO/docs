# (Draft) Observability Policy

This draft policy sets the monitoring standards described in the [Observability Reference Architecture](https://ukho.sharepoint.com/sites/eagwiki/Pages/Observability%20Reference%20Architecture.aspx) (internal only).

## Requirements

- Elastic APM is the standard method for adding metrics and observability to application services. This covers [distributed tracing](https://www.elastic.co/guide/en/observability/current/apm-distributed-tracing.html#apm-how-distributed-tracing), [browser-level journey monitoring (probes/synthetics)](https://www.elastic.co/guide/en/observability/current/monitor-uptime-synthetics.html), [browser interactions (experience monitoring)](https://www.elastic.co/guide/en/observability/current/user-experience.html), and [SLIs and SLOs](https://www.elastic.co/guide/en/observability/current/slo.html).
- SolarWinds is the standard for endpoint/host monitoring and extended support callouts.
- Specific service-based monitoring may also be used when relevant, such as Azure insights for specific cloud services like Azure Event Hubs.
- API keys are secrets and must be held in Key Vault.

## Related documents

- [Implement application observability](observability-how-to.md)
- [Why observability matters](observability-explanation.md)
- [Observability definitions and settings](observability-reference.md)
