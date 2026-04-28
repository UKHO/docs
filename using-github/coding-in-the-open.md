# How to Meet Section 12: Make New Source Code Open (MOD / GOV.UK Standards)

This guidance explains how teams can meet [**Section 12 – Make New Source Code Open**](https://www.digital.mod.uk/policy-rules-standards-and-guidance/service-manual/meet-the-standard), following both the GOV.UK Service Standard and Defence‑specific considerations from the MOD Service Manual.

## 1. Why this matters

- **Public value**  
  New source code created with public funds should be open by default—this maximises reuse, reduces duplication, and supports transparency and cost-efficiency across government.

- **Defence-specific constraints**  
  Defence teams should open code when appropriate, but withhold publishing code relating to SECRET or TOP SECRET systems or content that hasn't been publicly announced.

## 2. What "make source code open" means

### GOV.UK expectations

- Write code in the open from the start, using a public repository—but never include secrets like API keys or credentials.
- Always retain IP ownership of your service’s new code and license it openly (e.g., MIT or another Open Source Initiative–compatible license).
- If code must remain closed (e.g., unreleased policy or sensitive security mechanisms), provide a strong rationale—but open it as soon as permissible.

### Additional GOV.UK technical guidance

- Host code publicly (e.g., GitHub), ensuring departmental control and compliance with cybersecurity standards.
- Avoid embedding secrets—manage them using secure secret-management systems.
- Open configuration code, database schemas, and even security‑enforcing code (cryptographic or authentication logic) unless there's a specific reason—noting that openness often strengthens security.
- Use a clear open-source license, handle versioning (e.g. Semantic Versioning), provide contributing guidelines, manage issues, and encourage community contributions.
- Track changes via version control and prepare to manage security vulnerabilities in public code responsibly.

#### Closed code

Only a small number of well-defined situations justify keeping code closed. Per the [GDS guidance on when code should be open or closed](https://www.gov.uk/government/publications/open-source-guidance/when-code-should-be-open-or-closed) and the [MOD Defence Service Manual (Section 12)](https://www.digital.mod.uk/policy-rules-standards-and-guidance/service-manual/meet-the-standard), these are:

- **Keys and credentials** – must always be kept separate and closed; use a secret management system
- **Fraud detection algorithms** – keep the algorithm closed but separate from the code that uses it
- **Unreleased policy** – keep closed only until the policy is announced; open as soon as possible thereafter
- **SECRET or TOP SECRET content (MOD-specific)** – code that directly relates to classified systems or content at these markings must not be published
- **Third-party intellectual property not licensed for open publication** – code, algorithms, or data owned by a vendor or third party where the licence does not permit open redistribution

> **Note on "commercially sensitive" code:** Commercial sensitivity alone is **not** a valid reason under GDS or MOD guidance to keep code closed. If a team believes code is commercially sensitive, this must be assessed case-by-case with the product owner, security champion, and legal adviser. A clear and documented rationale must be provided — see [Providing a rationale for closed code](#providing-a-rationale-for-closed-code) below.

These items will usually be identified early in the product lifecycle with support from your product owner and cyber security team. If you are unsure if your code should be open or closed then it is important to organise a session to work through this.

#### Open code

You should open all other code. This includes:

- configuration code
- database schema
- security-enforcing code

More details can be found in the [GDS Guidance – When code should be open or closed](https://www.gov.uk/government/publications/open-source-guidance/when-code-should-be-open-or-closed)

#### Providing a rationale for closed code

Where code cannot be made open, teams **must** provide a convincing written explanation of why. This rationale should:

- identify the specific subset of code that must remain closed (do not close entire repositories unnecessarily)
- name the applicable reason from the list above
- state the expected date or condition under which the code can be opened
- be recorded in the repository's README or a linked document, and reviewed at each service assessment

This is a requirement of both [GOV.UK Service Standard point 12](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open) and the MOD Defence Service Manual.

#### Commercial software and open/closed boundaries

When your service includes or is built on commercial software:

- **Our own code remains open by default** even when it integrates with commercial products — the commercial product licence does not automatically make your code closed
- **Vendor-supplied or vendor-owned code** must not be published without explicit permission from the vendor; check your contract and engage the legal adviser if in doubt
- **Proprietary SDKs, APIs, or libraries** incorporated into your codebase may restrict redistribution; ensure the vendor licence is reviewed against our [Software Licensing Policy](./software-licensing-policy.md) before publishing
- **Configuration code for commercial tools** (e.g. Terraform modules targeting a commercial product, Helm charts, CI/CD pipeline definitions) should be open unless they contain credentials or commercially confidential configuration values
- Where a commercial product contains **open-core** components, ensure you are publishing only the OSI-licensed portions and not conflating them with the proprietary modules

If you are uncertain about any commercial software boundary, consult your Security Champion, Lead Engineer, and Legal Adviser before publishing.

## 3. Defence (MOD)‑specific enhancements

- **Do open code where possible**—unless the code deals with SECRET or TOP SECRET elements.
- **Ensure classification awareness**: assess which parts of the codebase are sensitive and only withhold those as necessary, with intent to open once safe.

## 4. Summary: Step‑by‑Step Guidance

| Phase         | Actions                                                                 |
|---------------|-------------------------------------------------------------------------|
| **Planning**  | - Define IP and open licensing (e.g., MIT) <br> - Choose open repo tool within Defence and compliant with cyber policy |
| **Development** | - Code openly from day one<br> - Exclude secrets and credentials (use secret management)<br> - Write clear documentation and commit history |
| **Security Review** | - Conduct security checks before publishing<br> - Remove sensitive content and confirm what may remain closed (e.g., unreleased policy or SECRET parts) |
| **Publishing** | - Release code publicly under an open licence<br> - Include versioning rules, contributing guidelines, issue tracking |
| **Ongoing Management** | - Continue development openly<br> - Maintain version control and handle issues transparently<br> - Monitor and promptly patch security vulnerabilities |

## 5. Tips & Best Practices

- **Open by default, closed only for strong reasons** – and open as soon as those reasons no longer apply.
- **Plan for openness from the start** – reducing the burden of retrospectively sanitizing code.
- **Favour openness even in security‑critical modules** – properly designed open cryptographic code can be more robust.
- **Use secure development workflows** – store code in trusted repositories, manage secrets separately, and structure your release process to accommodate open-source norms.
- **Provide clear governance** – licenses, versioning, contribution policies, and response channels for external collaborators.

## 6. Opening a closed repository

In the case where a repository is available to be made open, it is required that a team lead fills in the [checklist](/software-engineering-policies/OpenSourceContribution/OpenSourceGovernanceChecklist.md) with the necessary details. This request can then be processed in the development portal.

## 7. Repositories that do not require a licence

Most repositories should carry an open-source licence. However, there are limited circumstances where publishing a licence is not appropriate:

- **Classified or restricted repositories** that are not and will not be publicly accessible do not require an OSI licence, but must still carry appropriate classification markings
- **Purely internal tooling** that is explicitly scoped as never-to-be-published — though teams should challenge this assumption and default to openness
- **Third-party code** repositories where UKHO does not hold the IP and cannot grant a licence

In all these cases, the absence of a licence must be documented and approved. See the [Software Licensing Policy](./software-licensing-policy.md) for further detail on when a licence may not be required.
