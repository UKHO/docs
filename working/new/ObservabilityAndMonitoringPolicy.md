# Observability and Monitoring Policy

## Objective

This policy defines minimum observability, monitoring, alerting, and ownership requirements for engineering-managed services.

## Scope

This policy applies to applications, APIs, batch services, infrastructure, and platform components operated by engineering teams.

## Policy

### 1. Monitoring must be designed as part of the service

- Teams must design monitoring alongside the service, not after release.
- Telemetry must support service health, troubleshooting, audit needs, and operational decision making.

### 2. Minimum telemetry is required

Teams must collect, where applicable:

- structured logs
- health and performance metrics
- request and dependency traces
- deployment and configuration change context
- business or service indicators needed to assess user impact

### 3. Telemetry must support correlation and action

- Telemetry must include consistent service, environment, and correlation identifiers where supported.
- Logs and metrics must avoid secrets and personal data unless explicitly justified and controlled.
- Teams must use consistent schemas and naming where standards exist.

### 4. Alerts must be actionable

- Important services must have alerts for material health degradation, failures, or security-relevant conditions.
- Alerts must have named owners, severity, and response expectations.
- Teams must review and tune alerts to reduce noise and false positives.

### 5. Dashboards and views must support operations

- Teams must maintain dashboards or equivalent views for live health, diagnosis, and trend review.
- Critical services must have an identifiable service health view that supports triage and deployment monitoring.

### 6. Monitoring must evolve through learning

- Monitoring gaps identified through incidents, outages, or support issues must be corrected.
- Teams should review trends, failures, and capacity signals regularly.

## Minimum evidence

- dashboard or workbook links
- alert definitions and owners
- telemetry standards or schemas where used
- records of alert tuning or monitoring improvements where relevant

## References

- Existing policies:
  - `software-engineering-policies/Logging/LoggingPolicy.md`
  - `software-engineering-policies/Observability/observability_policy.md`
  - `software-engineering-policies/CloudDevelopment/LoggingAndMonitoring.md`
- Microsoft Learn:
  - Azure Well-Architected guidance on building a monitoring system
