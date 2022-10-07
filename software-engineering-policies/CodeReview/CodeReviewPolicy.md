# Code Review Policy

## What are code reviews

Peer code reviews are a valuable and **mandatory** part of the software development process. These reviews can take various forms, for example a desk based review with another developer or a walkthrough of some significant changes with the entire team.

## What should be reviewed

**All** changes which are to be committed to source control **must** be subject to a review.

Code reviews must be conducted on code directly from source control. You **must not** review code deployed to shared folders or drives, or from test deployments.

Each team **must** maintain a means of checking that all code is reviewed.  This might consist of a report that is generated showing un-reviewed changes, or the preferred approach of a workflow within version control tooling which enforces it, e.g. via pull requests.

## What else should be checked

The review should ensure that the change set(s) **must** have a link to an associated work item.

All change set(s) **must** have an appropriate comment explaining the change, i.e. a good commit message.

## When must the review be completed

It is strongly advised that reviews should be completed within 1-2 days of the coding task being completed.  

Reviews **must** be completed before the change set is merged into a different branch and prior to code entering a branch which has a deployment path to a formal testing environment such as UAT.

A PBI is not completed until any code changes have been reviewed and any further changes from the review completed.  The completion of code reviews **must** be included in a team's definition of done.

## Evidence of review

There **must** be evidence that the code changes associated with a check-in have been reviewed.

## Verification

There are two means of verification:

- A workflow should be created which enforces a code review before work can enter the main codebase.
- Alternatively, where the tooling does not support an enforced workflow, a report or similar must be open to inspection showing that all code reviews have been carried out.
