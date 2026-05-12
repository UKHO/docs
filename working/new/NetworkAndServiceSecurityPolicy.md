# Network and Service Security Policy

## Objective

This policy defines minimum network and service connectivity security requirements for engineering-managed systems.

## Scope

This policy applies to cloud-hosted services, hybrid integrations, platform networking, service-to-service communication, and internet ingress or egress managed by engineering teams.

## Policy

### 1. Network design must assume breach

- Teams must minimise blast radius through segmentation and explicit trust boundaries.
- Connectivity between environments, services, and management planes must be intentionally designed and documented.

### 2. Access paths must be restricted

- Internet-facing entry points must use approved ingress controls.
- Administrative and management access must be limited to approved paths and strong authentication.
- Unused inbound and outbound connectivity must be blocked.

### 3. Segregation is required

- Development, test, pre-production, and production environments must be segregated.
- Sensitive workloads and shared platform services must use appropriate network or service isolation.
- Service-to-service access must be scoped to the minimum required protocols, ports, and destinations.

### 4. Private connectivity should be preferred

- Private endpoints, private networking, or equivalent controls should be used for sensitive service communication where supported.
- Direct public exposure of data services and internal-only components should be avoided unless explicitly justified.

### 5. Network controls must be observable and reviewable

- Important network paths, firewalls, and segmentation controls must be documented.
- Relevant network logs and diagnostics must be enabled where supported.
- Material network rule changes must follow controlled change processes.

## Minimum evidence

- network or connectivity diagrams for important services
- records of ingress and segmentation design decisions
- named owners for network controls where applicable
- change records for material network changes

## References

- Existing policies:
  - `software-engineering-policies/CloudDevelopment/General.md`
  - `software-engineering-policies/CloudDevelopment/Deployment.md`
  - `software-engineering-policies/Pipelines/Baseline_Policy.md`
- Microsoft Learn:
  - Zero Trust guidance for Azure network segmentation
  - Azure Well-Architected service guidance for ingress and network security
