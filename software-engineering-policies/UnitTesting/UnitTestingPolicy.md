# Unit Testing Policy

## Guide

All new non-trivial code **must** be covered with unit tests.  Ultimately, the definition of 'non-trivial' is up to the team's Lead Engineer.

Areas of code may be excluded from this rule (e.g. boiler-pate, or generated code) by the Lead Engineer.

Where legacy code or some other factor makes unit testing difficult, a pragmatic approach may be taken.  The Lead Engineer engineer is accountable for an effective decision-making process being used for what may be excluded from unit testing.

Unit tests **must** be run as part of a CI process.

A clear statement on unit testing must be part of written definition of done.

Unit tests should be checked in at the same time as subject code and **must** be subject to code review.

Teams should report on test coverage.  Good coverage levels should be maintained and reductions in coverage justified.

Mutation testing has been shown to be useful in assessing the quality of unit tests, and could be used by teams.

## Verify

The following artefacts are subject to verification:

- Team 'definition of done' documents
- Unit test coverage reports
- Change sets checked into source control, including unit tests
