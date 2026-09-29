# How to Publish UKHO Code Openly

Follow these steps to publish code written at UKHO. The [Open Source Publishing Policy](open-source-publishing.md) is authoritative for the requirements.

1. Review the repository for credentials, classified content, unreleased policy, and intellectual property that is not Crown-owned or appropriately licensed. Confirm credentials and any content that must remain closed are excluded from the public repository; manage credentials using a secret-management system.
2. Use the [closed-code reference](open-source-publishing-reference.md) to assess any code that may need to remain closed. Separate the specific subset where possible. If you are unsure, work through the decision with your product owner and cyber security team; for commercial software boundaries, consult your Security Champion, Lead Engineer, and Legal Adviser.
3. Complete the [Open Source Governance Checklist](../../software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md).
4. Select an appropriate open-source licence in line with the [Software Licensing Policy](software-licensing-policy.md). MIT is recommended for most software. Check dependency and vendor licences before publication.
5. Publish the repository publicly under the selected licence and continue development in the open. Include versioning, contribution guidance, issue management, and a way to handle security vulnerabilities in public code.

When code must remain closed, record in the repository README or a linked document which code is withheld, the applicable reason, and the expected date or condition for opening it. Review the rationale regularly and at each service assessment.

To make an existing closed repository open, the team lead completes the [Open Source Governance Checklist](../../software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md); the request can then be processed in the development portal.

If the code cannot be made open, follow the exception requirements in the [Open Source Publishing Policy](open-source-publishing.md) instead.
