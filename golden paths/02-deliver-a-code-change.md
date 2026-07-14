# Golden Path: Deliver a Code Change

Use this for routine feature, enhancement, and bug-fix delivery.

## Outcome

You move a change from idea to merge with review, traceability, tests, and
security controls intact.

## Steps

1. Start from a tracked work item.
   Every change should link back to a ticket or equivalent work item.
2. Decide whether to pair.
   Prefer paired working when it is practical, especially for implementation,
   troubleshooting, and release activities.
3. Create a short-lived branch from `main`.
   Follow the pattern `{ticket_number}/{type}-{description}`.
4. Keep commits small and clear.
   Each commit message should answer `Applying this change will...`.
5. Add or update automated tests with the code.
   New non-trivial code must be covered by unit tests, and tests must be checked
   in with the subject code.
6. Keep test coverage healthy.
   Any reduction in coverage should be justified.
7. Update documentation as part of the same change.
   If the change affects architecture, build, deployment, configuration, or
   supportability, update the relevant system documentation.
8. Open a pull request before merge.
   Use a title based on the work item, describe what changed, why it changed,
   how it was tested, and any important reviewer context.
9. Complete peer review from source control.
   All changes must be reviewed before merge, and review evidence must be kept
   in the tooling.
10. Resolve review feedback before merge.
    Do not treat the work item as done until the review is complete and any
    follow-up changes are finished.

## Exit Criteria

- The change is linked to a work item.
- The branch follows the agreed naming convention.
- Tests were added or updated with the code.
- Documentation changed where needed.
- The pull request was reviewed and approved.
- The code merged through the protected mainline path.

## Policy Basis

- [Code Review Policy](../software-engineering-policies/CodeReview/CodeReviewPolicy.md)
- [Pair Programming Policy](../software-engineering-policies/PairProgramming/PairProgrammingPolicy.md)
- [Source Control Policy](../software-engineering-policies/SourceControl/SourceControlPolicy.md)
- [Unit Testing Policy](../software-engineering-policies/UnitTesting/UnitTestingPolicy.md)
- [System Documentation Policy](../software-engineering-policies/SystemDocumentation/SystemDocumentationPolicy.md)
- [Test Strategy](../quality-assurance/test-strategy.md)

## Anti-Patterns

- Large pull requests with unrelated changes
- Review outside source control
- Merging before review completes
- Adding functional code without automated tests
