# Unit Testing Policy

This policy sets the minimum expectations for unit testing in software development. It is the authoritative statement of requirements.

## Requirements

All new non-trivial code must be covered with unit tests. The definition of "non-trivial" rests with the team's Lead Engineer.

Areas of code may be excluded from this rule, such as boilerplate or generated code, by the Lead Engineer.

Where legacy code or other factors make unit testing difficult, a pragmatic approach may be taken. The Lead Engineer is accountable for ensuring an effective decision-making process is used when deciding what may be excluded from unit testing.

Unit tests must be run as part of a CI process.

A clear statement on unit testing must be included in the written definition of done.

Unit tests should be checked in at the same time as the subject code and must be subject to code review.

Teams should report on test coverage. Good coverage levels should be maintained, and reductions in coverage must be justified.

Mutation testing has been shown to be useful in assessing the quality of unit tests and could be used by teams.

## Verification

The following artefacts are subject to verification:

- Team definition of done documents
- Unit test coverage reports
- Change sets checked into source control, including unit tests
