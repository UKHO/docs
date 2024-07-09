# Source Control

* All UKHO code **must** be stored in a source code repository.
* Git is the preferred method of source control.
* If hosted at the UKHO, these must be used on the central Azure DevOps Server system.
* It is acceptable to use our official Azure DevOps instance on Azure to provide version control.
* It is acceptable (and preferred) to use GitHub under our official UKHO organisation.
* **No other source control systems are permitted.**
* Any source code found in any other source control method must first be migrated and proven to build via a CI pipeline.
* All new source will host a primary branch called _trunk_ or _main_ over _master_.

## Repository Setup

Information about setting up your repository can be found [here](/software-engineering-policies/SourceControl/RepositorySetupPolicy.md)

## Access control

Access to a repo should be done through a team and not through an individual as to ensure that there is never a single point of failiure. Team access does not mean team ownership however.

Ensure that developers with BPSS clearance are only granted read access. BPSS-cleared developers may temporarily be granted write access to a repository, provided suitable controls exist to prevent any change they make progressing to a live environment without review by a Security Cleared (SC) colleague.

## Branching

As a Software Engineering collective, we endevour to practice [github flow based development](https://docs.github.com/en/get-started/using-github/github-flow) when working within our teams and when working with 3rd parties.

To be able to trace our branches back to PBI's it is preferable that we keep out branch naming consistent. The ideal would look something like 

`{ticket_number}/{type}-{description}`

So for example if someone was working on a feature to update a button the branch name could look like

`1001/feature-update-button-onclick`

[Branch Protection](/software-engineering-policies/SourceControl/BranchProtectionPolicy.md) should be setup against the main branch.

## Check-in comments

All check-ins must be accompanied by a comment.  This should be enforced by the tooling.  The check-in comments should be subject to review as part of code review.

The commits should be small and concise and the commit message should answer "Applying this change will...".

## Pull Requests

Pull requests should follow a consistent pattern to help with reviewing. There are 3 parts to a pull request that need to be considered.

### Naming

The naming for a pull request should be in a similar fashion to the branch name where the ticket, type and description is provided. For example

`1001 - Feature Update button OnClick`

The body of a pull request should provide the information and context a reviewer would need to proceed with looking through you code. This will include what has changed, why you changed it, any tickets relating to this change and how to test this change. If possible providing a template for this will support in ensuring that a developer will add the required information when raising a pull request.

The contents of the PR should be specific to the work being described in the pull request. If there is a ticket attached then the changes should be specific to that and any deviations called out explicitly. PR sizes should not be too large as to not overwhelm your reviewers; where they do become too large a code review before hand might be of benefit.

## Verification

A team's source control system must be open to inspection, including history of check-in comments.

A team's branching policy and naming conventions must be available for verification.

## Build / Release Configuration

Build and release pipelines should be under source control using YAML builds.

Secrets should be provided by variable groups and possibly backed by a keyvault to allow for ease of maintenance.
