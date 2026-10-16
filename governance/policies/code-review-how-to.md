# How to apply the code review policy

## Workflow and tooling should enforce code review

- Use branch protection to enforce pull requests on merging change sets.
- Change sets should have appropriate human-readable commentary e.g. commit messages, clear pull request names and descriptions.
- Agree team expectations for:
  - How to alert others that code is waiting for review e.g. using a pull request channel in Teams, monitoring emails from Github.
  - How long is reasonable to wait for review.
  - How to escalate if waiting time has gone beyond what is expected e.g. raising in standup.

## Evidence that code review has occurred

- Associate change sets with their work items.
- In an exceptional case where tooling cannot support an enforced workflow, a written report must be open to inspection evidencing that all code reviews have been carried out.

## Reference

- [Use `AB#` to link from GitHub to Azure Boards work items](https://learn.microsoft.com/en-us/azure/devops/boards/github/link-to-from-github?view=azure-devops#use-ab-to-link-from-github-to-azure-boards-work-items)
- [Add work item links to GitHub branches, commits, or pull requests](https://learn.microsoft.com/en-us/azure/devops/boards/github/link-to-from-github?view=azure-devops#link-work-item-to-branch-commit-pr)
