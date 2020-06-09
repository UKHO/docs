# UKHO Delivery Quality Charter

This is the UKHO Delivery Quality Charter - a set of objectives that will improve how teams can quality assure their software.

## The Team

* All members of the team are equal – there should be no differences between developers and testers in:   
    * Permissions they have been assigned (e.g. permissions to access environments)
    * Access to hardware or software
    * Weight of opinion
* Teams that are multi-disciplinary, cross-functional and equal achieve better results

## Ways of Working

* Planning, creating and executing tests (including manual testing) is the responsibility of **everyone** in the team
* The role of the tester in the team is to **champion** quality assurance and testing at **all** stages of the development process
* The team will use BDD for user-focused stories in the story refinement process (for more details see our '[BDD](bdd.md)' page)
* A process will exist for reviewing current automated tests

## Acceptance Criteria

* Every story will have acceptance criteria added before being worked on
* Acceptance criteria will not be changed without cross-team awareness
* Acceptance criteria will be testable, i.e. capable of being proven true or false

For more details see our '[Acceptance Criteria](acceptance-criteria.md)' page.

## Test Automation

* Write tests at the correct level of the test pyramid – **lower** is **better**
    * All functional code must have accompanying unit or component tests
    * All API development must have accompanying API tests
    * Testing at the UI level is limited to a small number of happy-path tests
* There must be a compelling reason to use SpecFlow (its use must not be a default position)
* Test code must be treated with the same care and attention as production code (including pairing on writing)
 
For more details see our '[Test Automation Strategy](test-automation-strategy.md)' page.

## Manual Testing

* Manual testing should never be a team's default test method and should only be used when the team agrees that full automation of a test is not feasible (e.g. the technical complexity is too high or the time taken to fully automate a test far outweighs the benefit of having that test automated)
* When used, evidence of manual testing (e.g. screenshots) is not required
* Exploratory testing is a valid form of manual testing and should be part of the test approach
