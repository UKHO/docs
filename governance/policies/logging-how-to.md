# Migrating Logging to Elastic Cloud

This how-to supports the [Logging Policy](logging.md). It covers the checks stated for services using the legacy Azure Event Hub > LogStash > on-premise Elasticsearch pattern.

1. Ensure the service adheres to the [Logging Policy](logging.md) before migration.
2. At every stage of development, check LogStash for errors using the DDC Grafana monitor set up for this purpose.
3. Before migrating to Elastic Cloud, confirm that LogStash has no errors or warnings.

Before migration, LogStash should have no errors or warnings.
