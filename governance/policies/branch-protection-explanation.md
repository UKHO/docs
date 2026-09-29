# Why Branch Protection Matters

This document explains the rationale in the [Branch Protection Policy](branch-protection.md). The policy remains the authoritative source for requirements.

## Pull requests and review

Direct changes to `main` can create a messy history, conflicts, and broken builds that may cause outages. A pull request gives changes an opportunity to receive quality checks and review, and to be run in an environment before merging.

More than one reviewer can bring different perspectives to a change. Two approvals are preferred, while the minimum of one recognizes that some teams are too small to provide two.

Reviewing new changes helps reviewers check that their concerns have been addressed and can help prevent code creep, including in small changes. Code owners have knowledge of the code and its purpose, so their involvement can guide the pull request.

## Automated checks and conversations

Automated status checks support code quality and security. Selecting the specific checks to require makes clear which checks must pass; merely enabling the general status-check control is not enough. Keeping branches current helps ensure that checks and reviews account for changes already made to the base branch.

Resolving pull request conversations confirms that comments have been acknowledged or dealt with. The discussion can also be referenced later if a problem arises.

## Access and merge history

Preventing bypass preserves the purpose of automated checks and review. The source recognizes unique cases, which are to be handled individually. Restricting who can push to `main` can provide another control when code-owner review alone is not enough, including when work involves third parties or multiple teams.

Squash merging is preferred in Azure DevOps because it keeps a linear history and prevents the individual commits in a pull request, including erroneous commits, from appearing in `main`. The source leaves the merge-type decision to each team.
