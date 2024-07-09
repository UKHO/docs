# Repository Setup Policy

To ensure consistency in how our repositories are setup for access and automation, the following policy has been created. This focuses on the files within the codebase, the settings within the repo and automation we expect to run. 

## Codebase setup

So that we can ensure that anybody interacting with the codebase knows how they can perform certain actions, the following files should be added.

### CODEOWNERS

The CODEOWNERS file uses pattern matching to figure out who should be reviewing what when it comes to a pull request. For a CODEOWNERS file to be valid, the users/teams must have write permission to the repository. More information on how this can be setup and structured can be found in the [github documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)

### LICENSE

This describes the license in which the codebase is under. 

### CONTRIBUTING.md

The contributing file explains to anyone wishing to interact with the codebase how they would go about doing so. This would include raising issues, how to go about creating pull requests and any guidance to what should be included when making changes. Examples of these files can be found [here](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors#examples-of-contribution-guidelines)

### SECURITY.md

The security file provides a way for people interacting with the codebase to know how to raise any security issues they may have found. We have a fairly standard format for this that you can add to the file 

```md
# Security Notice

The UK Hydrographic Office (UKHO) supplies hydrographic information to protect lives at sea. Maintaining the confidentially, integrity and availability of our services is paramount. Found a security bug? Please report it to us at UKHO-ITSO@gov.co.uk
```

### README.md

The readme is the window to the codebase. This should have a simple explanation of what the code does, how to run the code/tests and any additional information that is pertinent to the codebase. If there is extensive documentation around the codebase due to its size, breaking this up into smaller documents and having them in a docs folder is usually good practice with links out. 

## Settings

Setting up the repository is the key to ensuring we keep things clean and ensuring we are doing the best to implement the policies provided.

### Default Branch

As stated in the Source Control policy, we should be using `main` as our default branch where possible. For new repositories this should not be a problem and should only be an issue where we may have legacy repos and pipelines.

### Features

So that we are only using the features that we require of Github and avoid any confusion of where information needs to be, we should only have `Preserve this repository` enabled. In terms of the other features we use other tooling for these so by disabling them we remove possible interactions.

### Pull Requests

There are multiple merging strategies for merging a pull request into a repository.

- Merge commits allow us to merge all commits.
- Squash and merge puts all commits into 1 and is added to the base branch.
- Rebase and merge puts all commits into 1 and is rebased onto the base branch.

Because of how we are setting up with our branch protection and other settings, the ideal merge strategy here would be `Squash and merge`. This gives us the room to create a pull request with multiple commits and "mistakes" but the main branch is kept clean with a single commit from the pull request. The commit message can contain a summary of everything that has been completed and the PR itself can be the history. 

It would be advised to disable the other 2 merge strategies so that teams are forced to use the same way of merging however this can be left up to teams to discuss and decide. 

Enabling `Always suggest updating pull request branches` is required as we never want to be behind the main branch when we are performing pull requests.

Finally `Automatically delete head branches` is required to be enabled to support in cleaning up branches. This also supports in re-pointing branches using the deleted head branch as a base.

## Branch Protection Rules

Branch protection should always be setup against your default branch. The policy for this can be found [here](/software-engineering-policies/SourceControl/BranchProtectionPolicy.md)

## Code security and analysis

From a code security point of view, we already have tooling that runs against the codebase externally however to support in the maintenance of your codebase we should be enabling `Dependabot alerts`, `Dependabot security updates` and `Dependabot version updates` so that we can try and keep on top of dependency updates and vulnerability updates.
