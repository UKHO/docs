# Mocking HTTP Endpoints

This section covers tool(s) to be used for creating mock HTTP endpoints/APIs for use as test doubles in the absence of real services.

## Order of preference

We should mock services in the following order of preference:

1. WireMock instantiated in code
1. Deployed WireMock instances
1. Bespoke deployed mock services

In general, code for mocks should live in the same repository as the tests which use them, not with the service that is being mocked.

## WireMock

### Uses

Many simple HTTP endpoint mocking problems are solved using WireMock. Parsing requests for string values, serving templated responses, simulating errors and making subsequent calls to other URIs are all built-in features.

WireMock stubs can run standalone and be deployed as continuously running services (e.g. to azure as a container instance/app or web app). 

>When using containers refer to the [container policy](/software-engineering-policies/Containers/ContainerPolicy.md).

WireMock can also be instantiated inline from code or scripts on demand and disposed after a test (e.g. locally or on build/release/test agents). 
>**The .net version of WireMock is independent from the Java (wiremock.org) version. See the [open source use policy](/software-engineering-policies/OpenSourceUse/OpenSourceUsePolicy.md) when assessing the stuitability of open source software. The .net version should be used for .net projects, as the two versions are not fully compatible.**

### Examples

The simplest way to use WireMock in tests directly in your test project is to pull in the library [WireMock.Net](https://www.nuget.org/packages/WireMock.Net) and then use a `WireMockServer` object like `server` below

```

var server = WireMockServer.Start();
        server.Given(Request.Create().WithPath("/mock").UsingGet())
              .RespondWith(Response.Create()
                    .WithStatusCode(200)
                    .WithBody("Hello world!")
            );

```

This will create an http mock service that responds to requests as defined. You can use `server.Urls` to find the endpoint url if needed.

For an example of using WireMock as a standalone app that can be deployed, such as for deployed system level testing, see [this example template](https://github.com/UKHO/TemplateForWiremock).

See the [WireMock.net wiki](https://github.com/WireMock-Net/WireMock.Net/wiki) for the complete guide to usage.

## Bespoke API mocks

Use WireMock wherever possible for creating HTTP API mocks _unless_ your requirements:

- Are beyond fixed or templated HTTP responses and callbacks (including to other URIs) and basic unhappy path tests, most of which WireMock can cover.
- Would make a WireMock based solution more effort or complexity than creating a bespoke mock.

If a mock requires complexity outside of what WireMock can facilitate, _only_ then build it using known general purpose tools (e.g. in C# using .net), keeping in line with the [software engineering policies](/software-engineering-policies).
