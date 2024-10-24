# Container Policy

## Motivation

Containers are in use in Data Science and Software Engineering, in all environments of development, test and production. This policy defines the secure development and deployment for all current and future usage.

## Policy

* Containers are a potential option for architects to utilise (a tool in the toolbox).
* Consideration should be made around why we want to utilise containers.
* Consideration should be made around who will inherit the environments at the outset. i.e. is there expertise in how manage the hosting environment?
* Utilisation of Containers in development and test environments is acceptable without APF review.
* In the Software Engineering department, deployment of containers into live will need to be approved by The Head of Software Engineering in conjunction with the Principal and Lead Software Engineers, until agreement is reached via APF forum.
* Containers are a core software and test engineering tool.
* [Container best practices](./ContainerBestPractices.md) should be adopted by all teams using containers.
* The Lead Software Engineer for each team is responsible for ensuring that this policy is adhered.

## Security

Use of containers provides a convinient way for engineering teams to develop and deploy applications in a robust way without the overhead of always having to acomodate the hosting platform. However this can come at a price due to security being shifted more towards the development team rather than the operations teams. To ensure we are doing the best we can when it comes to containerisation safety, the following should be adhered to.

### Container Image
The container image being selected should be the leanest image for what you require. This means using an base image that contains the minimum amount of dependencies required to run your application. What this does is reduce the attack surface a threat actor has to perform malicious actions within your service. It also has the added benefit of reduced container image size as we are not holding dependencies we are not using.

As a recommendation whenever picking a container image, we should start with the alpine version first and only moving to a fuller version if we need to make too many modifications to the dockerfile.

### User Access
The default user on a Linux container image is a root user which can be where all problems start if an attack is made on your service. To combat this it is advised that a non-root user is created that is only given access to your service code. If developing in Dotnet 8.0 this is [provided for you](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8/containers#non-root-user).

### Container Scanning
It is important before we release any containers into an environment that we perform a vulnerability scan to ensure that 3rd party dependencies are not going to be the weak link in our security chain. Therefor using the tool of choice performing a scan and not allowing anything high or above is the best way to protect ourselves. Anything found when scanned at this level should stop the pipeline and investigated for potential upgrades/fixes. If no fixes are found and you feel that this will not affect your system, you can reach out the Security team or your Lead Developers for advice on mitigation/suppression of these issues.

## Exclusions

This policy does **not** cover the following items:

* Docker Desktop - which is a licensed product. Approval and license acquisition should follow the standard UKHO policy.
* Kubernetes - the focus of this document is on containers and not their hosting environment.
