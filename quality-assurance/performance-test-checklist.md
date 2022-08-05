# Performance testing checklist

## Purpose of this document

This document lists activities that you should consider when planning performance testing.

## Activity list

### Establish business requirements

- What are the requirements for resilience under load (e.g. availability, responsiveness)?
- What will be typical and peak usage of the system?
- What are the requirements for scaling?
- What are typical patterns of usage (e.g. peaks, types of request)?

### Agree types of performance testing to carry out, and data to gather

e.g.

- [Load testing](https://artoftesting.com/types-of-performance-testing#Load_testing)
- [Soak / Endurance testing](https://artoftesting.com/types-of-performance-testing#Endurance_testing)
- [Stress Testing](https://artoftesting.com/types-of-performance-testing#Stress_testing)

For each type of testing, work out what data must be collected to support quality judgements.  For example, for load testing you might collect data about response times and failure rates and also data regarding SUT health such as CPU and memory usage.  For soak testing, you will additionally want to track SUT health data in more detail, looking for upward trends in things such as memory usage, database connections, and threads.

For each type of testing, work out whether it is appropriate to run it as part of delivery pipelines.

### Manage Technical Stakeholders

Depending on the technical context, ensure technical stakeholders are happy with what is planned.  This is particularly important if on-prem resources will be subjected to load, where members of the tech ops team will need to be consulted.

### Design system under test (SUT)

Design the system that will be tested.  This should be as close to the live system as possible.  Where possible, it should not contain elements of infrastructure shared with production systems.

### Select tools

Consult team tech radars for currently in-use technologies.
Depending on the types of testing planned, you will typically be using some sort of load testing tool.  The approved load testing tool is [K6](https://k6.io/).  For more complex scenarios you might use other technologies, e.g. for collecting, correlating and visualising results.  It is suggested that you use InfluxDB & Grafana for visualising k6 output, as per [this example](https://github.com/UKHO/k6-reporting).

### Design performance test tool infrastructure

Design the infrastructure that the test tool will sit on, together with any other data-gathering infrastructure.

### Document in the test approach document

Add the decisions made so far into the test approach document.

### Control technical risks

- Identify potential technology risks, e.g. obscure authentication mechanisms.
- Carry out spike work to provide information on risks.

### Design test data

- The initial data state of the system should be realistic while being subject to performance testing.
- Design these baseline data, create scripts / data loads / images.

### Commission SUT environment
 
### Control costs

- Understand how the planned performance testing will affect cloud costs.
- Establish what elements of the SUT and test infrastructure will automatically scale, and which are metered.  
- Calculate costs of the planned test
- Establish monitoring / subscription limits to manage costs

### Establish observability in SUT

- Where data about the SUT are required in order to make a quality judgement (e.g. CPU usage, number of internal errors), establish ways of collecting these.

### Script tests

- Use sensible software engineering practices (e.g. code review, source control)

### Run tests

- Collect and evaluate data
- Iterate

### Add performance tests to CI

### Include results in TSR

### Completion

Ensure load test artefacts are stored for future use according to team policy (typically in source control).  Include all code and deployment scripts.
