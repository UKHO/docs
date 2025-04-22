# Disaster Recovery & Business Continuity

[Back to main Readme](README.md)

A business is as only as robust as its systems and services. Ensure you have a plan to restore your services in the event of a partial or complete failure. Don't wait for a crisis to occur. Instead, prepare ahead by planning and designing your services to be robust, and ensure you have structures in place to restore your services in the event of a failure. Recommended steps include:

* Know your business requirements and SLAs (Service Level Agreements). These will inform the approach taken to recovering after services fail.
* Understand the risks within your services, and their potential impacts. Consider and document options to mitigate those risks.
* Ensure you have systems in place for detecting outages, updating stakeholders and restoring services so you can
  * resolve outages quickly and efficiently,
  * recover from data loss or corruption
  * resume normal services
    * as fast as possible.
    * within the requirements of your SLAs

Training is available in Business Continuity planning. This should be completed by all members of the development team: See [link](https://learning.ukho.gov.uk/course/view.php?id=18)

## Building Robust Systems

* Where possible, use infrastructure as code tools, particularly Terraform (see Infrastructure as Code)
* Document infrastructure requirements, especially any secrets or manual steps that cannot or should not be recorded as infrastructure as code
* Consider using scaling, redundancy and load balancing solutions (such as those offered by Kubernetes) to mitigate the effects of single-service outages.
* Ensure that you have scheduled backups in place for all your data, supporting metadata and auditing solutions, and that these backups are sufficient to meet the terms of your SLAs
  * Scheduled backups should consider using GeoRedundant or Zone Redundant storage where possible (see Georedundancy above): this ensures that services can recover in the event of data loss affecting a single data centre
  * Data Sovereignty implications (See Data Sovereignty above) may mean that redundancy must be limited to the UK South and UK West data centres
* Set appropriate retention policies for historic data to ensure that that you can recover from partial or complete data corruption
* Ensure that backup and restore processes are thoroughly and unambiguously documented
* Agree and enforce secure policies for managing secrets within the team
* Consider using blue / green deployments, additional environments and other solutions to ensure redundancy and consistency between your services
* Consider employing external auditors to review your plans and recommend valuable improvements
* Perform regular testing and auditing to ensure the integrity of your data

## Disaster Recovery

* Complete and document a Disaster Recovery plan detailing how:
  * systems can be fully rebuilt from the ground up
    * following
      * a complete failure
      * a database service outage
      * a data corruption event
    * using
      * backups
      * infrastructure as code
      * documented manual steps
  * Ensure data and associated metadata can be recovered and restored from your regular backups
    * without data loss outside of agreed limits (usually a 2-hour time window)
    * within the timeframes allowed by your SLAs
    * without leaving data and supporting metadata out of sync
* Perform a disaster recovery exercise as early as possible to ensure that your processes work as intended
* Consider scheduling regular Disaster Recovery exercises:
  * to ensure necessary skills are maintained within the team
  * to ensure that documentation remains valid and up-to-date
  * and to maintain confidence in your recovery plan
* Consider using Azure Chaos studio to test common DR scenarios

[Back to main Readme](README.md)
