# Test Automation Standards

1. C# and Java
1. Unit Testing
1. API Testing
1. UI Testing
1. SpecFlow and Cucumber
1. Gherkin
1. Test and Defect Management

## C# and Java

* Test Automation code should adhere to the same standard as production code
* Formatting standards should reflect standard in use by development teams (e.g. Google Code Standard, Microsoft)
* Standard coding principles apply (e.g. SOLID, DRY)

## Unit Testing

* Aim for naming consistency. Common standard is to use a When-Then name, for example, WhenTwoItemsExistsThenBothItemsAreReturned
* Follow best practice:
  * Tests for results not functionality
  * One assertion per test
  * Tests should be isolated, i.e. have no dependencies on other tests nor on order of execution

## API Testing

* Perform full happy/unhappy path tests at this level
* Interactions with APIs should be abstracted into a separate service/facade, not in the test Steps

## UI Testing

* Only use for e2e tests or explicit UI features at this level
* Interactions with UIs should be abstracted into a separate service/facade, not in the test Steps (e.g., Page Object Model)

## SpecFlow and Cucumber

* Consider whether using these are required - will it add value, will a stakeholder be reading the tests, or can the extra technical layer be avoided?
* If using, publish the tests to a website for easy access using Pickles (see our [Pickles Example Project](test-repositories.md))

## Gherkin

* The feature name should reflect the area being tested
* The scenario name should reflect the purpose of the test, e.g. “Ensure two numbers are added correctly” rather than “add two numbers” or “add”
* Similar scenarios should be in one feature file – a feature file should only contain similar scenarios
* Ensure only one result is tested per scenario, try to avoid having too many assertions, better to split into different scenarios
* Move repeated steps into a Background
* Perform technical setup and teardown in the Steps classes, not in the Gherkin.

## Test and Defect Management

* For C# projects, unit and SpecFlow tests should exist in separate projects
* Open defects should be managed; a regular team/project review session is recommended 
