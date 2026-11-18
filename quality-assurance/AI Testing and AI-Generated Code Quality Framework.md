# AI in Testing and AI-Generated Code Quality Framework



This document provides a practical framework for using AI safely and effectively in testing and AI-generated code quality assurance. It is intended for test leads, test engineers, developers, delivery teams and governance stakeholders who need clear guidance on reviewing, validating, evidencing and controlling AI-assisted outputs before they inform delivery decisions.


## 1\. How we will use AI to improve how we do testing



This section defines how AI-assisted tools can strengthen testing, improve test design, accelerate delivery and support quality outcomes while retaining human accountability and existing standards.

AI may support testers and engineers by:



* Generating and improving test scenarios, including edge cases, negative tests and boundary conditions.
* Supporting requirements analysis, acceptance criteria review, gap analysis and coverage checks.
* Accelerating safe test data design and creation using synthetic or masked data patterns.
* Improving regression impact analysis and prioritisation.
* Supporting exploratory testing by identifying risks, assumptions and missing scenarios.
* Improving test documentation, summaries, reporting and traceability.



### 1.1 AI quality assurance principles for testing



1. **Human accountability remains mandatory**

   * Any code generated using AI must always be reviewed and approved by engineers or testers.
   * AI is treated as a **suggestion engine, not a decision-maker**.
2. **AI outputs must meet existing quality gates**

   * Do not bypass code reviews, testing standards or security controls.
3. **Trust but verify**

   * Validate and test all AI outputs against the acceptance criteria.
   * Maintain traceability to requirements.


### 1.2 AI test strategy framework



The AI test strategy framework explains how teams should use AI to support test design, execution, data generation, defect analysis, code review and documentation in a controlled and consistent way.

AI can propose scenarios, identify gaps, suggest edge cases, summarise requirements and draft tests, but teams remain accountable for checking accuracy, relevance, completeness and traceability before use.

The framework defines validation layers to confirm that AI-assisted outputs are technically correct, functionally valid, secure, regression-safe, maintainable and suitable for delivery.

Apply this framework wherever AI influences testing activity. Retain evidence where outputs support a delivery decision, release recommendation or quality gate.


#### Validation layers for AI-assisted testing outputs



|Layer|Purpose|Responsibility|Expected evidence or outcome|
|-|-|-|-|
|Static validation|Check syntax, naming, formatting, maintainability and agreed standards.|Tools flag issues; developers, testers and reviewers confirm resolution.|Linting, static analysis, build or PR checks, with justified exceptions.|
|Functional testing|Confirm behaviour against requirements, acceptance criteria and key journeys, including positive, negative, boundary and exception scenarios.|QA and test engineers design and execute checks, with product, business or domain input where needed.|Passed tests, requirements traceability, coverage review and recorded defects.|
|Security testing|Check vulnerabilities, dependencies, secrets, validation, data use and security compliance.|Security, development and QA jointly validate higher-risk changes.|Security scans, dependency checks, secret scans, data review and vulnerability decisions.|
|Regression testing|Ensure AI-assisted changes do not break existing functionality, integrations, rules or critical workflows.|QA owns planning and execution; developers support investigation; test leads confirm scope.|Regression results, impact notes, critical-path coverage and no high-priority unintended failures.|
|Exploratory testing|Challenge AI assumptions, gaps, hallucinations, unrealistic data and missed scenarios.|QA and test engineers lead, with business, product, developer or domain input as needed.|Exploratory notes, challenged assumptions, gaps and follow-up actions.|


## 2\. Policies to validate quality of AI-generated code



This section defines the mandatory policies and validation controls required before AI-generated or AI-assisted code is accepted into the codebase.


### 2.1 AI-generated code validation criteria



