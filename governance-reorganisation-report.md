# Governance reorganisation report

## Purpose and method

This report applies the proposed governance view from
[the Diataxis assessment](diataxis-documentation-assessment.md). It shows what
would appear under:

```text
governance/
  policies/
  standards/
  strategies/
```

This is a proposed navigation structure, not a recommendation to move files
immediately. The paths below are the existing canonical paths. A document is
included when its filename, heading or opening content clearly identifies it as
a policy, standard or strategy. Guidance, checklists, indexes, tutorials,
explanations and operational resources are listed as remaining outside this
view.

## Proposed governance view

### `governance/policies/`

#### Quality assurance

- [Code Generation Tools Policy (including AI use in software testing)](governance/policies/code-generation-tools.md)
- [Automated API Testing Policy Document](governance/policies/automated-api-testing.md)
- [Safety assurance guidance](governance/policies/safety-assurance-guidance.md)
- [Test Policy](governance/policies/test-policy.md)

#### Security

- [Managing Dependencies](governance/policies/ManagingDependencies.md)
- [Managing Security Concerns](governance/policies/ManagingSecurityConcerns.md)

#### Software engineering

- [Cloud Development Policy](governance/policies/CloudDevelopmentPolicy.md)
- [Code Generation Tools Policy](governance/policies/code-generation-tools.md)
- [Code Reuse Policy](governance/policies/CodeReusePolicy.md)
- [Code Review Policy](governance/policies/CodeReviewPolicy.md)
- [Container Policy](governance/policies/ContainerPolicy.md)
- [Defect Management Policy](governance/policies/DefectManagementPolicy.md)
- [Front End Policy](governance/policies/FrontEndPolicy.md)
- [Inclusive Language Policy](governance/policies/inclusive-language.md)
- [Logging Policy](governance/policies/logging.md)
- [Non Functional Requirements Policy](governance/policies/NFRPolicy.md)
- [Observability policy](governance/policies/Processed/observability_policy.md)
- [Open Source Contribution Policy](governance/policies/Processed/OpenSourceContributionPolicy.md)
- [Open Source Use Policy](governance/policies/Processed/OpenSourceUsePolicy.md)
- [Package Adoption Policy](governance/policies/PackageAdoptionPolicy.md)
- [Pair Programming Policy](governance/policies/PairProgrammingPolicy.md)
- [Pipeline Baseline Policy](governance/policies/pipeline-policy.md)
- [Secure Development Policy](governance/policies/SecureDevelopmentPolicy.md)
- [Azure DevOps Branch Protection](governance/policies/AzDoBranchProtection.md)
- [Git Branch Protection Policy](governance/policies/GitBranchProtectionPolicy.md)
- [Repository Setup Policy](governance/policies/RepositorySetupPolicy.md)
- [Source Control Policy](governance/policies/SourceControlPolicy.md)
- [System Documentation Policy](governance/policies/SystemDocumentationPolicy.md)
- [Technical Debt Policy](governance/policies/TechnicalDebtPolicy.md)
- [Licensing of Third Party Libraries Policy](governance/policies/ThirdPartyLicensingPolicy.md)
- [Unit Testing Policy](governance/policies/UnitTestingPolicy.md)

#### Using GitHub

- [Software Licensing Policy](governance/policies/software-licensing-policy.md)

### `governance/standards/`

- [Coding Standards index](software-engineering-policies/CodingStandards/README.md)
- [.NET Coding Standards](software-engineering-policies/CodingStandards/DotNetCodingStandards.md)
- [CSS Coding Standards](software-engineering-policies/CodingStandards/CssCodingStandards.md)
- [HTML Coding Standards](software-engineering-policies/CodingStandards/HtmlCodingStandards.md)
- [JavaScript Coding Standards](software-engineering-policies/CodingStandards/JavascriptCodingStandards.md)
- [Python Coding Standards](software-engineering-policies/CodingStandards/PythonCodingStandards.md)
- [Naming Conventions](software-engineering-policies/NamingConventions/NamingConventions.md)
- [Test Automation Standards](quality-assurance/test-code-standards.md)

The coding standards index is included as the landing page for the standards
collection. It is not itself a language standard.

### `governance/strategies/`

- [Test Strategy](quality-assurance/test-strategy.md)
- [Software Engineering AI Strategy](software-engineering/strategy/software-engineering-ai-strategy.md)

## What remains outside `governance/`

These documents do not have a sufficiently clear policy, standard or strategy
identity based on their current names and content. They would remain in
discipline-oriented views, or later be classified as tutorials, how-to guides,
reference or explanation pages.

### Repository orientation and contribution

- [Repository README](README.md)
- [Repository contributing guide](CONTRIBUTING.md)
- [Diataxis documentation assessment](diataxis-documentation-assessment.md)

### Quality assurance

- [Acceptance criteria](quality-assurance/acceptance-criteria.md)
- [Accessibility testing](quality-assurance/accessibility-testing.md)
- [BDD](quality-assurance/bdd.md)
- [Browser automation](quality-assurance/browser-automation.md)
- [Desktop accessibility testing](quality-assurance/desktop-accessibility-testing.md)
- [Executable specifications](quality-assurance/executable-specifications.md)
- [Exploratory testing](quality-assurance/exploratory-testing.md)
- [HTTP API mocking tools](quality-assurance/http-api-mocking-tools.md)
- [Manual test scripts](quality-assurance/manual-test-scripts.md)
- [Microservice testing](quality-assurance/microservice-testing.md)
- [Performance test checklist](quality-assurance/performance-test-checklist.md)
- [Quality assurance index](quality-assurance/README.md)
- [Security testing guidance](quality-assurance/Security-Testing-Guidance.md)
- [Test approach and TSR reviews](quality-assurance/Test-Approach-TSR-Reviews.md)
- [Test repositories](quality-assurance/test-repositories.md)
- [UKHO Delivery Quality Charter](quality-assurance/ukho-quality-charter.md)
- [User acceptance testing](quality-assurance/user-acceptance-testing.md)
- [Web accessibility testing](quality-assurance/web-accessibility-testing.md)

