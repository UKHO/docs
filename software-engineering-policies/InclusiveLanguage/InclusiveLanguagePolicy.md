
# Inclusive Language Policy

This document will outline how software development teams at the UKHO can ensure that code and documentation is written with diversity and inclusion in mind.

It is not definitive and is likely to be updated as best practices evolve.

## Applicability

This policy applies to anyone contributing to UKHO code or documentation in public or private repositories.

## Introduction

The UKHO embraces diversity and promotes inclusion and equality of opportunity.

Language plays a critical role in fostering an inclusive environment and as such, the language used in the documentation and code managed by our software development teams should reflect these values also.

We should avoid use of language that is discriminatory, condescending or where it might represent:

- Age bias
- Culture bias
- Disability bias
- Ethnic slurs
- Gender bias
- Gender-specific language
- Racial bias
- Sexual orientation bias

Some terminology might be normalized on the technical level but loaded at societal level. As such, we should avoid referring to people using divisive wording and avoid using loaded terminology where unnecessary to describe technical concepts. Examples include:

<!--alex disable blacklist sanity-check whitelist dummy-->
- master/slave
- blacklist/whitelist
- sanity check
- dummy
<!--alex enable blacklist sanity-check whitelist dummy-->

## Application in new projects

All new documentation and code should be inclusive and facilitate diversity. Contributing authors are strongly encouraged to use neutral terms and avoid exclusionary language, to ensure the most inclusive environment possible.

A link to this policy should be provided from the CONTRIBUTING.md file.

### Default branch naming on GitHub (new projects)

From 1 October 2020, newly created repositories automatically set main as the default branch in place of master.

### Default branch naming on Azure DevOps (new projects)

This will automatically be set to *main* in the Azure DevOps cloud service but will need to be changed manually on after creating a new repository.

## Application in existing projects

When working in an existing codebase, teams should be alert to opportunities to update the language used in documentation and code. A link to this policy should be provided from the CONTRIBUTING.md file at the same time.

### Default branch naming on GitHub (existing projects)

GitHub has made it straightforward to change existing repositories without any disruption to work. Teams should ensure the process default branch renaming had been completed.

### Default branch naming on Azure DevOps (existing projects)

Microsoft have no plans to ease the renaming process so it is up to teams to manage if and when it is practical to do so, taking into consideration any future plans to migrate to GitHub.

## Automating checks on documentation

It may be helpful in some cases to automate checks on technical documentation written in markdown or plaintext. While we wait for support on tooling to come from the [Inclusive Naming Initiative](https://inclusivenaming.org/), we have found Alex.js to be fairly helpful in some simple use cases.

### Alex.js

- Source: https://github.com/get-alex/alex
- Usage: Automated checks in CI Build and integration with editors / IDEs.

> Whether your own or someone else’s writing, alex helps you find gender favoring, polarizing, race related, religion inconsiderate, or other unequal phrasing in text.

Alex has integrations available for numerous editors, including VS Code. This is a good place to enable the full set of rules for equality and profanity.

For CI builds, particularly on existing projects, the focus might be on a subset of the rules, to identify the loaded terminology identified above. Alex.js has been applied to [UKHO docs](https://github.com/ukho/docs) via GitHub Actions with a small subset of rules. An Action is available from the marketplace comments on Pull Requests, which requires additional setup with a token, so instead, we execute Alex directly via Node.

Contact @benbhall with any queries about the Alex.js.

## Checking code

Currently, the best way to check you are using inclusive language in your code is to search for known offending terminology.

<!--alex disable blacklist whitelist-->
For example, you might search code locally for use of the words master, slave, blacklist or whitelist using a regular expression:
<!--alex enable blacklist whitelist-->

`((black|white)[_-]?(list)+)|master|slave`

## Other tools

In Microsoft Office it is possible to enable writing style checks for inclusive language. Exactly how you find the setting depends on the version but it is typically under options for grammar and proofing. Again, depending on your version, you might only be able to enable checks on gender bias. Newer versions will offer many more. As this is a setting for MS Office, you will benefit from the checks across the suite, including Outlook.

Checking for bias in job adverts with https://joblint.org/.

## Further reading

- [Inclusive Naming Initiative](https://inclusivenaming.org/)
- The IETF (Internet Engineering Task Force) have collated a list of terms with [suggested alternatives](https://github.com/ietf/terminology).
- Article by NCSC (National Cyber Security Centre UK) on [their changes](https://www.ncsc.gov.uk/blog-post/terminology-its-not-black-and-white).
- Some background context on Terminology, Power and Oppressive Language, in a [draft submitted to the IETF](https://tools.ietf.org/id/draft-knodel-terminology-04.html).
- Specific guidance on documenting accessibility [by Google](https://developers.google.com/style/inclusive-documentation#about-disability-and-accessibility).
