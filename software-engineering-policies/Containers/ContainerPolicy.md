# Container Policy

* Docker is one of our core software and test engineering tools.
* It should only be used within test and development environments.
* Use of docker should be considered on a case by case basis for dev and test, consideration of who * inherit the environments must be considered at the outset.
* Use of docker into live will need to be approved by The Head of Software Engineering in * unction with the Principal and Lead Software Engineers, until agreement is reached via APF forum.
* Docker best practices must be adopted by all teams using Docker.
* The Lead Software Engineer for each team is responsible for ensuring that this policy is adhered.
* A best practices page will be created on GitHub containing the information below.

## Container  Best Practices

### Must Do

* Secrets management inject env variables into the container not stored in plain text (encrypted).
* Define resources/limits/requests for the CPU/memory etc limits without these you cannot auto scale.
* Utilise IAC aka Helm/Kustomize to deploy/configure clusters/environments.
* Health checks akak readiness and liviness probe
* Ensure HTTPS is enforced for environments above Dev and Http -> Https redirect is enabled
* Ensure container logs and consumed by something
* Block access in above Dev to the physical machines running the cluster/ AKS employ vnet/firewall/RBAC rules etc
* Container Dependency Vulnerability Scanning?
* Use minimal dependencies, such as “Distroless” container base images:  <https://github.com/GoogleContainerTools/distroless>.
* Avoid unnecessary privileges and Do not run as root
* Have a process for updating dependencies.

### Should do

* Zero trust, Microservices/containers should communicate only with who they need to locked down by policy (ingress/egress)
* Access Policies, Network security Groups should be applied
* Namespace all containers
* Monitoring solution - ELK (.Net) EFK (Java) stacks, Graphana, Prome...(learn to spell)
* Utilise automated deployments on version increments within the container registry out to the nominated environment (eg dev)

### Could do

* Utilise DAPR for sidecar third party component management (queues, DB's etc)
* Utilise native built in support within visual studio for Docker
* Utilise Docker Compose to stub other dependencies that container utilises

## Best practice guides

<https://sysdig.com/blog/dockerfile-best-practices/>

Some notes from a previous principal dev on Docker/containers

1. Skills - we should look to keep stacks quite similar amongst the different teams within Software Engineering (without stifling innovation), to facilitate rotation but also the transfer of services from team to support team. I would not want a delivery to be using containers and the destination support team to have no skills in them. This could arguably be covered as part of the handover and up front support design of a solution, but may differ from team to team. Do we need formal training in containers across SE? Or probably at the very least guidance on the use of, to prevent teams achieving the same thing in 100 different ways?

1. Security - should we have a centralised container registry? As containers work from images pulled from the internet (albeit a supposedly "trusted" source such as Docker hub), do we need more rigour around that? When we spoke about containers a while back - when we had the ALM team - the vision was that they would own a central container registry that teams would pull from. If a team wanted a new container, this would firstly be added to our registry and the team would pull from there. This would enable a sheep-dip of container images, if we thought this was necessary (ITSO should have a say here).

1. How to keep containers up to date - when a team pulls a container image, this is a point in time. How will teams update the container images they are using? Stacking this against PaaS or SaaS where the OS etc is kept up to date for you could perhaps be a disadvantage if not considered.

Question – should docker form part of our core software engineering training ? (Not needed) – put on LMS some basic docker training.
  
Docker overview | Docker Documentation
