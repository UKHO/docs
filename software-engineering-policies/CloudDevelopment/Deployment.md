# Deployment

[Back to main Readme](README.md)

## Code Scanning

Before any code is pushed into an environment it should undergo our SAST checks from [Snyk](https://app.snyk.io/login) to try and ensure that the code we are creating is not going to leave us vulnerable. Any issues found that are high or above should be dealt with before doing any deployments to an environment. Where you feel there may be an exception to this, you can reach out to our [ITSO team](mailto:ukho-itso@ukho.gov.uk) or your Lead Developers for advice on mitigation/suppression of these issues.

## Container Scanning

Container images being produced for deployment into an environment should be scanned by a preferred scanning solution to ensure that we are not deploying vulnerable software. Details on our container policies can be found in the [Containers area.](/software-engineering-policies/Containers/)

## Dependency Checking for Cloud Applications

It is important that we do not allow our dependencies to be the weak link in our security chain. Pipelines should use the preferred Software Composition Analysis (SCA) scanning tool that prevents any dependencies with high or above vulnerabilities to be released. Where you feel there may be an exception to this, you can reach out to our [ITSO team](mailto:ukho-itso@ukho.gov.uk) or your Lead Developers for advice on mitigation/suppression of these issues.

[Back to main Readme](README.md)
