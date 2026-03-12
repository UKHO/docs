When decommissioning a service, consider the following aspects as part of your impact assessment.

## Communication

- Service owners and product owners are the key decision makers on when a service should be decommissioned.
- Stakeholders should be informed of decommissioning activities well in advance.

## Service

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

Documentation should be removed or updated to reflect the decommissioning of the service. Consider that documentation in dependent services may also need to be updated.

- Documentation in Github repositories
- Documentation in Azure DevOps wiki
- 'Green tiles'

### Resources

Resources that are no longer needed should be removed to avoid unnecessary costs. Consider the following which may need removing or updating.

- Azure subscription & resources
- Azure spoke configuration
- Entra identities
- Access packages
- Elastic
- DNS entries
- Firewall rules
- SSL certificates
- Grafana dashboards and alerts

### References

We have a number of tools which will need to be updated. Consider the following.

- App Register
- PMP
- Tech Radar

## Azure DevOps

What needs to be done in Azure DevOps will depend on the project. Some service owners might want to keep their Azure DevOps project for historical reference, while others might want to delete it entirely.

If keeping the project:

- Decommission pipelines, environments, variables, service connections.
- Remove team members from the project.

If deleting the project:

- Ensure all necessary documentation and reports are saved elsewhere before deletion.

## Final updates to Github repository

- Add a decommission report to the Github repository and link to it from `readme.md`.
- Archive the Github repository.

## Examples

[Content Delivery Service](https://github.com/UKHO/content-delivery-service?tab=readme-ov-file).
