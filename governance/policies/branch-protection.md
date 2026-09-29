# Branch Protection Policy

## Scope

This policy applies to the `main` branch of active repositories. Branch protection on other branches is optional under this policy.

## Pull requests and reviews

- Code changes must not be made directly to `main`; changes must be proposed through a pull request.
- Pull requests must receive at least one approval. Two approvals are preferred where team size allows.
- Code owners should be included in review and should have knowledge of or approve changes to the code they own.
- New changes must receive fresh review. Apply the platform-specific vote and approval behavior in the [settings reference](branch-protection-reference.md).

## Automated checks

- Required status checks must be enabled, and the checks that are required must be explicitly selected.
- In GitHub, the Snyk SAST status check `snyk/sast` must be required.
- In Azure DevOps, build validation should include available automated checks for the codebase or changes, such as tests and security scans. These validations should run automatically when a change is made and expire when `main` is updated.
- In GitHub, branches should be up to date with the base branch before merging.

## Conversations

Pull request conversations must be resolved before merging.

## Platform-specific controls

### Azure DevOps

- The most recent pusher should not be allowed to approve their own changes.
- When new changes are pushed, reset reviewer votes, but do not reset votes to reject or wait.
- Checking for linked work items is optional.
- Squash merge is preferred to maintain a linear history, but the choice of merge type is a team decision.

### GitHub

- Bypassing the branch protection settings should not be allowed. Unique cases must be handled individually.
- For `main`, push access should be restricted to service owners and other teams maintaining the service.

## Related documents

- [Why branch protection matters](branch-protection-explanation.md)
- [Branch protection settings reference](branch-protection-reference.md)
- [Require the Snyk SAST status check on GitHub](branch-protection-how-to.md)
