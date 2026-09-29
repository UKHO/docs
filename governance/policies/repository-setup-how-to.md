# Set up a repository consistently

This procedure supports the [Repository Setup Policy](repository-setup.md).

1. Add the required repository files:
   - `CODEOWNERS`
   - `LICENSE`
   - `CONTRIBUTING.md`
   - `SECURITY.md`
   - `README.md`
2. Set the default branch to `main` where possible.
3. In the repository settings, enable only `Preserve this repository` and disable the other GitHub features that are not required.
4. Configure pull requests so that `Squash and merge` is the preferred merge strategy.
5. Enable `Always suggest updating pull request branches`.
6. Enable `Automatically delete head branches`.
7. Configure branch protection on the default branch using the [Branch Protection Policy](branch-protection.md).
8. Enable `Dependabot alerts`, `Dependabot security updates` and `Dependabot version updates`.

This creates a consistent repository setup that supports access, clean pull-request history and ongoing dependency and security management.
