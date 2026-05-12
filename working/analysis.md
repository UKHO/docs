# Engineering-Relevant Extract from Audit

This document pulls out the parts of `working/Temp.md` that are most relevant to software engineering, platform engineering, DevOps, cloud engineering, and test engineering.

It is intentionally selective rather than exhaustive. It focuses on controls that directly affect:

- software delivery
- secure development
- test practices
- source control and CI/CD
- cloud and platform operations
- access and change control for engineering teams
- logging, monitoring, vulnerability management, and incident response where engineering teams are likely contributors

## Key themes for engineering

- Secure by Design is expected, but not yet consistently implemented across the organisation.
- Development teams are expected to follow a Secure Development Lifecycle and secure coding practices.
- Security testing is mandatory in delivery workflows, but supporting documentation is out of date.
- Development, test, and production environments are expected to be separated.
- Source code, configuration, privileged access, and operational changes are all expected to be tightly controlled.
- Several opportunities for improvement affect engineering directly, especially around documented security requirements, DLP, backup validation, network service hygiene, and consistent Secure by Design adoption.

---

## 5.8 - Information security in project management

- **Control owner:** PMO
- **Level:** 60

### Control objective
Information security should be integrated into project management.

### Control notes and details
> Secure by Design (SbD) mandates that Information Security must be consider at the very beginning of a project and throughout the life of that project and into the operation of the system. All new change to be delivered must follow the Delivery Governance framework (DGf). This framework includes the requirement that new projects shall include engagement with the Information Security team.
>
> Framework to be improved with stage gates that support SbD process

### Opportunity for improvement
> Secure by Design process has not been implemented across the entire organisation.

### Engineering relevance
- Security engagement is expected from project inception.
- Delivery governance should include engineering stage gates.
- Current inconsistency suggests teams may need clearer engineering-ready checkpoints.

---

## 5.15 - Access control

- **Control owner:** CISO James Bruckel
- **Level:** 80

### Control objective
Rules to control physical and logical access to information and other associated assets should be established and implemented based on business and information security requirements.

### Control notes and details
> POL214 Identity and Access Management Policy refers. Access control to all systems is based on the principle of 'Least Privilege'. User access rights is determined by user role and in accordance with POL214.

### Opportunity for improvement
> Access control policy to be rewritten for IDAM

### Engineering relevance
- Least privilege should apply to engineering tools, environments, repositories, and pipelines.
- Role-based access remains important for delivery, support, and operational separation.

---

## 5.16 - Identity management

- **Control owner:** Tech Ops
- **Level:** 50

### Control objective
The full life cycle of identities should be managed.

### Control notes and details
> New accounts are created via a service catalogue request from the line manager. De-registration process is kicked-off from a leavers list generated from i-Trent. This will in turn generate a service request.

### Opportunity for improvement
> Issues identified from GIAA audit

### Engineering relevance
- Joiner/mover/leaver processes affect engineering account hygiene.
- Shared, stale, or poorly governed identities create risk for repositories, build agents, cloud subscriptions, and test systems.

---

## 5.18 - Access rights

- **Control owner:** Tech Ops
- **Level:** 80

### Control objective
Access rights to information and other associated assets should be provisioned, reviewed, modified and removed in accordance with the organization’s topic-specific policy on and rules for access control.

### Control notes and details
> User accounts and access rights are audited at the end of each calendar year quarter. The HR system i-trent auto-generates a 'Leaver' email to the Service Desk. The service desk then raises a 'Leavers' task in the IT Portal. External 'Teams' site owners review guests on monthly basis.

### Opportunity for improvement
> GIAA audit review illustrates weakness

### Engineering relevance
- Regular review of engineering access should include code repositories, environments, test platforms, package feeds, and cloud resources.
- Guest and external collaborator access is an engineering concern where suppliers or partners contribute.

---

## 5.23 - Information security for use of cloud services

- **Control owner:** CISO James Bruckel
- **Level:** 100

