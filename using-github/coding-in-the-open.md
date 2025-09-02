# How to Meet Section 12: Make New Source Code Open (MOD / GOV.UK Standards)

This guidance explains how teams can meet [**Section 12 – Make New Source Code Open**](https://www.digital.mod.uk/service-manual/meet-the-standard), following both the GOV.UK Service Standard and Defence‑specific considerations from the MOD Service Manual.

## 1. Why this matters

- **Public value**  
  New source code created with public funds should be open by default—this maximises reuse, reduces duplication, and supports transparency and cost-efficiency across government.

- **Defence-specific constraints**  
  Defence teams should open code when appropriate, but withhold publishing code relating to SECRET or TOP SECRET systems or content that hasn't been publicly announced.

## 2. What "make source code open" means

### GOV.UK expectations

- Write code in the open from the start, using a public repository—but never include secrets like API keys or credentials.
- Always retain IP ownership of your service’s new code and license it openly (e.g., MIT or another Open Source Initiative–compatible licence).
- If code must remain closed (e.g., unreleased policy or sensitive security mechanisms), provide a strong rationale—but open it as soon as permissible.

### Additional GOV.UK technical guidance

- Host code publicly (e.g., GitHub), ensuring departmental control and compliance with cybersecurity standards.
- Avoid embedding secrets—manage them using secure secret-management systems.
- Open configuration code, database schemas, and even security‑enforcing code (cryptographic or authentication logic) unless there's a specific reason—noting that openness often strengthens security.
- Use a clear open-source licence, handle versioning (e.g. Semantic Versioning), provide contributing guidelines, manage issues, and encourage community contributions.
- Track changes via version control and prepare to manage security vulnerabilities in public code responsibly.

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
- **Plan for openness from the start** – reducing the burden of retrospectively sanitising code.
- **Favour openness even in security‑critical modules** – properly designed open cryptographic code can be more robust.
- **Use secure development workflows** – store code in trusted repositories, manage secrets separately, and structure your release process to accommodate open-source norms.
- **Provide clear governance** – licences, versioning, contribution policies, and response channels for external collaborators.
