# Why Container Security Matters

This document explains the context for the [Container Policy](containers.md). The policy remains the authoritative source for requirements.

## Context

Containers are used in Data Science and Software Engineering across development, test, and production environments. The policy applies to current and future container use and defines expectations for secure development and deployment.

## Benefits and trade-offs

Containers give engineering teams a way to develop and deploy applications robustly without always having to accommodate the hosting platform. This shifts more security responsibility towards development teams and away from operations teams.

The policy brings image, Dockerfile, and deployment practices together. These include linting Dockerfiles and scanning container images to detect issues and vulnerabilities, limiting dependencies and privileges, controlling network access, and monitoring container health. Minimizing image dependencies also reduces the attack surface and image size.

The guidance distinguishes required deployment controls from practices that are recommended or optional. This keeps mandatory controls, such as vulnerability scanning and deployment configuration, distinct from approaches teams should or could adopt.

For the practical steps, see [How to apply container security guidance](containers-how-to.md). The policy remains the authoritative source for requirements.
