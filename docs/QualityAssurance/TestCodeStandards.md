# Test Automation Standards

1. C# and Java
1. Unit Testing
1. API Testing
1. UI Testing
1. Gherkin

## C# and Java

* Test Automation code should adhere to the same standard as production code
* Formatting standards should reflect standard in use by development teams (e.g. Google Code Standard, Microsoft)
* Standard coding principles apply (e.g. SOLID, DRY)

## Unit Testing

* Aim for naming consistency. Common standard is to use a When-Then name, for example, WhenTwoItemsExistsThenBothItemsAreReturned
* Follow best practice:
  * Tests for results not functionality
  * one assertion per test
  * tests should be isolated, i.e. have no dependencies on other tests nor order of execution

https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices

## API Testing

* Perform full happy/unhappy path tests at this level
* Interactions with APIs should be abstracted into a separate service/facade, not in the test Steps
* Test for 

## UI Testing

* Only use for e2e tests or explicit UI features at this level
* Interactions with UIs should be abstracted into a separate service/facade, not in the test Steps (e.g., Page Object Model)

## Gherkin

* Feature name should reflect the area being tested
* Scenario name should reflect the purpose of the test, e.g. “Ensure two numbers are added correctly” rather than “add two numbers” or “add”
* Similar scenarios should be in one feature file – a feature file should only contain similar scenarios
* Move repeated steps into a Background
* Perform technical setup and teardown in the Steps classes, not in the Gherkin.
* Ensure only one thing is tested per scenario, try to avoid having too many assertions. Split into different scenarios if needed.
