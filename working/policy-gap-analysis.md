# Gap analysis of engineering audit areas against existing software engineering policies

## Purpose

This report compares the engineering-relevant audit areas in `working/analysis.md` against the policy documents in `software-engineering-policies`.

It identifies:

- where the current policy set already provides coverage
- where coverage exists but is partial, weak, draft, or indirect
- where new or expanded policy content appears to be required

## Sources reviewed

Primary comparison source:

- `working/analysis.md`

Policy sources reviewed in `software-engineering-policies`:

- `README.md`
- `development-principles.md`
- `SecureDevelopment/SecureDevelopmentPolicy.md`
- `CodeReview/CodeReviewPolicy.md`
- `UnitTesting/UnitTestingPolicy.md`
- `SourceControl/SourceControlPolicy.md`
- `SourceControl/GitBranchProtectionPolicy.md`
- `SourceControl/AzDoBranchProtection.md`
- `SystemDocumentation/SystemDocumentationPolicy.md`
- `NFRs/NFRPolicy.md`
- `CloudDevelopment/README.md`
- `CloudDevelopment/CloudFirst.md`
- `CloudDevelopment/General.md`
- `CloudDevelopment/Deployment.md`
- `CloudDevelopment/LoggingAndMonitoring.md`
- `CloudDevelopment/DisasterRecoveryBusinessContinuity.md`
- `CloudDevelopment/DataUse.md`
- `CloudDevelopment/Users.md`
- `Logging/LoggingPolicy.md`
- `Observability/observability_policy.md`
- `Containers/ContainerPolicy.md`
- `InfrastructureAsCode/terraform.md`
- `Pipelines/Baseline_Policy.md`
- `DefectManagement/DefectManagementPolicy.md`
- `TechnologyGovernance/TechnologyGovernance.md`
- `OpenSourceUse/OpenSourceUsePolicy.md`
- `ThirdPartyLicensing/ThirdPartyLicensingPolicy.md`
- `PackageAdoption/PackageAdoptionPolicy.md`

## Coverage scale

- **Covered**: a policy clearly addresses the audit area with enforceable expectations
- **Partially covered**: related policy content exists, but it is incomplete, indirect, draft, WIP, or does not fully meet the audit theme
- **Gap**: no meaningful coverage found in the current software-engineering policy set

---

## Control-by-control mapping

