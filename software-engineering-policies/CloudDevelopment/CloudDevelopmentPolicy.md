# Cloud Development Policy

## Purpose of this policy

## Scope of this policy

## Revision History / Schedule

## Cloud First Approach

## Acceptable Use for Cloud Technologies

### Guidelines

#### Data Security and Compliance

#### Access Control and Authentication

#### Data Sovereignty and Jurisdiction

#### Service Level Agreements (SLAs) and Support

#### Cost Management and Budgeting

#### Backup and Disaster Recovery

#### Compliance with Government Policies and Standards

#### Monitoring and Auditing

#### Training and Awareness

#### Change Management and Documentation

## Supported clouds for UKHO

### Azure

### AWS? (Only Data Science?)

### GCP

### Benefits of Multi-Cloud Approaches

## Network Security / Access Control Recommendations?

### Guidance on Security with the Hub and Spoke Model (See https://github.com/UKHO/how-do-i/blob/3373f41de95525cf795df0d9c1aae7ada2dcea86/docs/subscriptions.md?plain=1)

### Public Cloud Security Policy

### Hybrid Cloud Security Policy ??

### Private Cloud Security Policy ??

## Legal / Government Regulations Affecting Cloud Policy?

### See Cloud Security Principles from National CyberSecurity Center(https://www.ncsc.gov.uk/collection/cloud/the-cloud-security-principles)

### See Government Cloud First Policy (https://www.gov.uk/guidance/government-cloud-first-policy#government-cloud-principles)

### Statement of Current Regulatory Compliance

## Recommendations for Container Hosting / Orchestration

## See Container Policy

### Never Run As Root

## Requirements and Recommendations for

### Auditing

### Testing - limit scope to infra testing

### Linting

### Virus Scanning

### Code Analysis

### Dependency Checking for Cloud Applications

### Infrastructure as Code - Terraform, etc

### Secrets Management

### Microsoft Defender

## Deployment

### Container Scanning / Trivvy / MDVM

### Snyk

## Security

## Data Use in the cloud

### SOLAS Requirements

### Statement on personal / sensitive data

### Data Protection Act and useful respources (Links)

### Georedundancy

### Data Sovereignty (UK datacentres only)

### Recommended / supported database solutions

## Users

### User Management (Internal and External)

### Entra ID accounts over SAS / access keys / username/password connection strings

## Disaster Recovery & Business Continuity

A business is as only as robust as its systems and services. Ensure you have a plan to restore your services in the event of a partial or complete failure. Don't wait for a crisis to occur. Instead, prepare ahead by planning and designing your services to be robust, and ensure you have structures in place to restore your services in the event of a failure. Recommended steps include:

* Know your business requirements and SLAs (Service Level Agreements). These will inform the approach taken to recovering after services fail.
* Understand the risks within your services, and their potential impacts. Consider and document options to mitigate those risks.
* Ensure you have systems in place for detecting outages, updating stakeholders and restoring services so you can 
  - resolve outages quickly and efficiently,
  - recover from data loss or corruption
  - resume normal services
  	- as fast as possible.
    - within the requirements of your SLAs

Training is available in Business Continuity planning. This should be completed by all members of the development team:
https://learning.ukho.gov.uk/course/view.php?id=18

### Building Robust Systems:

* Where possible, use infrastructure as code tools, particularly Terraform (see Infrastructure as Code)
* Document infrastructure requirements, especially any secrets or manual steps that cannot or should not be recorded as infrastructure as code
* Consider using scaling, redundancy and load balancing solutions (such as those offered by Kubernetes) to mitigate the effects of single-service outages.
* Ensure that you have scheduled backups in place for all your data, supporting metadata and auditing solutions, and that these backups are sufficient to meet the terms of your SLAs
  - Scheduled backups should consider using GeoRedundant or Zone Redundant storage where possible (see Georedundancy above): this ensures that services can recover in the event of data loss affecting a single data centre
  - Data Sovereignty implications (See Data Sovereignty above) may mean that redundancy must be limited to the UK South and UK West data centres
* Set appropriate retention policies for historic data to ensure that that you can recover from partial or complete data corruption
* Ensure that backup and restore processes are thoroughly and unambiguously documented
* Agree and enforce secure policies for managing secrets within the team
* Consider using blue / green deployments, additional environments and other solutions to ensure redundancy and consistency between your services
* Consider employing external auditors to review your plans and recommend valuable improvements
* Perform regular testing and auditing to ensure the integrity of your data 

### Disaster Recovery

* Complete and document a Disaster Recovery plan detailing how:
  - systems can be fully rebuilt from the ground up 
    - following
      - a complete failure
      - a database service outage 
      - a data corruption event
    - using 
      - backups
      - infrastructure as code
      - documented manual steps
  - Ensure data and associated metadata can be recovered and restored from your regular backups
    - without data loss outside of agreed limits (usually a 2-hour time window)
    - within the timeframes allowed by your SLAs
    - without leaving data and supporting metadata out of sync
* Perform a disaster recovery exercise as early as possible to ensure that your processes work as intended
* Consider scheduling regular Disaster Recovery exercises:
  - to ensure necessary skills are maintained within the team
  - to ensure that documentation remains valid and up-to-date
  - and to maintain confidence in your recovery plan
* Consider using Azure Chaos studio to test common DR scenarios

## Logging and Monitoring for Cloud-Based Deployments

Appropriate logging, monitoring and auditing are essential to:

* Maintain confidence in your systems and services
* Provide early detection of outages and other issues affecting your services
* identify root causes in the event of outages, data loss, security concerns or other undesirable events

Logging Recommendations:

* Consider using the UKHOs centralised elasticsearch capability to ensure that all logs are captured and retained
* Agree on appropriate formats and logging levels to ensure logs are available and useful in maintaining your services
* Consider options to control log access and ensure logs are free from unnecessary sensitive data

Please view the dedicated logging policy here:
https://github.com/UKHO/docs/blob/main/software-engineering-policies/Logging/LoggingPolicy.md

Monitoring Recommendations

* Consider implementing Elastic Cloud APM to trace interactions across your services and identify performance issues or bottlenecks
  - proceed at risk as procurement process is in progress
  - Consider using the EventHub logging Nuget package: UKHO.Logging.EventHubLogProvider
* Consider using correlation Ids to link related logs and events
* Consider whether dashboards can be utilised to give developers ongoing visibility of service health, usage and performance
* Consider whether automated alerts can be used to notify the development team of any outage or event
* Consider how to balance necessary alerts against unnecessary noise.
* Integrate solar winds for business central alerting

A full draft policy on [Protective Monitoring](link TBC) for security purposes can be found here...

### On-prem vs DDC-managed vs In-team ELK/EFK stacks, etc

## Training

### Requirements

### Recommendations

### Resources

### Cloud Pilot's License

## Incident Detection and Reporting

## Register of UKHO Security contacts and responsible persons

## Azure Policy for enforcement of configuration

## Tagging

## BPSS vs SC vs DV

## Related Information/Notes

### Nautilus Account Types & Purposes - https://ukho.sharepoint.com/sites/SoftwareDevandTest/SitePages/Account-types.aspx

### Code Review Policy - https://github.com/UKHO/docs/blob/main/software-engineering-policies/CodeReview/CodeReviewPolicy.md

### Container Policy - https://github.com/UKHO/docs/blob/main/software-engineering-policies/Containers/ContainerPolicy.md
