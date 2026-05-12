# Secure by Design Delivery Policy

## Objective

This policy defines the minimum Secure by Design controls that software engineering teams must apply from inception to live operation.

It complements the existing secure development, source control, pipeline, logging, and cloud policies by defining lifecycle checkpoints, ownership, and evidence expectations.

## Scope

This policy applies to all engineering teams delivering or materially changing software, services, infrastructure, integrations, or platforms managed by UKHO engineering teams.

## Policy

### 1. Security must start at inception

- Every new service, major change, or materially changed feature must identify:
  - service owner
  - risk owner
  - data classification
  - critical user and operational flows
  - applicable legal, regulatory, contractual, and security requirements
- Security requirements must be documented and tracked alongside delivery work.

### 2. Design must include security review

Before implementation begins, teams must maintain proportionate design evidence that includes:

- system context and trust boundaries
- external dependencies and third-party services
- authentication and authorisation approach
- data flows, including storage and transfer paths
- threat model and mitigation decisions
- identified residual risks and named owners

High-risk or internet-facing services must complete a formal security review before release.

### 3. Implementation must use approved engineering controls

Teams must implement changes through approved source control, review, and pipeline processes.

At minimum, engineering delivery must include:

- peer review with separation of duties
- automated build and test execution
- security scanning appropriate to the technology stack
- secrets kept outside source code
- traceable change records from requirement to deployment

### 4. Verification must occur before release

Before a production release, teams must confirm:

- security requirements were addressed or formally risk accepted
- threat model is current for the released design
- identified high and critical issues are remediated or formally accepted
- rollback or recovery approach is defined
- monitoring, alerting, and runbooks are ready for live use

### 5. Release must follow safe deployment practices

All production changes must use a controlled deployment method.

Teams must:

- prefer small and reversible changes
- use automated deployments wherever practical
- use progressive exposure where supported by the platform
- monitor health signals during rollout
- stop rollout and recover when health checks fail

Emergency releases may use accelerated approvals, but they must still be traceable, justified, and retrospectively reviewed.

### 6. Live services must remain secure after release

Teams must maintain:

- ownership for operational response
- current runbooks and support contacts
- backlog tracking for security debt and lessons learned
- periodic review of access, dependencies, telemetry, and resilience controls

## Minimum evidence

Teams must retain evidence proportionate to service risk, including:

- security requirements
- architecture and threat model records
- scan and test results
- risk acceptance records
- deployment and approval records
- links to runbooks, dashboards, and support documentation

## Roles and responsibilities

- **Engineering teams** own implementation and evidence.
- **Technical leads** ensure the required controls are applied before release.
- **Risk owners** accept justified residual risk.
- **Security champions and security reviewers** support threat modelling, control selection, and escalation.

## References

- Existing policies:
  - `software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md`
  - `software-engineering-policies/Pipelines/Baseline_Policy.md`
  - `software-engineering-policies/SystemDocumentation/SystemDocumentationPolicy.md`
- Microsoft Learn:
  - Microsoft Security Development Lifecycle
  - Azure Well-Architected guidance on safe deployment practices
