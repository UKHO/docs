# Observability Definitions and Settings

This reference supports the [draft Observability Policy](observability.md). It records the definitions, metric categories, and configuration examples included in the source architecture.

## Definitions

| Term | Definition from the source |
| --- | --- |
| APM | Application Performance Monitor |
| SLI | Service Level Indicator: a quantifiable measure of service reliability |
| SLO | Service Level Objective: a reliability target for an SLI, for example 99.5% |
| Probe / synthetic test | A test that probes the system as if it were a real user |
| MI | Management Information |
| SME | Subject Matter Expert |

## Five golden signals

The source lists these service metrics:

- A count of what is going in
- A count of what is going out
- A count of what has been processed
- A count of errors or exceptions
- Processing latency in the service

These may be repeated for each business-object type processed by a service, such as each order type.

## APM library configuration

The source says to add settings as resource settings or in the pipeline, depending on the pipeline and .NET application type. Consult the [Elastic .NET Agent reference](https://www.elastic.co/guide/en/apm/agent/dotnet/current/index.html) for provider documentation and further examples.

Example application settings:

```xml
<add key="ElasticApm:ServiceName" value="FM External API" />
<add key="ElasticApm:ServerUrl" value="&lt;ask-the-support-sme&gt;" />
<add key="ElasticApm:ApiKey" value="" />
<add key="ElasticApm:Environment" value="local" />
```

Example environment variables:

```text
ELASTIC_APM_ENVIRONMENT=local
ELASTIC_APM_SECRET_TOKEN=
ELASTIC_APM_SERVER_URL=<ask-the-support-sme>
ELASTIC_APM_SERVICE_NAME=Test Local Service
```

Example JSON configuration:

```json
{
  "ElasticAPM": {
    "ApiKey": "",
    "ServerURL": "",
    "ServiceName": "Tech Radar",
    "Environment": "Local Dev"
  }
}
```

Typical ASP.NET Core integration shown in the source:

```csharp
using Elastic.Apm.AspNetCore;

var app = builder.Build();
app.UseElasticApm(app.Configuration);
```

The source leaves the environment name for all live environments as **TBC**. It also says API keys are currently issued on request via the Support SME, with a self-service facility under investigation/development by DDC. API keys are secrets and must be held in Key Vault, as stated in the [policy](observability.md).

## Runtime user monitoring

The source links to the [Elastic RUM JavaScript agent guide](https://www.elastic.co/guide/en/apm/agent/rum-js/5.x/intro.html) and provides this example:

```html
<script src="https://<your-cdn-host>.com/path/to/elastic-apm-rum.umd.min-<version>.js" crossorigin></script>
<script>
  elasticApm.init({
    serviceName: '<instrumented-app>',
    serverUrl: '<apm-server-url>'
  });
</script>
```

The source also links to the [Angular integration guide](https://www.elastic.co/guide/en/apm/agent/rum-js/current/angular-integration.html) and [agent installation guide](https://www.elastic.co/guide/en/apm/agent/rum-js/5.x/install-the-agent.html).

## Further examples

- [Elastic .NET agent samples](https://github.com/elastic/apm-agent-dotnet/tree/main/sample)
- [Observability Reference Architecture](https://ukho.sharepoint.com/sites/eagwiki/Pages/Observability%20Reference%20Architecture.aspx) (internal only)
