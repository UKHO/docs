# Open Source Publishing Policy

This policy sets the requirements for making source code written at UKHO publicly available.

## Requirements

### Default to publishing openly

All new source code written at UKHO should be made open. Teams do not need approval to open their own repositories. Reusing and contributing to common components is preferred over re-inventing them.

Before publication, teams must review the code to confirm it is safe to publish. This includes checking for credentials, classified content, unreleased policy, and ensuring intellectual property is Crown-owned or appropriately licensed. Teams should identify and withhold only the specific code that cannot be published, rather than closing an entire repository unnecessarily.

Teams must complete the [Open Source Governance Checklist](../../software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md) and select an appropriate open-source licence in line with the [Software Licensing Policy](software-licensing-policy.md). MIT is recommended for most software.

### Code that cannot be opened

Code may be withheld only for a specific reason described in the [closed-code reference](open-source-publishing-reference.md). Commercial sensitivity alone is not a valid reason to keep code closed.

If code cannot be made open, teams must document a rationale that identifies the code withheld, cites the applicable reason, and records the expected date or condition for opening it. The rationale must be recorded in the repository README or a linked document and reviewed regularly, including at each service assessment.

Our own code remains open by default when it integrates with commercial products. Vendor-owned code must not be published without the vendor's permission, and proprietary SDKs, APIs, or libraries must be reviewed against the applicable licence.

Any absence of a licence must be documented and approved in line with the [Software Licensing Policy](software-licensing-policy.md).

## Related documents

- [How to publish UKHO code openly](open-source-publishing-how-to.md)
- [Why we publish UKHO code openly](open-source-publishing-explanation.md)
- [Open source publishing reference](open-source-publishing-reference.md)
- [Software Licensing Policy](software-licensing-policy.md)
