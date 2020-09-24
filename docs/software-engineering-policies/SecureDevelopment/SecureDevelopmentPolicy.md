# Secure Development Policy

## Objectives

The objectives of this policy are:

- To support the UKHO accreditation process, through:
  - the proper handling of security requirements;
  - the application of some core principles;
  - ensuring that engineering teams have appropriate skills;
  - assignment of accountability to appropriate roles.
- To be consistent with the way we do Agile software development at the UKHO
- Ensure that controls are appopriate to each delivery team, i.e. each of many different security and technology contexts.  Delivery should not be slowed down by process where it is not required.

## Introduction and Principles

This guidance presupposes the existence of a security accreditation process and standard UKHO security risk-management practices (risk assessment, production of RMADS / Security Case etc.).  One of the outputs of this process is a Security Requirements Statement (SRS), broad security-related requirements for a piece of work.  An example of an SRS requirement is:

>"Use secure authentication protocols (such as SSH, HTTPS, TACACS+, RADIUS or KERBEROS) to protect access to network services, servers and routers."

This guidance also presupposes the existence of threat-modelling activities.  During threat modelling, security principles are mapped to the actual design of the system in order to produce concrete requirements for the implementation.  The relative priority of addressing issues output from a threat assessment is modified by the risks produced during security risk assessment.  For example the system design might contain a component which can be accessed over the network and a subsequent risk assessment has determined that the risk of attack of this component is high.   Applying the above general SRS requirement about authentication protocols, together with the general decision to use Kerberos for authentication, results in a concrete requirement to protect this component using Kerberos on the basis that the risk of attack is high. 

## Roles

### Security Advisor (SAd)

This person is tasked with ensuring that security aspects of development are built in to the flow of development and that it is not left as an afterthought.  They are also responsible for making available any security-based policies and bringing them to the team's attention.  Anyone in the development team can be appointed d, but it a role well suited to a senior or lead software engineer.

### Security Assurance Coordinator (SAC)

This person acts as a liaison between the team and the Security Accreditor.  They are required to:

1. Produces/select the threat source profile (with stakeholder involvement if necessary)
2. Perform risk assessments
3. Create and controls the SRS document
4. Organise any Security Working Group meetings
5. Production and maintenance of an overall 'Security Risk Register' for the project which presents risks in terms of impact to the business (scored according to UKHO POL 111) 
6. Maintains the 'SRS Compliance Matrix' which shows how the requirements in the SRS are met as the project progresses
7. Defines the scope for penetration testing and coordinates the testing itself including any remediation activities
8. Produces any accreditation documentation that is required to be presented to the accreditor.  This generally will include RMADS / Security Case, s and the SRS Compliance Matrix.

SACs are subject to their own best practices and processes which are not covered by this guide.

### Security Accreditors

The accreditor (there will only usually be one per project) provides the ultimate decision on whether risks within systems are managed to an acceptable level.

## Practices

Each Scrum team **must** appoint a Security Advisor (d).

These security guidelines **must** be available to the development team.

The SAd ensures that the SRS is accessible to the development team.

The SAd is responsible for documenting all deviations from these guidelines.  The SAd and the SAC **must** agree a mechanism for agreeing such deviations when they occur.  Additionally, all deviations are reviewed before software is put into production.

The SAd is responsible for creating a means of storing and reporting on unfulfilled security requirements.

### Definition of done

If there are any security activities that must have happened for a PBI to be considered complete, then these **must** be expressed in a Security Definition of Done (DoD) document.

The contents of the security DoD **must** be agreed with the SAC if one is appointed.  It will usually be incorporated in the team's general DoD.  The SAd is responsible for storing the security DoD where it is accessible to the development team.  The security DoD may change at any point during a project, by agreement with the SAC.

### Code reviews

Code reviews are a standard and compulsory practice at UKHO, and will normally be included as a specific security requirement in the SRS.  Reviewers should consider the security impact of each check-in.  Under the guidance of the d, the development team **must** create a security code review checklist for use in code reviews.  This may be a stand-alone document, but could be incorporated in any standard code review checklist.

The contents of the checklist will vary based on the nature of the work, but it should be based on:

- The SRS;
- e Fundamental Practices for Secure Software Development (www.safecode.org/wp-content/uploads/2014/09/SAFECode_Dev_Practices0211.pdf)

### Handling security requirements

Security requirements for the development team can come from several sources:

#### Directly from the SRS

The SRS might specify some stand-alone deliverable relating to security.  In this case, the Product Owner is responsible for working with the c to create a Security PBI (SPBI) to express the requirement and to prioritise it.  The SPBI **must** contain written acceptance criteria, which **must** be evidenced by testing.

#### From another stakeholder

Any other stakeholder (including a member of the development team) can raise a security requirement.  The Product Owner is responsible for creating the SPBI, and working with the SAC to prioritise it. 

