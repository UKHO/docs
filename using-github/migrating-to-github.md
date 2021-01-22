# Migrating an existing project to GitHub

## Remove sensitive data

As part of [the Open Source Governance Checklist](../software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md), it is a requirement that sensitive data has been removed from the repository history. This can be acheived with Git's `filter-branch` command to walk over the history of a branch and apply changes throughout.

## Remove lines from commit messages

Gerrit leaves a `Commit-Id` line in every commit message made. To remove these, the `--msg-filter` can be used as follows:

```bash
git filter-branch -f --msg-filter 'sed "/Change-Id/ d"' -- --all
```

Substitute `Change-Id` for any string to match an entire line and delete from all commit message in the branch.

## Remove directories/files from branch trees

To remove directories from the entire history of a branch, use the `--tree-filter` as follows:

```bash
git filter-branch --tree-filter "rm -rf dev" --prune-empty HEAD
```
