# Test Execution

A Test Execution Strategy defines how testing will be carried out—covering environments, prioritization, entry/exit criteria, responsibilities, tooling, reporting, and risk handling. It ensures consistency, predictability, and quality across all test cycles.
Below is a comprehensive strategy for web, legacy, cloud‑migrated, or API-based systems.

## 1. Objectives of Test Execution

- Validate functional and non-functional requirements.
- Ensure system stability across environments.
- Detect defects early through automation and continuous integration.
- Verify readiness for release.


## 2. Test Execution Phases
### 🔹 2.1 Preparation Phase

- Review requirements, user stories, acceptance criteria.
- Finalize test scenarios, test cases, automation scripts.
- Document all the test cases in Azure DevOps Test Plans section with proper tagging (e.g. Smoke Tests, Regression Tests, etc.)
- Prepare test data (static, dynamic, synthetic, masked).
- Configure environments (Dev, QA, Staging, Pre-Prod).
- Validate CI/CD pipelines for automated tests (e.g., GitHub Actions, Azure DevOps).


### 🔹 2.2 Execution Phase
This involves execution of manual, automated, API, and performance tests.
  ### Automation First Approach
  - Run automation smoke suite on each deployment.
  - Run regression suite nightly / on pull requests.
  - Use API + UI hybrid strategy (fast feedback + UI validation).

  ### Manual Testing
  -  Run Manual Tests using Azure DevOps Test Execution Tool
  - Add results for each test case
  - Add & Attach Test result screenshot for test steps that prove the testcase has passed to each testcase for clear traceability
  

### 🔹 2.3 Defect Management
- Log defects in Azure DevOps / Jira.
- Prioritize based on severity + business impact.
- Conduct daily triage with developers.
- Track defect aging, reopen rate, resolution time.

### 🔹 2.4 Exit Phase
Release decisions based on:
  - Completion of high/medium priority test cases.
  - Acceptance criteria met.
  - No critical/blocker defects.
  - Performance thresholds met.
  - Sign-off from QA + stakeholders.

## 3. Test Prioritization Strategy
### 🟢 High Priority
  - Core business flows (e.g., login, payment, workflows).
  - API endpoints used by multiple services.
  - Newly developed or changed features.
  - High-risk modules (legacy or customer complaints).

### 🟡 Medium Priority
  - Secondary workflows.
  - Negative test scenarios.
  - Permissions, roles, access control.

### 🔵 Low Priority
  - Edge-case validations.
  - Optional UI behaviours (alignment, colors, minor visuals).


