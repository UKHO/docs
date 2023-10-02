# Infrastructure as Code: Terraform

Terraform is our tool of choice, and should be considered in the first instance.

Most standards and practices at the UKHO are covered in the training courses we provide around the use of Terraform.

Videos and a presentation can be found in the **Software Engineering Team > Training Channel**. Online resources provided by [terraform.io](https://www.terraform.io/) are also very useful.

## Avoid adding local modules

Holding modules in the same repository as the project reduces it's audience. It is likely that you might be tempted to copy the modules you created in the previous project to your new one.

Most modules can be written in a relative IP lossless way, to avoid attack vectors or concerns around security. Using public modules makes them easy to find and reuse, adhering to a standard naming convention makes them easy to find in GitHub, and creating releases allows for ease of specifying a version to use.

Each module should be hosted it's own GitHub repo to keep the download size small. following the convention mentioned in the [template project for terraform](https://github.com/UKHO/terraform-module-template) modules. Using the terraform module template will create a repo with the contents setup as standard. Review the naming convention guide linked on the readme of the template to see how you might go about naming the module.

Using the same naming convention allows for a [simple search for tfmodule](https://github.com/UKHO?q=tfmodule&type=all&language=&sort=) in GitHub to show a list of all the modules that are available and how to use them.

## Versioning modules

Semantic versioning is used. The main branch is used to control the latest releases. When testing an addition, tagging the feature branch with a pre-release tag is a beneficial way to identify this. A main release will be versioned as 0.1.0 whereas the pre-release will be versioned 0.1.0-alpha.1.

A new pre-release will be needed for each change intended for testing.

## Referencing modules in code

Modules in GitHub can be referenced easily using a source qualifier for GitHub. The ref pointer in the source url refers to the tag / release version you intend to use.

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
