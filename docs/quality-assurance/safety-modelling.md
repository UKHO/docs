## What is a Safety Modelling Workshop and what do you need to consider

It should be focused around the two key areas of

1. Error
2. Delay

This is very much focused around 'What if' questions and then of those 'What if' questions, what would the safety impact of that occuring.

Two examples of what if :

* What if the system fails, how quickly could it be recovered. It that recovery would take 2 days what risk to the mariner would that 
 delay cause. Are there any mitigations that could be put in place, if so then the two days may be acceptable,if not and the delay could
 potentially impact the safety of the mariner then another soloution to the recovery would need to be found.
 
 * What if an ENC was corrupted, what would the safety impact be. Can the system determine a corrupted cell and if so what alert 
   mechanism would need to be in place.
   
   A common mechanism for determining risk and in his case safety is the bowtie method.
   
 [Bowtie in four easy steps](https://www.youtube.com/watch?v=PHbLQWqojC8)
 
 So we would need two bowtie diagrams, one for Error and one for Delay. 
 
 So in the case of error, what are all the possible errors that could occur and what is the potential risk to the safety of the mariner
 of that risk. Likewise what are all the possible delays that could occur and what risk to the mariner do this potentially create. As 
 the short film above describes, this is not a static event, you would run the same exercise a number of times over the course of a 
 project as risks and impacts do change.
 
 [Bowtie in more depth](https://www.youtube.com/watch?v=VsKgSDbHP3A)
 
 
 ## Outcome of a bowtie risk session
 
 * A list of risks and their potential impact to the mariner
 * A list of mitigations/ design changes/tests that may need to be included
 * The bowtie documents should be stored along with the other artifacts such as test approach etc.
 * Relevant PBI's tagged with a safety tag along with relevant details of what will be done to mitigate the safety impact.
  
