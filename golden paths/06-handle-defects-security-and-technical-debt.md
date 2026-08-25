# Golden Path: Handle Defects, Security Concerns and Technical Debt

Use this when a problem is discovered in delivery or support and the team needs a
consistent route to record, prioritise, fix, or consciously carry the risk.

## Outcome

You create traceable records for defects, security concerns, and technical debt,
and you manage each through the correct workflow.

## Steps

1. Classify the issue correctly.
   Decide whether it is a standard defect, a security concern, technical debt,
   or a combination.
2. Log it in the team’s tracking system.
   Every team must have an effective defect management workflow, and security
   concerns should live in the same work tracking system.
3. Use the correct ticket shape.
   Security concerns should be raised as a `Risk` with category `Security`.
   Technical debt not being resolved in the current sprint should be raised as a
   `Technical debt` work item.
4. Record minimum useful detail.
   Include affected service, a clear description, reproduction details where
   possible, stakeholders, and supporting evidence.
5. Assess and prioritise quickly.
   Security concerns require an initial assessment within two working days and
   should be reviewed on the team’s normal delivery cadence.
6. Fix through the normal engineering path.
   Apply code review, automated testing, and pipeline checks to the remediation.
7. Retest after remediation.
   If tooling or testing exposed the issue, rerun the same checks to confirm it
   is resolved and nothing new has been introduced.
8. Update the record with evidence.
   Add links to pull requests, test results, pipeline runs, or decisions to
   accept risk.
9. Escalate when the risk is higher than routine delivery can absorb.
   Work with the Security Champion, IT Security Team, and risk owner where
   required.
10. Keep unresolved debt visible.
    If a defect or risk is knowingly left in place, record it as technical debt
    where the policy requires and keep it in the register.

## Exit Criteria

- The issue is logged in the correct workflow.
- Security items have an assessment and owner.
- Fixes are evidenced by normal engineering controls.
- Unresolved debt or accepted risk is explicitly recorded.

## Policy Basis

- [Defect Management Policy](../software-engineering-policies/DefectManagement/DefectManagementPolicy.md)
- [Managing Security Concerns](../security/ManagingSecurityConcerns/ManagingSecurityConcerns.md)
- [Secure Development Policy](../software-engineering-policies/SecureDevelopment/SecureDevelopmentPolicy.md)
- [Technical Debt Policy](../software-engineering-policies/TechnicalDebt/TechnicalDebtPolicy.md)
- [Code Review Policy](../software-engineering-policies/CodeReview/CodeReviewPolicy.md)
- [Unit Testing Policy](../software-engineering-policies/UnitTesting/UnitTestingPolicy.md)

## Anti-Patterns

- Fixing production issues without creating a traceable record
- Treating security concerns as ordinary bugs with no risk assessment
- Leaving accepted debt undocumented
- Closing an issue without rerunning the check that found it
