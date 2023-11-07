# Test Automation Standards

## Test Code

* Test Automation code should adhere to the same standard as production code
* Formatting standards should reflect standard in use by development teams (e.g. Google Code Standard, Microsoft)
* Standard coding principles apply (e.g. SOLID, DRY)

## Technologies
* For back-end .NET and front-end Angular projects any accompanying tests should be be written in the same language i.e. API tests for a .NET API should be written in .NET, for new Angular projects the UI tests should be written in typescript. Tests should be included in the same repository as the source code for better versioning of tests.
* In certain circumstances there may be a need for a separate repository of tests (i.e. acceptance tests for a distributed system), the preferred language is .NET for these test suites (with the exception of performance tests, please see the other technologies section).

### .NET (back-end projects)
* For .NET projects the standard test framework is [NUnit](https://docs.nunit.org/articles/nunit/intro.html), and the preferred mocking library is [FakeItEasy](https://fakeiteasy.github.io/docs/7.4.0/).
* Although not mandated, we strongly advise using the [Fluent Assertions](https://fluentassertions.com/introduction) package for test assertions. Fluent Assertions provides clearer failure messages and greater capacity for object and enumerable assertions.
* It is advised to use [WebApplicationFactory](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-7.0) for API tests, see API Test Standards (link tbc) for more information.

###  Angular (front-end projects)
* For Angular projects the standard unit test framework is [Jest](https://jestjs.io/docs/getting-started).
* For UI tests the suggested UI framework is [Playwright](https://playwright.dev/docs/intro) (typescript). See [Browser automation standards](browser-automation.md) for more information.

### Other technologies
* Although not mandated using a mutation testing tool such as [Stryker](https://stryker-mutator.io/docs/stryker-net/introduction/) will help give an objective score regarding the quality of the unit tests.
* The approved performance testing technology is [K6](https://k6.io/docs/). Please see performance testing standards (link tbc) for further information.

## Standards

### Unit Testing
#### Test a single Method in isolation
* Test naming should follow a convention agreed by the team. An example is **Method_Action_Assertion** e.g. ValidateObject_WhenObjectPropteryIsNull_ThrowsArgurmentException
* Tests should be isolated, i.e. have no dependencies on other tests nor on order of execution.
* Unit tests should take very little time to run. Milliseconds not seconds!
* Unit tests are standalone, can be run in isolation, and have no dependencies on any outside factors such as a file system or database.
* Running a unit test should be consistent with its results, it always returns the same outcome if you do not change anything in between runs.
* The test should be able to automatically detect if it passed or failed without any human interaction.
* A unit test should not take a disproportionately long time to write compared to the code being tested. If you find testing the code taking a large amount of time compared to writing the code, consider a design that is more testable.
* Unit Test coverage should aim to cover around 80% of code.
* Aim for one outcome per test.

[Microsoft unit testing best practices](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices) provides further guidance on unit testing.

### Component Testing
#### Multiple methods in a single test
* Component tests should follow the same standard as unit tests.
* The majority of test coverage should come from Unit Tests not Component Tests.
* Try to test no more than two components per test. Prefer multiple tests over one long component test.
* Aim for one outcome per test.

### Integration Testing 
#### Multiple components integration with real dependencies (i.e. database integration)
* Determine test data ahead of time and ensure this test data is reusable.
* Ensure integration tests have as few external dependencies as possible outside of the test code.
* Fakes, mocks and stubs are permitted, provided the test is asserting integration with a real dependency (e.g. database or message broker integration)
* API testing should be performed at this level. Tests should confirm the API responses and content.
* Reasonably fast. Seconds not minutes!
* Aim to test one behavior per test.
* Perform as many scenarios as possible at this level. Ensure scenarios not covered here are covered by unit/component tests.

### End-to-End Testing
#### Systems integration with all dependencies 
* Aim to write as few End-to-End tests as possible. These tests are slow, usually rely on external dependencies and can be "flaky".
* Do write an End-to-End test when you require a high level of coverage for a Safety or Threat modeling concern.
* End-to-End tests usually require a lot of setup. Coding standards are particularly important here. Ensure any setup code can be reused by other tests.
* Test readability is an important consideration due to the amount of setup required. It should be clear when reading the test what the scenario and assertions are trying to achieve.
* When writing End-to-End tests consider if these tests can be moved down to the integration level for improved speed and reliability.

### UI Testing
#### Integration/End-to-End Tests using web browsers
* Define the aims for your UI tests. UI tests which test the UI in isolation (with faked back-end dependencies) can be considered UI integration tests (confirming the UI code's behavior with a web browser). UI tests which require multiple back-end services to be stood up are considered UI End-to-End tests.
* The preferred UI test framework is Playwright for new projects, however other test frameworks such as Cypress are used in UKHO. If you are unsure please contact the test leads for guidance. * Where possible aim to keep the UI tests in the same project as the UI source code.
* Use the same language as the UI source code. UKHO's preferred UI framework is Angular, therefore most UI tests should use TypeScript.
* Aim to test one functional behavior per test.
* Use a known UI testing pattern such as Page Object Model or App Actions. An example can be found in the [UI Test Exemplar project](https://github.com/UKHO/playwright-template).