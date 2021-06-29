This policy describes the Software Engineering Team’s policy and process for ensuring our SOLAS products are created and changed with appropriate consideration given to safety.

# Goals

-	Minimise the causes of product delay and inaccuracy introduced through the software we create;
-	Provide traceability for the delivery of safety requirements;
-	Create full delivery team awareness of the safety impact of the software they create;
-	Prompt high-value team conversations about safety;
-	Not burden teams with low-value bureaucracy;
-	Provide safety-related analysis on a just-in-time basis, rather than through wasteful up-front effort.

# Overview of approach

Our approach is closely related to our successful Developer Threat Modelling process which is used as part of our security lifecycle.

The test engineer in each delivery team is responsible for enforcing our safety practices.  They run a lightweight process of tagging work items as safety-related and then creating barriers and mitigations to safety hazards.

If teams need more information about the safety context of their work, they will request that it is provided by product owners.  

# Identifying safety-related projects

A team’s product owner is accountable for establishing whether their current delivery is safety-related.

If the delivery is safety-related, then the team’s “definition of done” must contain a statement to the effect that safety modelling must have been carried out for every PBI (work item)

# Process – Safety Modelling

When developing safety-related software, the following process must be followed.

1. If a PBI is considered as potentially relevant to safety, it must be marked in the work tracking system with the standard tag ‘Safety Pending’.
2. The development team must then discuss safety requirements for that PBI.  This discussion may be at any team event (e.g. refinement, threat-modelling, or a specific safety meeting).
3. Under the direction of the test engineer, the team must discuss whether a failure condition relating to the PBI can cause an error or delay in the product.  If it is decided that this is the case, the PBI must be marked with the standard tag ‘Safety’.  If it is not the case, then all safety tags may be removed.
4. The team treats the potential hazard as a mini bowtie analysis, considering i) Barriers to the failure condition happening ii)	Mitigations to prevent the failure condition creating error or delay
5. These barriers and mitigations are expressed as acceptance criteria on the PBI.  As a result, their implementation, testing  and move to production will be traceable in the work tracking tool.


# Accountability for security modelling

The team’s Test Engineer is accountable for this process being followed.

# Skills

All participants must have a basic understanding of bow-tie risk analysis.  Training material will be provided by the Test Practice.

# Obtaining more information for the process

At any point during a delivery, the development team can ask for more information about the safety context of their work, in order to effectively carry out safety modelling. Typically, this will consist of further information about wider IT or business processes, how these contribute to safety, and what mitigations already exist.  The recommended format for this information is the Bowtie diagram, but this is not mandated. The Product Owner is responsible for obtaining any such information that the team requires.
