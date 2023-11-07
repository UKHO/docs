# API Testing Policy Document

## Purpose

This document establishes the policy for testing .NET APIs. It delineates when to utilize `WebApplicationFactory` for integration tests and the exceptional circumstances where tests may directly target a deployed instance to verify security and safety requirements.

## Scope

This policy is applicable to all teams involved in API development and testing within the organization.

## Testing Methodology

### Integration Testing with `WebApplicationFactory`

`WebApplicationFactory` should be used for conducting integration tests. It creates a test server hosting the application under test, allowing for a controlled, isolated testing environment.

#### Guidelines for `WebApplicationFactory` Usage:

- **Business Logic Verification**: Tests that verify business logic are ideal candidates for `WebApplicationFactory`.
- **Real Database Integration**: When applicable, integration tests should interface with a real relational database rather than an in-memory database to capture the full spectrum of interactions and potential issues. Suitable examples include a LocalSQLDB or a SQL database provisioned in a Docker container.
- **Mock External Dependencies**: External services can be mocked to isolate the API under test.
- **Consistency and Reliability**: Tests should be consistent and not dependent on external environments.
- **Continuous Integration (CI)**: These tests should be integrated into the CI pipeline.

### Testing with Deployed Instances

Testing against deployed instances is reserved for:

#### Security Testing:

- **Authentication and Authorization**: Tests should confirm that security measures are effective in a production-like environment.

#### Safety and Compliance Testing:

- **Safety Compliance**: Some API's will have safety requirements that arise from safety modeling, these tests may need to be run against a deployed production-like environment in order to meet the safety requirements.
- **Disaster Recovery**: The API's disaster recovery mechanisms must be tested in a deployed environment.

#### Performance and Load Testing:

Note that the preferred technology for Performance/Load testing API's is K6. Please see "performance testing standards" (link tbc) for more info.

- **Real-world Load Scenarios**: The API should be tested under simulated real-world loads.
- **Scalability Assessments**: The infrastructure's ability to handle peak usage should be tested.




