# What are safety assurance guidelines

They are guidlines to consider when looking at how we approach what/how/when we test software changes. We need to consider not just the functionality but also the safety implications of if something fails/does not work as expected could it imopact teh safety of teh product. A example of this is could be that a system could be updated twice an hour, but only actually works once an hour. While that clearly is a failure, if the system crashes and takes 4 hours to recover , is that a potential larger safty implication ?.

So we actually consider safety all the time, we just probably don't really think about it in that way. This provides some guidelines to think about when planning what type of tests you may wish to design for a chamge.

# Prior to sprints

* A high level review of the product and any known safety case areas
* The test approach document to include how safety issues will be asseed (Much like security issues are)


## Each Sprint

* A Safety Modelling Workshop (This could be simply an exercise on a PBI by PBI basis of considering any safety case implications)
* Tag any PBI's that have a safety implication with a tag
* All requirements have acceptance criteria
* All acceptance criteria have a test(s) linked to them
* All requirements (PBI’s) have acceptance criteria
* There is a regression pack (If applicable)
* An auditable history of test runs (Automated and manual) is kept
* We have run a risk review so that the functionality with the largest safety impact is considered and potential priority (This is 
  something that the product owner would sign off on)


Deployments into live - traceability back to code that was tested

tag PBI with a safety tag ?
Use threat modellng model
