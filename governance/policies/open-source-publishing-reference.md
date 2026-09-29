# Open Source Publishing Reference

This reference describes the closed-code categories, commercial software boundaries, and licence exceptions relevant to the [Open Source Publishing Policy](open-source-publishing.md). The policy remains authoritative for requirements.

## Closed-code categories

| Category | Boundary |
| --- | --- |
| Keys and credentials | Keep separate from code and closed; use a secret-management system. |
| Fraud detection algorithms | The algorithm may remain closed, but should be separate from the code that uses it. |
| Unreleased policy | Keep related code closed only until the policy is announced, then open it as soon as possible. |
| SECRET or TOP SECRET content | Code directly relating to systems or content at these MOD classification markings must not be published. |
| Third-party intellectual property | Do not publish code, algorithms, or data owned by a vendor or third party when the licence does not permit open redistribution. |

Commercial sensitivity alone is not a valid reason to keep code closed. Where commercial sensitivity is raised, assess it case by case with the product owner, Security Champion, and Legal Adviser, and document the rationale.

## Commercial software boundaries

- UKHO's own code remains open by default when it integrates with commercial products; the product licence does not by itself make UKHO's code closed.
- Do not publish vendor-supplied or vendor-owned code without the vendor's explicit permission. Check the contract and consult a Legal Adviser if uncertain.
- Review licences for proprietary SDKs, APIs, or libraries against the [Software Licensing Policy](software-licensing-policy.md) before publishing.
- Configuration code for commercial tools, such as Terraform modules, Helm charts, or CI/CD pipeline definitions, should be open unless it contains credentials or commercially confidential configuration values.
- For open-core products, publish only the OSI-licensed portions; do not include proprietary modules.

## Repositories that may not need a licence

Most repositories should carry an open-source licence. A licence may not be appropriate for:

- Classified or restricted repositories that are not and will not be publicly accessible; apply appropriate classification markings.
- Purely internal tooling explicitly scoped as never to be published; this assumption should be challenged and openness remains the default.
- Third-party code where UKHO does not hold the intellectual property and cannot grant a licence.

In these cases, document and obtain approval for the absence of a licence. See the [Software Licensing Policy](software-licensing-policy.md) for the related requirements.

## Further guidance

- [GDS guidance: when code should be open or closed](https://www.gov.uk/government/publications/open-source-guidance/when-code-should-be-open-or-closed)
- [GOV.UK Service Standard point 12](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open)
- [MOD Defence Service Manual, Section 12](https://www.digital.mod.uk/policy-rules-standards-and-guidance/service-manual/meet-the-standard)