### Control objective
Processes for acquisition, use, management and exit from cloud services should be established in accordance with the organization’s information security requirements.

### Control notes and details
> AAA - controls are PAM, entitlement management for access packages, monthly access reviews, internal users have accounts sync'd from AD on-prem, and external users have guest invites to UKHO tenants, and have timebounds access for privileged accounts and access packages. Monthly access reviews are managed by service owners.
>
> DDC manage cloud access - Azure main platform. TechSys manage AWS (POD) and GCP.
>
> Azure landing zone has default policies to control security settings - need review. Deployments use pipelines. Code source control using Github. ALZ have template modules that are compliant with ALZ policies. Are these compliant with CIS Benchmark?
>
> Centralised monitoring for Entra diagnostics and Azure F/W logs. Application logs are in Elastic tech stack. Vulnerability scanning across internal and external IPs. Solarwinds monitoring across external access points.
>
> Use of Cloud Defender across the main tenant.

### Opportunity for improvement
> Cyber Security Model - GOV.UK

### Engineering relevance
- Strongly relevant to cloud engineering, platform teams, and CI/CD.
- Shows dependence on privileged access management, access packages, monthly reviews, landing zone policy, pipelines, and centralised monitoring.
- Raises a specific engineering question around benchmark compliance of landing zone templates.

---

## 5.24 - Information security incident management planning and preparation

- **Control owner:** CISO James Bruckel
- **Level:** 100

### Control objective
The organization should plan and prepare for managing information security incidents by defining, establishing and communicating information security incident management processes, roles and responsibilities.

### Control notes and details
> POL206 defines the roles and responsibility for Incident Management.

### Engineering relevance
- Engineering teams typically contribute runbooks, telemetry, escalation paths, and recovery support.
- This control supports expected collaboration between engineering and security operations.

---

## 5.25 - Assessment and decision on information security events

- **Control owner:** CISO James Bruckel
- **Level:** 80

### Control objective
The organization should assess information security events and decide if they are to be categorized as information security incidents.

### Control notes and details
> Information Security Events are assessed in alignment with the Cyber Incident Response Policy. The Cyber Incident Response Plan includes details to assist with Incident Classification. Classification takes incident severity, priority and escalation into account during event categorisation with 4 main incident levels: Critical, High, Medium and Low.

### Opportunity for improvement
> Access to systems for incident identification is limited

### Engineering relevance
- Detection quality depends on accessible logs, telemetry, and system visibility.
- Limits in incident identification can affect service teams and on-call engineering response.

---

## 5.26 - Response to information security incidents

- **Control owner:** CISO James Bruckel
- **Level:** 80

### Control objective
Information security incidents should be responded to in accordance with the documented procedures.

### Control notes and details
> Security Events that are subsequently classified as information security incidents will trigger the relevant response process. A number of rules and run books have been setup to assist with the most common and frequent events.

### Opportunity for improvement
> Incident illustrated response is not timely and without full approval

### Engineering relevance
- Runbooks, automation, and approval paths are engineering-adjacent responsibilities.
- Slow or approval-heavy response can affect operational resilience.

---

## 5.27 - Learning from information security incidents

- **Control owner:** CISO James Bruckel
- **Level:** 50

### Control objective
Knowledge gained from information security incidents should be used to strengthen and improve the information security controls.

### Control notes and details
> A requirement of the Cyber Incident response Policy is that a post incident meeting is conducted to collect any lesson learned from the incident.
>
> Lessons learned are not recorded and/or communicated.

### Opportunity for improvement
> Record and communicate lessons learned

### Engineering relevance
- Post-incident learning should feed backlog items, architecture decisions, tests, alert tuning, and runbook updates.
- This is a direct improvement area for engineering practice.

---

## 5.35 - Independent review of information security

- **Control owner:** CISO James Bruckel
- **Level:** 100

### Control objective
The organization’s approach to managing information security and its implementation including people, processes and technologies should be reviewed independently at planned intervals, or when significant changes occur.

