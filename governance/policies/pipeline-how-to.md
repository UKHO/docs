# Pipeline: How-to

This how-to supports the [Pipeline Policy](pipeline.md). The policy remains the authoritative source for requirements.

## Set up an appropriate release pipeline

1. Create a pipeline as code in YAML using syntax compatible with Azure Pipelines or GitHub workflows.
2. Define the build stage and ensure it performs the required checks identified in the source: dependency checking, SAST verification, container scanning and unit tests.
3. Define the release flow with the minimum environment model described in the source: development or engineering work, formal testing, and production or live.
4. Add automated functional testing in the development environment and automated integration or end-to-end testing in the formal testing environment.
5. Require a final approval before the production or live deployment proceeds.

## Configure approvals and checks

When setting up checks and approvals for a pipeline environment, follow the source's default timeout guidance:

| Environment | Timeout |
| --- | --- |
| DEV | Less than 30 minutes |
| QA | Less than 3 hours |
| LIVE | Less than 6 hours |

To change these values, expand the control options when configuring approval and checks.

## Prefer approvals on supporting resources

The source recommends that approvals are not placed only on pipeline environments. A malicious actor could alter the pipeline YAML in GitHub to remove the environment and force deployment. A better practice is to place approvals on the service connections and variable libraries used by the pipeline because these are maintained outside the YAML.

## Manage variables and secrets

1. Put non-secret values in an Azure DevOps variable library local to the project.
2. Do not mark any variable library values as secret if they do not need to be secret.
3. Put secret values in an Azure Key Vault and link that Key Vault to the project as a separate variable library.
4. Ensure that only the pipeline service principal and the people who need to maintain the values have access to the key vault.

## Protect the main branch

Use branch protection for `main` so that production deployments can only come from the protected branch and pull requests are reviewed before merge. The source also requires coding quality controls around what is committed to `main`.

## Review security findings

Use the [UKHO Snyk scan task](https://github.com/UKHO/ukho-azure-pipeline-scan-task) to add scanning to the pipeline. Review findings against the product's risk appetite and decide what remediation is needed before release. Scanning tools may report false positives because they do not have the full context of an implementation. For advice on mitigation or suppressing a finding, contact the [Cyber Security team](mailto:ukho-itso@ukho.gov.uk), a lead developer, or a security champion.

## Provision infrastructure securely

Scan infrastructure as code before deployment. Where possible, use Terraform modules that have already been security scanned.

## Expected outcome

When this guidance is applied, the release pipeline will have automation, test coverage, security checks, environment gating, and a controlled path to production that aligns with the policy.

## Related document

- [Pipeline Policy](pipeline.md)
