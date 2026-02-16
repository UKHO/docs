## Things to consider when decommissioning a service

When decommissioning a service, consider the following aspects as part of your impact assessment.

### Communication

- Service owners and product owners are the key decision makers on when a service should be decommissioned.
- Stakeholders should be informed of decommissioning activities well in advance.

### Service

### Data

Consider any data that the service holds and whether this needs to be migrated to another system or archived before decommissioning.

### Upstream/downstream

Consider impacts to upstream and downstream systems and services. Notify relevant teams of decommissioning plans.
Assess tests (functional, E2E, performance etc) that may be impacted by the decommissioning.

### Monitoring

SolarWinds alerts and dashboards should be removed once the service is decommissioned.

- API pollers
- Nodes
- Credentials (and supporting Entra identities if applicable)
- Panels in dashboards

### Documentation

- Green tiles

### Resources

- Entra identities
- Access packages
- Elastic
- Azure subscription & resources
- DNS entries

### References

Think about references in external systems:

- App Register
- PMP
- Tech Radar

Add a decommission report to the Github repository and link to it from the readme.md file.
Archive Github repository.

## Azure DevOps

Depends on project. Some service owners might want to keep their Azure DevOps project for historical reference, while others might want to delete it entirely.

If keeping:

- Decommission pipelines, environments, variables.
- Remove team members from the project.

If deleting:

- Ensure all necessary documentation and reports are saved elsewhere before deletion.

## Examples

[Content Delivery Service](https://github.com/UKHO/content-delivery-service?tab=readme-ov-file) - decommission report linked at the top of the README.
