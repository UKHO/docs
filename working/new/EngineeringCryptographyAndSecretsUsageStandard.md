# Engineering Cryptography and Secrets Usage Standard

## Objective

This standard defines minimum requirements for using cryptography, keys, certificates, and secrets in engineering-managed systems.

## Policy

### 1. Prefer platform-native controls

- Teams must use platform-provided encryption and approved cryptographic libraries.
- Custom cryptographic implementations must not be introduced without specialist review.

### 2. Protect data in transit and at rest

- Sensitive data must use modern transport security.
- Stored data must use native encryption at rest and customer-managed controls where required by policy or risk.

### 3. Secrets must be minimised and controlled

- Managed identities or equivalent platform identities must be preferred over stored credentials.
- Secrets must not be stored in source control, pipeline definitions, or unmanaged configuration files.
- Secrets, keys, and certificates must be stored in approved secret or key management systems.

### 4. Rotation and revocation are required

- Secrets and certificates must have defined renewal or rotation processes.
- Suspected compromise must trigger immediate containment and rotation activities.
- End-of-life secrets must be removed when no longer needed.

### 5. Access to secrets and keys must be least privilege

- Access must be role-based, attributable, and monitored.
- Separate stores or scopes should be used to reduce blast radius across applications, environments, and tenants where appropriate.

## References

- Existing policies:
  - `software-engineering-policies/CloudDevelopment/General.md`
  - `software-engineering-policies/CloudDevelopment/DataUse.md`
- Microsoft Learn:
  - Azure Well-Architected guidance on data encryption
  - Azure Key Vault security and secret management guidance
