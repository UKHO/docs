# Golden Path: Release Through a Pipeline

Use this when defining or evolving a build and release pipeline for a UKHO
digital product.

## Outcome

You operate a pipeline that is automated, repeatable, secure, and controlled.

## Steps

1. Store the pipeline as code.
   Use YAML compatible with Azure Pipelines or GitHub workflows.
2. Model the minimum environment path.
   Plan for at least development or engineering, formal test, and live.
3. Keep environments aligned.
   Treat the three-environment model as the minimum expected baseline for current
   and future products unless a justified exception exists.
4. Use approved secret handling.
   Store non-secret values in a standard variable library and back secrets with
   Azure Key Vault or the equivalent approved secret store.
5. Automate quality gates in build.
   Include dependency checks, SAST verification, container scanning where
   relevant, and unit tests.
6. Automate functional verification in non-live environments.
   Run functional tests in development environments and broader integration or
   end-to-end coverage in formal test environments.
7. Protect the release path to production.
   Production deployments should only come from `main`, and `main` must be
   protected by pull request review and required checks.
8. Set approval controls deliberately.
   Prefer approvals on service connections and variable libraries instead of
   relying only on environment approvals in YAML.
9. Design for idempotency and loose coupling.
   The pipeline should be repeatable and each service should be deployable in
   isolation.
10. Threat model the pipeline.
    Treat the pipeline itself as an attack surface and review threats as the
    design evolves.

## Exit Criteria

- Pipeline YAML is in source control.
- The minimum environment flow exists.
- Secrets are not stored directly in the pipeline.
- Build and release checks are automated.
- Production deploys only from `main`.
- Threat modelling has been considered for the pipeline design.

## Policy Basis

- [Baseline Pipeline Policy](../software-engineering-policies/Pipelines/Baseline_Policy.md)
- [Source Control Policy](../software-engineering-policies/SourceControl/SourceControlPolicy.md)
- [Branch Protection Policy](../software-engineering-policies/SourceControl/GitBranchProtectionPolicy.md)
- [Secure Development Policy](../software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md)
- [Test Strategy](../quality-assurance/test-strategy.md)

## Anti-Patterns

- Manual release steps that could be automated
- Secret values embedded in YAML
- Deploying to production from feature branches
- Pipelines that depend on another product pipeline to succeed
