# Team Quality Charter

This is the UKHO Team Quality Charter that delivery teams are expected to adhere to:

## The Team

1) All members of the team are equal – there should be no difference in:   
    - Permissions (e.g. environment permissions)
    - Access to hardware or software
    - Weight of opinion

## Ways of Working

2) Planning, creating and executing tests (including manual testing) is the responsibility of **everyone** in the team
3) The role of the tester in the team is to **champion** quality assurance and testing at **all** stages of the development cycle
4) The team will use BDD for user focused stories in the story refinement process (for more details see our '[BDD](bdd.md)' page)
5) A process will exist for reviewing current automated tests

## Acceptance Criteria

6) Every story will have acceptance criteria before being played
7) Acceptance criteria will not be changed without cross-team awareness
8) Acceptance criteria will be testable, i.e. capable of being proven true or false

For more details see our '[Acceptance Criteria](acceptance-criteria.md)' page.

## Test Automation

9) Add tests at the correct level of the test pyramid – **lower** is **better**
    - Unit testing is mandatory for all functional development
    - All API development will have accompanying middle-layer API tests
    - Minimal happy path testing is done at the UI level
10) There must be a compelling reason to use SpecFlow and its use must not be a default position
11) Test code must be treated with the same care and attention as production code (including pairing)
 
For more details see our '[Test Automation Strategy](test-automation-strategy.md)' page.

## Manual Testing
 
12) Manual testing will only be used when the cost of automation is deemed too high
13) Evidence of manual testing (e.g. screenshots) is not required
14) Exploratory testing is a valid form of manual testing and should be part of the test approach
