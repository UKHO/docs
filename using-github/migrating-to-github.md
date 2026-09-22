# Migrating an existing project to GitHub

## Remove sensitive data

As part of [the Repository Visibility Change Governance Checklist](../software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md), sensitive data must be removed before a repository is made public.

History rewriting is disruptive and must not be used as routine remediation. First remove the sensitive data from the current working tree, rotate or revoke exposed secrets, and assess whether the repository should remain private. Where history rewriting is necessary, use `git filter-repo` rather than the deprecated `git filter-branch` command. Obtain approval, communicate the change to contributors, and test the process on a representative copy before rewriting the repository.

Specific history-rewriting commands are intentionally not included here because the correct filters depend on the repository and the data being removed. Use the [git-filter-repo documentation](https://github.com/newren/git-filter-repo) and obtain a review from the repository owner and Security Champion before applying any rewrite.