### Control notes and details
> UKHO Information Systems are subject to MOD Secure by Design process to provide through-life security assurance. UKHO is subject to DIA audits and annual CCF audits. CAF Audit held in September 2025. UKHO is audited against ISO270001 and is currently compliant as of April 2026.

### Engineering relevance
- Engineering delivery artefacts, designs, controls, and evidence are likely inputs into independent assurance.
- Secure by Design is expected to provide through-life assurance.

---

## 5.36 - Compliance with policies, rules and standards for information security

- **Control owner:** CISO James Bruckel
- **Level:** 80

### Control objective
Compliance with the organization’s information security policy, topic-specific policies, rules and standards should be regularly reviewed.

### Control notes and details
> System assurance is subject to continuous review following the Secure by Design (SbD) process. Compliance with security policies and standards are considered at SWG and CROB at regular intervals. Regular Penetration testing is planned and ongoing.

### Opportunity for improvement
> Secure by Design process has not been implemented across the entire organisation.

### Engineering relevance
- Continuous compliance and recurring penetration testing affect engineering roadmaps and release controls.
- Again highlights incomplete SbD adoption.

---

## 5.37 - Documented operating procedures

- **Control owner:** Business Assurance
- **Level:** 50

### Control objective
Operating procedures for information processing facilities should be documented and made available to personnel who need them.

### Control notes and details
> Quality Procedures (QPs) and Quality Working Procedures (QWPs) are used across the business.
>
> Issues with version control, updating in term, etc across the organisation. All security documentation is current and itemised in the Policy Register.

### Opportunity for improvement
> Other areas of technology need addressing

### Engineering relevance
- Engineering and platform teams need current operational procedures for builds, releases, recovery, deployment, and support.
- Documentation version control is an explicit weakness.

---

## 6.3 - Information security awareness, education and training

- **Control owner:** CISO James Bruckel
- **Level:** 100

### Control objective
Personnel of the organization and relevant interested parties should receive appropriate information security awareness, education and training and regular updates of the organization's information security policy, topic-specific policies and procedures, as relevant for their job function.

### Control notes and details
> All staff must complete an annual civil service information security/assurance awareness training. In addition the UKHO conducts internal Information and Security awareness initiatives based on an annual plan.

### Engineering relevance
- Security capability is expected to be maintained, including role-relevant awareness.
- This supports secure coding, secure testing, and operational readiness.

---

## 8.4 - Access to source code

- **Control owner:** Principle Devs
- **Level:** 100

### Control objective
Read and write access to source code, development tools and software libraries should be appropriately managed.

### Control notes and details
> Microsoft Azure DevOps Server is used to securely store all source code and access is restricted to those that require it as part of their role profile. The UKHO follows the UKHO Secure Code policies that are reviewed and updated in a monthly review cycle.

### Engineering relevance
- Directly relevant to repository permissions, branch protections, and development tooling access.
- Confirms source control governance as an explicit audit area.

---

## 8.8 - Management of technical vulnerabilities

- **Control owner:** Tech Ops
- **Level:** 100

### Control objective
Information about technical vulnerabilities of information systems in use should be obtained, the organization’s exposure to such vulnerabilities should be evaluated and appropriate measures should be taken.

### Control notes and details
> All UKHO Information systems are patched against vulnerabilities in accordance with the UKHO vulnerability and patching policy (POL218). Systems are routinely scanned for vulnerabilities by our SOC. System accreditation is subject to annual technical review. Regular Penetration testing.
>
> Engineering server estate is updated with current patches as per cycle.
>
> Rest of technical estate MS Patches (operating systems and .Net) and third parties are managed through SCCM from the WSUS service. Capability to report compliances per service type and plan remediation activities. Maintenance cycle is weekly.
>
> MOD Cert - weekly status meeting to apply immediate patches in response of MODCERT criticality.

### Engineering relevance
- Strong impact on engineering estate, hosted services, base images, dependencies, and patch windows.
- Penetration testing and vulnerability remediation should feed engineering planning.

