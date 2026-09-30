# How to Apply Container Security Guidance

This how-to applies the [Container Policy](containers.md) when building and deploying a container. The policy remains the authoritative source for requirements.

## Build the container image

1. Select the leanest image that contains the dependencies required to run the application, as the policy recommends.
2. The policy recommends starting with the Alpine version. Move to a fuller version only if Alpine would require too many Dockerfile modifications.
3. Consider basing a new image on one of the UK Hydrographic Office's [approved DockerHub images](https://hub.docker.com/u/ukhydrographicoffice). Their Dockerfiles are in the [UKHO dockerimages repository](https://github.com/UKHO/dockerimages).

## Harden the Dockerfile

Apply the Dockerfile practices in the [policy](containers.md#image-and-dockerfile-practices), including linting, limiting dependencies and privileges, configuring required secrets, maintaining dependencies, and using multi-stage builds where suitable and possible.

Create a non-root user with access only to the service code, as advised by the policy. For .NET 8.0, a non-root user is [provided by the platform](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8/containers#non-root-user).

For general guidance, see Docker's recommendations for [writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/), [developing with Docker](https://docs.docker.com/develop/dev-best-practices/), and [secure development with Docker](https://docs.docker.com/develop/security-best-practices/). The policy's listed practices take precedence over that guidance. For an additional Dockerfile guide, see the [Sysdig article](https://sysdig.com/blog/dockerfile-best-practices/).

## Configure the deployment

Configure the deployment and environment using infrastructure as code. Then work through the [deployment controls in the policy](containers.md#deployment-practices), including resource limits and requests, secrets, health monitoring, HTTPS, logs, and infrastructure access. Apply the listed recommended network and monitoring practices as appropriate. The policy also identifies optional development and testing approaches.

## Verify before release

1. Before releasing the container into an environment, run a vulnerability scan using a tool of your choice.
2. Do not allow high or higher findings; these should stop the pipeline.
3. Investigate findings for possible upgrades or fixes.
4. If no fix is available and you believe the finding will not affect your system, ask the Security team or your Lead Developers for advice on mitigation or suppression.
