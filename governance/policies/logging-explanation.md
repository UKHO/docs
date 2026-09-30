# Understanding Logging

This document explains the purposes and trade-offs of logging described in the [Logging Policy](logging.md).

## Elastic Cloud context

Elastic is UKHO's business logging platform. Azure Event Hubs provide the ingestion path for Azure-hosted services and are also used by on-premise services as a step towards becoming cloud services. Elastic Cloud moves ingested logs from the Hot tier to the Cold tier after two days; the Cold tier is intended for data that is still likely to be searched but is infrequently updated.

Cloud resource-specific logs, such as native activity or diagnostic logs, can be useful, but are not usually ingested into Elastic. Their use can add cost, so teams need to keep that cost in view.

The older LogShipper and UKHO.EventHubLogging patterns have been superseded or deprecated in favor of the Elastic Cloud and UKHO.Logging.Serilog approach. Existing services using legacy patterns need a migration path; see the [Elastic Cloud migration how-to](logging-how-to.md).

## Log categories

- **Diagnostic logs** provide information about service operation and are generally useful for debugging. Projects need to balance useful information against the risk of logging too much.
- **Audit/metric logs** provide information about service operation and are generally useful for auditing and metrics. Numeric values or small enums can be aggregated where possible.
- **Request/response logs** record requests to and responses from a service. They help trace a request across services and identify problems with requests.

## Choosing useful log information

Logs can support diagnosis and auditing, but logging information without diagnostic or audit value can add unnecessary volume. Health-check logs can cause log saturation, while health-check endpoints can be polled instead. Selective logging helps focus on useful information rather than capturing many properties in the hope that something will be useful.

Consistent language and format across logs makes values comparable. Audit/metric logs can be numeric or use small enums so they can be aggregated. Request-specific information helps distinguish one request from others.

## Security and privacy context

String concatenation can create log injection vulnerabilities, which is why the policy calls for structured logging. Sensitive information and personal information in logs can expose passwords, secret keys, session IDs, customer names, addresses, and email addresses. Binary data and large files can be represented by references to objects in appropriate storage.
