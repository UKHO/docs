# Source Control Policy

This policy defines the requirements for storing and managing UKHO source code.

## Repositories

- All UKHO code must be stored in a source code repository.
- Git is the preferred method of source control.
- Repositories hosted at the UKHO must use the central Azure DevOps Server system.
- The official Azure DevOps instance on Azure is an acceptable source control system.
- GitHub under the official UKHO organisation is acceptable and preferred.
- No other source control systems are permitted.
- Source code held in another source control system must first be migrated and proven to build through a CI pipeline.
- All new source must use a primary branch called `trunk` or `main`, rather than `master`.

See the [repository setup policy](RepositorySetupPolicy.md) for repository setup information.

## Access control

- Access to a repository should be granted through a team rather than an individual, to ensure there is never a single point of failure. Team access does not imply team ownership.
- Developers with BPSS clearance must only be granted read access.
- BPSS-cleared developers may temporarily be granted write access if suitable controls prevent any change they make from progressing to a live environment without review by a Security Cleared (SC) colleague.

## Branching

The Software Engineering collective endeavours to practise [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow) when working within teams and with third parties.

Branch names should preferably use this format to trace branches back to PBIs:

`{ticket_number}/{type}-{description}`

For example, a feature to update a button could use `1001/feature-update-button-onclick`.

Branch protection must be set up for the `main` branch. See the guidance for [GitHub](GitBranchProtectionPolicy.md) and [Azure DevOps](AzDoBranchProtection.md).

## Check-in comments

- All check-ins must have a comment, enforced by tooling.
- Check-in comments are subject to review as part of code review.
- Commits should be small and concise, and their messages should answer: "Applying this change will..."

## Pull requests

Pull requests should follow a consistent pattern.

### Naming

Pull request names should follow a pattern similar to branch names, providing the ticket, type and description. For example: `1001 - Feature Update button OnClick`.

### Description and scope

The pull request body should provide reviewers with the information and context needed to review the change. It should describe what changed, why it changed, related tickets and how to test it. Where possible, provide a template to help developers include this information.

Pull request contents should be specific to the work described. If a ticket is attached, changes should be specific to it and any deviations should be called out explicitly. Pull requests should not be so large that they overwhelm reviewers; a code review beforehand might benefit changes that become too large.

## Verification

- A team's source control system must be open to inspection, including its check-in comment history.
- A team's branching policy and naming conventions must be available for verification.

## Build and release configuration

- Build and release pipelines should be under source control using YAML builds.
- Secrets should be provided by variable groups and may be backed by a key vault to allow ease of maintenance.

## Related documents

- [Why repository access is managed through teams](source-control-explanation.md)
- [Repository setup](repository-setup.md)
- [Branch protection](branch-protection.md)
