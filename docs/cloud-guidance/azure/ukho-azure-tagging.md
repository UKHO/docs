# UKHO Azure Tagging Strategy v0.1 DRAFT

## How to use this document

This document outlines which tags should be applied when creating resources in the cloud. Use the table below to ensure you are conforming to the UKHO tagging strategy.

## How to contribute to this document

The owner of this document is Digital Operations. Please submit suggestions/changes/amendments vie a pull request and inform Digital Operations.

## References

The following has been used to inform the creation of these standards:

- [Microsoft Using Tags to Organise Azure Resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags)
- [AWS Tagging Strategies](https://aws.amazon.com/answers/account-management/aws-tagging-strategies/)
- [Google Labelling Resources](https://cloud.google.com/compute/docs/labeling-resources)
- UKHO Solarwinds

## Tags

| Tag Key | Tag Value Description | Examples | Type |
|---------|-----------------------|----------|------|
| SERVICE | A human-readable name of the service – ideally the common reference of the business. | - Core Data Platform <br /> - Task Manager <br /> - POD | Required |
| ENVIRONMENT | The shorthand representing the environment. | - DEV <br /> - QA <br /> - PREPRD <br /> - PRD | Required |
| SERVICE_OWNER | The service owner or product owner in the business. | - Joanna Bloggs <br /> - Fred Stoodley | Required |
| RESPONSIBLE_TEAM | The current or last team from a technical perspective to support the product/service. | - Proteus <br /> - Digital Operations <br /> - Mazu | Reuqired for production |
| COST_CENTRE | The cost code allocated to the service for OPEX |  | Optional |
