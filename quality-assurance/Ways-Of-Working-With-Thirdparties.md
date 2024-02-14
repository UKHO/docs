
# Ways of Working with Third Parties
## Overview
This is intended to provide some guidance as to a more fruitful interation with a supplier though setting out 
the terms of engagement.

## When to get involved

The when should the leads testers get involved with third parties, then this really needs to steam right back to the intial WP SoR discussions with the business. At this point it would be easy to have a proper understanding of what the WP is doing to deliver and help in identifying what the QA deliverables need to be. 

## What to expect in terms of deliverables for QA

In terms of the QA deliverables then this will pick up from from the initial discussions around the WP and the SoR and should be included in the WP Sor prior to it being sent out for tender. This will help the suppliers have a clear understanding of the level of testing / coverage and documentation that the UKHO is expecting them to deliver from a QA point of view in order to validate that the solution has met the quality expectations on the UKHO.
as a guide then
1. Test summary report (Required) - this will include the test strategy as well as the summary report
2. unit tests (Required) - to be delivered as part of the code and will be delivered as and when the code is done. This should be part of the Peer review (PR) process where third parties are clasified as partners on WP and integrated into the UKHO teams. The coverage and the quality of the tests written should reduce the risk that failures are detected at later stages. As for situations where the Third party is delivering a stand along solution which we as UKHO will not be maintaining then we should be delivered evidence that the solution has followed rigourous standards that our internal and partner third parties also follow in the form of coverage and quality reports. 
3. Integration tests (Required) - Thes need to be part of the deliverables when the solution is intended to integrate with existing services or the solution has infact got independent modules within its own boundaries that need to confirm that the over arching solution has been tested  eg API should in cover both the automated tests and the manual scripts 
4. All tests need to be environment agnostic and executable from the local ukho developer cartridges
5. Test Data where possible needs to also be agnostic and not be linked to specific data but more around types of data
6. Any mocks / stubs need to be properly documented in what they are replacing, in what environment and the test data they will be mimicing.
7. all mocks /stubs need to be easily setup and run from a ukho side to facilitate fast and effective diagnostics of faults etc.
8. Functional tests need to be clearly defined in terms of the scenarios they are covering and automated where posible these like everything else will need to executed from ukho side and be executable in the pipeline and locally.
9. End-to-End tests - where necessary need to be part of the delivery as these will form the backbone for future support and maintenance
10. Test data needs to be discussed and identified as to who is responsible for supply and maintenance during and after the WP. the data should be able to be loaded on any of the non production type environments and clear documentation as to the processes involved in generating the data in the first place .
11. Non functional testing should be delivered as part of the deliverables and with keeping with UKHO standards tooling. The profile for and general system load should be stated as this will for the basis of under what conditions the performance tests are executed
12. Support and user guides need to be delivered as early as possible and should be a living document during the WP development life and then handed over to support which will maintain their upkeep.
13. Regression suite - Along with the above tests then we need to build out the regression test suite in order that these can be used in the longterm support of the productand they should be aimed at the critical flows to ensure future changes have not prevented the existing functionality from working. 

## Where should the deliverables be delivered

Most of the above documentation and code should be delivered as soon as the functionality is available, during the life of the WP delivery these should be maintained in order that if the team currently performing the task are switched etc then the next team are able to pick up and complete the WP if necessary.

## Why do we need to work with third parties in this way

The benefits of working with our third parties this way is that we are not necessarily tied into them completing the wp End-to-End. 
It allows us to track the progess for the delivery and ensure that the quality is consistent throughout..
This provides a degree of transparency and the business should be in a clear place as to where we are in the delivery process, what has been covered and if there are any defects before the next stage in the process.
