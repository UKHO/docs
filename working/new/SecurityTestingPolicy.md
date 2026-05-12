# Security Testing Policy

## Objective

This policy defines the minimum security testing activities required to provide assurance that engineering changes have been assessed for security defects before release.

## Scope

This policy applies to applications, APIs, services, infrastructure as code, containers, and deployment pipelines delivered by engineering teams.

## Policy

### 1. Security testing must be risk-based and shift-left

- Security testing must begin during design and continue through build, release, and operation.
- The depth of testing must be proportionate to service criticality, exposure, data sensitivity, and change risk.

### 2. Minimum automated testing is required

At minimum, relevant services must use:

- static application security testing
- dependency and package vulnerability scanning
- secret and credential scanning
- infrastructure as code scanning where IaC is used
- container image scanning where containers are used
- pipeline or configuration validation where supported

### 3. Functional security verification is required

Teams must verify security-relevant behaviour through automated or repeatable tests where applicable, including:

- authentication and authorisation rules
- input validation and error handling
- session or token handling
- audit and security logging behaviour
- secure default configuration

### 4. Additional testing is required for higher-risk services

Internet-facing, business-critical, or sensitive-data services must assess the need for:

- dynamic testing
- manual adversarial testing
- penetration testing
- resilience and recovery testing for security scenarios

Where such testing is not performed, teams must document the rationale.

### 5. Release gates must be enforced

- High and critical security issues must be fixed before production release unless formally risk accepted.
- Medium issues must be triaged with an agreed remediation plan.
- Suppressions and false positives must be justified and reviewable.

### 6. Production issues must inform future testing

- Security incidents, escaped defects, and near misses must be fed back into test design.
- Teams must add or improve tests where a gap is identified.

## Minimum evidence

Teams must retain:

- scan outputs or dashboard evidence
- records of reviewed findings and dispositions
- evidence of manual or dynamic testing where required
- release decisions for accepted residual risks
- records of test improvements from incidents or assurance findings

## References

- Existing policies:
  - `software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md`
  - `software-engineering-policies/UnitTesting/UnitTestingPolicy.md`
  - `software-engineering-policies/Pipelines/Baseline_Policy.md`
- Microsoft Learn:
  - Microsoft Security Development Lifecycle
  - Azure Well-Architected guidance on testing and safe deployment practices
