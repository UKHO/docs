# UKHO Test Strategy

## Overview

This strategy details how we add value through testing at the UKHO. The strategy is lightweight and provides a basis for all delivery teams.

## How this document should be used

Teams should adhere to this strategy when determining their team approach to testing, creating a Test Approach document for the current work-stream that adds detail to this strategy.

## Roles and Responsibilities

| Role | Responsibility |
| - | - |
| Testers | Champion quality within the team, ensuring quality is present during all stages of software development and inclusive of all team members and users. |
| Developers | Integrate quality into all stages of development, treating testing as an equal to development |
| Delivery Managers | Create an environment that fosters quality and integration of all members of a delivery team |

## Approach to Testing

### Automation

* Automation should be used where possible. See the [UKHO Test Automation Strategy](test-automation-strategy.md) for information on this.

### Test Generation

* Test scenarios should be generated from a BDD approach
* A risk-based approach should be used to determine the priority of test cases

### Non-Functional

* Non-functional requirements and testing should be considered alongside other forms of testing
* Determining requirements and expected results will involve the architecture and product manager communities

### Manual

* Manual testing should be used when automation is not deemed the best approach (e.g. too costly, not feasible, not applicable) 

### Exploratory

* Exploratory testing should be used to verify quality in addition to regular manual and automated testing
* Sessions should be planned with a charter (including time-box, area to review, personas)

### Security

* Testing to ensure security should take place throughout development
* The OWASP ZAP scanner should be used for development of APIs and UIs - see [UKHO OWASP Zap Scanner project](https://github.com/UKHO/owasp-zap-scan) for more information.

### Cross Browser Testing

* Browser testing should be carried out on the latest version of Chrome; this applies to manual and automated testing.
* If the application is for external customers the team should define the browser requirements; this can then be worked into the Test Approach for that item of work.
  * This requirement should be considered as early as possible by the team
  * If multiple browsers need to be tested then work closely with the Test Leads and Product Owner to ensure the correct approach is taken, e.g. which tests to run across browsers and the auto test framework to use.

### User Testing

* Testing must recognise the importance of ensuring we are delivering value to users
* The team should involve users during the development process

## Test Standards

See the [UKHO Test Standards](test-code-standards.md) for information on the standards that should be adhered to.

## Test Management

Teams need to ensure their tests are managed over time in order to maintain their value, considering:

* Run time
* Test coverage
* Test code quality

## Test Reporting

The results of testing must be visible to a team delivering confidence when developing. Tests written using Gherkin (i.e. business readable) should be easily available to members outside the development team.

## This document

Issues and Pull Requests to this document are welcomed as we develop a working strategy.