---

## 8.9 - Configuration management

- **Control owner:** Chris Sutcliffe
- **Level:** 100

### Control objective
Configurations, including security configurations, of hardware, software, services and networks should be established, documented, implemented, monitored and reviewed.

### Control notes and details
> UKHO deploy NCSC / MoD Baseline images based on roles, overlayed with exception policies. Implement network segmentation with VLANs, Privileged Identity Management (PIM) incorporating Just-in-Time (JIT) access, a change management process managed through the IT portal, and adherence to vendor guidelines and Microsoft templates and procedures are implemented. Service Desk have "How do I" guides on building and configuring laptops and other user devices.

### Engineering relevance
- Relevant to platform baselines, environment consistency, hardening, and change traceability.
- Also relevant to reproducible environments and secure build/test infrastructure.

---

## 8.10 - Information deletion

- **Control owner:** Records Manager Andy Finch
- **Level:** 40

### Control objective
Information stored in information systems, devices or in any other storage media should be deleted when no longer required.

### Control notes and details
> Policies: POL 701 & 221 - Records management which includes retention policy.
>
> System Logs are captured using a trusted time source and can be used to identify deletion events for audits and/or e-discovery as part of an investigation.

### Opportunity for improvement
> An information and records management governance framework (IRMGF) is required to define the retention schedules - only 29% complete
>
> Do not have a Data Retention Policy

### Engineering relevance
- Important for test data, logs, artifacts, backups, and operational data handling.
- Missing retention policy creates implementation ambiguity for systems owned by engineering teams.

---

## 8.11 - Data masking

- **Control owner:** Records Manager Andy Finch
- **Level:** 80

### Control objective
Data masking should be used in accordance with the organization’s topic-specific policy on access control and other related topic-specific policies, and business requirements, taking applicable legislation into consideration.

### Control notes and details
> A pseudo-random data generator is utilised, data is encrypted at rest and in transit, and passwords are hashed within Active Directory (AD) and FortiGate, and other system administrator tools to satisfy ISO control 8.11 requirements. Use of RBAC to manage authorisation to data.

### Opportunity for improvement
> Include within Data Retention policy

### Engineering relevance
- Highly relevant to test engineering and any use of production-like datasets.
- Supports masking and sanitisation of test information.

---

## 8.12 - Data leakage prevention

- **Control owner:** Tech Ops
- **Level:** 40

### Control objective
Data leakage prevention measures should be applied to systems, networks and any other devices that process, store or transmit sensitive information.

### Control notes and details
> The UKHO has implemented a multi-layered email security (in bound and out bound) and data loss prevention solution, addressing M365 security gaps and enabling email classification and labelling, through ProofPoint. Full use of its capability is to be enabled in BP26.
>
> Future integration with Purvue planned.

### Opportunity for improvement
> Future sessions with Proofpoint to roll out DLP effectively
>
> Data labelling and categorisation
>
> Tuning proofpoint
>
> Integration with Purvue

### Engineering relevance
- Relevant where engineering systems move sensitive data through email, collaboration tools, exports, logs, and cloud workflows.
- Indicates partially implemented controls rather than mature enforcement.

---

## 8.13 - Information backup

- **Control owner:** Tech Ops
- **Level:** 50

### Control objective
Backup copies of information, software and systems should be maintained and regularly tested in accordance with the agreed topic-specific policy on backup.

### Control notes and details
> Snapshot based backups of all virtual machines are taken using Veeam backup solution.
>
> When servers/services are built, implementers and system owners have a choice of 3 backup tiers; Gold, Silver and Bronze.
>
> Enterprise application backups are also maintained.

### Opportunity for improvement
> Require an audit of the POL204 Backup Policy and actual testing

### Engineering relevance
- Engineering-owned services need explicit backup tier selection and tested restoration.
- The gap is not backup existence, but evidence of policy alignment and restore testing.

---

## 8.15 - Logging

- **Control owner:** CISO James Bruckel
- **Level:** 100

