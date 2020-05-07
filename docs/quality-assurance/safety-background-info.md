# In-Depth Reading

## Bowtie in detail
 
 
 [Bowtie in more depth](https://www.youtube.com/watch?v=VsKgSDbHP3A)
 
 [Bowtie the process](https://www.youtube.com/watch?v=dpGKHncw-d8)
 
## Other things to consider

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
   
   The intergration and relationships between software/hardware needs therefor to be considered as well as individual elements.
 
   # Consider the how the system will be used
   
   Besides how the system will operate, consideration needs also to be given to how the end use will operate/intreact 
   with the system.
   
   * Can the user select options in such a way as to be provided with incorrect information
   * Is the information presented to the user that does not cause confusion/misunderstanding (UX Design)
   * What other ways that the user could use the system regardless of if they should that could impact safety
   
   
   
  
  
 
 
