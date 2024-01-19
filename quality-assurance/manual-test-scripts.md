# Manual Test Scripts

This section describes recommended practices when creating manual test scripts at the UKHO.

## Tools

It is recommended that Azure DevOps Test Plans are used to record scripts.  This has the following benefits:

- Integration with the rest of DevOps: e.g. linking to PBIs, bug tracking, iteration planning etc.
- A test execution environment together with recording tools;
- Shared steps, parameterised tests
- The advantages of a cloud-based tool in terms of cost, availability etc.

In some circumstances it may not be practical to use Azure Devops, typically:

- If there are a large number of test scripts already in existance in some other format (e.g. spreadsheets)
- If the testers are not licensed in the use of Azure Devops, for example during UAT.

In these cases, it is acceptable to use MS Office applications to document tests.  Please see the [guidance on user acceptance testing for a suitable template](./user-acceptance-testing.md)

## Best practices

- Favour _requirement based suites_ where it is possible to link test cases to PBIs.
- Otherwise, _static suites_ can be used
- It is common for test suites to be organised according to the sprint in which they are exercised.  However, at the end of a project these must be re-organised according to functional area (TODO add example)
- Shared steps **must** be used for common functionality in order to make maintenance easier.
- Parameters must be used where the test case can be run with different data, or if inputs should be recorded.
