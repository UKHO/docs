# Infrastructure as Code: Terraform

Terraform is our tool of choice, and should be considered in the first instance.

Most standards and practises at the UKHO is covered in the Training courses we provide around the use of Terraform.

## Avoid adding local modules

Holding modules in the same repository as the project reduces it's audience. It is likely that you might be tempted to copy the modules you created in the previous project to your new one.

This should be avoided at all costs. Most modules can be written in a relative IP lossless way, to avoid attack vertors or concerns around security, using public modules makes reuse easy to find and use when adhering to a standard naming makes them  easy to find in GitHub, using releases allows for ease of versioning.

A simple search for [tfmodule](https://github.com/UKHO?q=tfmodule&type=all&language=&sort=) will show a list of all the modules that are available and how to use them.

## Verisioning Modules

Semantic versioning is used, the main branch is used to control the latest releases, when testing an addition, tagging the feature branch with a pre-release tag is a benefitial way to identify this. a main release will be versioned as 0.1.0 where as the pre-release will be versioned 0.1.0-alpha.1.

A new pre release will be needed for each change intended for testing.

## Referencing modules in code

Modules in github can be referenced easily using a source qualifier for github. the ref pointer in the source url refers to the tag / release version you intend to use.

```terraform
module "eventhub" {
  source                       = "github.com/ukho/tfmodule-azure-event-hub?ref=0.4.0"
  providers = {
    azurerm.src = azurerm.alias
  }
  
  servicename                 = var.servicename
  deploy_environment          = var.deploy_environment
  role                        = var.role
  resource_group_name         = var.resource_group_name
  resource_group_location     = var.resource_group_location
 }
 ```
