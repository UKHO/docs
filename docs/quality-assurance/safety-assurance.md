# What is safety ?

So the first question is what is safety in relation to UKHO products:

* An error in a product that could potentially impact the safety of the mariner
* A delay to the mariner that could potentially impact the safety of the mariner

A example, an error in a product that it does not display wreck information correctly, a delay to the mariner could be a new wreck takes longer than the SLA to be advised to the mariner.

It is important to note that safety exists within the boundry of our control, so for example if we provide data to a 3rd party then as long as the data we sent is correct and tinmely , should the 3rd party incorrectly use the data then the safety risk is not ours.

But just becaause a safety risk exists does not mean it automatically needs to be addressed, it depends on the risk and any mitigations that may be in place. An example of this could be that a distributor cannot order/print a chart , while this is an error, is it a safety issue if the mitigation is that a ship would not sail until they could produce a chart. 

This all links into a wider piece of work across all of UKHO as we look to improve the maturity of our safety culture.

# What is safety testing

* Safety testing in software systems aims at optimizing system safety in the design, development, use, and maintenance of software  
  systems and their integration with safety-critical hardware systems in a production environment.

## Aspects  of Software Safety:

* Functioning software should not generate hazards - Eg: Guiding the state of the art aircraft should NOT steer into the ocean
* Monitoring systems must perform flawlessly - Eg: Back-up computer Should start automatically when primary fails.

It should be noted that in the past individual components were often the cause of safety issues, but more issues are now being identfied as  'Component Interaction Accident'. That is on their own individual elements work as designed but when combined and under the right conditions can become or tigger an unsafe condition.

## Goals in Safety Testing:

* In complex systems where there are many interactions involved, the safety-critical functionality should be identified and thoroughly 
  analyzed.
* Contributing factors and resultant hazards associated with the system are identified and eliminated.
* The number of safety critical interfaces are kept low to avoid injury or death.
* Safety attributes are to be addressed as part of all the levels of software testing.

# Some general principles

* * Reliance on manual processes is minimised
* Best pratices in software and test engineering are applied
* Sound human engineering principles are applied to the design of the software use interface to minmise the probability of human error
* Software with safety critical functionality must have clear evidance that all safety requirements have been met or relevant 
  mitigations have ben agreed.
* Failure modes, including hardware, software, human and system are addressed in the design of the software.
* Speak up, if you feel that safety is being compmised in some way, raise it!!!!!.
* Exercise judgement, not the same as going out on a limb but exercising common sense
* ALARP – As low as reasonably practicable

# What does this mean for delivery teans

We need to consider  the safey and the potential safety implications of errors and/or delays to the products that we are working on, as well as how they will be maintained going forward. 
So we actually consider safety all the time, we just probably don't really think about it in that way. This provides some guidelines to think about when planning what type of tests you may wish to design for a chamge.

Safety assurance will be modelled on the threat modelling process that we already follow for security risks, in this case it is safety risks.



# Prior to sprints

* A high level review of the product, the aim to identify the key areas that could cause errors and delay
* The test approach document to include how safety issues will be asseed (Much like security issues are)
* What is the expected SLA for the product
* What recovery time is expected
* How will the product be maintained/updated going forward minimising any safety impacts

The aim of considering these at a high level initially will help potentially the technology to be used, the building of the code as well as the types of tests that my be required.


## Each Sprint

* A Safety Modelling Workshop (This can be combined with the current threat modelling workshop) This could be simply an exercise on a 
  PBI by PBI basis of considering any safety case implications). Any PBI that is considered to have a safety case implication to be
  tagged with safety. This should help drive :
* What if PBI's, beside the happy path acceptance criteria , testing for instance that if the system fails it can be recovered within
* This may and should create new PBI's that are effectiveky negative requirements i.e what if this fails,can it be recovered in time that does not imoact safety (error or delay)  a time period that does not impact the mariner should also form part of testing phase. 
* Tag any PBI's that have a safety implication with a tag
* Against PBI's with a tag of safety , the decesions around the consideration and decesions are documented and agreed.
* All requirements have acceptance criteria
* All acceptance criteria have a test(s) linked to them
* All deployed code is linked back to relevant tests
* All requirements (PBI’s) have acceptance criteria
* There is a regression pack (If applicable)
* An auditable history of test runs (Automated and manual) is kept
* We have run a risk review so that the functionality with the largest safety impact is considered and potential priority (This is 
  something that the product owner would sign off on)


## Prior to go live

* Is the system compliant and certified
* Can we deploy using automated deployment scripts to minimise risk
* There is a clear audit of deployed changes back to tests and requirements


## What is a Safety Modelling Workshop and what do you need to consider

Link to Safety Modelling Workshop
