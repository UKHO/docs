# What is safety ?

So the first question is what is safety in relation to UKHO products:

* An error in a product that could potentially impact the safety of the mariner
* A delay to the mariner that could potentially impact the safety of the mariner

A example, an error in a product that it does not display wreck information correctly, a delay to the mariner could be a new wreck takes longer than the SLA to be advised to the mariner.

It is important to note that safety exists within the boundry of our control, so for example if we provide data to a 3rd party then as long as the data we sent is correct and tinmely , should the 3rd party incorrectly use the data then the safety risk is not ours.

But just becaause a safety risk exists does not mean it automatically needs to be addressed, it depends on the risk and any mitigations that may be in place. An example of this could be that a distributor cannot order/print a chart , while this is an error, is it a safety issue if the mitigation is that a ship would not sail until they could produce a chart. 

# What is safety testing

* Safety testing in software systems aims at optimizing system safety in the design, development, use, and maintenance of software  
  systems and their integration with safety-critical hardware systems in a production environment.

## Aspects  of Software Safety:

* Functioning software should not generate hazards - Eg: Guiding the state of the art aircraft should NOT steer into the ocean
* Monitoring systems must perform flawlessly - Eg: Back-up computer Should start automatically when primary fails

## Goals in Safety Testing:

* In complex systems where there are many interactions involved, the safety-critical functionality should be identified and thoroughly 
  analyzed.
* Contributing factors and resultant hazards associated with the system are identified and eliminated.
* The number of safety critical interfaces are kept low to avoid injury or death.
* Safety attributes are to be addressed as part of all the levels of software testing.


# What does this mean for delivery teans

We need to cionsider the safey and the potential safety implications of errors and/or delays to the products that we are working on. 
So we actually consider safety all the time, we just probably don't really think about it in that way. This provides some guidelines to think about when planning what type of tests you may wish to design for a chamge.

Safety assurance will be modelled on the threat modelling process that we already follow for security risks, in this case it is safety risks.


# Prior to sprints

* A high level review of the product and any known safety case areas
* The test approach document to include how safety issues will be asseed (Much like security issues are)


## Each Sprint

* A Safety Modelling Workshop (This could be simply an exercise on a PBI by PBI basis of considering any safety case implications). Any
  PBI that is considered to have a safety case implication to be tagged with safety.
* Tag any PBI's that have a safety implication with a tag
* All requirements have acceptance criteria
* All acceptance criteria have a test(s) linked to them
* All requirements (PBI’s) have acceptance criteria
* There is a regression pack (If applicable)
* An auditable history of test runs (Automated and manual) is kept
* We have run a risk review so that the functionality with the largest safety impact is considered and potential priority (This is 
  something that the product owner would sign off on)





