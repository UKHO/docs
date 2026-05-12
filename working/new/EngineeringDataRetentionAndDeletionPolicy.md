# Engineering Data Retention and Deletion Policy

## Objective

This policy defines minimum retention, archival, clean-up, and deletion requirements for engineering-managed data and artefacts.

## Scope

This policy applies to logs, build artefacts, packages, backups, test data, temporary files, diagnostic captures, infrastructure state, and engineering-owned storage locations.

## Policy

### 1. Data must have defined retention rules

- Teams must define retention periods for engineering data based on legal, operational, security, and service needs.
- Retention rules must distinguish between live operational data, evidential records, temporary working data, and disposable artefacts.

### 2. Temporary and obsolete data must be removed

- Temporary files, transient exports, debug captures, and disposable datasets must be deleted when no longer needed.
- Decommissioned environments must have a clean-up plan covering data, credentials, endpoints, and residual artefacts.

### 3. Deletion must be deliberate and safe

- Deletion of important data stores, backups, or long-lived artefacts must follow an approved process.
- Where supported, teams must use soft delete, purge protection, or staged deletion controls for high-value assets.
- Before destructive change, teams must confirm inactivity, retention obligations, and recovery options.

### 4. Sensitive data must be protected through disposal

- Sensitive engineering data must remain protected until deleted.
- Copies of sensitive data in caches, exports, and analyst workspaces must be considered in disposal activities.
- Secrets and credentials must be revoked or rotated when systems are retired or when compromise is suspected.

### 5. Automation should be used where possible

- Retention and deletion should be automated for logs, build outputs, temporary environments, and routine clean-up tasks where practical.
- Manual deletion processes must be documented when automation is not available.

## Minimum evidence

Teams must retain, where proportionate:

- retention schedules or settings
- deletion approvals for high-value assets
- decommissioning records
- evidence of automated clean-up controls or manual completion

## References

- Existing policies:
  - `software-engineering-policies/Logging/LoggingPolicy.md`
  - `software-engineering-policies/CloudDevelopment/DataUse.md`
  - `software-engineering-policies/CloudDevelopment/DisasterRecoveryBusinessContinuity.md`
- Microsoft Learn:
  - Azure Well-Architected guidance on safe decommissioning
  - Azure guidance on data encryption, backup, and lifecycle management
