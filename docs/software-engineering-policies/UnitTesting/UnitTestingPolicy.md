# Unit Testing Policy

## Guide

All new non-trivial code **must** be covered with unit tests.  Ultimately, the definition of 'non-trivial' is up to the team's Lead Engineer.

Areas of code may be excluded from this rule (e.g. boiler-pate, or generated code) by the Lead Engineer.

Where legacy code makes unit testing difficult, a pragmatic approach may be taken, governed by the Lead Engineer.

Unit tests **must** be run as part of a CI process.

A clear statement on unit testing must be part of written definition of done.

Unit tests should be checked in at the same time as subject code and **must** be subject to code review.

Teams should report on test coverage.  Good coverage levels should be maintained and reductions in coverage justified.

## Verify

The following artefacts are subject to verification:

- Team 'definition of done' documents
- Unit test coverage reports
- Change sets checked into source control, including unit tests

