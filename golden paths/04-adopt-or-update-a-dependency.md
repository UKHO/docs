# Golden Path: Adopt or Update a Dependency

Use this when introducing a new third-party package, upgrading an existing one,
or deciding whether an open-source component is acceptable.

## Outcome

You can adopt or update a dependency with licensing, maintenance, and security
checks completed before release, with remediation and exceptions tracked in an
auditable way.

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
6. Ensure active dependency management tooling is enabled.
   Use Snyk, Dependabot, or both, and confirm dependency checks are active for
   the repository. Enable Dependabot alerts, security updates, and version
   updates where applicable.
7. Set or confirm the failure threshold.
   The team should agree what vulnerability level prevents release and must be
   able to prove the pipeline blocks release when that threshold is breached.
8. Prioritise remediation by severity and business impact.
   Assess and remediate dependency vulnerabilities in line with internal
   vulnerability management policy timescales (POL218).
9. Track remediation in the team backlog.
   Link remediation work items to pull requests so there is a clear audit trail
   from issue discovery to fix.
10. Record exceptions explicitly.
   If a vulnerability is suppressed or release proceeds with known risk, record
   the reason, reviewer context, and next review date where appropriate.
11. Escalate when timelines cannot be met.
    If remediation cannot be delivered in policy timescales, define interim
    mitigations, assign an owner, and escalate through the Security Champion
    and/or Lead Technical Security Engineer (Security).
12. Put the change through normal review.
   Third-party component changes must be reviewed by the Lead Engineer.
13. Keep dependency evidence buildable and reportable.
   It must be possible to report on included licenses at build time.

## Exit Criteria

- The package comes from an approved source.
- The license is approved or formally excepted.
- Dependency and vulnerability checks are active in the repository.
- Snyk, Dependabot, or both are configured and operating.
- The release gate for vulnerable dependencies is defined.
- Remediation is tracked in backlog items linked to pull requests.
- Exceptions include justification, owner, and review date.
- Lead Engineer review has happened for the dependency change.

## Policy Basis

- [Open Source Use Policy](../software-engineering-policies/OpenSourceUse/OpenSourceUsePolicy.md)
- [Third-Party Licensing Policy](../software-engineering-policies/ThirdPartyLicensing/ThirdPartyLicensingPolicy.md)
- [Secure Development Policy](../software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md)
- [Baseline Pipeline Policy](../software-engineering-policies/Pipelines/Baseline_Policy.md)
- [Managing Dependencies](../security/DependencyManagement/ManagingDependencies.md)
- [Managing Security Concerns](../security/ManagingSecurityConcerns/ManagingSecurityConcerns.md)

## Anti-Patterns

- Pulling packages directly from unapproved sources
- Adding packages without checking licenses
- Running with dependency tooling disabled on active repositories
- Ignoring vulnerability scan failures near release
- Deferring remediation without tracked rationale and mitigations
- Suppressing vulnerabilities without an auditable rationale
