# GitHub Repository Visibility Policy

This policy sets out when UKHO source code may be published on GitHub. It applies to new repositories and changes to existing repository visibility.

## Policy position

UKHO repositories are **private by default**. A repository may be public only where there is a clear, current business or engineering justification and the content is suitable for external visibility.

Public repositories are not inherently inappropriate. They can support transparency, reuse, and coding in the open. Public visibility must be intentional, approved, documented, and reviewed regularly.

Private repositories must still follow UKHO requirements for access control, secret management, vulnerability scanning, and secure handling of personal and sensitive information.

This policy supports [GOV.UK Service Standard point 12](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open), the [GDS guidance on when code should be open or closed](https://www.gov.uk/government/publications/open-source-guidance/when-code-should-be-open-or-closed), and the [MOD Defence Service Manual](https://www.digital.mod.uk/policy-rules-standards-and-guidance/service-manual/meet-the-standard). These standards inform the decision, but do not override UKHO's private-by-default position.

## Code ownership and commercial boundaries

UKHO should retain ownership of code created for its services and must use an appropriate open-source licence before publication.

Using commercial software does not automatically require UKHO-developed code to remain private. However:

- vendor-owned code must not be published without permission
- proprietary SDKs, APIs, libraries, and data must be checked against their licence terms
- UKHO configuration, infrastructure code, and integration code may be published only after the same security, information, and licensing review as other source code
- open-core products must be assessed so that only components permitted for redistribution are published

Where a restriction is temporary, such as unreleased policy, record the date or condition for reconsideration. Keep only the necessary content private and review the decision when the restriction expires.

## Opening a repository

Before making a repository public, the team must:

1. Record the purpose, benefits, owner, owning team, and next review date.
2. Confirm that the proposed content is suitable for external visibility.
3. Complete the [Repository Visibility Change Governance Checklist](/software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md).
4. Complete code, dependency, secret, personal-data, classification, and licensing reviews.
5. Add or update the README, `SECURITY.md`, licence, `CODEOWNERS`, contribution guidance, and issue process as appropriate.
6. Obtain the required approval through the development portal.

Public repositories must not contain:

- keys, credentials, tokens, or other secrets
- SECRET or TOP SECRET content
- unreleased policy or information not approved for publication
- unnecessary personal data or internal information
- third-party content not licensed for public redistribution
- algorithms or other material specifically assessed as requiring confidentiality

Where a repository contains both publishable and restricted content, separate the content rather than publishing the whole repository.

## Minimum standard for public repositories

A public repository must have:

- a clear README describing its purpose and ownership
- a `CONTRIBUTING.md` describing contribution expectations and processes
- an appropriate open-source licence, unless an approved exception applies
- a current `SECURITY.md`
- `CODEOWNERS` where appropriate
- suitable branch protection and access controls
- an active pipeline with vulnerability and secret scanning
- pipeline checks for SAST, software composition analysis, code quality, and dependency or vulnerability updates
- container scanning and infrastructure-as-code scanning where applicable
- a process for vulnerabilities, issues, and external contributions

The publication review must include configuration, infrastructure code, database schemas, and security-enforcing code. These must not be treated as safe simply because they are not application code.

## Ongoing review

Repository owners must review each public repository at least every six months and whenever its owner, purpose, or content changes materially. The review should cover:

- purpose, owner, activity, and maintenance status
- repository content, history, issues, pull requests, and metadata
- required files, branch protection, pipeline activity, and scan evidence
- secrets, credentials, personal data, and organisational intelligence

Make a repository private or archive it when public visibility is no longer justified or its content is unsuitable for publication. Public visibility must not continue simply because it was previously approved.

## Governance and reporting

The designated owner of the public repository review process must maintain an inventory of public repositories, their owners, justifications, review dates, and outstanding actions. They must report overdue reviews and material exceptions through the agreed governance route.

Repository owners must promptly report suspected secret exposure, unsuitable public content, failed security scans, or loss of the justification for public visibility. The repository must be made private or access restricted while the issue is assessed where necessary.

## Contributor account hygiene

Contributor accounts are part of repository governance. Public activity can link code, reviews, issues, usernames, profile details, and working patterns.

Contributors should:

- use an account suitable for UKHO work and a UKHO email address where required
- keep email addresses private or use GitHub proxy-email features
- minimise public profile information, including location, employer details, photographs, and personal links
- avoid linking personal services to a work-associated GitHub profile
- understand the effects on links and attribution before renaming an account
- enable the authentication controls required by UKHO

This guidance must be included in contributor onboarding and periodic repository access reviews. It reduces unnecessary personal exposure without removing accountability or contribution history.

## Secret detection and history management

Secret prevention and detection must be layered. TruffleHog should be assessed periodically and supplemented where appropriate with GitHub secret scanning and push protection, GitLeaks or equivalent scanning, pre-commit controls, pipeline checks, and repository monitoring. Secrets must be kept outside source control using approved secret-management systems.

Container images must continue to be scanned for vulnerabilities and embedded secrets when they are built, imported, or refreshed, using the existing Snyk controls and container-ingestion checks where applicable. Suspected exposed secrets must be revoked or rotated promptly and handled through the appropriate incident process.

Squash and merge is encouraged for new projects where appropriate. It improves maintainability but does not remove all contributor information.

History rewriting is not routine remediation. `git filter-repo`, mailmap files, and rebasing can break signatures and references and require contributors to re-clone. Use them only for a specific, material risk that cannot be addressed less disruptively, with approval, communication, and testing beforehand.

## Exceptions and licensing

Where code cannot be made public, document the specific restricted content, the reason, and the date or condition for reconsideration. Commercial sensitivity alone is not sufficient; consult the product owner, Security Champion, Lead Engineer, and Legal Adviser where relevant.

Most public repositories must carry an open-source licence. An exception may apply to classified or restricted repositories, approved internal-only tooling, or third-party code where UKHO cannot grant a licence. The absence of a licence must be documented and approved. See the [Software Licensing Policy](./software-licensing-policy.md).
