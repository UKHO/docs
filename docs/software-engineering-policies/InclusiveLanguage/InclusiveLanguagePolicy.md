
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

An organisation-level setting will be shipping in S176 during October 2020. When we upgrade, this will be enabled and main will be set as the new default for new repositories created in Azure DevOps on premise.

## Application in existing projects

When working in an existing codebase, teams should be alert to opportunities to update the language used in documentation and code. A link to this policy should be provided from the CONTRIBUTING.md file at the same time.

### Default branch naming on GitHub (existing projects)

By the end of 2020, GitHub will make it straightforward to change existing repositories, avoiding the challenges of renaming them now. Teams should make plans to rename the default branch to main for all repositories after those changes are in place in 2021.

### Default branch naming on Azure DevOps (existing projects)

There are currently no plans to ease the renaming process so it is up to teams to manage if and when it is practical to do so, taking into consideration any future plans to migrate to GitHub. 

## Automating checks on documentation

It may be helpful in some cases to automate checks on technical documentation written in markdown or plaintext.

### Alex.js

- Tech Radar status: Trial.
- Source: https://github.com/get-alex/alex
- Usage: Automated checks in CI Build and integration with editors / IDEs.

> Whether your own or someone else’s writing, alex helps you find gender favoring, polarizing, race related, religion inconsiderate, or other unequal phrasing in text.

Alex has integrations available for numerous editors, including VS Code. This is a good place to enable the full set of rules for equality and profanity.

For CI builds, particularly on existing projects, the focus is on a subset of the rules, to identify the loaded terminology identified above.

Alex.js sits on top of retext-equality, amongst other things. It's very easy to contribute new rules, see an example [here](https://github.com/retextjs/retext-equality/pull/103).

Alex is currently being trialed on [UKHO docs](https://github.com/ukho/docs) in GitHub Actions. The Action available from the marketplace comments on Pull Requests, which requires additional setup with a token, so instead, the trial is executing Alex directly via Node. If Alex is adopted, this document will be updated to include instructions for adding it to CI builds at the UKHO.

As of 23.10.20 the latest changes are still waiting in a PR: https://github.com/UKHO/docs/pull/119.

Contact @benbhall with any queries about the Alex.js trial.

## Checking code

Currently, the best way to check you are using inclusive language is your code is to search for known offending terminology. 

<!--alex disable blacklist whitelist-->
For example, you might search code locally for use of the words master, slave, blacklist or whitelist using a regular expression:
<!--alex enable blacklist whitelist-->

`((black|white)[_-]?(list)+)|master|slave`

## Other tools

In Microsoft Office it is possible to enable writing style checks for inclusive language. Exactly how you find the setting depends on the version but it is typically under options for grammar and proofing. Again, depending on your version, you might only be able to enable checks on gender bias. Newer versions will offer many more. As this is a setting for MS Office, you will benefit from the checks across the suite, including Outlook.

Checking for bias in job adverts with https://joblint.org/.

## Further reading

The IETF (Internet Engineering Task Force) have collated a list of terms with suggested alternatives.
https://github.com/ietf/terminology

Article by NCSC (National Cyber Security Centre UK) on their changes.
https://www.ncsc.gov.uk/blog-post/terminology-its-not-black-and-white

Some background context on Terminology, Power and Oppressive Language, in a draft submitted to the IETF.
https://tools.ietf.org/id/draft-knodel-terminology-04.html

Specific guidance on documenting accessibility.
https://developers.google.com/style/inclusive-documentation#about-disability-and-accessibility
