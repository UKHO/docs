# Azure Naming Convention v0.1

This document outlines the naming conventions that should be used when generating new cloud resources. The naming conventions provided in this document give a computable convention to follow, allowing you to implement these in automation. Follow the naming conventions in this document to comply with UKHO governance of naming cloud resources.

## Reference Table

| Type | Pattern | Rules | Examples |
|-|-|-|-|
| Subscription | {Product Line} {Subscription Type} | {Subscription Type} can = “Dev/Test” or “Live” | - Tidal API Dev/Test <br /> - Tidal API Live <br /> - NMWebSearch Dev/Test <br /> - NMWebSearch Live <br /> - Shared Services Dev/Test <br /> - Shared Services Live |
| Resource Groups | {CloudKey}-{Product/Service/Area}[-{SubArea}]-{Env}-RG | Length: < 90 |M-TidalAPI-PRD-RG <br /> M-TidalAPI-NETWORK-DEV-RG <br /> M-TidalAPI-APPLICATION-DQC-RG <br /> M-TidalAPI-DATA-PRD-RG |
| Storage Account | {CloudKey}{Product/Service/Area}{Env}storage <br /> {CloudKey}{Env}{Product/Service/Area}storage | *No Hyphens, must be lowercase* | mtidalapistorage |
| Virtual Machine | {CloudKey}{Product/Service/Area} }[{SubArea}]{Env}VM[nn] | Length: < 15 <br /> Rules as above <br /> Casing is not important, hyphens help but are not important | M-TidalApi-PRD-VM01 |
| VM elements | {CloudKey}-{ Product/Service/Area} }[-{SubArea}]-{Env}-VM[nn]-{component} | Rules as above <br /> Must be prefixed with Virtual Machine resource name <br /> Casing is not important, hyphens help but are not important | M-TidalApi-Prd-VM01-nsg |
| Virtual Network | {CloudKey}-{ Product/Service/Area} }[-{SubArea}]-{Env}-vnet | Length: < 64 <br /> Rules as above | M-tidalapi-dev-vnet |
| SaaS/PaaS | {CloudKey}-{ Product/Service/Area} }[-{SubArea}]-{Env}-{SaaS/Paas} <br /> {CloudKey}-{Env}-{ Product/Service/Area} }[-{SubArea}]-{SaaS/Paas} | Length: depends on service refer to [naming-conventions](https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions) <br />Casing is not important, hyphens help but are not important | M-TidalApi-dev-api-appservice |

## Legend

### {Cloud Key}

- M / MS = Azure,
- A = AWS,
- G = Google,
- I = IBM,
- H = Taunton,
- D = Plymton

### {Env}

- DEV = Development
- PRD = Production
- AT = Acceptance Testing
- QA = Quality Assurance
- PRE = PreProd

## Notes

The resource name cannot be too long as services like key vault are limited to 24 characters. Some processes might be using a string concatenation to build up the name of a resource, so any prefixed values need to be considered.

Hyphens could take up precious characters, so do not hold that hyphens are always needed, proper casing could be used in place (Where resources allow), so long as similarly grouped resources are named the same.

## How to contribute to the is document

The owner of this document is Digital Operations. Please submit suggestions/changes/amendments to Digital Operations.

## References

- [Microsoft Best Practices: Naming Conventions](https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions)

- [Microsoft Cloud Adoption Framework: Enterprise Scaffold](https://docs.microsoft.com/en-us/azure/architecture/cloud-adoption/appendix/azure-scaffold)

- UKHO VM Naming Convention {Site}{Service}{Env}{Role}{ID}