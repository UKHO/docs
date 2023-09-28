# Open Source Governance Checklist

## Identifier

(e.g. repo name)

## Technical owner

The lead responsible for the repo

## Description of functionality

Must contain enough detail to allow assessment of whether it contains intellectual property that we need to protect.

## Security

*How has security been considered?*

Has application code been scanned with security tooling and issues corrected?
> This must be done for code supported by our SAST tooling

Has the application been threat modelled during development and the evidence captured within TFS (or similar)?
> Threat modelling must be carried out for all application code, this evidence needs to be reviewed by expert or lead engineer

Has the code been double-checked for security credentials, keys etc.?
> Give details of who has double-checked the code

Is a disclosure process in place and linked from the codebase?
> Use the standard disclose text

## Quality

*How has code quality been considered?*

Does the quality of the code reflect our ambitions for high quality code, in terms of being clean, well-tested etc.
> Correct answer = yes!

Has all code been reviewed?
> Correct answer = yes!

Has the open-sourced codebase had its history removed?  If not, have all check-in comments been reviewed?
> Describe the steps taken to prevent inadvertent disclosed in comments / etc.

Does the codebase contain all documentation and configuration elements required to build and verify the software?
> A user should be able to build / run tests etc. based on what is in the repo

## Contributions

*Has the handling of contributions considered?*

Are contributions explicitly encouraged in the codebase
> For example, have you enabled the use of issues and provided a CONTRIBUTING.md?
> Think very carefully before inviting change, as you will then have to answer 'yes' to the next two questions

Is a process for responding to issues defined?
> Describe in detail the process by which you are going to ensure that issues are responded to in a timely manner

How is this process resourced?
> Describe how you have made sure that time is available to carry out the process described above.  For example, has the relevant manager agreed for time for time to spent on this?
