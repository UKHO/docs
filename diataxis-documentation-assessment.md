# Diataxis Documentation Assessment

## Scope and basis

This assessment applies the [Diataxis model](https://diataxis.fr/application/) and its [compass](https://diataxis.fr/compass/) to the source documentation in this repository. It considers the current navigation, representative documents and document naming. Generated `_site` content is treated as a build output, not as a second source structure.

The repository contains approximately 99 source Markdown files. Its primary navigation is organised by discipline or activity: `engineering`, `quality-assurance`, `security`, `software-engineering-policies` and `using-github`.

## Executive assessment

The repository has a useful subject-matter structure, but it is not yet organised around the user's immediate need. The strongest existing pattern is normative and policy-oriented: policy, guidance, standards, checklists and strategy documents are grouped under topic folders. This makes ownership and subject discovery reasonably clear, but it leaves the reader to infer whether a page is intended to teach, help complete a task, provide authoritative facts, or explain rationale.

The current structure is therefore partially compatible with Diataxis at document level, but not at navigation level:

- **Reference:** relatively strong. Policies, coding standards, naming conventions and cloud requirements often provide authoritative information, although they sometimes mix requirements with rationale and procedure.
- **How-to guides:** present but inconsistently labelled. Checklists and operational pages often help a reader complete work, but titles and structure do not consistently state the goal or problem being solved.
- **Explanation:** present inside strategy, policy and conceptual pages, but rarely exposed as a distinct documentation type. Rationale, context and alternatives are often mixed with requirements or instructions.
- **Tutorials:** the weakest and least visible category. The repository contains training links and induction material, but there are few clearly bounded, end-to-end learning journeys with a meaningful practical outcome.

The recommended direction is a **hybrid structure**: retain discipline and governance ownership in the repository, but make Diataxis types first-class in navigation and metadata. A wholesale move to four top-level folders would obscure the engineering disciplines and create unnecessary link churn.

## Representative classification

| Current document | Likely type | Audience and user need | Recommended action |
| --- | --- | --- | --- |
| `README.md` | Orientation, with links to explanation and navigation | All readers need to understand the practice and find a starting point | Retain as the main landing page, but add explicit routes for learn, accomplish, look up and understand, plus discipline filters |
| `quality-assurance/README.md` | Orientation and index | Testers and delivery teams need to find quality material | Add four Diataxis subsections and classify each linked page; keep Quality Assurance as a discipline view |
| `software-engineering-policies/README.md` | Reference/governance index | Engineers need to find mandatory policies and associated guidance | Separate normative policy reference from explanatory rationale and practical how-to material; fix links to missing or external content as a separate maintenance task |
| `engineering/strategy/engineering-strategy.md` | Explanation, with governance/reference content | Engineering leaders and practitioners need context, direction and rationale | Keep as strategy/explanation; link separately to any mandatory standards and implementation how-to guides |
| `security/ThreatModelling/ThreatModelling.md` | Mixed explanation, how-to and reference | Teams need to understand threat modelling and conduct a session | Split into: “About threat modelling” (explanation), “How to run a threat-modelling session” (how-to), and a STRIDE/methodology reference; review the public/private content boundary with security owners |
| `quality-assurance/performance-test-checklist.md` | How-to/checklist | Delivery teams need to plan and execute performance testing | Rename around the goal, for example “How to plan performance testing”; retain a concise checklist/reference companion for required evidence and outputs |
| `using-github/migrating-to-github.md` | How-to guide | A team needs to migrate a project and preserve history | Retitle as an explicit task guide; add prerequisites, expected outcome, verification and links to Git command reference |
| `quality-assurance/test-strategy.md` | Explanation plus governance/reference | Teams need to understand the testing approach and its expectations | Separate the rationale and model from mandatory requirements and execution guidance |
| `software-engineering-policies/CloudDevelopment/README.md` | Governance index, mixed reference and how-to | Engineers need cloud requirements and related resources | Create a cloud reference index, then split deployment, tagging, logging, data use and recovery tasks into goal-oriented how-to guides |
| `software-engineering-policies/CodingStandards/*` | Reference | Developers need authoritative language and style rules | Keep as reference; standardise page templates and add examples without turning them into tutorials |
| `engineering/roles/*` and `software-engineering-policies/Induction/*` | Tutorials/explanation | New engineers need to learn the organisation and ways of working | Build explicit onboarding tutorials with achievable outcomes, while keeping role definitions as reference |

## Target information architecture

Use the four Diataxis types as a navigation layer, with disciplines as a secondary view. A conceptual target could be:

```text
README.md                         # start here and choose a user need
learn/                            # tutorials and onboarding journeys
  software/
  test/
  data/
  security/
  platform/
do/                              # how-to guides and task recipes
  software/
  test/
  data/
  security/
  platform/
reference/                        # policies, standards, checklists and technical facts
  software/
  test/
  data/
  security/
  platform/
understand/                       # strategy, concepts, rationale and architecture discussion
  software/
  test/
  data/
  security/
  platform/
governance/                       # optional prominent view for normative obligations
  policies/
  standards/
  strategies/
```

This should initially be implemented as navigation and indexes, not as an immediate physical move. Existing discipline paths can remain canonical while pages gain a clear type label and appear in one or more curated indexes. The `governance` view is useful because policy and standards are organisationally important, but it should link to the same canonical documents rather than duplicate them.

An alternative, with less path churn, is to keep the current folders and add consistent page metadata such as:

```yaml
type: how-to
discipline: security
status: current
owner: security
review-date: 2026-09-25
```

The published site can then generate Diataxis indexes and discipline indexes from the same source documents.

## Recommended navigation

The root README should answer four questions immediately:

- **I am learning:** where are the tutorials and induction journeys?
- **I need to do something:** where are the task guides and checklists?
- **I need a rule or fact:** where are the policies, standards and reference pages?
- **I want to understand why:** where are the strategies, concepts and rationale?

Under those routes, provide discipline filters for software, test, data, security and platform. Add landing pages for `engineering` and `security`, which currently lack the same clear section index pattern as Quality Assurance and Software Engineering Policies. Add data and platform landing pages when their source content becomes substantial enough to justify them.

Every page should link to adjacent types where useful. For example, a threat-modelling how-to can link to an explanation of threat modelling and a STRIDE reference; a coding-standard reference can link to a tutorial for new developers and a how-to for configuring a linter.

## Policies and other governance content

Diataxis does not require policy to become a fifth documentation type. Policy is a governance purpose and can contain several Diataxis forms:

- Normative rules and definitions are primarily **reference**.
- The reasons behind a policy are **explanation**.
- A compliance or adoption procedure is a **how-to guide**.
- A new-starter learning path is a **tutorial**.

Keep the policy as the authoritative source where it is the formal instrument. Avoid rewriting it merely to satisfy a taxonomy. Instead, separate mixed sections when users have different needs, and link the supporting explanation and task guidance from the policy. Mark normative content clearly with owner, approval status, effective date and review date.

Similarly:

- **Standards** should normally be reference, with examples and links to task guidance.
- **Strategies** should normally be explanation, with explicit links to any mandatory obligations.
- **Checklists** should normally be how-to material, provided they describe a real goal and expected outcome.
- **Role descriptions** should normally be reference or explanation; induction journeys should be tutorials.

## Migration strategy

1. **Create a content inventory.** Add a lightweight classification column to an inventory of source pages: Diataxis type, discipline, audience, owner, status and review date.
2. **Classify without moving.** Use the compass questions: is the page about action or cognition, and is the user learning or applying? Record mixed pages explicitly.
3. **Add navigation indexes.** Create root and discipline indexes for tutorials, how-to guides, reference and explanation. Link existing canonical paths.
4. **Pilot one cross-cutting topic.** Threat modelling or performance testing would expose the difference between explanation, how-to, checklist and reference particularly well.
5. **Split only where the user need changes.** Extract substantial conceptual or procedural sections into separate pages; do not split every short policy page mechanically.
6. **Rename for intent.** Prefer titles such as “How to plan performance testing”, “About threat modelling” and “STRIDE threat categories reference”. Preserve redirects or link compatibility if the publishing system supports them.
7. **Add metadata and ownership.** Use front matter or an equivalent catalogue so pages can appear in both Diataxis and discipline views.
8. **Retire or consolidate only after link checking.** Validate internal links, external references, site navigation and owner approval before physical moves.

## Prioritised backlog

### Quick wins

- Add a root-level “Start here” section with the four user needs.
- Add missing or consistent README/index pages for engineering and security.
- Classify the existing index links without moving files.
- Rename obvious task pages and checklists around user goals.
- Add “This is a tutorial/how-to/reference/explanation” purpose statements to page introductions.
- Record page owners, review dates and policy status where that information is known.

### Medium-term work

- Split mixed pages such as threat modelling, test strategy and cloud development.
- Create initial tutorials for onboarding, secure development, testing and deploying a service.
- Create reference templates for policies, standards, checklists and technical descriptions.
- Add cross-links between the four types for each major topic.
- Generate discipline and Diataxis indexes from front matter or a maintained catalogue.

### Larger restructuring

- Establish a complete information architecture for data and platform engineering.
- Move or rename pages only after the inventory and navigation model are proven.
- Add automated link checking and metadata validation to the documentation pipeline.
- Introduce an ownership and review workflow for normative content.
- Measure search success, broken links, stale pages and user feedback after publication.

## Classification acceptance criteria

A page is correctly classified when:

- Its primary user need can be stated in one sentence.
- Its title and introduction make the intended action, learning, lookup or understanding explicit.
- Its content predominantly serves one Diataxis purpose.
- Instructions, explanation, normative rules and technical facts are separated or clearly signposted.
- A reader can tell what prerequisites, outcome and level of expertise apply.
- The page links to related pages in the other relevant Diataxis types instead of duplicating them.
- The page has a clear discipline, owner and review status.
- A subject-matter owner agrees that the classification reflects how the page is used.
- For reference and policy content, statements are authoritative and current.
- For how-to guides, the task is concrete and the expected result is clear.
- For tutorials, the journey is complete, reproducible and learning-oriented.
- For explanation, the page provides bounded context, rationale and connections without becoming an instruction manual.

## Assumptions and decisions for owners

This assessment assumes that the repository's primary readers are engineers, testers, security practitioners, platform practitioners, technical leaders and people joining delivery teams. It also assumes that policy documents may need to remain authoritative and stable even when their supporting material is reorganised.

Document owners should decide:

- Which pages are formally normative and which are advisory.
- Whether threat-modelling material can be published openly or requires a private companion.
- Whether data and platform content already exists elsewhere and should be linked or brought into this repository.
- Which team owns each page and how review dates are enforced.
- Whether the publishing tool can support front matter, generated indexes and redirects.
- Which user journeys matter most for the first tutorial pilot.