#### PBIs from the Threat Modelling process

Threat modelling might generate stand-alone security requirements.  The development team works with the Product Owner to create the SPBI, who then works with the SAc to prioritise it.

#### Acceptance criteria from the Threat Modelling process

Threat modelling in relation to a functional PBI might generate constraints about the implementation of that PBI.  E.g. encryption might by mandated for a piece of data storage, or a design constraint introduced.  These should be added as documented acceptance criteria to the PBI, which **must** in turn be evidenced by testing.

#### Acceptance criteria from the SRS

The SRS might contain security requirements that affect the implementation of one or more functional PBIs.  For example, the SRS might contain a requirement that all user input must be validated.  This needs to be applied to all functional PBIs that relate to user input screens. The project **must** maintain some way of creating this mapping and evidencing that the PBIs have been developed in accordance with the security requirements.

#### Unfulfilled security requirements

Security requirements can sometimes be generated but not satisfied, leaving unmitigated security risks.  Agreement needs to be reached between the accreditor and the project (via the SAC) that they can remain unmitigated and the accreditor ultimately will need to know what residual risk he is being asked to accept.  It will be up to the SAC and project to justify how any controls in place mitigate risk to an acceptable level.  Some of this work may be necessary through a Security Working Group (SWG). 

### Design and coding

In addition to any specific requirements derived from the SRS, good practices in design and coding must be followed by the development team.  As each team has a different security context and technology stack, each team must maintain its own set of good practices.  The d **must** document its teams standards and make these available to the team.  

It is suggested that the following guidelines are incorporated into a team's best practices, where appropriate.

[GDS design principles](https://www.ncsc.gov.uk/guidance/security-design-principles-digital-services-main)

[Safecode coding practices](http://www.safecode.org/publication/SAFECode_Dev_Practices0211.pdf)

[CESG safe coding practices](https://www.cesg.gov.uk/content/files/guidance_files/DN%206%20-%20Coding%20Requirements%20%26%20Guidance%20-%20issue%201.1%20OCt%202015%20-%20for%20website%20-%20historic.pdf)

### Configuration management

All development **must** use UKHO's standard development configuration management tooling (TFS or GIT).  Dependencies **must** be managed through standard package management software (t or Maven).  External packages **must** be cross-referenced against known vulnerabilities at or before build time.

Dependency definitions **must** be stored in source and control and be subject to code review.

The ability to change source code or other system assets (e.g. configuration) is limited to software engineers.  All software engineers must have BPSS clearance before being given this access.  The only people able to give commit access to source code repositories are 1) members of the ALM team 2) Lead software engineers.

## Skills

The SAd must work out the skills required for the project and defines a list of minimum training requirements for each team, depending on the nature of the work.  Coverage of skills are agreed with the SAC and must be tracked by the SAd.

| Topic | Resource | Resource type |
| ----- | -------- | ------------- |
| OWASP top 10 | https://www.owasp.org/index.php/Top_10_2013-Top_10 | Online documentation |
| OWASP proactive controls | https://www.owasp.org/images/5/57/OWASP_Proactive_Controls_2.pdf | Online documentation |
| OWASP introduction | https://app.pluralsight.com/library/courses/web-security-owasp-top10-big-picture/table-of-contents | Online course |
| OWASP for ASP |  https://www.pluralsight.com/courses/owasp-top10-aspdotnet-application-security-risks | Online course |
| Website security review |https://app.pluralsight.com/library/courses/play-by-play-website-security-review-troy-hunt-lars-klint/description | Online course |
| Security design principles | https://www.ncsc.gov.uk/guidance/security-design-principles-digital-services-main  | Document to review |
| CESG Coding requirements and guidance |https://www.ncsc.gov.uk/content/files/guidance_files/DN%206%20-%20Coding%20Requirements%20%26%20Guidance%20-%20issue%201.1%20OCt%202015%20-%20NCSC%20Web.pdf | Document to incorporate in coding standards |

## Work where no SAC is appointed

Where no SAC is appointed to a project, and consequently no security requirements are generated in the form of an SRS, the following practices still apply:

- A SAd **must** be appointed;
- A register of unfulfilled security requirements **must** be kept;
- A security DoD and security code review checklist may be created;
- Training requirements for the team **must** be written down, and skills tracked;
- Guidelines on configuration management and checking against known vulnerabilities.

### Development work by third parties

Where development work is carried out by third parties on behalf of UKHO, this same policy **must** be applied.

The SAd may be a person in the third party team, or may be a member of the UKHO team.

Alternatively, if the security policy of the third party is considered adequate by the SAC, the third party's processes and standards may be used instead.

## Points of Contact

- Policy owner - ​Neville Brown
- ​Policy editor - ​Neville Brown