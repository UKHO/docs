# Naming Conventions v0.1

| Resource Type | Pattern To Follow | Extra Rules | Examples |
|-|-|-|-|
| Subscription | {Product Line} {Subscription Type} | {Subscription Type} is either “Dev/Test” or “Live” | - Tidal API Dev/Test <br /> - Tidal API Live <br /> |
| Resource Groups | {CloudKey}-{Product/Service/Area}[-{SubArea}]-{Env}-RG | Must be less than 90 characters |M-TidalAPI-PRD-RG <br /> MS-TidalAPI-APPLICATION-DQC-RG <br /> |
| Storage Account | {CloudKey}{Product/Service/Area}{Env}storage <br /> | **No Hyphens** <br /> **Must be lowercase** <br />| mtidalapidevstorage |
| Virtual Machine | {CloudKey}{Product/Service/Area}[{SubArea}]{Env}VM[nn] | Must be less than 15 characters <br /> Hypens are optional <br /> | MSTDLAPIPRDVM01 |
| VM elements | {CloudKey}{Product/Service/Area}[{SubArea}]{Env}VM[nn]-{component} | Must start with the VM name from rules above <br /> Hypens are optional | MSTDLAPIPRDVM01-nic |
| Virtual Network | {CloudKey}-{Product/Service/Area}[-{SubArea}]-{Env}-vnet | Must be less than 64 characters <br /> | ms-nmwebsearch-dev-vnet |
| Subnet | {CloudKey}-{Product/Service/Area}[-{SubArea}]-{Env}-subnet | Must be less than 64 characters <br /> | ms-nmwebsearch-dev-subnet |
| Network Security Group | {CloudKey}-{Product/Service/Area}[-{SubArea}]-{Env}-nsg | Must be less than 64 characters <br /> | MSTDLAPIPRDVM01-nsg |
| Routing Table | {CloudKey}-{Product/Service/Area}[-{SubArea}]-{Env}-rt | Must be less than 64 characters <br /> | MSTDLAPIPRDVM01-rt |
| Routing Table Route | {Destination Product/Service/Area}[-{SubArea}]-route | Must be less than 64 characters <br /> | ms-SharedServicesSQL-route |
| SaaS/PaaS | {CloudKey}-{Product/Service/Area}[-{SubArea}]-{Env}-{SaaS/Paas} <br /> | Character limit depends on service - [naming-conventions](https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions) <br /> | M-TidalAPI-DEV-api-appservice |

**Tips:**

- Anything in `[]` is optional
- Keep {Product/Service/Area} as short as possible. It is used in ALL names and will eat into your character
- Env refers to the development environemnt i.e. DEV, PRD, DAT
- 99.9% of resources are case insentive (storage being the outlier).
- CamelCase is preferred but not mandated.
- Cloud Key for Azure Resources should be `M` or `MS`
- Avoid speical characters and spaces where possible
- Window VMs resource names cannot be over 15 characters
- When using resources with short character limits, omit hypens as a first step

## How to contribute to this document

The owner of this document is Digital Operations. Please submit suggestions/changes/amendments via pull request.

## References

- [Microsoft Best Practices: Naming Conventions](https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions)

- [Microsoft Cloud Adoption Framework: Enterprise Scaffold](https://docs.microsoft.com/en-us/azure/architecture/cloud-adoption/appendix/azure-scaffold)

- UKHO VM Naming Convention {Site}{Service}{Env}{Role}{ID}
