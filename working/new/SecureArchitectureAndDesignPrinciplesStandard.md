# Secure Architecture and Design Principles Standard

## Objective

This standard defines the secure architecture and design principles engineering teams must apply when designing systems and major changes.

## Principles

- Prefer simplicity and reduce unnecessary attack surface.
- Make trust boundaries explicit.
- Apply least privilege to users, services, and components.
- Secure defaults must be used for configuration and deployment.
- Design for observability, resilience, and recovery from the start.
- Use approved platforms and native security controls before introducing custom security mechanisms.
- Record significant security decisions and compensating controls.

## Minimum design outputs

For material services or changes, teams should maintain:

- context and container-level architecture views
- trust boundaries and data flow understanding
- authentication and authorisation model
- external dependency decisions
- threat model or equivalent risk assessment
- significant security decision records where trade-offs are made

## References

- Existing policies:
  - `software-engineering-policies/development-principles.md`
  - `software-engineering-policies/TechnologyGovernance/TechnologyGovernance.md`
  - `software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md`
- Microsoft Learn:
  - Microsoft Security Development Lifecycle
  - Azure Well-Architected security and reliability guidance
