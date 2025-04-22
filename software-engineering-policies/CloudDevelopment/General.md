# Requirements and Recommendations for

[Back to main Readme](README.md)

## Auditing

## Testing - limit scope to infra testing ?? hand off to test community ?? - RS

## Virus Scanning

## Code Analysis

## Dependency Checking for Cloud Applications

## Infrastructure as Code - Terraform, etc

Terraform is UKHO's primary tool of choise for IaC and should be used for in all cases. Terraform provided multi-cloud provisioning and so is capable of deploying to any cloud provider.

### Setting up a new project

The Terraform deployment template found here: https://github.com/UKHO/Terraform-Deployment-Template should be used to ensure consistency when starting up any new project. Contact the DDC team if you have any questions.

### Networking

The DDC team are responsible for the creating and maintaining the networking spoke Terraform for each project. This is managed in a separate GitHub repository to the project terraform and can be found here: https://github.com/UKHO/Azure-Spokes

### Modules

The DDC team manages a collection of centralised Terraform modules found here: https://github.com/orgs/UKHO/teams/tfmodules/repositories
These should be used whenever possible.

### IaC Scanning (Trivy)

Trivy is UKHO's Chosen IaC Scanning tool. All Infrastructure pipelines should include a Trivy Scan stage before deployment that fails the build if misconfigurations or vulnerabilities are detected.
A Trivy Stage is included in the previously mentioned Terraform deployment template: https://github.com/UKHO/Terraform-Deployment-Template/blob/5ca2e1c18618dad0df84ef8c08aea87a64c3b94e/azure-pipelines.yml#L37

## Secrets Management

### Centralized Secrets Management

Attempt to authenticate with secret-less (managed identities) where possible. All secrets, credentials, and sensitive data used by applications must be stored in Azure Key Vault.

### Access Control

Access to Key Vault must be restricted using Azure RBAC, with access granted based on the principle of least privilege.

### Network Security

Enable Private Endpoints or Service Endpoints for Key Vault to restrict access to trusted networks.

### Secret Rotation and Expiration

Secrets must be rotated on a regular basis, with automation for renewal and alerting in place for any approaching expiration.

### Audit and Monitoring

Key Vault access logs must be enabled and monitored for suspicious activities, with alerts configured for any unauthorized attempts.

### Secure Application Integration

Applications must access secrets via Managed Identities, and all hardcoded secrets must be removed from codebases.

### Compliance

All Key Vault configurations and data handling processes must align with applicable UK government standards and data residency requirements.

### Exceptions

Any deviation from this policy requires a documented approval from the Information Security Officer and an approved risk assessment.

[Back to main Readme](README.md)
