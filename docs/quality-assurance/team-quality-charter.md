# Team Quality Charter
This is the UKHO **Team Quality Charter** that **all** Development teams are expected to adhere to. 

## The Team

 - All members of a team are equal – there should be no difference in:   
	 - Permissions
	 - Available hardware or software
	 - Weight of opinion
	 - Access to team ways of working 
	 
 - The role of the tester in the team is to **champion** quality assurance and testing at **all** stages of the development cycle. 

 - Performing tests (including manual testing) is the responsibility of **everyone** in the development team

## Acceptance Criteria

 - Every story will have acceptance criteria before being played
 - Acceptance criteria will not be changed without cross-team awareness
 - Acceptance criteria will be testable 

For more details see our '[Acceptance Criteria](acceptance-criteria.md)' page.

## Automation

 - Unit testing is mandatory for all functional development
 - All API development will have accompanying middle-layer API tests
 - There must be a compelling reason to use SpecFlow and its use must not be a default position
 - Test code must be treated with the same care and attention as production code
 - Test code should be paired upon wherever possible
 - The team **must** have confidence in the automated tests 

## Manual Testing

 - Evidence of manual testing (e.g. screenshots) is not required
 - Manual testing will only be used on agreement within the team when
	 - The cost of automation is too high
	 - No suitable automation framework exists and there is not the time to create
	 - To carry out exploratory testing over and above existing automated tests 

## Ways of Working

 - A process will exist for reviewing current automated tests
 - Teams should be using [BDD](bdd.md) in their story development process 