| Audit area from `analysis.md` | Coverage | Existing policy coverage | Gap / observation | Recommendation |
| --- | --- | --- | --- | --- |
| **5.8 Information security in project management** | Partially covered | `SecureDevelopment/SecureDevelopmentPolicy.md`, `NFRs/NFRPolicy.md`, `Pipelines/Baseline_Policy.md` | Security is expected in delivery, but there is no explicit engineering policy that defines Secure by Design stage gates from inception through delivery. | Create or expand a **Secure by Design delivery policy** that defines mandatory engineering checkpoints, evidence, and roles through the project lifecycle. |
| **5.15 Access control** | Partially covered | `SourceControl/SourceControlPolicy.md`, `CloudDevelopment/General.md`, `CloudDevelopment/Users.md` | Repo access and Key Vault access are covered, but broader engineering access control for environments, pipelines, service accounts, package feeds, and operational tooling is not fully defined. `CloudDevelopment/Users.md` is WIP. | Create or complete an **Engineering access control and identity policy** covering repos, pipelines, environments, package feeds, cloud roles, and review cadence. |
| **5.16 Identity management** | Gap | `CloudDevelopment/Users.md` | Only a WIP cloud users page exists. There is no mature engineering-facing identity lifecycle policy. | Create a dedicated **Engineering identity and account management policy** covering joiner/mover/leaver, service identities, federated identities, local accounts, and ownership. |
| **5.18 Access rights** | Partially covered | `SourceControl/SourceControlPolicy.md`, `GitBranchProtectionPolicy.md`, `AzDoBranchProtection.md`, `CloudDevelopment/Users.md` | Access permissions within repos are addressed, but periodic access reviews, guest access governance, and entitlement review are not clearly mandated across engineering systems. | Extend access/identity policy to include **quarterly review expectations**, guest access control, and evidence requirements. |
| **5.23 Information security for use of cloud services** | Partially covered | `CloudDevelopment/README.md`, `CloudDevelopment/CloudFirst.md`, `CloudDevelopment/General.md`, `CloudDevelopment/Deployment.md`, `CloudDevelopment/DataUse.md`, `CloudDevelopment/DisasterRecoveryBusinessContinuity.md`, `CloudDevelopment/LoggingAndMonitoring.md` | Good breadth of cloud guidance exists, but some key pages are recommendation-heavy, WIP, or not strongly normative. Limited explicit treatment of cloud exit strategy, shared responsibility evidence, and landing zone compliance assurance. | Strengthen the cloud policy suite into a more enforceable **cloud engineering standard**, especially for landing zones, identity, shared responsibility, and assurance evidence. |
| **5.24 Incident management planning and preparation** | Gap | None in `software-engineering-policies` directly | Engineering expectations for incident runbooks, service ownership, escalation, and support collaboration are not defined in this policy set. | Create an **Engineering incident readiness policy** or reference standard covering runbooks, ownership, telemetry, and escalation responsibilities. |
| **5.25 Assessment and decision on security events** | Gap | Logging/monitoring policies support telemetry but not incident assessment workflow | Engineering policy does not define how teams support incident classification with logs, dashboards, or triage information. | Add engineering incident response guidance covering **triage support expectations**, minimum telemetry, and severity support information. |
| **5.26 Response to information security incidents** | Partially covered | `Logging/LoggingPolicy.md`, `CloudDevelopment/LoggingAndMonitoring.md`, `CloudDevelopment/DisasterRecoveryBusinessContinuity.md` | Helpful operational inputs exist, but no policy clearly states engineering response expectations, approval models, or runbook maintenance. | Add an **engineering operational response policy** or extend DR/observability content to include response runbooks and ownership. |
| **5.27 Learning from information security incidents** | Gap | None explicit | No engineering policy defines post-incident review outputs, learning capture, or backlog follow-up. | Create a **post-incident learning policy** or add mandatory lessons-learned requirements to an engineering incident policy. |
| **5.35 Independent review of information security** | Partially covered | `SecureDevelopment/SecureDevelopmentPolicy.md`, `Pipelines/Baseline_Policy.md`, `SystemDocumentation/SystemDocumentationPolicy.md` | Teams are required to produce evidence in several places, but there is no explicit policy describing engineering artefacts required for audit or assurance. | Add an **assurance evidence standard** describing the minimum documentary evidence engineering teams must maintain. |
| **5.36 Compliance with policies, rules and standards** | Partially covered | Most policy documents; especially `SecureDevelopment`, `CodeReview`, `UnitTesting`, `SourceControl`, `SystemDocumentation` | Policies exist, but there is no single compliance framework for checking adoption across teams. | Create a lightweight **engineering policy compliance checklist** or assurance framework. |
| **5.37 Documented operating procedures** | Partially covered | `SystemDocumentation/SystemDocumentationPolicy.md`, `CloudDevelopment/DisasterRecoveryBusinessContinuity.md` | System documentation is required, but operating procedures for release, recovery, support, and maintenance are not consistently defined as mandatory operational artefacts. | Expand system documentation policy into an **engineering operational documentation standard** with minimum required artefacts. |
| **6.3 Security awareness, education and training** | Covered | `SecureDevelopment/SecureDevelopmentPolicy.md` (skills matrix, onboarding, training), `development-principles.md` | Secure development training expectations are explicit for engineering teams. | No immediate new policy required. |
| **8.4 Access to source code** | Covered | `SourceControl/SourceControlPolicy.md`, `GitBranchProtectionPolicy.md`, `AzDoBranchProtection.md`, `CodeReview/CodeReviewPolicy.md` | Strong coverage for source control location, branch protection, PR review, and evidence. | No immediate new policy required. |
| **8.8 Management of technical vulnerabilities** | Covered | `SecureDevelopment/SecureDevelopmentPolicy.md`, `CloudDevelopment/Deployment.md`, `CloudDevelopment/General.md`, `OpenSourceUse/OpenSourceUsePolicy.md`, `Pipelines/Baseline_Policy.md`, `Containers/ContainerPolicy.md` | Dependency scanning, SAST, IaC scanning, and vulnerability thresholds are covered. | No immediate new policy required, though tool names may need periodic refresh. |
| **8.9 Configuration management** | Partially covered | `InfrastructureAsCode/terraform.md`, `CloudDevelopment/General.md`, `Pipelines/Baseline_Policy.md`, `SystemDocumentation/SystemDocumentationPolicy.md` | IaC and pipeline-as-code are covered, but there is no broader engineering configuration management policy spanning application config, environment config, secrets, drift control, and baselines. | Create an **engineering configuration management policy** or expand existing IaC/cloud policies to cover non-IaC configuration consistently. |
| **8.10 Information deletion** | Gap | `CloudDevelopment/DataUse.md` touches PII handling only | No substantive engineering policy for retention, deletion, environment cleanup, temporary files, test data removal, or deletion evidence. | Create a **data retention and deletion policy for engineering systems**. |
| **8.11 Data masking** | Partially covered | `CloudDevelopment/DataUse.md`, `analysis.md` links conceptually to test data handling | PII minimisation and anonymisation are mentioned, but there is no specific engineering policy for masking production-like data used in development or testing. | Create a **test data management and masking policy**. |
| **8.12 Data leakage prevention** | Gap | Indirect only through logging/data use and some cloud guidance | No policy specifically covers engineering responsibilities for DLP, data export controls, labelling, copy/paste restrictions, or handling sensitive outputs. | Create an **engineering DLP and data handling policy**, or extend a future data governance policy to include engineering scenarios. |
| **8.13 Information backup** | Partially covered | `CloudDevelopment/DisasterRecoveryBusinessContinuity.md` | DR guidance requires backups and restore documentation, but there is no dedicated engineering backup policy defining minimum expectations, test frequency, or evidence for engineering-owned systems. | Create a **backup and restore assurance policy** for engineering systems, or expand the DR policy into a stronger standard. |
| **8.15 Logging** | Covered | `Logging/LoggingPolicy.md`, `CloudDevelopment/LoggingAndMonitoring.md` | Strong coverage for structured logging, levels, retention, testing, and avoidance of sensitive data. | No immediate new policy required. |
| **8.16 Monitoring activities** | Partially covered | `CloudDevelopment/LoggingAndMonitoring.md`, `Observability/observability_policy.md`, `Logging/LoggingPolicy.md` | Coverage exists, but observability is marked draft and much of the cloud monitoring content is recommendation-based rather than mandatory. | Mature the draft into a formal **observability and monitoring policy** with required signals, alerts, dashboards, and service ownership expectations. |
| **8.19 Installation of software on operational systems** | Partially covered | `Pipelines/Baseline_Policy.md`, `CloudDevelopment/Deployment.md`, `ContainerPolicy.md`, `SourceControl/SourceControlPolicy.md` | Release automation and scanning are covered, but there is no explicit engineering policy for operational software promotion, rollback expectations, and software installation restrictions outside pipeline practice. | Add a **release management / production deployment policy** or expand pipeline baseline guidance. |
| **8.20 Networks security** | Gap | Some indirect cloud guidance only | No engineering-facing network security policy exists for service connectivity, ingress/egress control, segmentation expectations, or network documentation ownership. | Create a **network security expectations for engineering systems** policy or cloud/network design standard. |
| **8.21 Security of network services** | Gap | Some indirect cloud guidance and `CloudDevelopment/Users.md` WIP | Current engineering policy set does not define network service security controls clearly enough. | Create or extend a **cloud and network service security policy**. |
| **8.22 Segregation of networks** | Partially covered | `Pipelines/Baseline_Policy.md` (separate environments), `CloudDevelopment/General.md`, `CloudDevelopment/Deployment.md` | Environment separation is assumed, but not fully expressed as a network/domain segregation policy for engineering systems. | Add explicit **environment and network segregation requirements** to cloud or platform policies. |
| **8.24 Use of cryptography** | Partially covered | `CloudDevelopment/General.md` (Key Vault), `CloudDevelopment/DataUse.md`, `CloudFirst.md` | Secrets and some encryption expectations are addressed, but no dedicated engineering cryptography policy exists for key usage, cipher expectations, and application-level cryptographic decisions. | Create a concise **engineering cryptography and secrets usage standard**, or explicitly defer to the enterprise crypto policy with engineering implementation rules. |
| **8.25 Secure development life cycle** | Covered | `SecureDevelopment/SecureDevelopmentPolicy.md` | Strong explicit SDLC coverage. | No immediate new policy required. |
| **8.26 Application security requirements** | Partially covered | `SecureDevelopment/SecureDevelopmentPolicy.md`, `NFRs/NFRPolicy.md`, `CloudDevelopment/Deployment.md` | Threat modelling and security controls exist, but there is no explicit policy requiring every system to maintain documented security requirements traceable into backlog and test artefacts. | Create or extend policy to require **documented application security requirements** for every system. |
| **8.27 Secure system architecture and engineering principles** | Partially covered | `development-principles.md`, `SecureDevelopment/SecureDevelopmentPolicy.md`, `TechnologyGovernance/TechnologyGovernance.md` | General principles exist, but there is no explicit secure architecture standard describing expected patterns, review criteria, or engineering decision records. | Create a **secure architecture and design principles policy/standard** for software teams. |
| **8.28 Secure coding** | Covered | `SecureDevelopment/SecureDevelopmentPolicy.md`, `CodeReview/CodeReviewPolicy.md` | Strong coverage through secure development controls and review. | No immediate new policy required. |
| **8.29 Security testing in development and acceptance** | Partially covered | `UnitTesting/UnitTestingPolicy.md`, `Pipelines/Baseline_Policy.md`, `CloudDevelopment/Deployment.md`, `DefectManagement/DefectManagementPolicy.md`, `SecureDevelopment/SecureDevelopmentPolicy.md` | Security scanning and automated test expectations exist, but there is no dedicated security testing policy covering integration, DAST, penetration testing expectations, acceptance evidence, or DR-related testing. | Create a **security testing policy** or expand the test policy suite to cover non-unit security testing comprehensively. |
| **8.30 Outsourced development** | Gap | No dedicated outsourced development policy found in reviewed engineering policy files | The audit area expects active direction and monitoring of outsourced development. Current software-engineering policies do not provide a dedicated supplier/outsourced engineering standard. | Create an **outsourced development policy** covering security requirements, evidence, review cadence, and acceptance criteria. |
| **8.31 Separation of development, test and production environments** | Covered | `Pipelines/Baseline_Policy.md`, `CloudDevelopment/DisasterRecoveryBusinessContinuity.md`, `SystemDocumentation/SystemDocumentationPolicy.md` | Environment separation is clearly expected. | No immediate new policy required. |
| **8.32 Change management** | Partially covered | `CodeReview/CodeReviewPolicy.md`, `SourceControl/SourceControlPolicy.md`, `Pipelines/Baseline_Policy.md`, `DefectManagement/DefectManagementPolicy.md` | Code and release workflow controls exist, but there is no single engineering change management policy aligned to operational change, approvals, rollback, and documentation updates. | Create a concise **engineering change management policy** or align existing policies under a shared standard. |
| **8.33 Test information** | Partially covered | `UnitTesting/UnitTestingPolicy.md`, `CloudDevelopment/DataUse.md`, `SecureDevelopment/SecureDevelopmentPolicy.md` | Testing is covered, and PII minimisation is mentioned, but there is no dedicated test data policy for sanitisation, approval, storage, deletion, and audit trail. | Create a **test data management policy**. |

