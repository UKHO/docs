# Mocking HTTP Endpoints

This section covers tool(s) to be used for creating mock HTTP endpoints/APIs for use as test doubles in the absence of real services.

You should use Wiremock instead of building your owm mock HTTP APIs where possible.

## Wiremock

### Uses

Many simple HTTP endpoint mocking problems are solved using Wiremock. Parsing requests for string values, serving templated responses, simulating errors and making subsequent calls to other URIs are all built-in features.

Wiremock stubs can run standalone and be deployed as continuously running services (e.g. to azure as a container instance/app or web app). 

>When using containers refer to the [container policy](/software-engineering-policies/Containers/ContainerPolicy.md).

Wiremock can also be instantiated inline from code or scripts on demand and disposed after a test (e.g. locally or on build/release/test agents). 
>**The .net version of wiremock is an open source project created by an independent team from the Java (wiremock.org) version [open source use policy](/software-engineering-policies/OpenSourceUse/OpenSourceUsePolicy.md). The .net version should be used for .net projects, as the two are versions not fully compatible**

### Examples

WIP

## Bespoke API mocks

Use Wiremock wherever possible for creating HTTP API mocks _unless_ your requirements:

- Are beyond fixed or templated HTTP responses and callbacks (including to other URIs) and basic unhappy path tests, most of which Wiremock can cover.
- Would make a Wiremock based solution more effort or complexity than creating a bespoke mock.

If a mock requires complexity outside of what Wiremock can facilitate, _only_ then build it using known general purpose tools (e.g. in C# using .net), keeping in line with the [software engineering policies](/software-engineering-policies).
