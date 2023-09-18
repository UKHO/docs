# Container Policy

## Motivation

Containers are in use throughout Data Science both in development, test and production environments. This policy defines the use and deployment for current and future usage.

## Policy 

* Containers are a potential option for architects to utilise (a tool in the toolbox).
* Consideration should be made around why we want to utilise containers.
* Consideration should be made around who will inherit the environments at the outset. i.e. is there expertise in how manage the hosting environment?
* Utilisation of Containers in development and test environments is acceptable without APF review.
* Use of a containerised product should be considered on a case-by-case basis and should form part of the APF approval process
* Containers are a core software and test engineering tool.
* Container [best practices](./ContainerBestPracticies.md) should be adopted by all teams using containers.
* The Lead Software Engineer for each team is responsible for ensuring that this policy is adhered.

## Exclusions

This policy does **not** cover the following items:

- Docker Desktop - which is a licensed product. Approval and license acquisition should follow the standard UKHO policy.
- Kubernetes - the focus of this document is on containers and not their hosting environment.