### Control objective
Logs that record activities, exceptions, faults and other relevant events should be produced, stored, protected and analysed.

### Control notes and details
> UKHO follows POL210 Logging and Monitoring Policy. Event logs recording user activities, exceptions, faults and information security events are actively monitored, stored, and regularly reviewed.
>
> Servers, network appliances and endpoints are configured to send local system event logs to the IDS system.
>
> Admin and operator activities are logged and monitored by the internal SOC team with a combination proactive dashboard monitoring and rule based instant alerting to email.

### Engineering relevance
- Engineering systems should emit useful, reviewable, and protected logs.
- Admin/operator activity logging is especially relevant to production support and privileged engineering access.

---

## 8.16 - Monitoring activities

- **Control owner:** CISO James Bruckel
- **Level:** 100

### Control objective
Networks, systems and applications should be monitored for anomalous behaviour and appropriate actions taken to evaluate potential information security incidents.

### Control notes and details
> Protective Monitoring proactively logs and records event data so that systems and networks can be appropriately monitored to maintain awareness of the operating environment.
>
> Specific monitoring aspects are the following areas: user activity, file access, configuration changes, anomalies in usage, failed login attempts, permissions changes, alerts and notifications, integration with other systems, customer code and scripts, compliance violations, data exfiltration, integration with identity management, third party apps, authentication events, patch and update status, etc.

### Engineering relevance
- Monitoring expectations cover applications and custom code, not just infrastructure.
- Suggests engineering telemetry should support anomaly detection and incident triage.

---

## 8.19 - Installation of software on operational systems

- **Control owner:** Tech Ops
- **Level:** 100

### Control objective
Procedures and measures should be implemented to securely manage software installation on operational systems.

### Control notes and details
> Technical controls prevent users from installing unauthorised software. Endpoint protection prevents users from installing and running unauthorised software. The deployment of operational system software is subject to the internal change control process. Vendor supplied software is subject to a Joining Rule assessment. Normal users are not permitted to install software. All new software is security assessed before packaging and deployment.

### Engineering relevance
- Production deployments are expected to be controlled, assessed, and change-managed.
- Relevant to release engineering and operational platform changes.

---

## 8.20 - Networks security

- **Control owner:** Chris Sheldon
- **Level:** 100

### Control objective
Networks and network devices should be secured, managed and controlled to protect information in systems and applications.

### Control notes and details
> UKHO Networks are managed and controlled by the Technical Systems team. A network diagram records a schematic of the BSN network, supported by Solarwinds. Users use an IPSec VPN, Azure email are encrypted, uses Firewall to manage connections. Endpoints are configured to access specific IP ranges. Access to systems on the network require authentication and all access is logged and monitored by the SOC Team.

### Engineering relevance
- Relevant to service connectivity, segmentation, VPN use, and environment access assumptions.
- Network dependency should be considered in system design and testing.

---

## 8.21 - Security of network services

- **Control owner:** Chris Sheldon
- **Level:** 30

### Control objective
Security mechanisms, service levels and service requirements of network services should be identified, implemented and monitored.

### Control notes and details
> The SyOps050 details the user activity and rules for network access. The Firewalls and Intrusion detection systems are deployed to provide security of network services. All traffic between the client endpoint devices (edge network) and the core network is encrypted using a VPN. The UKHO follow POL219 Network Security Policy.

### Opportunity for improvement
> Fortinet Firewalls are out dated
>
> Network diagrams need updating

### Engineering relevance
- Low maturity area compared with neighbouring controls.
- Outdated firewalls and network diagrams can affect delivery risk, troubleshooting, incident response, and change planning.

---

## 8.22 - Segregation of networks

- **Control owner:** Chris Sheldon
- **Level:** 100

### Control objective
Groups of information services, users and information systems should be segregated in the organization’s networks.

### Control notes and details
> The network is segregated based on security boundaries. Network domains include Engineering, Management, DMZ the Edge and Production and strict access controls exist between these domains using Firewall Rules. In addition VLANs are used to provide logical separation between business functions.

