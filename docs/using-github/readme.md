# Our guidance for using GitHub

## Background

This repository is to provide guidance on what must exist in open repos as a minimum with the aim of enabling people to feel familiar when browsing, find information and to become productive if contributing back.

## Overview

All open repos must contain the following:

* **A CONTRIBUTING.md within the root folder.** The file is a marker to people that this repo will accept changes from outside of the team. It must contain the processes that the owner of the repository needs people to follow when contributing to the project. [Guidance on how to write a CONTRIBUTING.md](creating-a-contributing-file.md).

* **A LICENSE within the root folder.** This will be MIT in most cases. Having a license is critical as it states what others are allowed to do with the code.
* **A README.md within the root folder.** This must contain some basic useful information for the user allowing them to quickly understand the project and get started using it. It isn't the place for extensive documentation. [Guidance on what should be in a README.md can be found](ReadmeDetails.md).

* **A continuous integration build process.** Each time a pull request is submitted a build is triggered which will run all the tests to ensure the change does not break any features. This will also give the contributor feedback and confidence that there code will work!

Above is the minimum for an what open repo must contain, other useful things a repo may contain:

* Code of Conduct
  * [Code of Conduct from contributor covenant](https://www.contributor-covenant.org/).

* Changelog
  * [Keep a changelog](http://keepachangelog.com/en/0.3.0/).

* TDL (Technical decision log)
  * [Documenting Architecture Decisions](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions).
  * [Architecture Decision Records In action presentation](https://resources.sei.cmu.edu/asset_files/Presentation/2017_017_001_497746.pdf).

* Scripts
  * ```script/bootstrap``` - Configure the machine ready to develop for this repo(pull down and configure dependencies etc.)
  * ```script/dev``` - Start any background processes/servers needed during development
  * ```script/test``` - Run all the tests for this repo.

## Code Contribution Process

All open repos must be using git and code contributions should be made using the standard Fork and Pull Request approach(or equivalent). [Rough guidance on how to make a pull request](PullRequestDetails.md).

## Terminology

```Contributing``` - This is more than just adding code, this also include creating issues/bug reports, asking questions, improving documentation.

```Contributor``` -  This refers to anyone who has added to this project, including filing issues.

```Repo``` - A git repository and the associated Github/lab with it.

```Pull Request``` - How a contributor asks the owner of a repository to accept their contribution. The owner "pulls" the contribution into the main repository.

## Inspiration

[Alpha Gov - Open Standards](https://github.com/alphagov/open-standards)
