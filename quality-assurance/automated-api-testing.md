# Automated API Testing Policy Document

## Purpose

This document establishes the policy for the automated testing of .NET APIs. It delineates the approved technologies, clients and processes for API integration tests.

## Scope

This policy is applicable to all teams involved in API development and testing within the organization.

## Testing Methodology

### Technology

The standard language for developing API's at UKHO is C#. Therefore it is expected that automated integration/API tests will also be created using C# (please note this does not apply to performance testing).

#### Approved Clients

Currently there are two clients that have been approved for use when writing automated tests for APIs.

1. [HttpClient](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient) - Built into .NET, also used in `WebApplicationFactory`
2. [RestSharp](https://restsharp.dev/intro.html#introduction) - Third party Nuget package.

### Integration Testing with `WebApplicationFactory`

Where possible [WebApplicationFactory](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-8.0) should be used for conducting integration tests. `WebApplicationFactory` creates a test server hosting the application under test, allowing for a controlled, isolated testing environment.

#### Guidelines for `WebApplicationFactory` Usage

- **Business Logic Verification** - Tests that verify business logic are ideal candidates for `WebApplicationFactory`.
- **Real Database Integration** - When applicable, integration tests should interface with a real relational database rather than an in-memory database to capture the full spectrum of interactions and potential issues. Suitable examples include a LocalSQLDB or a SQL database provisioned in a Docker container.
- **External Dependencies** - External services can be mocked to isolate the API under test.
- **Consistency and Reliability** - Tests should be consistent and not dependent on external environments.
- **Continuous Integration (CI)** - These tests should be integrated into the CI pipeline.

An example of using WebApplicationFactory with NUnit can be found [here](https://github.com/UKHO/.NET-Guild/blob/main/CleanArchitectueExample/tests/TestScribe.Api.Tests.Integration/WebApplicationFactoryTests/CreateTestSuiteTests.cs)

### Testing with Deployed Instances

Testing against deployed instances is reserved for:

#### Legacy Applications

Some legacy applications may not be suitable to test with `WebApplicationFactory` due to out of support frameworks or dependencies.

#### Security Testing

- **Authentication and Authorization** - Tests should confirm that security measures should be conducted in a production-like environment.

#### Safety and Compliance Testing

- **Safety Compliance** - Some API's will have safety requirements that arise from safety modeling, these tests may need to be run against a deployed production-like environment in order to meet the safety requirements.
- **Disaster Recovery** - The API's disaster recovery mechanisms must be tested in a deployed environment.

#### Performance and Load Testing

Note that the preferred technology for Performance/Load testing API's is K6. Please see [performance testing checklist](https://github.com/UKHO/docs/blob/main/quality-assurance/performance-test-checklist.md) for more info.


