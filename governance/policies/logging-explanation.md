# Understanding Logging

This document explains the purposes and trade-offs of logging described in the [Logging Policy](logging.md).

## Log categories

- **Diagnostic logs** provide information about service operation and are generally useful for debugging. Projects need to balance useful information against the risk of logging too much.
- **Audit/metric logs** provide information about service operation and are generally useful for auditing and metrics. Numeric values or small enums can be aggregated where possible.
- **Request/response logs** record requests to and responses from a service. They help trace a request across services and identify problems with requests.

## Choosing useful log information

Logs can support diagnosis and auditing, but logging information without diagnostic or audit value can add unnecessary volume. Health-check logs can cause log saturation, while health-check endpoints can be polled instead. Selective logging helps focus on useful information rather than capturing many properties in the hope that something will be useful.

Consistent language and format across logs makes values comparable. Audit/metric logs can be numeric or use small enums so they can be aggregated. Request-specific information helps distinguish one request from others.

## Security and privacy context

String concatenation can create log injection vulnerabilities, which is why the policy calls for structured logging. Sensitive information and personal information in logs can expose passwords, secret keys, session IDs, customer names, addresses, and email addresses. Binary data and large files can be represented by references to objects in appropriate storage.
