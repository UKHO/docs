# Backup and Restore Assurance Policy

## Objective

This policy defines minimum backup, restore, and assurance requirements for engineering-managed systems and data.

## Scope

This policy applies to data stores, configuration stores, secrets, platform state, and other engineering-managed assets requiring recovery.

## Policy

### 1. Recovery requirements must be defined

- Teams must define recovery time objectives and recovery point objectives for important services and data.
- Backup strategy must align with service criticality, business impact, and data classification.

### 2. Backup coverage must be explicit

- Teams must identify which assets are backed up, replicated, reconstructable from code, or intentionally not recoverable.
- Gaps in recoverability must be recorded and approved.

### 3. Backups must be protected

- Backups must be secured at rest and in transit.
- Access to backups and recovery tooling must be least privilege.
- Backup copies used for disaster recovery must be protected from accidental or malicious deletion where supported.

### 4. Restore procedures must be documented and tested

- Teams must maintain restore procedures for important systems.
- Restore tests must be performed at a frequency proportionate to service criticality and change rate.
- Restore tests must verify both technical recovery and operational usability.

### 5. Backup and restore evidence must be retained

- Teams must retain evidence of backup configuration, restore tests, and recovery outcomes.
- Failures identified in restore testing must be tracked to resolution.

## Minimum evidence

- backup scope and recovery objectives
- backup configuration records
- restore runbooks
- restore test evidence and improvement actions

## References

- Existing policies:
  - `software-engineering-policies/CloudDevelopment/DisasterRecoveryBusinessContinuity.md`
- Microsoft Learn:
  - Azure guidance on business continuity, disaster recovery, backups, and restore testing
