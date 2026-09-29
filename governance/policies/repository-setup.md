# Repository Setup Policy

This policy defines the repository files, settings and automation expected for repositories to keep them consistent, easier to maintain and safer to operate.

## Scope

This policy applies to repositories that are set up for GitHub and GitHub-based collaboration.

## Required repository files

The following files should be added to a codebase so that people interacting with it know how to use it and how to raise issues or security concerns.

### CODEOWNERS

A `CODEOWNERS` file must be included so that pull requests are routed to the correct reviewers. For a `CODEOWNERS` file to be valid, the relevant users or teams must have write access to the repository. More information on how to set this up can be found in the [GitHub documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

### LICENSE

A repository must include a license that describes the terms under which the code is provided.

### CONTRIBUTING.md

A `CONTRIBUTING.md` file must explain how to raise issues, create pull requests and make changes to the codebase. Examples of these files can be found in [Creating a Contributing File](/using-github/creating-a-contributing-file.md).

### SECURITY.md

A `SECURITY.md` file must explain how people interacting with the codebase can report security issues.

The following standard format may be used:

```md
# Security Notice

The UK Hydrographic Office (UKHO) supplies hydrographic information to protect lives at sea. Maintaining the confidentially, integrity and availability of our services is paramount. Found a security bug? Please report it to us at UKHO-ITSO@gov.co.uk
```

### README.md

A `README.md` file must provide a clear overview of the codebase, including what it does, how to run it and how to test it. If a repository is large, supporting documentation can be split into a `docs` folder and linked from the README.

## Repository settings

### Default branch

The default branch should be `main` wherever possible. This applies to new repositories and should be used for legacy repositories where practical.

### Feature settings

Only the `Preserve this repository` feature should be enabled. Other GitHub features that are not required should be disabled to reduce confusion and avoid unintended interactions.

### Pull requests

The preferred merge strategy for pull requests is `Squash and merge`.

The following pull request settings should be enabled:

- `Always suggest updating pull request branches`
- `Automatically delete head branches`

If the repository team chooses to use a different merge strategy, other merge strategies may be left enabled, but `Squash and merge` is the preferred approach for this policy.

## Branch protection

Branch protection must be set up against the default branch. The policy for branch protection can be found in [Branch Protection Policy](branch-protection.md).

## Code security and analysis

The following Dependabot settings should be enabled to help maintain the repository and keep dependencies and vulnerabilities up to date:

- `Dependabot alerts`
- `Dependabot security updates`
- `Dependabot version updates`

## Related documents

- [Repository setup how-to](repository-setup-how-to.md)
- [Why standard repository setup matters](repository-setup-explanation.md)
