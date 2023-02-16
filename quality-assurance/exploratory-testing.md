# Introduction

Exploratory testing is a software test approach which often described as simultaneous learning and test execution. Cem Kaner, coined this term in 1984 and describes it as "a style of software testing that emphasizes the personal freedom and responsibility of the individual tester to continually optimize the quality of his/her work by treating test-related learning, test design, test execution, and test result interpretation as mutually supportive activities that run in parallel throughout the project." (Testing)

# Types of Exploratory Testing

## Freestyle Exploratory Testing

This is an approach where the tester can go through the Application Under Test quickly, investigate defects or do a quick smoke test.

## Scenario-based Exploratory Testing

Real user scenarios serve as the foundation for this type of exploratory testing. The application is examined by testers in all possible ways to accommodate each scenario. To ensure complete test coverage, the goal is to test as many scenarios as possible.

## Strategy-based Exploratory Testing

This approach is often taken when testers are familiar with the application/system under test. It uses various test techniques like BVA, ECP and risk-based to identify deviations.

# Benefits of Exploratory testing

- It offers prompt feedback during the initial stages of development.
- Exploratory testing is appropriate for testing new features during iterative application development, while automation testing concentrates on regression and backward compatibility testing.
- Exploratory testing is ideal for testing new requirements within constrained timeframes when project requirements are unstable. This is because getting outcomes quickly and effectively is the main goal here.
- It finds a diverse range of defects.

# Phases of Exploratory testing

## Classify defects classifications

- Categorise the common deviations/defects that were present in previous projects.
- Analyse the root cause of the deviations

## Create Test Charter

- Test charter should include
  - Who will be testing
  - Purpose, actors, setup
  - Test Ideas & Test data
  - What scenarios to test and the expected results
  - How it can be tested
  - Which part of the application/system to explore?

A sample test charter can be found [here](https://www.tmap.net/sites/tmap/files/files/Exploratory%20Testing%20Charter%20Template%20v1.2_0.pdf)

## Time Box

Exploratory testers are time-boxed to test scenarios outlined in test charters. Time interval is uninterrupted and usually lasts for 90 minutes.

## Review Result

Deviations identified during testing should be handled by teams according to their agreed process.

## Debrief

The output result from the test should be complied and assessed if the actual results are the same as expected in charters. A decision should be made if further testing should be carried out.

# Exploratory testing vs Ad-hoc testing

Ad-hoc testing usually are unscripted and unplanned while Exploratory Testing is a thoughtful method, where tester finds test scenarios prior to the testing and records their test execution findings.

# Conclusion

Exploratory testing overcomes the limitation of scripted testing. It offers quick test feedback of the application/system and helps improving test case suite. Constant learning and adaptability are its main ethos.

**Please Note:**

A team COULD use exploratory testing, but it **_MUST NOT_** replace automated testing. As a prerequisite for Exploratory testing, team SHOULD prepare and review test charters. Any Defects/Deviations found MUST be handled according to the team's standard practices.

# References

Testing, E. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Exploratory\_testing