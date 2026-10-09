# Implement Application Observability

This guide collects the implementation steps described by the [draft Observability Policy](observability.md). Follow the provider documentation and existing implemented projects for application-specific details.

## Instrument a .NET application with APM

1. Add the APM code, libraries, and configuration at the application root. Select the library and hooks for the .NET application type, such as an HTTP web application, API, desktop application, or container. The source identifies the Fleet Manager HTTP UI and B2B API as examples.
2. Configure the application to use the relevant provider instance. The source directs teams to the Support SME for provider credentials.
3. Add extra traces and metadata when finer-grained application metrics are needed. Elastic APM calls custom or business-specific metrics “labels”.
4. Set up probes (synthetic tests) that run externally as if a user were using the application.
5. Use Terraform to script APM and synthetic-test setup for deployment and supportability.
6. For service dashboards that provide developers with ongoing visibility of service health, usage, and performance; SLI/SLOs; BAU support alerts; or alert connectors, consult the Support SME. The source says internal and external dashboards are available and describes alerts with connectors to the Status Page and other systems. Balance useful outage and event alerts against unnecessary noise.

For configuration examples, see [Observability definitions and settings](observability-reference.md).

## Add browser real-user monitoring

1. Follow the Elastic [RUM JavaScript agent guide](https://www.elastic.co/guide/en/apm/agent/rum-js/5.x/intro.html) and, for Angular, its [Angular integration guide](https://www.elastic.co/guide/en/apm/agent/rum-js/current/angular-integration.html).
2. Download the latest RUM agent from GitHub or UNPKG and host it on your server or CDN before deploying to production.
3. Use a versioning scheme and set a far-future `max-age` and `immutable` in the `Cache-Control` header; the source says the file does not change.
4. Configure the RUM agent with the instrumented application’s service name and APM server URL. See the [RUM configuration example](observability-reference.md#runtime-user-monitoring).
