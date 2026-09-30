# Why Container Security Matters

This document explains the context for the [Container Policy](containers.md). The policy remains the authoritative source for requirements.

## Context

Containers are used in Data Science and Software Engineering across development, test, and production environments. The policy applies to current and future container use and defines expectations for secure development and deployment.

## Benefits and trade-offs

Containers give engineering teams a way to develop and deploy applications robustly without always having to accommodate the hosting platform. This shifts more security responsibility towards development teams and away from operations teams.

Using containers lets engineering teams develop and deploy applications robustly without always having to accommodate the hosting platform. The trade-off is that security responsibility shifts more towards development teams and away from operations teams.

The policy recommends lean images because removing unnecessary dependencies reduces the attack surface and image size. It advises against running as root because the default root user on Linux container images can increase the impact of an attack. Vulnerability scanning addresses the risk that third-party dependencies become a weak link; high or higher findings are treated as release blockers and investigated for possible fixes.

For the practical steps, see [How to apply container security guidance](containers-how-to.md). The policy remains the authoritative source for requirements.
