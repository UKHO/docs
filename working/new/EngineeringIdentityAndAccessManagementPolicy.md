# Engineering Identity and Access Management Policy

## Objective

This policy defines minimum identity and access management controls for engineering-managed systems, repositories, pipelines, environments, platforms, and operational tooling.

## Scope

This policy applies to human and non-human identities used by software engineering teams, including employees, contractors, guests, service principals, managed identities, and break-glass accounts.

## Policy

### 1. Least privilege is mandatory

- Access must be granted on a least-privilege basis.
- Default access must be deny unless a business need is approved.
- Broad standing administrative access must not be used where a lower privilege model is available.

### 2. Human access must be role-based and attributable

- Named user accounts must be used for all routine access.
- Shared user accounts must not be used except for formally approved emergency scenarios.
- Access must be granted through groups or roles wherever practical.
- Administrative activity must be attributable to an individual.

### 3. Privileged access must be time-bound

- Privileged roles must use just-in-time activation where supported.
- Long-lived standing privileged roles require formal risk acceptance.
- Privileged role activation must require strong authentication and justification.

### 4. Joiner, mover, leaver controls are required

- New starters must receive only approved baseline access.
- Role changes must trigger access review and removal of obsolete permissions.
- Departures must result in prompt removal or disablement of engineering access.
- Ownership of repositories, pipelines, subscriptions, package feeds, and service identities must be reassigned before access removal where necessary.

### 5. Non-human identities must be controlled

- Managed identities or equivalent platform identities must be preferred over stored credentials.
- Service principals, API keys, and other non-human credentials must have named owners.
- Non-human identities must have only the permissions required for their function.
- Secrets for non-human identities must be stored in an approved secret store and rotated on a defined schedule.

### 6. Guest and external access must be governed

- Guest or supplier access must be approved, time-bound, and sponsor-owned.
- External access must be limited to the minimum required systems and environments.
- Dormant guest accounts and unused external access must be removed.

### 7. Access reviews are mandatory

- Engineering teams must complete periodic access reviews at least quarterly for:
  - repositories
  - pipelines and deployment tools
  - cloud environments
  - package feeds and registries
  - privileged roles
  - service identities and their owners
- Reviews must confirm continued need, correct role level, and current ownership.

### 8. Authentication controls must be enforced

- Strong authentication must be used for engineering platforms.
- Privileged access must require multi-factor authentication.
- Local accounts on managed services and infrastructure must be disabled or tightly controlled where they cannot be removed.

## Minimum evidence

Teams must retain:

- access request and approval records
- privileged role design and assignments
- quarterly access review outputs
- identity ownership records for service accounts and managed identities
- exception approvals for standing privilege or shared access

## References

- Existing policies:
  - `software-engineering-policies/SourceControl/SourceControlPolicy.md`
  - `software-engineering-policies/CloudDevelopment/General.md`
  - `software-engineering-policies/CloudDevelopment/Users.md`
- Microsoft Learn:
  - Microsoft Entra ID Governance guidance on least privilege
  - Microsoft Entra guidance on access reviews and Privileged Identity Management