---

## Areas already well covered by the current policy set

The strongest existing coverage is in the following areas:

1. **Secure development lifecycle**
   - `SecureDevelopment/SecureDevelopmentPolicy.md`
2. **Secure coding and code review**
   - `SecureDevelopment/SecureDevelopmentPolicy.md`
   - `CodeReview/CodeReviewPolicy.md`
3. **Source control governance and branch protection**
   - `SourceControl/SourceControlPolicy.md`
   - `SourceControl/GitBranchProtectionPolicy.md`
   - `SourceControl/AzDoBranchProtection.md`
4. **Unit testing and CI expectations**
   - `UnitTesting/UnitTestingPolicy.md`
   - `Pipelines/Baseline_Policy.md`
5. **Logging**
   - `Logging/LoggingPolicy.md`
   - `CloudDevelopment/LoggingAndMonitoring.md`
6. **Baseline pipeline security controls**
   - `Pipelines/Baseline_Policy.md`
7. **Cloud engineering guidance**
   - `CloudDevelopment/*`
   - though some parts remain draft or recommendation-heavy

---

## Areas with partial coverage but needing strengthening

These areas are present in the policy set, but not yet strongly enough to fully answer the audit themes:

- **Secure by Design in project governance**
- **Cloud identity and access control**
- **Configuration management beyond Terraform/IaC**
- **Monitoring and observability**
- **Application security requirements traceability**
- **Backup and restore evidence**
- **Release / production deployment controls**
- **Environment and network segregation expressed as policy**
- **Operational documentation expectations**

