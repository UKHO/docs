# Pipeline Policy

This policy defines the minimum release pipeline expectations for UKHO digital products. See the [pipeline explanation](pipeline-explanation.md) for context and the [pipeline how-to](pipeline-how-to.md) for implementation guidance. See the [pipeline reference](pipeline-reference.md) for the approved environment model and timeout values.

## Statement of intent

A deployment or release pipeline for a UKHO digital product must, as a minimum, meet the following guidelines.

## Tooling

UKHO pipelines should be written as code, using YAML and syntax compatible with Azure Pipelines or GitHub workflows.

## Environments

The UKHO expects a release pipeline to include the following environments:

- Build
- Development or engineering work
- Formal testing
- Production or live

The minimum expectation is three identical environments for development, formal testing, and the live environment. This is not a specific requirement for every project, but it should be considered the minimum provisioning for any digital product supported or developed by the UKHO. Legacy applications may be exempt, but current and future products should consider it a requirement.

The supported build and release flow is described in the [pipeline reference](pipeline-reference.md). The pipeline should include build validation checks, environment-level automated testing, and a production approval gate before live deployment.

## Variable libraries

Where variable values do not need to be secret, they can be placed in an Azure DevOps variable library local to the project. No values in this variable library should ever be "padlocked" or marked as secret.

Where secrets are required, they should be backed by an Azure Key Vault and linked through to the project as a separate variable library. Appropriate security measures must be taken to ensure that only the pipeline service principal and those who need to maintain the values have access to the key vault.

## Code quality and approvals

The UKHO expects each product to have the appropriate level of quality control in place for all of its products. This will depend on product requirements, but as a minimum there must be controls around what is committed to the `main` branch.

- Code deployed to production must only come from the `main` branch.
- Pull requests must be reviewed by someone other than the creator of the pull request before code is merged to `main`.
- Further release approvals or controls are optional and may be discussed between the team and the product owner or manager.
- Branch protection for `main` should be considered to avoid accidental or malicious commits to `main`. See [Branch Protection](branch-protection.md) for additional examples and detail.

## Testing

The expectation is that code should be covered in full by suites of automated tests, including unit, component, integration, UI and end-to-end tests. There should be no manual intervention needed within the pipeline to set up, run or clean up a test run. Manual testing should only be used when there is no alternative.

Legacy applications may be exempt from this statement due to existing design or implementation technical debt, but all new projects or products are expected to meet this requirement. Existing technical debt should be addressed promptly where possible to bring legacy applications in line with this statement.

## Security focus

Pipeline threat modelling should be carried out in all design, innovation and development work relating to pipelines, considering where threats may develop or emerge over time. Security is a vital aspect of how pipelines should be designed and developed.

### Must

- Implementation of the UKHO Snyk scan task is highly recommended.
- Dependency checking, static application security testing (SAST), infrastructure as code scanning and container scanning should be included in the pipeline design.
- Secret values required by deployment must be backed by an Azure Key Vault.

### Should

- Dynamic application security testing (DAST) should be considered where appropriate. Invicti is set up to perform this. If a team requires the ability to perform testing from a pipeline, it should contact the Lead Technical Software Engineer (Security) to discuss the details.

## Working principles

The release pipeline should be founded on the following principles:

- Automation: Pipelines should have as little manual input as possible throughout.
- Testing: Pipelines will contain a suite of automated tests that will fail the build if they fail.
- Security: Pipelines should be designed, innovated and developed with security at their core.
- Idempotency: The execution of a pipeline should be repeatable with an identical result each time.
- Source control: Code must be handled using a form of source control, and GitHub is the preferred provider at the UKHO.
- Loose coupling and microservices: Pipelines should not rely on each other in order to complete successfully; each product or service should have its own pipeline which can run in isolation.
- Infrastructure as code: Infrastructure should be provisioned and configured as code; secure values required for this should be provisioned through secret management.
- Branch protection: The `main` branch should be protected from accidental or malicious commits via branch protection options.

## Related documents

- [Pipeline how-to](pipeline-how-to.md)
- [Pipeline explanation](pipeline-explanation.md)
- [Pipeline reference](pipeline-reference.md)
