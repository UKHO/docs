# Why Peer Code Review Matters

This document explains the rationale in the [Code Review Policy](code-review.md). The policy remains the authoritative source for requirements.

## Review as a mandatory control

Peer code review is described as a valuable and mandatory part of the software development process. The source makes clear that this is not optional review for selected changes only: all changes committed to source control must be subject to review.

## Review of the right code and review evidence

The policy requires reviews to be conducted on code directly from source control, not on code deployed to shared folders, drives, or test deployments. This keeps review focused on the actual change set and avoids reviewing a build that may not match the checked-in code.

## Traceability and clarity

The source expects the review to confirm that each change set is linked to an associated work item and that the change is explained by an appropriate comment or commit message. This helps teams understand what changed, why it changed, and what trackable work it supports.

## Timeliness and completion

The review should happen promptly, ideally within 1-2 days of the coding task being completed, so feedback is still fresh and issues can be addressed before code reaches another branch or a deployment path to a formal testing environment such as UAT. The source also makes the review a completion criterion: a PBI is not complete until code changes have been reviewed and any follow-up changes from the review are completed.

## Evidence and quality gates

The policy requires evidence that a check-in has been reviewed. This can be supported by an enforced review workflow or by a report that shows all reviews have been completed. The source also states that code review completion must be included in a team's definition of done.
