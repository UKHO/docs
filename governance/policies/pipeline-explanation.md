# Pipeline Explanation

This document explains the rationale behind the [Pipeline Policy](pipeline.md). The policy remains the authoritative source for requirements.

## Why release pipelines need structure

The source sets minimum expectations for build and deployment pipelines to provide a repeatable, controlled path to production. A pipeline written as code gives teams a consistent release process and makes the flow and checks easier to review and maintain.

## Why multiple environments matter

The policy expects at least three environment stages: development, formal testing, and production or live. This reduces the risk of releasing untested or unstable changes. The source also expects automated testing in the development and formal testing stages so that deployments do not rely on manual intervention to prepare or clean up a test run.

## Why quality control and approvals matter

The source requires that only code from the `main` branch is deployed to production and that pull requests are reviewed before merge. This helps maintain traceability, reduce accidental or malicious changes, and ensure that what reaches production has been reviewed and checked.

## Why security checks are built into the pipeline

The source treats security as a core design principle. Dependency checking, SAST, infrastructure as code scanning, and container scanning help identify risks before deployment. The policy also requires secrets to be backed by Azure Key Vault and only accessible to the service principal and maintainers who need them.

## Why approval placement matters

The source warns that approvals on a pipeline environment alone are not best practice for security. A malicious actor could modify the YAML in GitHub to remove the environment and thus remove the approval check. Approvals on service connections and variable libraries are safer because those resources are maintained outside the YAML and are essential for deployment.

## Why the policy focuses on repeatability and isolation

The working principles emphasise automation, idempotency and loose coupling. Keeping each product or service in its own pipeline helps teams run releases in isolation and avoid reliance on other delivery flows. This complements the policy's focus on controlled quality gates and secure deployment practices.

## Related document

- [Pipeline Policy](pipeline.md)
