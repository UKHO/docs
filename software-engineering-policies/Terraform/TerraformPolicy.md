# Terraform Use And Module Policy

## Avoid local modules

Reiterating the Code Reuse Policy **Code assets must be reused where possible.** When thinking about creating local modules think about the use case, and if a simple file representation of the setup will work.

If the intention is to use a module for possible reuse by other teams or future then consider a public module using github as a host.

Examples of other terraform modules can be found by searching for [tfmodule on github](https://github.com/UKHO?q=tfmodule&type=all&language=&sort=)

## Set provider property on all objects

A provider property must be added to ALL data and resource elements

for example, in this [eventhub module](https://github.com/UKHO/tfmodule-azure-event-hub) all of the resources have a provider:

```terraform
resource "azurerm_eventhub_namespace" "eventhub_namespace" {
  provider            = azurerm.src
  name                = "m-${local.servicename_role_environment}-ns"
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name
  sku                 = var.sku
  capacity            = 2
  
  lifecycle {
    ignore_changes = [
      tags
    ]
  }
}
```

modules are developed to accept providers defined in the initial terraform code.

```terraform
module "spokesetup_prd" {
  depends_on = [azurerm_resource_group.rg]
  source     = "github.com/ukho/tfmodule-azure-vnet-with-nsg?ref=0.4.1"
  providers = {
    azurerm.src = azurerm.src
  }
  resource_group    = azurerm_resource_group.rg
  tags              = local.TAGS
  prefix            = local.PREFIX
  address           = local.MAIN_ADDRESS
  dns_servers       = local.DNS_SERVERS
  subnets           = local.SUBNETS
  newbits           = local.NEWBITS
  service_endpoints = local.MAIN_ENDPOINTS
}
```

Using remote modules it is possible to create versions that can be used with each project, evolving when needed and retrofiting where possible during a revisit.
