# Mocking HTTP Endpoints

This section covers tools in use for creating stub/mock HTTP endpoints/APIs such as for testing a deployed system or testing a service in development in the absence of another required real service.

## Wiremock

### Simple Mocks

Use wiremock to simplify creating mocks/stubs _unless_ your requirements:
- Are beyond fixed or templated HTTP responses and callbacks (including to other URIs) and basic unhappy path tests, most of which Wiremock can cover.
- Would make a Wiremock based solution more effort or complexity than creating a bespoke mock.

Many simple HTTP endpoint stubbing use cases are solved problems for wiremock.

#### Use Cases

Wiremock stubs can run standalone and can be deployed as continuously running services (e.g. to azure as a container or web app). 

When using containers refer to the [Container Policy](software-engineering-policies/Containers/ContainerPolicy.md)

Wiremock can also instantiated inline from code or scripts on demand and disposed after a test (e.g. locally or on build/release/test agents). 
>NB: The .net (which you would use inline in a .net project) version is separate from the Java version.



#### Versions
Use the free open source wiremock.org (Java version) wherever possible as this has the highest chance of continuing to be supported by the maintainers.

>To instantiate wiremock inline from a .net project there is a .net version of Wiremock distributed via nuget, but be aware that the .net stubbing configurations (declared using JSON) are not compatible with the java version. The .net version is maintaned entirely separately from the Java version. **Consider if the .net version is likely to be well supported enough for your needs.**

#### Examples

For a demonstration of the two versions of wiremock, see [The Wiremock Primer Video](https://ukho.sharepoint.com/:v:/r/sites/SoftwareEngineeringSupport/Shared%20Documents/General/Technical%20Overviews/Wiremock%20Primer-20230802_110158-Meeting%20Recording.mp4?csf=1&web=1&e=gCPQhP&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

For an example Wiremock repo allowing deployment and configuration of wiremock as a service directly from the official docker container to an azure web app see the [Wiremock Template](https://github.com/UKHO/wiremock-template)

#### Alternatives

Alternative products to aid in mocking include [Prism](https://stoplight.io/open-source/prism) which is node based.

## Bespoke API stubs

If your mock requires greater complexity or is outside what wiremock can facilitate then build your mock in line with the software [engineering policies](software-engineering-policies).