The main reasons for partial coverage are:

- content is still **WIP** or **draft**
- content is **guidance** rather than a mandatory policy
- coverage is **narrow** to a tool or platform instead of the wider engineering process
- audit themes require **evidence and governance expectations** not yet stated in policy

---

## Recommended new or expanded policy areas

The following new or expanded policies would close the most significant gaps.

### Highest priority

1. **Secure by Design delivery policy**
   - mandatory stage gates
   - minimum evidence by phase
   - engineering and security responsibilities

2. **Engineering identity and access management policy**
   - joiner/mover/leaver for engineering systems
   - service identities and federated identities
   - access review cadence
   - guest/external access handling

3. **Security testing policy**
   - beyond unit tests
   - SAST, dependency scanning, IaC scanning, container scanning, integration security testing, acceptance evidence, and DR/security test expectations

4. **Test data management policy**
   - masking, sanitisation, approvals, retention, deletion, and use of production-like data

5. **Engineering data retention and deletion policy**
   - logs, artifacts, backups, temporary files, test data, and deletion evidence

### Medium priority

6. **Engineering incident readiness and lessons learned policy**
   - runbooks
   - incident support expectations
   - post-incident review outputs
   - backlog follow-up

7. **Engineering change management policy**
   - approvals
   - rollback expectations
   - operational documentation updates
   - production change evidence

