# Automated API Testing Policy

This policy sets the requirements for automated testing of .NET APIs at UKHO.

## Scope

This policy applies to all teams involved in API development and testing within the organisation.

## Requirements

### Use C# for automated API integration tests

The standard language for developing APIs at UKHO is C#. Automated integration and API tests should therefore also be created using C#, except for performance testing.

### Approved clients

The following clients are approved for API tests:

- [HttpClient](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient) - built into .NET and used in `WebApplicationFactory`
- [RestSharp](https://restsharp.dev/intro.html#introduction) - a third-party NuGet package

### Prefer `WebApplicationFactory` for integration tests

Where possible, [WebApplicationFactory](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-8.0) should be used for integration tests. `WebApplicationFactory` creates a test server that hosts the application under test in a controlled, isolated environment.

Tests that verify business logic are ideal candidates for `WebApplicationFactory`.

When applicable, integration tests should interface with a real relational database rather than an in-memory database to capture the full range of interactions and potential issues. Suitable examples include a LocalSQLDB or a SQL database provisioned in a Docker container.

External services can be mocked to isolate the API under test.

Tests should be consistent and not dependent on external environments, and these tests should be integrated into the CI pipeline.

### Use deployed instances only for specific cases

Testing against deployed instances is reserved for:

- Legacy applications that may not be suitable for `WebApplicationFactory` because of out-of-support frameworks or dependencies
- Security testing, including authentication and authorisation checks that should be conducted in a production-like environment
- Safety and compliance testing, where some APIs have safety requirements that require a deployed production-like environment
- Disaster recovery testing, where API disaster recovery mechanisms must be tested in a deployed environment

### Performance and load testing

The preferred technology for performance and load testing APIs is K6. See the [performance testing checklist](https://github.com/UKHO/docs/blob/main/quality-assurance/performance-test-checklist.md) for more information.

## Related documents

- [Why UKHO uses this automated API testing approach](automated-api-testing-explanation.md)
