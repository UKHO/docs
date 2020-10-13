# Source Control

## Repositories

- All code **must** be stored in a source code repository.
- Git is the prefered method of source control
- If hosted at the UKHO, these must be used on the central Azure DevOps Server system.
- It is acceptable to use our official Azure DevOps instance on Azure to provide version control.
- It is aceptable (and preferred) to use GitHub under our official UKHO organisation.
- **No other source control systems are permitted.**
- Any source code found in any other source control method, must first be migrated and proven to build via a CI pipeline
- All new source will host a primary branch called trunk or main over master, every effort of existing source code should be made to migrate over. 

## Branch Protection

Suitable branch protection should be setup, depending on factors agreed by the team, to avoid merging to main.

Some suggestions are: 

- using the code owner file
- ensuring a team is associated as an admin on the repository
  - assigning the team as the only members who can merge.
- apply to administrators.
  - A team member who is an admin on the repository could bypass the protection

## Branching

Branching policies and schemes are decided at the team level, according to that team's needs.

Branching policy and naming conventions are the responsibility of the lead engineers and must be published to the team.

## Check-in comments

All check-ins must be accompanied by a comment.  This should be enforced by the tooling.  The check-in comments should be subject to review as part of code review.

The commits should be small and concise and the commit message should answer "Applying this change will..."

## Verification

 A team's source control system must be open to inspection, including history of check-in comments.

A team's branching policy and naming conventions must be available for verification.

## Build / Release Configuration

Build and release pipelines should be under source control using yaml builds.

secrets should be provided by variable groups and possibly backed by a keyvault to allow for easy of maintenance. 
