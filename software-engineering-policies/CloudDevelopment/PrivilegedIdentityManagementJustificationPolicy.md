# PIM activation justification policy for engineers (draft)

This engineering policy describes how engineers should justify an activation of an eligible Microsoft Entra Privileged Identity Management (PIM) role for UKHO engineering work.

## Requirements for engineers

When activating a PIM role for engineering work, engineers should:

- Activate only the role needed for the authorised work, for the shortest duration needed to complete it.
- Give a clear, traceable reason that identifies the privileged activity, the affected system or service, the business purpose or expected outcome, and the authorised work item. Include a reference that enables the work to be traced, such as an applicable Azure DevOps work item, IT Portal request, incident or change record.
- Include an IT Portal reference for work on a live production system or service.
- Keep secrets, credentials, personal data and sensitive operational details out of the reason. Use a reference to the authorised record rather than copying sensitive contents into PIM.

A reason should be sufficiently specific to let a reviewer understand why the access is needed and relate it to the authorised work. At least 15 characters is a suggested writing aid, not an established technical minimum or a substitute for a meaningful explanation.

## Review and challenge

Activation reasons may be reviewed or challenged. A vague, missing or untraceable reason may need clarification and may lead to follow-up on whether the access was appropriate. This page does not establish a review schedule, name a reviewing team or assert that PIM automatically validates the content of a reason.

## Terms and help

- **PIM activation:** Temporary use of an eligible privileged role through Microsoft Entra Privileged Identity Management.
- **Justification or reason:** The explanation supplied for that activation, connecting the access to authorised work without exposing sensitive details.
- **Work reference:** An identifier for the authorised request, work item, incident or change record that allows the activity to be traced.
- **Live production:** A system or service serving live operational use, as distinct from non-production work.

For a suggested format, safe examples and a self-check, see the [PIM justification guidance](PrivilegedIdentityManagementJustificationGuidance.md). The guidance supports this proposed policy; it does not add requirements.
