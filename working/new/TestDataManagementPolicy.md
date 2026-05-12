# Test Data Management Policy

## Objective

This policy defines minimum controls for creating, using, storing, sharing, and disposing of test data used by engineering teams.

## Scope

This policy applies to all development, test, pre-production, training, and support environments managed by engineering teams.

## Policy

### 1. Production data must not be used by default

- Synthetic or purpose-built test data must be used wherever practical.
- Production data must not be copied into non-production environments unless there is an approved and documented need.

### 2. Sensitive data must be reduced and protected

- Test data must be minimised to only what is needed.
- Personal, confidential, or commercially sensitive data used outside production must be masked, anonymised, pseudonymised, or otherwise de-identified unless an approved exception exists.
- Teams must assess re-identification risk when designing masking or anonymisation approaches.

### 3. Access to test data must be limited

- Access to non-production data stores must be role-based and least privilege.
- Production-like datasets must have named owners and approved consumers.
- Test data must not be copied into unmanaged local files, personal devices, or unapproved tools.

### 4. Test data must be controlled through its lifecycle

- Teams must document the source, purpose, sensitivity, owner, retention period, and disposal method for important test datasets.
- Temporary datasets must have an expiry or clean-up process.
- Shared test datasets must be versioned or otherwise controlled to preserve integrity and repeatability.

### 5. Movement and sharing of test data must be governed

- Test data exports must be approved where they contain sensitive or production-derived information.
- External sharing requires explicit approval and appropriate contractual or security controls.
- Data used for troubleshooting must follow the same masking and handling rules as planned test data.

## Minimum evidence

Teams must retain:

- approvals for production-derived test data
- masking or anonymisation approach records
- dataset owners and retention decisions
- deletion or clean-up evidence for temporary datasets where required

## References

- Existing policies:
  - `software-engineering-policies/CloudDevelopment/DataUse.md`
  - `software-engineering-policies/UnitTesting/UnitTestingPolicy.md`
- Microsoft Learn:
  - Azure guidance on data encryption and data lifecycle management
  - Microsoft guidance and training material on anonymisation and privacy-preserving data use
