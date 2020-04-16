# What are safety assurance guidelines

Error in products and a delay to the marrinor, .Safery hazards
 
Funtional safey  case
 
AVCS/SNC have a fubnctional safety casse
 
Sepetaing an error from a safery error
 
Safery incorrect depth
 
Error internal processes
 
Chart would not print - safery error, safety critcal
 
Without mififgations -
 
Functional safety case- for the product
 
aDMIRALTY SALING DIRECTIONS IS on the list
 
Link to where the safety case - send me to link
 
controls to mitigate the error or delay



They are guidlines to consider when looking at how we approach what/how/when we test software changes. We need to consider not just the functionality but also the safety implications of if something fails/does not work as expected could it imopact teh safety of teh product. A example of this is could be that a system could be updated twice an hour, but only actually works once an hour. While that clearly is a failure, if the system crashes and takes 4 hours to recover , is that a potential larger safty implication ?.

So we actually consider safety all the time, we just probably don't really think about it in that way. This provides some guidelines to think about when planning what type of tests you may wish to design for a chamge.

Safety assurance will be modelled on the threat modelling process that we already follow for security risks, in this case it is safety risks.

What is Safety Testing?

Safety testing in software systems aims at optimizing system safety in the design, development, use, and maintenance of software systems and their integration with safety-critical hardware systems in a production environment.

Aspects of Software Safety:

Functioning software should not generate hazards - Eg: Guiding the state of the art aircraft should NOT steer into the ocean


Monitoring systems must perform flawlessly - Eg: Back-up computer Should start automatically when primary fails


Goals in Safety Testing:

In complex systems where there are many interactions involved, the safety-critical functionality should be identified and thoroughly analyzed.


Contributing factors and resultant hazards associated with the system are identified and eliminated.


The number of safety critical interfaces are kept low to avoid injury or death.


Safety attributes are to be addressed as part of all the levels of software testing.



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


Deployments into live - traceability back to code that was tested