### Engineering relevance
- Directly relevant to environment separation and controlled promotion paths.
- Supports expectations around dev/test/prod isolation.

---

## 8.24 - Use of cryptography

- **Control owner:** James Bruckel (CISO)
- **Level:** 100

### Control objective
Rules for the effective use of cryptography, including cryptographic key management, should be defined and implemented.

### Control notes and details
> Transmission security: TLS 1.2 (optimistic) to protect data in transit, while AES-256 encryption - compliant with FIPS 140-3 - ensures security for data at rest in Azure M365. Cryptographic keys are securely stored and managed within Azure Key Vault, and Bitlocker encryption is deployed across all end-user devices. Penetration testing processes are actively performed to validate these controls.

### Engineering relevance
- Relevant to application transport security, encryption at rest, and key management.
- Azure Key Vault usage is specifically important for cloud-native engineering.

---

## 8.25 - Secure development life cycle

- **Control owner:** Andy Poole
- **Level:** 100

### Control objective
Rules for the secure development of software and systems should be established and applied.

### Control notes and details
> The UKHO operates a Secure Development Policy. Delivery Teams are audited for compliance with this policy.

### Engineering relevance
- One of the central controls for software engineering.
- Confirms SDL adherence is expected and reviewed.

---

## 8.26 - Application security requirements

- **Control owner:** Andy Poole
- **Level:** 50

### Control objective
Information security requirements should be identified, specified and approved when developing or acquiring applications.

### Control notes and details
> UKHO systems are subject to a technical risk assessment including Threat Modelling, accreditation and penetration testing where appropriate.
>
> Security requirements are identified in Statement of Requirements (SOR) for both internal and external developments and considered through the development lifecycle as User Stories/PBIs.

### Opportunity for improvement
> Not all systems under go Secure by Design and have documented security requirements

### Engineering relevance
- Directly relevant to backlog definition, threat modelling, and acceptance criteria.
- Explicitly shows a current gap in documenting security requirements consistently.

---

## 8.27 - Secure system architecture and engineering principles

- **Control owner:** Andy Poole
- **Level:** 100

### Control objective
Principles for engineering secure systems should be established, documented, maintained and applied to any information system development activities.

### Control notes and details
> The Secure Development Policy provides guidelines for adopting design principles and coding practices. The actual principles and practices used will vary between the different software teams and will depend on the technologies used within the team i.e. .Net or Linux or Cloud.
>
> Enterprise Architecture provides reference architecture patterns.

### Engineering relevance
- Architecture standards exist, but team implementation can vary.
- Important for aligning delivery teams across different stacks.

---

## 8.28 - Secure coding

- **Control owner:** Paul King
- **Level:** 100

### Control objective
Secure coding principles should be applied to software development.

### Control notes and details
> The UKHO have documented secure development policies, principles and practices, that are frequently reviewed and updated.
>
> Secure coding is support with tooling: Snyk, being our main tool, is available in the IDE, source control and CI/CD pipelines to perform different checks during full development cycle. A UI dashboard links vulnerability data and is a learning platform in case of additional needs in fixing an issue. Teams use threat modelling early in the process to ensure products are designed and built in a secure manner.

### Engineering relevance
- Directly relevant to developer workflow.
- Tooling is embedded across IDE, source control, and pipelines.
- Threat modelling is expected early, not only at release time.

---

## 8.29 - Security testing in development and acceptance

- **Control owner:** Neville Brown
- **Level:** 50

### Control objective
Security testing processes should be defined and implemented in the development life cycle.

### Control notes and details
> The development workflow includes the requirement for security testing during the development process, this includes third party dependency checking, Static code analysis and vulnerability assessments.
>
> Acceptance testing is defined and conducted by the Test Engineering team. This is a mandatory element within the change process and the Test Engineering team is represented at the Change Advisory Board.

### Opportunity for improvement
> Documentation is out dated. DR is not included in testing