Refer to the [AI strategy](https://github.com/UKHO/docs/blob/main/engineering/strategy/engineering-ai-strategy.md) for code validation criteria.


### 2.2 AI-generated test validation framework



AI-generated test cases must meet the following requirements:



|Validation area|Requirement|
|-|-|
|Coverage|Meet or exceed the existing baseline.|
|Accuracy|Validate real requirements.|
|Edge cases|Include negative and boundary scenarios.|
|Duplication|Avoid duplicating existing tests.|
|Maintainability|Be readable and reusable.|


### 2.3 Test coverage strategy for AI adoption


#### 2.3.1 Coverage expectations



AI-assisted testing must maintain or improve existing coverage levels:



|Test level|Requirement|
|-|-|
|Unit|Do not reduce unit test coverage below the baseline.|
|Integration|Supplement, not replace, critical integration and business validation scenarios.|
|Regression|Highlight impacted areas across existing components and functionality.|
|Non-functional|Suggest relevant performance, accessibility, reliability or security checks where not already covered.|


### 2.4 Test data strategy for AI usage



This section defines how AI may use test data in prompts, uploads, code analysis, test generation or defect investigation. AI should only access data that is safe, necessary and approved.

Use synthetic, anonymised or masked data by default. Personal information, credentials, secrets, tokens and keys must never be exposed to AI tools for software testing. Other sensitive, operational, security-classified or production data must not be exposed to AI tools unless permitted by existing policy and formally approved.


If unsure, treat the data as unapproved until confirmed by the relevant data owner, security lead or governance process.


#### 2.4.1 Data usage guidelines



|Data type|Allowed usage|AI exposure guidance|
|-|-|-|
|Synthetic data|Preferred|Allowed if it contains no real personal, customer, operational, credential or sensitive information.|
|Anonymised or masked production-like data|Allowed with controls|Use only when sanitisation is validated, no personal information or secrets remain, re-identification risk is low, and the data classification and tool use are approved.|
|Documents classified above Official|Prohibited|Do not use with AI tools for software testing, as required by the [AI usage policy](ai-usage.md).|
|Sensitive, Official or security-related data classified at Official or below (excluding personal information, credentials, secrets, tokens and keys)|Prohibited unless formally approved and sandboxed|Do not use in general-purpose AI tools. Use only in approved secure environments with access controls, auditability and data or security approval.|
|Credentials, secrets, tokens or keys|Prohibited|Never provide to AI tools or include in prompts, screenshots, logs, evidence or code snippets.|



#### Examples



|Data type|Guidance|
|-|-|
|Hardware IDs or environment identifiers|Do not provide real IDs, hostnames or infrastructure identifiers unless approved and sanitised. Use dummy values.|
|Notices to customers or public data|Permissible only when confirmed as public, non-sensitive and approved for the AI tool.|
|Logs, screenshots and defect evidence|Check first for environment details, IDs, credentials, customer references or operational information.|


#### 2.4.2 Minimum controls before using test data with AI



* Confirm that the AI tool and intended use are authorised for the data classification and testing purpose.
* Use only the minimum data needed and obtain any required data-owner, security or governance approval before use.
* Record the data source, classification, sanitisation performed, approval and AI tool used where evidence is required.
* Validate AI-generated test data before use to ensure it is realistic, relevant, non-sensitive and aligned to the test objective.


### 2.5 Roles and responsibilities for AI-assisted testing



This section extends existing governance roles for AI-assisted testing.


#### 2.5.1 Test Leads and Principal Developers



* Define AI testing standards.
* Approve AI testing approaches.
* Ensure regression coverage and quality gates.


#### 2.5.2 Test Engineers and Developers



* Validate AI-generated code and tests.
* Perform exploratory testing to detect hallucinations.
* Ensure test completeness.


#### 2.5.3 Engineering Teams



* Ensure AI outputs are reviewed and tested.
* Do not rely solely on AI-generated logic.


### 2.6 Lightweight review of AI-assisted testing



Use existing delivery evidence to confirm AI-assisted testing has been reviewed. Do not introduce extra monitoring or metrics unless there is a clear customer need, governance requirement or delivery risk.


#### 2.6.1 Minimum evidence to retain



* Where AI was used.
* Who reviewed the output.
* Any significant issue found.
* What action was taken.


### 2.7 Non-functional validation for AI-generated code



AI-generated or AI-assisted code must meet existing non-functional standards, including performance, security, reliability, resilience, maintainability, accessibility, observability and supportability. Evidence should be retained through existing review, testing, pipeline, security and governance processes.


### 2.8 AI risk mitigation from a testing perspective



Apply proportionate test controls to AI-assisted outputs that could affect quality, security, data or governance.



|AI-related risk|Testing mitigation|Evidence|
|-|-|-|
|Incorrect or hallucinated logic|Validate against requirements; test negative, boundary and exception paths; challenge assumptions.|Reviewed tests, traceability, defects and exploratory notes.|
|Over-reliance on AI|Require human review and peer challenge against standards and risk.|Review comments and sign-off.|
|Weak or duplicated tests|Compare with existing tests and check assertions, coverage and maintainability.|Coverage review and updated test pack.|
|Bias or incomplete scenarios|Cover boundaries, accessibility, localisation, roles, permissions and operational variants.|Scenario and accessibility coverage notes.|
|Regression from AI-assisted change|Assess impact, run targeted regression and investigate failures before sign-off.|Impact assessment and regression results.|
|Security or data exposure|Use approved data, exclude secrets, scan security and test access and input controls.|Security scans, data checks and risk records.|



**Integrate mitigation into existing delivery activities:**



* Identify AI use and risks during refinement and test planning.
* Validate AI-generated scenarios against requirements, edge cases and regression needs.
* Record AI-related defects and decisions through normal execution and triage.
* Use retrospectives to improve prompts, controls and training.
* Human review and recorded mitigation are required where an AI-assisted output affects release, sign-off, delivery decisions or production.


### 2.9 AI testing capability development



Training needs and capability areas will be refined after the AI in Testing PoC. The PoC should identify the skills, guidance and support testers need to use AI safely and effectively in delivery.

Initial capability themes may include safe AI use, prompt writing, review of AI-assisted outputs, test data handling, evidence capture and risk awareness.


### 2.10 Future AI testing maturity model



A maturity model will be developed after the AI in Testing PoC. It should be based on PoC findings, team feedback and practical delivery evidence.

The model should describe how teams can move from initial AI use to governed and optimised use without introducing unnecessary process overhead.


## 3\. Summary



This framework defines a proportionate, risk-based approach to using AI in testing and validating AI-generated code. AI may improve analysis, test design, coverage, documentation and delivery efficiency, but it does not replace human accountability, engineering judgement or existing quality gates.



The framework requires teams to:



* Use AI as a support tool, with human review and approval for outputs that affect code, testing or delivery decisions.
* Validate AI-assisted outputs through static, functional, security, regression and exploratory testing, with traceability to requirements.
* Apply existing engineering, testing, security and non-functional standards to AI-generated code and tests.
* Use synthetic, anonymised or masked test data by default, and require formal approval and appropriate controls for higher-risk data.
* Manage AI risks through proportionate controls, peer challenge, targeted regression and retained evidence within normal delivery processes.
* Clarify accountability across test leads, developers, engineers and delivery teams, and use the AI in Testing PoC to refine capability and maturity.



Overall, the framework enables practical AI adoption while protecting quality, security, reliability and confidence in delivery outcomes.

