# Why UKHO Uses This Automated API Testing Approach

This policy is intended to keep API testing consistent with the .NET technology standard used at UKHO while supporting reliable integration checks.

## Why `WebApplicationFactory` is preferred

[WebApplicationFactory](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-8.0) is the preferred option for integration tests because it creates a test server that hosts the application under test in a controlled and isolated environment. This makes it suitable for validating business logic while keeping the test environment stable.

The source also notes that, when applicable, tests should use a real relational database instead of an in-memory database to capture the full range of interactions and potential issues. External services can still be mocked to isolate the API under test.

The policy also emphasises consistency, reliability, and CI integration so that tests are not dependent on external environments and remain fit for automated quality checks.

## Why deployed-instance testing is limited

Testing against deployed instances is reserved for cases where the environment itself is part of the requirement or where test isolation is not practical.

This includes legacy applications that cannot readily use `WebApplicationFactory`, security checks that need a production-like environment, safety and compliance testing for APIs with safety requirements, and disaster recovery validation.

## Why the language and clients are constrained

The source states that APIs at UKHO are typically developed in C#, and that automated integration and API tests should also be created in C#. The policy lists two approved clients for API tests, [HttpClient](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient) and [RestSharp](https://restsharp.dev/intro.html#introduction), to keep the testing approach consistent and well supported.

See the [Automated API Testing Policy](automated-api-testing.md) for the authoritative requirements.
