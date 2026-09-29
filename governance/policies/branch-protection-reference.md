# Branch Protection Settings Reference

This reference maps the platform settings named in the [Branch Protection Policy](branch-protection.md). The policy defines which controls are required, preferred, or optional.

| Control | Azure DevOps setting or behavior | GitHub setting or behavior |
| --- | --- | --- |
| Pull request reviews | Require a minimum number of reviewers | Require a pull request before merging; require approvals |
| Approval after new changes | Reset code reviewer votes, except votes to reject or wait | Dismiss stale pull request approvals when new commits are pushed |
| Review ownership | Automatically include code-owner reviewers | Require reviews from Code Owners |
| Comment handling | Check for comment resolution | Require conversation resolution before merging |
| Automated validation | Build validation; validation should trigger on changes and expire when `main` is updated | Require status checks to pass before merging; require branches to be up to date before merging |
| Security status check | Include available automated security validation, such as Snyk | Require the `snyk/sast` status check |
| Work-item association | Check for linked work items | No corresponding setting is specified in the source |
| Merge type | Limit merge types; squash merge is the stated preference | No merge-type setting is specified in the source |
| Push access | No push restriction is specified in the source | Restrict who can push to matching branches |
| Bypass | No bypass setting is specified in the source | Do not allow bypassing the branch protection settings; unique cases are handled individually |

The Azure DevOps reviewer-vote reset does not reset votes to reject or wait. GitHub's stale-approval setting dismisses stale approvals when new commits are pushed.
