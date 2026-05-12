# Engineering Incident Readiness and Lessons Learned Policy

## Objective

This policy defines minimum engineering readiness, response support, and learning requirements for security and service incidents.

## Scope

This policy applies to engineering teams responsible for services, applications, platforms, integrations, and operational tooling.

## Policy

### 1. Services must be ready for incidents

Teams must maintain:

- named service ownership
- support and escalation contacts
- operational runbooks for common and high-impact scenarios
- access to dashboards, logs, traces, and health signals needed for triage

### 2. Engineering must support assessment and response

For relevant incidents, engineering teams must be able to provide:

- current service context and ownership
- telemetry needed to support triage and classification
- deployment and change context
- guidance for mitigation, rollback, containment, or recovery

### 3. Runbooks must be maintained and tested

- Critical runbooks must be reviewed regularly and updated after material service changes.
- Teams should exercise important response and recovery procedures.
- Manual actions that can affect live services must use clear approvals and checks.

### 4. Incidents must produce learning outcomes

After material incidents or near misses, teams must complete a proportionate review that records:

- what happened
- impact and affected controls
- root causes and contributing factors
- what worked and what failed in detection and response
- corrective actions, owners, and due dates

### 5. Lessons learned must change the system or process

- Agreed actions must be tracked to completion.
- Improvements may include code changes, control updates, monitoring improvements, documentation updates, or training.
- Repeated incidents must trigger deeper review of design or process weaknesses.

## Minimum evidence

- runbooks and escalation paths
- incident support records where required
- post-incident review outputs
- tracked improvement actions and closure evidence

## References

- Existing policies:
  - `software-engineering-policies/Logging/LoggingPolicy.md`
  - `software-engineering-policies/CloudDevelopment/LoggingAndMonitoring.md`
  - `software-engineering-policies/CloudDevelopment/DisasterRecoveryBusinessContinuity.md`
- Microsoft Learn:
  - Azure guidance on monitoring systems
  - Azure guidance on business continuity and disaster recovery
