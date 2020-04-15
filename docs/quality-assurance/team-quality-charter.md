# Team Quality Charter
This is the UKHO Team Quality Charter that delivery teams are expected to adhere to. 

## The Team

 - All members of the team are equal – there should be no difference in:   
	 - Permissions (e.g. environment permissions)
	 - Access to hardware or software
	 - Weight of opinion
	 
## Ways of Working
 
 - Planning, creating and executing tests (including manual testing) is the responsibility of **everyone** in the team
 - The role of the tester in the team is to **champion** quality assurance and testing at **all** stages of the development cycle
 - The team will use BDD for user focused stories in the story refinement process (for more details see our '[BDD](bdd.md)' page)
 - A process will exist for reviewing current automated tests

## Acceptance Criteria

 - Every story will have acceptance criteria before being played
 - Acceptance criteria will not be changed without cross-team awareness
 - Acceptance criteria will be testable, i.e. capable of being proven true or false

For more details see our '[Acceptance Criteria](acceptance-criteria.md)' page.

## Test Automation

 - Add tests at the correct level of the test pyramid – **lower** is **better**
 	- Unit testing is mandatory for all functional development
 	- All API development will have accompanying middle-layer API tests
 	- Minimal happy path testing is done at the UI level
 - There must be a compelling reason to use SpecFlow and its use must not be a default position
 - Test code must be treated with the same care and attention as production code (including pairing)
 
For more details see our '[Test Automation Strategy](test-automation-strategy.md)' page.

## Manual Testing
 
 - Manual testing will only be used when the cost of automation is deemed too high
 - Evidence of manual testing (e.g. screenshots) is not required
 - Exploratory testing is a valid form of manual testing and should be part of the test approach
