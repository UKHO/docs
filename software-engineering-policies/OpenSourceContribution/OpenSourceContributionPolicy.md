# Open Source Policy: Publishing Our Code and Contributing to External Projects

We are increasingly making use of open source assets as part of our business infrastructure, as governed by our [Use of Open Source Policy](../OpenSourceUse/OpenSourceUsePolicy.md).

In line with [GOV.UK Service Standard point 12](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open), the [MOD Defence Service Manual (Section 12)](https://www.digital.mod.uk/policy-rules-standards-and-guidance/service-manual/meet-the-standard), and [GDS guidance](https://www.gov.uk/service-manual/service-standard/point-13-use-common-standards-components-patterns), our default position is that **all new source code written at UKHO should be made open**. Reusing and contributing to common components is preferred over re-inventing the wheel.

This document covers two distinct activities, each with different governance requirements:

1. **[Publishing our own code openly](#part-1-publishing-our-own-code-in-the-open)** — the default; no special approval required
2. **[Contributing to external open source projects](#part-2-contributing-to-external-open-source-projects)** — requires approval before submitting

## Part 1: Publishing our own code in the open

Making our own code publicly available is the **default expectation**, not an exception. Teams do not need to seek approval to open their own repositories. The process for publishing is:

1. Review the code against the [Coding in the Open guidance](../../using-github/coding-in-the-open.md) to confirm it is safe to publish (no credentials, no classified content, no unreleased policy, IP is Crown-owned or appropriately licensed)
2. Complete the [Open Source Governance Checklist](./OpenSourceGovernanceChecklist.md)
3. Select an appropriate open-source licence per the [Software Licensing Policy](../../using-github/software-licensing-policy.md) — MIT is recommended for most software
4. Publish the repository and continue development in the open

If a team believes their code **cannot** be made open, they must provide a documented rationale with a specific reason from the approved list (see [Coding in the Open – Closed code](../../using-github/coding-in-the-open.md)) and record the expected date for opening. This must be reviewed at each service assessment.

## Part 2: Contributing to external open source projects

Contributing to open source projects can greatly benefit both the contributor and the community. However, it is essential to do so in a manner that safeguards our interests and adheres to established guidelines. This section outlines best practices for contributing to **external, third-party** open source projects.

### 1. Understand the Project

Before contributing, thoroughly review the project's documentation, contribution guidelines, and existing issues. Ensure that the project aligns with our business needs and that contributions will not compromise our intellectual property. The investment in open source will normally take place in the context of a wider project.  It will thus be part of that project's overall investment appraisal / business case, as per the Secure Funding goal of the delivery framework.  If that is not the case, it represents a separate change and will therefore require a separate business case.

### 2. Follow Licensing Requirements

- Ensure that the open source project is governed by an OSI-approved license.
- Verify that the license allows for the intended use and contribution.
- Obtain necessary approvals from the UKHO Legal Advisor for any contributions that may involve valuable intellectual property (CLA for example).

### 3. Maintain Quality Standards

Contributions must meet the same quality standards as internal projects. This includes:

- Adhering to coding standards and best practices.
- Writing unit tests to ensure functionality.
- Providing clear documentation for any changes made.

### 4. Avoid Forking

Forking a project and making changes without contributing back is discouraged. This practice can lead to security and maintenance issues. Always aim to contribute enhancements back to the original project.

### 5. Secure Approval for Contributions

- Obtain authorization from the Technology Head of Division before contributing to any open source repository.
- For significant changes, re-authorization is required.

### 6. Limit Support and Engagement

The default position is to provide minimal support for open source contributions. Avoid inviting bug reports or pull requests unless explicitly authorized. If support is necessary, ensure that a governance process is in place.

### 7. Protect Sensitive Information

Be cautious not to disclose any sensitive or proprietary information in contributions. Follow security guidelines to ensure that no vulnerabilities are introduced into the codebase.

### 8. Document Contributions

Maintain thorough documentation of all contributions, including:

- The purpose of the contribution.
- Any approvals obtained.
- The licensing terms under which the contribution is made.

### 9. Personal contributions to open source

All contributions that relate directly to an engineer's work at the UKHO or relate to the UKHO's business (e.g. marine geospatial systems, information for the mariner) are subject to this policy, even if they are carried out on an engineer's own equipment or in their own time.

Otherwise, engineers are free to contribute to open source projects.

### 10. Procurement

Paying a supplier to make enhancements to an open source codebase is a procurement exercise.  It **must** be carried out through the UKHO Procurement team, who will ensure that the business is competed where appropriate, full long-term costs are considered, etc.

## Conclusion

By adhering to these best practices, we can contribute to open source projects in a manner that is safe, responsible, and beneficial to both our organisation and the wider community.

**Key principle**: Publishing our own code openly is the default. Seek approval when contributing to external projects, not when opening your own repositories.

## Related policies

- [Coding in the Open](../../using-github/coding-in-the-open.md)
- [Software Licensing Policy](../../using-github/software-licensing-policy.md)
- [Open Source Use Policy](../OpenSourceUse/OpenSourceUsePolicy.md)
- [Open Source Governance Checklist](./OpenSourceGovernanceChecklist.md)
- [Open Source Governance Checklist](./OpenSourceGovernanceChecklist.md)
