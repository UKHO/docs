# Safety Assurance Guidelines

## What is Safety Modelling

Safety Modelling is focused around two key areas:

* Error (Data Integrity)
* Delay

This is centered around asking *What if* questions to determine safety risks and the likelihood and safety impact of those risks occurring.

## Bowtie Method

> The bowtie method is a risk assessment method that can be used to analyse and communicate risk scenarios. The method takes its name from the shape of the diagram that you create, which looks like a man’s bowtie. A bowtie diagram mainly does two things. First of all, a bowtie gives a visual summary of all plausible incident scenarios that could exist around a certain hazard. Second, the bowtie represents what an organisation does to control those scenarios by identifying safety barriers.

See [Bowtie in four easy steps](https://www.youtube.com/watch?v=PHbLQWqojC8)

## How should we use it

### At the start of a project

* Carry out a bowtie analysis of the project to identify potential areas of safety that need to be considered (there are a number of safety assurance experts who can help in carrying out bowtie analysis).

### During Sprints

* Tag relevant PBI's with a `safety` tag along with details of how the safety risk can be mitigated. If it is not clear whether there is a safety impact use a `safety pending` tag until this ambiguity is resolved.
* Consider testing the risk mitigation. There will be a balance between effort required to test against the likelihood and impact.
* Let the PO make final decisions on the safety impact/consequence. The PO will engage with other SME's to determine if the safety risk is acceptable. This may  
  mean that although there is a potential safety risk that risk is deemed manageable or may require remedial action. This detail should be captured in a lightweight 
  manner within the relevant PBI.
 
## General Principles 

* The safety of a system can only be determined in the context of the whole (all of the component parts).
* Reliable software does not equal safe software.
* Safety Modelling using the Bowtie method is carried out at the right level (project level normally gives the best return).
* Software with safety related functionality must have clear evidence that all safety requirements have been met or relevant mitigations have been agreed.
* Failure modes, including hardware, software, human and system are addressed in the design of the software.
* The test engineers in the team have accountability for making sure safety is considered as part of their overall remit but the whole team have responsibility for inputting into the process.
* Reliance on manual processes is minimised.
* Best practices in software and test engineering are applied.
* Sound human engineering principles are applied to the design of the software user interface to minimise the probability of human error.
* Speak up, if you feel that safety is being compromised in some way, raise it!
* Exercise judgement, not the same as going out on a limb but exercising common sense.
