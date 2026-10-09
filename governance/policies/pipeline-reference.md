# Pipeline Reference

This reference supports the [Pipeline Policy](pipeline.md). The policy remains authoritative for requirements.

## Minimum environment model

The source describes the minimum release-pipeline environment model as follows:

- Development or engineering work
- Formal testing
- Production or live

A build stage precedes release and should include the required quality checks before deployment proceeds.

## Build checks

The source names these checks for the build stage:

- Dependency check
- SAST verification
- Container scanning
- Unit tests

## Release-stage checks

The source expects:

- Automated functional testing in development environments
- Automated integration or end-to-end testing in test environments
- A production approval step before live deployment

## Approval timeout guidance

When setting up checks and approvals on a pipeline environment, the source recommends the following defaults:

| Environment | Timeout |
| --- | --- |
| DEV | Less than 30 minutes |
| QA | Less than 3 hours |
| LIVE | Less than 6 hours |

To change these values, expand the control options when setting up the approval.

## Variable library guidance

The source distinguishes between non-secret and secret values:

- Non-secret values may be placed in a project-local Azure DevOps variable library.
- Variable library values must not be padlocked or marked as secret where they do not need to be secret.
- Secret values must be backed by an Azure Key Vault and linked through to the project as a separate variable library.

## Security controls and tools

The source identifies the following security approaches as expected or strongly recommended:

- [UKHO Snyk scan task](https://github.com/UKHO/ukho-azure-pipeline-scan-task) and [Snyk](https://app.eu.snyk.io/login)
- Dependency checking
- Static application security testing (SAST)
- Infrastructure as code scanning
- Container scanning
- Azure Key Vault-backed secret storage
- Dynamic application security testing (DAST) where appropriate, using Invicti

The source also describes these scanning points in the delivery flow:

- Snyk provides static analysis and software composition analysis when a pull request is raised, and scans are also run regularly.
- Container images are scanned after they are built and before they are pushed to a container registry.
- Infrastructure as code is scanned before cloud assets are deployed. Where possible, use Terraform modules that have already been security scanned.

## Related document

- [Pipeline Policy](pipeline.md)