8. **Backup and restore assurance policy**
   - backup classification
   - restore testing frequency
   - evidence standards

9. **Observability and monitoring policy**
   - promote draft observability guidance to a formal standard
   - define required dashboards, alerts, probes, ownership, and service health indicators

10. **Network and service security policy for engineering systems**
   - ingress/egress rules
   - segmentation expectations
   - service-to-service connectivity
   - network documentation ownership

### Lower priority / targeted expansion

11. **Secure architecture and design principles standard**
12. **Engineering cryptography and secrets usage standard**
13. **Outsourced development policy**
14. **Engineering assurance evidence checklist**
15. **Policy compliance checklist for engineering teams**

---

## Overall conclusion

The current `software-engineering-policies` set is strongest in the classic software delivery controls:

- secure development
- source control
- code review
- unit testing
- pipeline security baseline
- logging

This means the organisation already has a solid foundation for **developer-led secure delivery**.

The most significant weaknesses are in areas where the audit expects broader **operational governance**, **evidence**, and **lifecycle control** across engineering-managed systems. In particular:

- Secure by Design is not yet expressed as a fully governed engineering delivery process.
- Identity, access review, and cloud user governance are incomplete.
- Test data, data retention/deletion, and DLP responsibilities are under-specified.
- Monitoring/observability, backup assurance, incident learning, and change management need stronger policy statements.
- Several cloud-related documents are useful, but some remain draft, WIP, or recommendation-based rather than enforceable.

In short:

- **Existing policies cover the engineering core well**.
- **The biggest gaps are in operational security governance around that core**.
- **The highest-value next step is to formalise the missing lifecycle and evidence policies rather than create more coding-policy detail.**
