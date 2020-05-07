## What is a Safety Modelling Workshop and what do you need to consider

It should be focused around the two key areas of

1. Error
2. Delay

This is very much focused around 'What if' questions and then of those 'What if' questions, what would the safety impact of that occuring.

## Safety Modelling

 [Bowtie Diagram}(https://www.acrosssafety.com/bowtie-resources/bowtie-articles/bowtie-method-tip-hazards-and-top-events/)
 
 [Bowtie in four easy steps](https://www.youtube.com/watch?v=PHbLQWqojC8)
 
  
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
 * Consideration of the whole system interaction and possible risks(This will develop as the system develops)
 * There will be some risks that cannot be mitigated against (These should be identfied and documented that the risk cannot be
   mitigated. These could include such as the system deliverying information correctly, the use then takes that information and 
   misinterprets the data.
   
 ** How often
 
 If possible add onto your current threat modelling meeting. Depending on the application you may well be able to bring forward
 previous bowties for that application as a starting point. 
 
 
 ** What tools to use
 
 Word, visio etc. Anything that lets you represent the bowtie diagram.
 
## In-Depth Reading

Two examples of what if :

* What if the system fails, how quickly could it be recovered. It that recovery would take 2 days what risk to the mariner would that 
 delay cause. Are there any mitigations that could be put in place, if so then the two days may be acceptable,if not and the delay could
 potentially impact the safety of the mariner then another soloution to the recovery would need to be found.
 
 * What if an ENC was corrupted, what would the safety impact be. Can the system determine a corrupted cell and if so what alert 
   mechanism would need to be in place.
   
 * You may need to test to understand what systemtc failures could occure to understand the risk and impact. So if you increase volumes 
   by 50% does that crash the system, if it does then how quickly can it be recovered. This type of testing is to understand and see 
   what happens, it provides answers to some of the 'What if'. Unless you test you will not necessarily know , you may have an idea but 
   you need to test tovalidate or not that idea.
   
   # Consider the whole system
   
   It is not enough just to consider individual PBI's but also how the whole system will interact with each other, individual elements 
   may be fine when run in isolation but when combined and under certain conditions they may trigger abnomral events , which could 
   impact the safety of the system.
   
   Focus on the intergration and relationships between software/hardware needs therefor to be considered as well as individual elements.
 
   # Consider the how the system will be used
   
   Besides how the system will operate, consideration needs also to be given to how the end use will operate/intreact 
   with the system.
   
   * Can the user select options in such a way as to be provided with incorrect information
   * Is the information presented to the user that does not cause confusion/misunderstanding (UX Design)
   * What other ways that the user could use the system regardless of if they should that could impact safety
  
  
 
 