### Engineering relevance
- This is the clearest test-engineering-specific audit section.
- Confirms mandatory security testing and formal test-engineering involvement in change.
- Also identifies documentation and DR-testing gaps.

---

## 8.30 - Outsourced development

- **Control owner:** Andy Poole
- **Level:** 80

### Control objective
The organization should direct, monitor and review the activities related to outsourced system development.

### Control notes and details
> The UKHO delivery teams conduct monthly supplier reviews with their outsourced systems development suppliers. All system development, in-house and outsourced is subject to the controls defined within the Secure Development Lifecycle (SDLC).

### Opportunity for improvement
> Not all suppliers are managed

### Engineering relevance
- Important where teams use external engineering partners.
- Monthly review and SDL alignment are expected, but supplier coverage is incomplete.

---

## 8.31 - Separation of development, test and production environments

- **Control owner:** Tech Ops
- **Level:** 100

### Control objective
Development, testing and production environments should be separated and secured.

### Control notes and details
> The Development and Testing domain (Engineering) is logically separated from the Management and Production domains. Sensitive data is sanitised before it is used within the Engineering. The transfer of test data is brokered via the management network. Firewalls are used to restrict the traffic between the domains. All development is carried out in segregated 'Engineering' domain and Engineering Accounts. Code is reviewed and published through GitHub or AzureDevOps.

### Engineering relevance
- Core engineering control.
- Directly covers environment isolation, use of sanitised data, and controlled movement between domains.

---

## 8.32 - Change management

- **Control owner:** Jeff Gosling Change Management
- **Level:** 80

### Control objective
Changes to information processing facilities and information systems should be subject to change management procedures.

### Control notes and details
> Changes are governed through a documented change management policy (QP610). The UKHO operate a formal change process. All changes to systems and operating platforms are reviewed and tested. UKHO operates a Change Advisory Board (CAB).
>
> Changes to source code is managed through Azure DevOps. All production code is subject to peer review. Changes to the codebase will be managed through the delivery pipeline and in accordance with the UKHO formal change process.

### Opportunity for improvement
> Mike Walters replacement?

### Engineering relevance
- Change control, peer review, delivery pipeline governance, and CAB interaction are explicit engineering obligations.
- Production code changes are not treated as informal engineering activity.

---

## 8.33 - Test information

- **Control owner:** Neville Brown
- **Level:** 100

### Control objective
Test information should be appropriately selected, protected and managed.

### Control notes and details
> The UKHO Secure Development Policy states that live data should not be used for testing. Where a copy of live data is used then its use is to be risk assessed and sanitised as appropriate, removing reference to UKHO customers, employees and corporate proprietary information.

### Engineering relevance
- Directly relevant to test engineering and non-production environments.
- Reinforces that production data usage requires risk assessment and sanitisation.

---

## Overall engineering observations

### Strong areas
- Secure development, secure coding, source control governance, environment separation, and change management are clearly recognised.
- Security tooling is integrated into the development workflow.
- Test Engineering has a formal role in acceptance and change governance.
- Cloud access, monitoring, and privileged access controls are already in place.

### Repeated engineering gaps
- Secure by Design is not consistently implemented across all systems.
- Some systems do not have documented security requirements.
- Security testing documentation is out of date.
- Disaster recovery is not consistently represented in testing evidence.
- DLP capability is only partially implemented.
- Backup testing evidence needs improvement.
- Network diagrams and firewall estate need attention.
- Retention and deletion governance is weak, which affects engineering-owned data and logs.

### Most engineering-relevant improvement signals from the audit
1. Make Secure by Design a consistent delivery requirement.
2. Ensure every system has explicit security requirements and threat modelling evidence.
3. Keep security testing documentation current and include DR-related testing where required.
4. Strengthen governance for test data, retention, deletion, and masking.
5. Improve operational evidence for backup testing, incident learning, and DLP rollout.
6. Keep network and cloud platform documentation current enough for delivery and assurance.
