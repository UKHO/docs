# Package Adoption

## Overview

UKHO has a [code reuse policy](https://github.com/UKHO/docs/blob/main/software-engineering-policies/CodeReuse/CodeReusePolicy.md) such that, where possible, we should be reusing assets. One way of achieving this is creating packages which can then be integrated by multiple teams. These packages have traditionally been the responsibility of the team that created them; however over time teams have changed according to business requirements and this has left a number of packages "orphaned" e.g. they only receive any attention if an integrating team find a vulnerability or can no longer utilise the package because it is using an out-of-support version of it's language, etc.

## Aim

This policy aims to set out how such packages can be "adopted" so that they are receiving the appropriate level of development attention and maintenance whilst exposing to the business the amount of work involved for the adopting team, both in terms of bringing the package to an acceptable state for initial adoption and ongoing capacity impact of taking on the maintenance. This applies to both currently orphaned packages and those that might be orphaned in the future by business change to teams.

## Methodology

The [guidance](PackageAdoptionGuidance.md) shows a flowchart of the adoption process. At a high level, the following steps should be undertaken when a package that requires adoption is identified:

1. Analysis to quantify the amount of work involved in adoption using the flowchart process (by who?)
2. Analysis outcomes recorded in an [adoption checklist](PackageAdoptionChecklist.md)
3. Analysis outcomes presented to the Support Committee and package proposed for adoption
4. A team accepts the package for adoption and creates stories based on the analysis outcomes
