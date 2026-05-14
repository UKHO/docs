# GitHub guidance

Practical guidance for working with GitHub repositories and contribution flows.

## Background

This guidance explains what should exist in open repositories so people can browse them comfortably, find information quickly, and contribute productively.

## Overview

All open repositories should contain the following:

* **A `CONTRIBUTING.md` within the root folder.** The file signals that the repository accepts contributions and explains the process contributors should follow. Use [guidance on how to write a `CONTRIBUTING.md`](./creating-a-contributing-file.md).
* **A `LICENSE` within the root folder.** This will be MIT in most cases. Having a license is critical as it states what others are allowed to do with the code.
* **A `README.md` within the root folder.** This should contain basic useful information to help users understand the project and get started. Use [guidance on how to write a `README.md`](./creating-a-readme-file.md).
* **A continuous integration build process.** Each time a pull request is submitted a build should run the tests and provide feedback to contributors.

Other useful repository assets may include:

* Code of Conduct
  * [Code of Conduct from contributor covenant](https://www.contributor-covenant.org/).
* Changelog
  * [Keep a changelog](http://keepachangelog.com/en/0.3.0/).
* TDL (Technical decision log)
  * [Documenting Architecture Decisions](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions).
  * [Architecture Decision Records In action presentation](https://resources.sei.cmu.edu/asset_files/Presentation/2017_017_001_497746.pdf).
* Scripts
  * `script/bootstrap` - configure the machine ready to develop for this repository
  * `script/dev` - start any background processes or servers needed during development
  * `script/test` - run all tests for the repository

## Code contribution process

All open repositories must use git and contributions should follow the standard fork and pull request approach, or an approved equivalent. Use [guidance on how to make a pull request](./pull-request-details.md).

## Related areas

* [Platform policies](../../../policies/platform/README.md)
* [Source control standards](../../../standards/source-control/README.md)
* [Root contribution guidance](../../../CONTRIBUTING.md)

## Terminology

`Contributing` - more than adding code; it also includes creating issues, bug reports, asking questions, and improving documentation.

`Contributor` - anyone who has added to the project, including filing issues.

`Repo` - a git repository and the associated GitHub or GitLab project.

`Pull Request` - how a contributor asks the owner of a repository to accept their contribution.

## Inspiration

[Alpha Gov - Open Standards](https://github.com/alphagov/open-standards)
