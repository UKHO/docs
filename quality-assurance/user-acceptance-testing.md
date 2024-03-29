## What is User Acceptance Testing

UAT means testing software against its business requirements i.e. does it solve the business problem as intended?  UAT should cover key business rules and logic, and all the important user journeys that are important for the businees

## Who carries out UAT

Business users are best placed to do UAT, as they are aware of the reality of their business, business processes, roles etc.  Sometimes, a tester will act in place of users.

## When does UAT happen

It will typically take place once a functioning system has been delivered, often after system testing.  Note that UAT needs to have the normal rigour applied with regards to specifying environments and software versions, so that any faults can be properly attributed and reproduced.

## Is UAT always necessary

No.  If a project been delivered with an agile process, each increment of the software should have shown to its users during development.  In this case UAT might not be necessary.

UAT is most likely to be required when software has been delivered by external partner following a waterfall process.  Note that in these cases, the UAT phase needs to be included in the Statement of Requirements we send to the supplier, detailing the partner's involvement, entry and exit criteria, etc.

# What needs to be tested

The best way of identifying tests is to survey users about the business processes they carry out.  Alternatively, business requirements documents can be used.

# Does UAT need to be scripted

UAT must be scripted, but this should ideally be at a high level, in only enough detail to make the intended outcomes clear.  The aim should be for users to use the software as they would normally do (i.e. to try and carry out business tasks, using any manuals etc. if necessary), rather than following step-by-step instructions.

# What tools should be used

Although use of Azure Devops is recommended, it is common for this to *not* be used.  This is due to lack of licenses and skills for the participants.  MS Excel, or any suitable software that the users are comfortable with may be used to store scripts and record issues.  The following UAT template can be used to document requirements, test cases and bugs found during UAT testing. Bugs then need to be translated into the development team's work tracking software (if there is development work required. If the project consists of product(s) purchased from 3rd party suppliers, then the bugs need to be raised as defects with the suppliers).  When using other tools, care should be taken to version control them.

[UAT Test Template.xlsx](https://github.com/UKHO/docs/files/13500038/UAT.Test.Template.xlsx)

# The role of the tester in UAT

The UKHO tester does the following:

- Ensures the goals and practices of UAT are clear to all stakeholders
- Establishes tooling and ways of working
- Works with users, business analysts and other stakeholders to identify and document tests
- Ensures that the planned UAT has sufficient coverage to verify the software, possibly mapping documented business requirements back to tests
- Works with users to plan the work
- Works with users to plan and create test data
- Coaches users in testing techniques, including ways to document faults.

