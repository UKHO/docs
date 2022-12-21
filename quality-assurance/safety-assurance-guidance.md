# Safety assurance guidance

This policy describes the Software Engineering Team’s policy and process for ensuring our SOLAS products are created and changed with appropriate consideration given to safety.

## Goals

-	Minimise the causes of product delay and inaccuracy introduced through the software we create.
-	Provide traceability for the delivery of safety requirements
-	Create full delivery team awareness of the safety impact of the software they create
-	Prompt high-value team conversations about safety
-	Not burden teams with low-value bureaucracy
-	Provide safety-related analysis on a just-in-time basis, rather than through wasteful up-front effort

## Overview of approach

Our approach is closely related to our successful Developer Threat Modelling process which is used as part of our security lifecycle.

The test engineer in each delivery team is responsible for enforcing our safety practices.  They run a lightweight process of tagging work items as safety-related and then creating barriers and mitigations to safety hazards.

If teams need more information about the safety context of their work, they will request that it is provided by product owners.  

## Identifying safety-related projects

A team’s product owner is accountable for establishing whether their current delivery is safety-related.

If the delivery is safety-related, then the team’s “definition of done” must contain a statement to the effect that safety modelling must have been carried out for every PBI (work item).

## Process – safety modelling

When developing safety-related software, the following process must be followed:

1. If a PBI is considered as potentially relevant to safety, it must be marked in the work tracking system with the standard tag ‘Safety Pending’.
1. The development team must then discuss safety requirements for that PBI.  This discussion may be at any team event (e.g. refinement, threat-modelling, or a specific safety meeting).
1. Under the direction of the test engineer, the team must discuss whether a failure condition relating to the PBI can cause an error or delay in the product.  If it is decided that this is the case, the PBI must be marked with the standard tag ‘Safety’.  If it is not the case, then all safety tags may be removed.
1. The team treats the potential hazard as a mini [bow tie](https://www.youtube.com/watch?v=P7Z6L7fjsi0) analysis, considering 
    - Barriers to the failure condition happening
    - Mitigations to prevent the failure condition creating error or delay
1. These barriers and mitigations are expressed as acceptance criteria on the PBI.  As a result their implementation, testing and move to production will be traceable in the work tracking tool.

## Accountability for safety modelling

The team’s Lead Developer is accountable for this process being followed.

## Skills

All participants must have a basic understanding of [bow tie](https://www.youtube.com/watch?v=P7Z6L7fjsi0) risk analysis.  Training material is provided by the Test Practice (search for "safety processes for software engineering" on the corporate Learning Management System).

## Obtaining more information for the process

At any point during a delivery, the development team can ask for more information about the safety context of their work, in order to effectively carry out safety modelling. Typically, this will consist of further information about wider IT or business processes, how these contribute to safety, and what mitigations already exist.  The recommended format for this information is the [bow tie](https://www.youtube.com/watch?v=P7Z6L7fjsi0) diagram, but this is not mandated. The Product Owner is responsible for obtaining any such information that the team requires.

## Safety Debt

A team team may discover, in an existing system, improvements that can be made to its safety qualities.  These are a form of technical debt which, with the agreement of the Product Owner, should be recorded in usual way as a PBI as per our [standard guidance](https://github.com/UKHO/docs/blob/main/software-engineering-policies/TechnicalDebt/TechnicalDebtGuidance.md).  As well as the standard technical debt tags (*Technical Debt* and *T1/T2/T3/T4)*, the PBI should have the tag *Safety*.

