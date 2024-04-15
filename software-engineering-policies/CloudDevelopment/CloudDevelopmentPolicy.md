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

## Network Security / Access Control Recommendations

### Guidance on Security with the Hub and Spoke Model (See https://github.com/UKHO/how-do-i/blob/3373f41de95525cf795df0d9c1aae7ada2dcea86/docs/subscriptions.md?plain=1)

### Public Cloud Security Policy

### Hybrid Cloud Security Policy

### Private Cloud Security Policy

## Legal / Government Regulations Affecting Cloud Policy

### See Cloud Security Principles from National CyberSecurity Center(https://www.ncsc.gov.uk/collection/cloud/the-cloud-security-principles)

### See Government Cloud First Policy (https://www.gov.uk/guidance/government-cloud-first-policy#government-cloud-principles)

### Statement of Current Regulatory Compliance

## Recommendations for Container Hosting / Orchestration

## See Container Policy

### Never Run As Root

## Requirements and Recommendations for

### Auditing

### Testing

### Linting

### Virus Scanning

### Code Analysis

### Dependency Checking for Cloud Applications

### Infrastructure as Code - Terraform, etc

### Secrets Management

### Microsoft Defender

## Deployment

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
* Consider using correlation Ids to link related logs and events
* Consider whether dashboards can be utilised to give developers ongoing visibility of service health, usage and performance
* Consider whether automated alerts can be used to notify the development team of any outage or event
* Consider how to balance necessary alerts against unnecessary noise.

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
