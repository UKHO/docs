This document outlines some guidelines to consider when reviewing a test and deciding if that test should be automated or not.

There are no hard and fast rules as the decision to automate will depend on many factors, so these are some guidelines you should consider as part of the decsiondecision  making process as to if a Test should or should not be automated.

*Don't be afraid not to automate -- it can be a burden and a drain on resources. Some tests just aren't worth writing and are quicker and more reliable to preform manually*

James Bach -- said it best:

***"I love test automation, but I rarely approach it by looking at manual tests and asking myself "how can I make the computer do that?" Instead, I ask myself how I can use tools to augment and improve the human testing activity. I also consider what things the computers can do without humans around, but again, that is not automating good manual tests, it is creating something new."***

**Longevity**
-------------

How long will the test be in use for, will the value and time to automate it be outweighed by its longevity.

**Testing includes smoke tests and repetitive verification of the same requirement in multiple places**
-------------------------------------------------------------------------------------------------------

**Executing the current manual testing is considered difficult**
----------------------------------------------------------------

**Does the test cover an often used feature path**
--------------------------------------------------

**Functionality Stable but Code Being Changed**
-----------------------------------------------

This would be a good candidate for automation as it is likely the test will end up in the Regression Pack. By this I mean, is the Functionality changing, say adding a new button to a Web Page, or is the Web Page not changing but the code is being amended in some way.  If this is the case then Automating the test makes sense as it will more than likely end up in the Regression Pack or already be there.

**Time Sensitive Tests**
------------------------

Is the test one that requires precise timings or a certain number of actions within a certain period of time? So for example if a Function function has to be completed on a Web Page x number of times then that might be a good use of Automation or of say an order has to be cancelled within a set period of time.

**Integration Complexity**
--------------------------

If the automation depends on multiple systems to run it may not be a good candidate as multiple integration points increase possible environment Failure % which then potentially increase Automation Failures.

**Breadth and Depth**
---------------------

It is better to automate a wide range of Tests across the application rather than lots of test cases on every piece of functionality.

**History of Application**
--------------------------

Has parts of the Application had lots of bugs in the past; those areas  may be good areas to look at for Automation.

**Gold/Silver/Bronze**
----------------------

Another way to look at the tests are dividing up the test cases into Gold, Silver and Bronze in that all Gold Test Cases test critical  functionality and should always be automated. Silver test nice to have functionality and depending on other criteria may be automated. Finally Bronze test cosmetics functionality and should not be automated.

Another way to look at it is, on a Web Page there is a button that creates an order. It is critical that the button work, less critical that button size is correct and even less critical that the font colour is correct, i.e. Gold, Silver and Bronze.

It is also a good way to potentially prioritise tests, you should always run gold, run silver if at all possible and bronze if you have time

**Data Set-Up Tasks**
---------------------

While not a test as such Data Set-Up Tasks are potential candidates for automation especially if they are reparative ones.

**Maintainability**
-------------------

How much maintenance will the test require on an ongoing basis? 

Some examples of this would be:

-   Once it has been written, will it not need updating unless Functionality Changes
-   Each time the Automation needs to run does the Automated Test Case need any set-up work that outweighs the benefit of the Automation (i.e. it is faster to run it manually)
-   Is the test written that any Developer can maintain it or are specific skills/knowledge required?
-   Is the Test Code long and complex that will increase time to maintain/debug and update
-   Will the original Spec Flow need to change
-   Are there multiple Integration points, this can increase the Maintenance Overhead for the Automation.

**Legal and Safety Requirements**
---------------------------------

Automation should always be considered for any tests that are validating Legal, Safety and/or Security Requirements within Code

**Automated Tests at Unit Level**
---------------------------------

These normally provide the highest return on Investment

Don't be afraid to delete tests. Unreliable tests that will require significant effort to fix aren't usually worth the effort.

**Smoke Testing**
-----------------

It is recommended to have automated smoke testing Ffor getting a quick high-level assessment on the quality of a build and making go/no-go decision on deeper testing.

Data **Driven Testing**
-----------------------

Repetitive Tasks, If you routinely spending several days on manual regression in a specific area of the application each time you release, it is probably a good candidate for automation.

**Time to Test**
----------------

How long does the test take to run manually against the time to automate it? If you run test only a few times in the sprint/or Project then it may not be worth automating. Run a test manually that while only taking a short time to run multiple times in a project should be considered for automation.

**Script Death**
----------------

Test Cases die, this can be caused by Functionality Changing, new Applications, and new Processes. At this point script death occurs, you need to review the script and decide if it is worth investing the time in updating it. Does it still serve a useful purpose and provide the return on time that it originally did.

Are all of the Tests in the Regression Pack still valid?

Product **Changing**
--------------------

Is the Functionality/Product changing? If it is then this can cause Script Death very fast as your Automation needs to be constantly changing as well. Better to let the Product settle down even if it is in specific areas before you start Automation.

**Human Error Tests**
---------------------

Tests that tend to have human error are good candidates for automation . Automated tests are just better at this; humans make mistakes -- while computers nearly do not.  So if you have a manual test that is easy to run/do incorrectly when run manually it should be considered for Automation.

**Simple Tests**
----------------

~~I~~f the manual tests are extremely simpley, it normally is not worth automating it.

**Does the Test Require Emotion**
---------------------------------

There is one thing to consider that simply has to do with what a human can do that a computer cannot- **Does the test require determining emotion?** When doing a manual test you could easily recognize if the user interface is simple and easy to use or if the webpage is aesthetically pleasing and has nice visuals. These types of things leave the user feeling happy with the product/site and that is something a computer wouldn't be able to do. For instances like this one, it makes more sense to use human testing rather than automated testing.

**Multiple Hardware and/or Software Platforms and Configuration**
-----------------------------------------------------------------

If say you have an Application that you want to test on multiple types of Browsers or PC Builds then Automation may be a good option to consider.

**Tests that require multiple data sets**
-----------------------------------------

These tests lend themselves very well to automation as Data loading can be time consuming so automating may well be a good use of automation.

Any activity that can save time
-------------------------------

Aitomation is not just for pure testing, you can use it for any activity that if automated can save time.
