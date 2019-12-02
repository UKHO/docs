# Technologies List

Tools and technologies being used by UKHO engineering teams. Investigation of these technologies will have a sponsor and will either be investigated within a team (perhaps through an agile Spike), during a JFDI activity or by the architecture practice.

These lists have been agreed and approved by the Lead Engineer Forum and the Architecture Team and will be reviewed on a regular basis with the latest version published here.

## Horizon

If a technology is on this list it means that time can be spent investigating it (e.g. on JFDIs).

| Technology | Kind | Sponsor | Approval | Usage | Notes |
|---|---|---|---|---|---|
| Node JS | Software |  | None |  |  |
| Actor Pattern |  | Andrew Poole | None |  | Proto-actor, Akka .net etc |
| Bots |  |  | None |  | Alexa protoytpe in R&D |
| Kotlin | Language | Joseph Egan | None |  | On hold pending more use in government |
| Azure KeyVault | Software | Carl Molyneux | None |  | Carl is going to speak to ITSOs about using Vault, as we now have a use case that PMP doesn't cover |
| ~Graph Databases~ |  | ~Andrew Poole~ | None |  |  |
| ~Block Chain~ |  | ~Andrew Poole~ | None |  |  |
| Serverless |  | ~Mainstream~ | None |  | Az Functions was part of AVCS online but were de-scoped. Maybe in second phase? Az Logic Apps |
| Kafka | Software |  | None |  |  |

## Using

| Technology | Kind | Sponsor | Approval | Usage | Notes |
|---|---|---|---|---|---|
| Kubernetes | Environment | Antony Derham | Yes | Data Platform | Cloud Native container scheduler; used as Azure Kubernetes Service |
| GraphQL | Language | Antony Derham | Yes | Data Platform with Hasura | Open source query language; alternative choice to REST |
| TypeScript | Language | Antony Derham | Yes | Data Platform | Superset of Javascript with type system |
| Angular | Framework | Antony Derham | Yes | Data Platform | Enterprise frontend framework |
| Jest | Tool | Antony Derham | None | Data Platform | Unit test runner for frontend |
| Cypress | Tool | Antony Derham | None | Data Platform | E2E test runner for frontend |
| Java | Language |  | Yes | Data Platform |  |
| Spring | Framework |  | Yes | Data Platform |  |
| Postgres | Software | Antony Derham | Yes | Data Platform | Open source relational SQL database |
| Hasura | Software | Antony Derham | Yes | Data Platform | Backend-as-a-service providing GraphQL endpoint on top of Postgres |
| Flux | Tool | Antony Derham | Yes | Data Platform | GitOps operator for Kubernetes |
| Kamus | Tool | Antony Derham | Yes | Data Platform | GitOps secrets management tool |
| Azure DevOps Pipelines | Software |  | Yes | Data Platform | CI/CD pipelines |
| Azure Container Registry | Software |  | Yes | Data Platform | Docker Container/Helm Chart repository |
| Fluentd | Software |  |  | Data Platform | Log aggregator |
| ElasticSearch | Software |  | Yes | Data Platform | Log storage and indexing |
| Kibana | Software |  | Yes | Data Platform | Log view interface |
| Grafana | Software | | None | Data Platform | Monitoring dashboard |
| Prometheus | Software |  | None | Data Platform | Metrics collector |
| Terraform | Tool |  | Yes | Data Platform | Cloud provisioning tool |
| Azure Data Lake Storage | Software |  | Yes | Data Platform | File-based storage service with Hadoop-like interfaces |

## End of life

If a technology is on this list, we should be actively looking to move away from using it.

| Technology | Kind | Sponsor | Approval | Usage | Notes |
|---|---|---|---|---|---|
