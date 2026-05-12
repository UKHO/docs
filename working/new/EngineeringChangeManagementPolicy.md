# Engineering Change Management Policy

## Objective

This policy defines minimum controls for planning, approving, deploying, and reviewing engineering changes.

## Scope

This policy applies to code, infrastructure, configuration, secrets, data-impacting changes, and operational changes to live services.

## Policy

### 1. All changes must be traceable

- Changes must have a recorded purpose, owner, and implementation path.
- Production changes must be linked to a reviewed change record such as a pull request, work item, or equivalent approved record.

### 2. Changes must be reviewed and tested

- Changes must use peer review and automated validation appropriate to risk.
- High-risk changes require explicit review of rollback, operational impact, and affected dependencies.

### 3. Deployments must use controlled methods

- Automated pipelines must be used wherever practical.
- Teams must prefer small, reversible changes.
- Safe deployment practices and health checks must be used for production rollout.

### 4. Emergency changes must remain governed

- Emergency changes may use accelerated approval paths.
- Emergency changes must still be recorded, attributable, and retrospectively reviewed.
- Any skipped controls must be documented and justified.

### 5. Changes must consider operational readiness

Before live deployment, teams must consider:

- rollback or recovery approach
- runbook or support impacts
- documentation updates
- monitoring or alerting changes
- data migration and stateful rollback risks

## Minimum evidence

- change records and approvals
- review and test evidence
- rollback plans for relevant changes
- retrospective records for emergency changes

## References

- Existing policies:
  - `software-engineering-policies/CodeReview/CodeReviewPolicy.md`
  - `software-engineering-policies/SourceControl/SourceControlPolicy.md`
  - `software-engineering-policies/Pipelines/Baseline_Policy.md`
- Microsoft Learn:
  - Azure Well-Architected safe deployment practices guidance
