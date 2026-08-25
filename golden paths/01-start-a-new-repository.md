# Golden Path: Start a New Repository

Use this when a team is creating a new service or standing up a new codebase.

## Outcome

You finish with a repository that is ready for collaborative delivery, review,
automation, and secure change control.

## Steps

1. Create the repository in an approved source control platform.
   Use GitHub under the official UKHO organisation where possible. Set the
   default branch to `main`.
2. Add the baseline repository files.
   Include `README.md`, `CONTRIBUTING.md`, `LICENSE`, `SECURITY.md`, and
   `CODEOWNERS`.
3. Set repository access through teams, not individuals.
   Avoid creating a single point of failure in repository ownership and access.
4. Enable branch protection on `main`.
   Require pull requests, approvals, conversation resolution, required status
   checks, and up-to-date branches before merge.
5. Decide the merge strategy.
   Prefer `Squash and merge` so the main branch stays clean and pull requests
   remain the primary review record.
6. Enable code security automation.
   Turn on dependency alerts and automated dependency updates where supported.
7. Add build and release definitions as code.
   Store pipeline YAML in source control from the start.
8. Define working conventions.
   Use GitHub Flow, branch names of the form
   `{ticket_number}/{type}-{description}`, and concise commit messages that
   answer `Applying this change will...`.
9. Confirm the team definition of done.
   Include code review, unit testing, documentation, and security checks.

## Exit Criteria

- The repository lives in an approved source control platform.
- `main` is protected.
- Pull requests are the only route into `main`.
- Ownership and access are team-based.
- Required repository files exist.
- Pipeline YAML is versioned with the code.

## Policy Basis

- [Source Control Policy](../software-engineering-policies/SourceControl/SourceControlPolicy.md)
- [Repository Setup Policy](../software-engineering-policies/SourceControl/RepositorySetupPolicy.md)
- [Branch Protection Policy](../software-engineering-policies/SourceControl/GitBranchProtectionPolicy.md)
- [Code Review Policy](../software-engineering-policies/CodeReview/CodeReviewPolicy.md)

## Anti-Patterns

- Committing directly to `main`
- Granting permanent write access to named individuals instead of teams
- Creating a repository without baseline documentation
- Keeping pipelines outside source control
