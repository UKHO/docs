
# Ways of Working with Third Parties
## Overview
This is intended to provide some guidance as to a more fruitful interation with a supplier though setting out 
the terms of engagement.

## When to get involved

The when should the leads testers get involved with third parties, then this really needs to steam right back to the intial WP SoR discussions with the business. At this point it would be easy to have a proper understanding of what the WP is doing to deliver and help in identifying what the QA deliverables need to be. 

## What to expect in terms of deliverables for QA

In terms of the QA deliverables then this will pick up from from the initial discussions around the WP and the SoR and should be included in the WP Sor prior to it being sent out for tender. this will help the suppliers have a clear understanding of the level of testing / coverage and documentation that the UKHO is expecting them to deliver from a QA point of view in order to validate that the solution has met the quality expectations on the UKHO.
as a guide then
1. Test summary report - this will include the test strategy as well as the summary report
2. unit tests will be delivered as part of the code and will be delivered as and when the code is done
3. Integration tests for API should in cover both the automated tests and the manual scripts 
4. All tests need to be environment agnostic and executable from the local ukho developer cartridges
5. Any mocks / stubs need to be properly documented in what they are replacing, in what environment and the test data they will be mimicing.
6. all mocks /stubs need to be easily setup and run from a ukho side to facilitate fast and effective diagnostics of faults etc.
7. Functional tests need to be clearly defined in terms of the scenarios they are covering and automated where posible these like everything else will need to executed from ukho side and be executable in the pipeline and locally.
8. Test data needs to be discussed and identified as to who is responsible for supply and maintenance during and after the WP. the data should be able to be loaded on any of the non production type environments and clear documentation as to the processes involved in generating the data in the first place .
9. Non functional testing should be delivered as part of the deliverables and with keeping with UKHO standards tooling. The profile for and general system load should be stated as this will for the basis of under what conditions the performance tests are executed
10. 

## Where should the deliverables be delivered

## Why do we need to work with third parties in this way

