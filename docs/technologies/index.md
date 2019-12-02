# Technologies List

Tools and technologies being used by UKHO engineering teams. Investigation of these technologies will have a sponsor and will either be investigated within a team (perhaps through an agile Spike), during a JFDI activity or by the architecture practice.

These lists have been agreed and approved by the Lead Engineer Forum and the Architecture Team and will be reviewed on a regular basis with the latest version published here.

### Key

| Kind | Description |
|---|---|
| Language | Any sort of programming, markup, query, etc. language |
| Tool | Tooling used in development |
| Software | Any deployable software/service |
| Framework | Any application programming framework |
| Pattern | Any architectural, design, data flow, etc. pattern |
| Environment | Operating systems and execution environments |

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
| TypeScript | Language | Antony Derham | Yes | Data Platform, Design System | Superset of Javascript with type system |
| Angular | Framework | Antony Derham | Yes | Data Platform, Design System | Enterprise frontend framework |
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
| Yarn | Tool |  | Yes | Data Platform, Design System | Package manager for the Node ecosystem |
| Storybook | Tool |  | No | Design System | Story-based component testing, documentation and sandbox tool |
| GitHub | Software |  | Yes | Data Platform, Design System | Git-based code repository service |
| Axe | Software |  | No | Design System | Automated web accessbility checker |
| OAuth2 | Pattern |  | No | Data Platform | Used as part of Azure B2C/MS Auth Library for authorization |
| OpenID Connect | Pattern |  | No | Data Platform | Used as part of Azure B2C/MS Auth Library for authentication |
| JWT | Pattern |  | No | Data Platform | Used as part of Azure B2C/MS Auth Library for token structure |
| CentOS | Environment |  | Yes | Dev Workstations | Linux-based operating system |
| Docker | Environment |  | Yes | Data Platform | Containerisation |
| Ansible | Tool |  | Yes | Dev Workstations | Used to construct the Dev Workstation image |
| Azure Blob Store | Software |  | Yes | Data Platform | Blob-based storage service |
| Azure File Store | Software |  | Yes | Data Platform | File-based storage service |
| Nginx | Software |  | Yes | Data Platform | Web server; reverse proxy; Kubernetes ingress controller |
| RedHat Kickstart | Tool |  | Yes | Dev Workstations | Used to provision the CentOS environment |
| Helm | Tool |  | Yes | Data Platform | Package Manager for Kubernetes |
| Azure Dev Spaces | Tool |  | Yes | Data Platform | Development workflow and staging service for AKS |
| Sass | Tool |  | Yes | Data Platform, Design System | CSS pre-processor and language superset |
| ESLint | Tool |  | Yes | Data Platform, Design System | Linter for TypeScript/Javascript |

## End of life

If a technology is on this list, we should be actively looking to move away from using it.

| Technology | Kind | Sponsor | Approval | Usage | Notes |
|---|---|---|---|---|---|
