# Writing a PIM activation reason

This page helps engineers compose a reason for an engineering PIM activation under the proposed [PIM justification policy](PrivilegedIdentityManagementJustificationPolicy.md). The policy states the proposed requirements; this guidance is not a separate set of rules or a PIM user-interface guide.

## Compose a reason

A useful structure is `reference: privileged activity + system/service + business reason or expected outcome`. Use plain language rather than the literal plus signs. Describe the activity precisely enough to explain the access without including sensitive operational details.

Choose the reference for the authorised work: an Azure DevOps work item for planned engineering work, an IT Portal request for a service request, or an incident or change record when responding to or changing a service. For live production work, include an IT Portal reference as required by the policy. If another record also helps explain the work, include its identifier without copying the record's sensitive contents. These are examples of references, not a claim that PIM connects to any of these systems.

## Illustrative reasons

These are fictional placeholders, not real identifiers or evidence of authorisation. `ADO-EXAMPLE` represents a work item, `IT-EXAMPLE` an IT Portal reference and `INC-EXAMPLE` an incident record. Replace them with the relevant authorised reference and accurate, non-sensitive description of your own work.

| Situation | Too vague | More useful reason |
| --- | --- | --- |
| Planned non-production work | `Maintenance` | `ADO-EXAMPLE: adjust access configuration for test service to support planned deployment` |
| Live production work | `Fix production` | `IT-EXAMPLE: inspect production service diagnostics for authorised incident response` |
| Urgent incident response | `Urgent` | `IT-EXAMPLE / INC-EXAMPLE: restart production service to restore availability during incident response` |

In an emergency, a concise, safe reason can identify the incident and the intended privileged activity. Update the incident record after recovery with the relevant details rather than putting sensitive details in the PIM reason. For live production work, the policy's IT Portal reference requirement still applies; use an authorised reference rather than inventing an identifier.

## Check before activating

- Can a reviewer tell what privileged activity is needed, which system or service is affected and why the work is authorised?
- Is the role and activation duration proportionate to the work described?
- Is the work reference appropriate, including an IT Portal reference for live production work?
- Have you left out secrets, credentials, personal data and sensitive operational details?

If the reason is still just a generic label, add the missing context without disclosing sensitive information. See the [policy](PrivilegedIdentityManagementJustificationPolicy.md) for the proposed obligations and review context.
