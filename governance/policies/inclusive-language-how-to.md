# How to Apply the Inclusive Language Policy

Use this guidance to apply the [inclusive language policy](inclusive-language.md) in new and existing projects and to check code and documentation.

## Apply the policy in a project

### New projects

1. Write new documentation and code inclusively, using neutral terms and avoiding exclusionary language.
2. Provide a link to the policy from the repository's `CONTRIBUTING.md` file.
3. On GitHub, newly created repositories have used `main` as the default branch in place of `master` since 1 October 2020.
4. The source policy states that this is automatically set to `main` in the Azure DevOps cloud service, but also says it will need to be changed manually after creating a new repository.

### Existing projects

1. When working in an existing codebase, look for opportunities to update language in documentation and code.
2. When making such updates, provide a link to the policy from the repository's `CONTRIBUTING.md` file at the same time.
3. On GitHub, ensure that the process of renaming the default branch to `main` has been completed.
4. On Azure DevOps, manage a default-branch rename when and if it is practical, taking any future plans to migrate to GitHub into consideration.

## Check documentation

Alex.js can be used to check technical documentation written in Markdown or plaintext. It has integrations for numerous editors, including VS Code. For editor use, enable the full set of rules for equality and profanity.

For CI builds, particularly on existing projects, a subset of rules can focus on the loaded terminology identified in the policy. Alex.js has been applied to [UKHO docs](https://github.com/ukho/docs) via GitHub Actions with a small subset of rules. A marketplace Action that comments on pull requests requires additional setup with a token; the source policy instead describes executing Alex directly via Node.

Alex.js source: https://github.com/get-alex/alex

## Check code

Search code locally for known offending terminology. The source policy gives this regular expression as an example:

```regex
((black|white)[_-]?(list)+)|master|slave
```

## Other checks

- In Microsoft Office, enable inclusive-language writing-style checks in the grammar and proofing settings. The setting location depends on the version; some versions may only check gender bias, while newer versions offer more checks. The checks apply across the Office suite, including Outlook.
- Check for bias in job adverts with [Joblint](https://joblint.org/).
