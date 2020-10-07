# Open Source Contribution

## Applicability

This policy must be applied by those:

- open sourcing UKHO code in public repositories that we control;
- contributing code to open source software which is controlled by others;
- paying others to enhance open source software for our use.

## Introduction

We are increasingly making use of open source assets as part of our business infrastructure, as governed by our Use of Open Source Policy.  This often requires us to invest in the development, enhancement or integration of those OS assets to meet our specific business requirements.

In line with Government policy and [GDS guidance](https://www.gov.uk/government/publications/open-source-guidance/when-code-should-be-open-or-closed), our default position is that all incremental investments, enhancements and integrations of existing OS assets should be contributed back to the community from which the OS asset was originally sourced. This improves the general quality of the asset for all and makes it more likely that the OS asset concerned will be actively used and maintained in future.

With regards to bespoke development of complete business applications, algorithms or training data sets, either internally or through a 3rd party, our default position is to retain that IPR for our unique use - unless it is determined that the asset can be released without harming our interests as a commercial entity. Responsibility for agreeing such a release lies with our ExCo and must be formally approved and recorded before release.

Because of the reputational, security and business risks (detailed below) that can occur as a result of any contribution to the OS community, all releases must adhere to policies laid out below

Definition of Free Open Source Software

For the purposes of this policy, free open source software (FOSS) is [as defined by the Open Source Initiative](https://opensource.org/osd).  In particular, it:

- Governed by an Open Source License;
- Free to incorporate in a solution and to redistribute;
- Is available to use and modify as source code

Risks addressed by this policy

|​Risk| ​Description | ​Mitigation |
|----| ----------- | ---------- |
| We damage our business by contributing to an OS asset. | We develop valuable IPR (most likely complete software, algorithms, or training data sets) and contribute it to an OS project that damages our business.| No UKHO developed software code, algorithms, data or training data sets should be released into an OS project without specific approval. See Authorisation |
|We attract an inappropriate liability for support of OS assets that we have contributed|Unless properly licensed, it is possible that the UKHO could attract some liability for IP assets that it develops and makes OS. | Only a specified license can be used.  See Licensing. |
|Our brand is damaged by delivering poor quality OS asset contributions | Unless properly licensed, it is possible that the UKHO could attract some liability for IP assets that it develops and makes OS. | ur approved OS asset contributions must be produced to the same quality standards as those developed for our own internal use. See Standards|
|We inadvertently breach license terms of other software Most open source software relies on other open source software dependencies. | It is possible to breach the license terms of these dependencies by issuing them under an incompatible license, or not meeting their license terms in some way. |Licensing terms must be carefully managed.  See Dependencies.|

## Ownership of Open Source repositories

**This section covers the case where we open source some of our own code in a repository that we own and manage e.g. GDS do this by default with their code, where they share software on a dedicated [GDS GitHub page](https://github.com/alphagov).**

### Authorisation

The open sourcing of a new piece of software must be authorised by a Lead Engineer.  Significant changes to the scope of the software must be re-authorised.  

The Lead Engineer must present a completed "Open Source Goverance Checklist" to a Software Engineering Team Manager in order to demonstrate that sensible precautions have been taken.

### Platforms

Only the UKHO Github.com account can be used for creating an open source repository.

### Reputation

Contributors must be mindful that our open source software is linked to the UKHO brand through its presence on the UKHO GitHub page.  The associated Lead Engineer is accountable for ensuring that that the code, comments, documentation etc. do not contain any inappropriate content.

### Standards

The repository must match internal standards, including code standards, unit testing, documentation, package names etc.  As with internal code, all contributions to an open source repository must be subject to code reviews.

Additional standards will be applied to open source projects with regards to structure, standard documentation etc. These will be defined by the work to stand up our InnerSource capability[1].

An existing Lead Engineer must be assigned to each repository and is accountable for maintaining quality standards.

### Community support

The default position is to provide **no** support for consumers of the repositories other than documentation.  We should not invite bug reports, or allow pull requests etc.

Offering any level of support requires the authorisation of the Technology Head of Division.  This needs to be carefully considered, as we would have to provide:

- A governance process;
- Contributor agreements;
- Trusted committers to manage pull requests;
- A bug reporting / triage process;
- Extra security testing of the code;
- Discussion forums.

### Licensing

Our open source repositories must be licensed with a standard MIT open source license as per Appendix A.

### Security

Security needs to be carefully considered so that:

- UKHO does not reveal anything that would make its systems vulnerable;
- UKHO takes reasonable steps to not publish code that is inherently insecure;
- UKHO does not accept changes to libraries that make them insecure.

To this end, [GDS guidelines](https://www.gov.uk/government/publications/open-source-guidance/security-considerations-when-coding-in-the-open) must be followed.

Dependencies

Dependent modules in our code must be referenced using config for an appropriate dependency management tool, e.g. a Maven / pom.xml file.  Binaries or source of dependencies **must not** be included in the repository.

## Investment in Open Source

**The section covers the case where we contribute code to open source software that another organisation or community owns and manages.**

**For example, there might be a complex framework that almost meets our needs, but it doesn't cater for a data type type we require.  We might then add this code ourselves, contributing it back to the codebase.  Alternatively we might pay someone else to do this for us.**

### Authorisation

Contributing to an open source repository must be authorised by the Technology Head of Division.  Significant changes to the scope of the contribution must be re-authorised.

**Any** UKHO developed software code, algorithm, data or training data set could represent valuable intellectual property and should **not** be released into an OS project without specific approval.

An exception would be a simple bug fix, correcting logic in existing code, which does not have to be authorised.

### Licensing

#### Licenses

The FOSS that the UKHO contributes to **must** be governed by a license. This license **must** be an [OSI-approved license](https://opensource.org/licenses). Since we will be contributing in order to use the enhancement in our own systems, the license is very likely to be on our whitelist of licenses that are approved for use.

Exceptions must be approved by the UKHO Legal Advisor.

#### Contributor agreements

Open source contributor license agreements (CLAs) define the terms that intellectual property is contributed to a project.  Therefore:

- A CLA **must** exist;
- Contribution under that CLA must have been approved by the UKHO Legal Advisor;
- The CLA must be recorded and kept by DS&T.

Exceptions must be approved by the Head of DS&T.

#### Evaluating investment

The investment in open source will normally take place in the context of a wider project.  It will thus be part of that project's overall investment appraisal / business case, as per the Secure Funding goal of the delivery framework.  If that is not the case, it represents a separate change and will therefore require a separate business case.

#### Procurement

Paying a supplier to make enhancements to an open source codebase is a procurement exercise.  It **must** be carried out through the UKHO Procurement team, who will ensure that the business is competed where appropriate, full long-term costs are considered, etc.

#### Forking

[Forking](https://en.wikipedia.org/wiki/Fork_(software_development)) FOSS and making changes which we do not contribute back to the open codebase is **not** permitted because it exposes UKHO to problems of security and maintenance.  Exceptions must be approved by the Head of TPE. 

#### Personal contributions to open source

All contributions that relate directly to an engineer's work at the UKHO or relate to the UKHO's business (e.g. marine geospatial systems, information for the mariner) are subject to this policy, even if they are carried out on an engineer's own equipment or in their own time.

Otherwise, engineers are free to contribute to open source projects.

### Appendix A - UKHO license file text

The following license should accompany all code which the UKHO open sources.

```text
The MIT License (MIT)

Copyright (C) 2011 Crown copyright (United Kingdom Hydrographic Office)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
