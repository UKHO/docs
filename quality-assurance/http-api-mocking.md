# Mocking HTTP Endpoints

This section covers tools in use for creating stub/mock HTTP endpoints/APIs such as for integration testing a deployed system or testing a service in development in the absence of another required real service.

## Wiremock

### Simple Mocks

Wiremock can simplify creating mocks/stubs _unless_ your requirements:
- Are beyond fixed or templated HTTP responses and callbacks (including to other URIs) and basic unhappy path tests, some of which Wiremock can cover.
- Would make a Wiremock based solution more effort or complexity than creating a bespoke mock.

Many simple HTTP endpoint stubbing use cases are solved problems for wiremock.

### Use Cases

Wiremock stubs can run standalone and can be deployed as continuously running services (e.g. to azure as a container or web app). 

When using containers refer to the [Container Policy](software-engineering-policies/Containers/ContainerPolicy.md)

Wiremock can also instantiated inline from code or scripts on demand and disposed after a test (e.g. locally or on build/release/test agents). 
>NB: The .net (which you would use inline in a .net project) version is separate from the Java version.



### Versions
Use the free open source wiremock.org (Java version) wherever possible as this has the highest chance of continuing to be supported by the maintainers.

>To instantiate wiremock inline from a .net project there is a .net version of Wiremock distributed via nuget, but be aware that the .net stubbing configurations (declared using JSON) are not compatible with the java version. The .net version is maintaned entirely separately from the Java version. **Consider if the .net version is likely to be well supported enough for your needs.**

### Examples

For a demonstration of the two versions of wiremock, see [find Gareth's primer]

For an example Wiremock repo allowing deployment and configuration directly from the official docker container to an azure web app [import ]


## Bespoke API stubs

If your mock requires greater complexity or is outside what wiremock can facilitate then build your mock in line with development best practices using .net tools. [Refer to developemnt policy]
