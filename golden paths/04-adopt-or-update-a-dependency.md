# Golden Path: Adopt or Update a Dependency

Use this when introducing a new third-party package, upgrading an existing one,
or deciding whether an open-source component is acceptable.

## Outcome

You can adopt or update a dependency with licensing, maintenance, and security
checks completed before release.

## Steps

1. Confirm the dependency is necessary.
   Reuse is encouraged, but the package should solve a real problem better than
   building and maintaining custom code.
2. Validate the package source.
   Use an approved package management tool or repository.
3. Check the license.
   The license must be on the approved list or formally escalated for review.
4. Review open-source suitability.
   Consider governance, maintenance activity, contribution model, maturity, and
   whether the package is effectively open-core.
5. Assess security exposure.
   Cross-reference known vulnerabilities and ensure the designated dependency
   scanning tool runs before production release.
6. Set or confirm the failure threshold.
   The team should agree what vulnerability level prevents release and must be
   able to prove the pipeline blocks release when that threshold is breached.
7. Record exceptions explicitly.
   If a vulnerability is suppressed or release proceeds with known risk, record
   the reason, reviewer context, and next review date where appropriate.
8. Put the change through normal review.
   Third-party component changes must be reviewed by the Lead Engineer.
9. Keep dependency evidence buildable and reportable.
   It must be possible to report on included licenses at build time.

## Exit Criteria

- The package comes from an approved source.
- The license is approved or formally excepted.
- Security scanning is active in the pipeline.
- The release gate for vulnerable dependencies is defined.
- Lead Engineer review has happened for the dependency change.

## Policy Basis

- [Open Source Use Policy](../software-engineering-policies/OpenSourceUse/OpenSourceUsePolicy.md)
- [Third-Party Licensing Policy](../software-engineering-policies/ThirdPartyLicensing/ThirdPartyLicensingPolicy.md)
- [Secure Development Policy](../software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md)
- [Baseline Pipeline Policy](../software-engineering-policies/Pipelines/Baseline_Policy.md)

## Anti-Patterns

- Pulling packages directly from unapproved sources
- Adding packages without checking licenses
- Ignoring vulnerability scan failures near release
- Suppressing vulnerabilities without an auditable rationale
