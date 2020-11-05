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