### Security

- [Security Champions responsibilities](security/SecurityChampions/SecurityChampionResponsibilities.md)
- [Threat modelling](security/ThreatModelling/ThreatModelling.md)

### Software engineering: cloud and platform resources

- [Cloud containers](software-engineering-policies/CloudDevelopment/Containers.md)
- [Cloud data use](software-engineering-policies/CloudDevelopment/DataUse.md)
- [Cloud deployment](software-engineering-policies/CloudDevelopment/Deployment.md)
- [Disaster recovery and business continuity](software-engineering-policies/CloudDevelopment/DisasterRecoveryBusinessContinuity.md)
- [Cloud development general guidance](software-engineering-policies/CloudDevelopment/General.md)
- [Cloud logging and monitoring](software-engineering-policies/CloudDevelopment/LoggingAndMonitoring.md)
- [Pilots licence](software-engineering-policies/CloudDevelopment/PilotsLicense.md)
- [Cloud tagging](software-engineering-policies/CloudDevelopment/Tagging.md)
- [Cloud users](software-engineering-policies/CloudDevelopment/Users.md)
- [Container best practices](software-engineering-policies/Containers/ContainerBestPractices.md)
- [Infrastructure as code with Terraform](software-engineering-policies/InfrastructureAsCode/terraform.md)
- [Logging definitions and Elastic Cloud details](governance/policies/logging-reference.md)
- [Technical debt monitoring](software-engineering-policies/TechnicalDebt/TechnicalDebtMonitoring.md)
- [Technology governance](software-engineering-policies/TechnologyGovernance/TechnologyGovernance.md)

### Software engineering: practice and enablement

- [Software engineering policies index](software-engineering-policies/README.md)
- [Software engineering policy contribution guide](software-engineering-policies/CONTRIBUTING.md)
- [Development principles](software-engineering-policies/development-principles.md)
- [Engineering team](software-engineering-policies/engineering-team.md)
- [Lead Developer induction](software-engineering-policies/Induction/LeadDeveloperInduction.md)
- [Setting up MSDN](software-engineering-policies/Induction/SettingUpYourMSDN.md)
- [Open Source Governance Checklist](software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md)
- [Package Adoption Checklist](software-engineering-policies/PackageAdoption/PackageAdoptionChecklist.md)
- [Package Adoption Guidance](software-engineering-policies/PackageAdoption/PackageAdoptionGuidance.md)
- [Third Party Licensing Guidance](software-engineering-policies/ThirdPartyLicensing/ThirdPartyLicensingGuidance.md)
- [Principal Developer role](software-engineering/roles/principal-developer.md)

### Using GitHub

- [Coding in the open](using-github/Processed/coding-in-the-open.md)
- [Creating a contributing file](using-github/creating-a-contributing-file.md)
- [Creating a README file](using-github/creating-a-readme-file.md)
- [Migrating to GitHub](using-github/migrating-to-github.md)
- [Pull request details](using-github/pull-request-details.md)
- [Using GitHub index](using-github/readme.md)

## Boundary cases and follow-up decisions

Several pages are close to the governance boundary but are better treated as
mixed or supporting material until an owner confirms their status:

- [Safety assurance guidance](governance/policies/safety-assurance-guidance.md)
  is labelled guidance but describes a mandatory policy and process. It is
  included under policies for this report, but could be split into policy and
  how-to content.
- [Managing Dependencies](governance/policies/ManagingDependencies.md) calls
  itself a policy and states minimum expectations, although its filename does
  not. It is included under policies.
- [Managing Security Concerns](governance/policies/ManagingSecurityConcerns.md)
  is linked as a policy from the Secure Development Policy and is included
  under policies.
- [Naming Conventions](software-engineering-policies/NamingConventions/NamingConventions.md)
  is included as a standard because it defines naming rules, although the
  filename does not use the word “standard”.
- [Technology governance](software-engineering-policies/TechnologyGovernance/TechnologyGovernance.md)
  is governance-related, but its current content does not clearly establish a
  policy, standard or strategy. It remains outside the three folders pending
  owner clarification.
- [Cloud Development Policy](governance/policies/CloudDevelopmentPolicy.md) is
  a policy landing page with substantial supporting pages. Those supporting
  pages remain outside `governance/policies/` until they are separated into
  policy, reference and how-to documents.

The assessment refers to `engineering/strategy/engineering-strategy.md`, but
that path is not present in the current Markdown inventory. It should not be
placed in the proposed structure unless the document exists elsewhere and is
intentionally brought into this repository.

## Resulting shape

The governance view would contain a compact catalogue of authoritative
documents while the existing discipline folders continue to hold the full
working library:

```text
governance/
  policies/      # mandatory organisational rules and controls
  standards/     # coding, naming and test standards
  strategies/   # direction, principles and long-term approach

quality-assurance/             # testing how-to, reference and explanation
security/                      # security how-to, reference and explanation
software-engineering-policies/ # supporting guidance and indexes
software-engineering/          # roles and other practice material
using-github/                  # GitHub task guides and reference
```

This supports governance as a secondary navigation view without duplicating
the canonical documents or forcing every page into a governance category.
