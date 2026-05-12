# Repository structure recommendations

## Purpose

This document reviews the current repository structure and recommends improvements that would make the engineering, test, security, software, and data guidance easier for the community to navigate, discover, and consume.

The recommendations are intentionally structural. They do not require changing the meaning of existing policies or guidance.

## Current structure summary

The repository currently contains several useful communities of content:

- `quality-assurance` contains test strategy, test policy, accessibility, automation, safety assurance, and related testing guidance.
- `security` contains security champion, threat modelling, and security concern management guidance.
- `software-engineering` contains engineering role and strategy documents.
- `software-engineering-policies` contains most policy and standards material, grouped by technical or process area.
- `using-github` contains repository and contribution guidance.
- `working` contains analysis material and draft or emerging policy content.

This structure broadly separates content by community or subject area, but it relies heavily on readers already knowing where a document is likely to live.

## Observations

### Strengths

- The repository has clear high-level topic areas for quality assurance, security, software engineering, engineering policy, and GitHub usage.
- The root `README.md` gives useful context about the UKHO engineering community and links to key policy areas.
- The `quality-assurance` and `software-engineering-policies` areas both have README files that act as local entry points.
- Policy material is generally grouped into subject-specific folders, which should scale better than a single flat document list.
- Contribution guidance and markdown linting are already present, supporting community-led improvement.

### Navigation challenges

- There is no single repository-wide content map showing all major document groups and when to use them.
- Some folders are named for communities, such as `quality-assurance`, while others are named for document type or lifecycle, such as `software-engineering-policies` and `working`.
- Naming conventions vary between kebab-case, PascalCase, snake_case, and mixed names. Examples include `test-strategy.md`, `Security-Testing-Guidance.md`, `Baseline_Policy.md`, and `observability_policy.md`.
- Some areas have comprehensive indexes, while others have little or no local README navigation.
- The difference between approved, draft, candidate, reference, and working material is not obvious from structure alone.
- The `working` area contains substantial material but is separated from the policy areas it appears to influence, making status and next steps harder to understand.
- The repository includes software, test, security, and data-adjacent material, but the user journeys for different audiences are implicit rather than explicit.

## Recommended target structure

A clearer structure would separate content by reader intent first, then by subject area. One possible target model is:

```text
/
├── README.md
├── content-map.md
├── communities/
│   ├── quality-assurance/
│   ├── security/
│   ├── software-engineering/
│   └── data-engineering/
├── policies/
│   ├── engineering/
│   ├── security/
│   ├── testing/
│   ├── data/
│   └── platform/
├── standards/
│   ├── coding/
│   ├── testing/
│   ├── source-control/
│   ├── observability/
│   └── documentation/
├── guidance/
│   ├── how-to/
│   ├── playbooks/
│   ├── checklists/
│   └── examples/
├── reference/
│   ├── roles/
│   ├── technology-radar/
│   └── templates/
└── working/
    ├── proposed/
    ├── under-review/
    └── archive/
```

This model makes the purpose of each area clearer:

- `communities` explains who owns or curates guidance and how communities work.
- `policies` contains mandatory policy statements.
- `standards` contains mandatory or expected implementation standards.
- `guidance` contains practical advice, checklists, playbooks, and examples.
- `reference` contains supporting material that is useful but not itself policy.
- `working` contains draft, review, and archived material with clear lifecycle status.

The exact names can be adjusted, but the important improvement is to organise by how people consume the content.

## Recommended improvements

### 1. Add a repository-wide content map

Create a top-level `content-map.md` or expand the root `README.md` with a structured index that answers:

- I am new to the engineering community. Where should I start?
- I need a policy. Where are approved policies?
- I need implementation guidance. Where are standards, checklists, and examples?
- I am a tester. Which documents matter most?
- I am a developer. Which documents matter most?
- I am a security champion. Which documents matter most?
- I am creating or reviewing data-related work. Which documents matter most?

This should become the primary navigation surface for the repository.

### 2. Introduce document status metadata

Each document should make its status visible near the top. A lightweight metadata block would be enough:

```text
Status: Approved | Draft | Proposed | Under review | Deprecated
Owner: Community or role responsible for maintenance
Audience: Developers | Testers | Security champions | Delivery teams | Data practitioners
Last reviewed: YYYY-MM-DD
Review cycle: Annual | Six-monthly | As needed
Related documents: Links to adjacent policy, standard, or guidance
```

This would help readers understand whether they are looking at current guidance or emerging work.

### 3. Separate policy, standard, guidance, checklist, and reference material

The current `software-engineering-policies` area includes policies, guidance, checklists, setup documents, radar data, and contribution guidance. These are all useful, but mixing document types makes it harder to know what is mandatory.

A practical improvement would be to tag or group documents by document type:

- Policy: what must be done.
- Standard: how mandatory requirements should be implemented.
- Guidance: recommended approaches and explanation.
- Checklist: repeatable review or assurance steps.
- Reference: supporting information, templates, examples, or background.

This could be introduced first through indexes before any folder moves are considered.

### 4. Standardise naming conventions

Adopt one file and folder naming convention for new and renamed documents. Kebab-case is a good fit for markdown repositories because it is readable in URLs and consistent with several existing files.

Recommended convention:

- Folders: `kebab-case`
- Markdown files: `kebab-case.md`
- README files: `README.md`
- Avoid spaces, underscores, and mixed casing in new file names.

Examples:

- `Security-Testing-Guidance.md` becomes `security-testing-guidance.md`.
- `Baseline_Policy.md` becomes `baseline-policy.md`.
- `observability_policy.md` becomes `observability-policy.md`.

For existing links, any rename should be done carefully and preferably with redirect or compatibility notes where needed.

### 5. Add local README files to every major folder

Each major folder should have a `README.md` that contains:

- The purpose of the folder.
- The intended audience.
- A short list of the most important documents.
- A complete local contents list.
- Links to related folders.
- Ownership and contribution expectations.

This would particularly help `security`, `software-engineering`, and `working`, where important material exists but the entry point is less obvious.

### 6. Make audience journeys explicit

Add audience-led navigation to the root README or content map. Suggested journeys:

- New starter in engineering.
- Developer implementing a feature.
- Tester planning test coverage.
- Test lead reviewing assurance.
- Security champion reviewing delivery risks.
- Delivery manager checking team practices.
- Data practitioner handling data lifecycle or assurance concerns.
- Contributor proposing a policy update.

Each journey should contain a short curated list rather than a full document dump.

### 7. Clarify the lifecycle of working material

The `working` folder should explain whether documents are:

- Discovery notes.
- Draft policy candidates.
- Material under active review.
- Superseded analysis.
- Archived historical context.

A suggested structure is:

```text
working/
├── README.md
├── proposed/
├── under-review/
├── analysis/
└── archive/
```

This would help the community understand what can be trusted as current guidance and what is still being shaped.

### 8. Add cross-links between related topics

Related topics are currently spread across folders. For example, security testing appears in both quality assurance and security-related areas, while observability appears in policy and draft working material.

Each document should include a short related-links section where useful. This is more valuable than duplicating content because it preserves a single source of truth while improving discoverability.

### 9. Create a data guidance entry point

The repository is described as including software, test, and data working documents, but data is not currently visible as a first-class navigation area.

If data guidance is in scope for this repository, add either:

- `data-engineering/README.md` for community and practice guidance, or
- `policies/data/README.md` for data-specific policy and standards.

This entry point should link to data retention, deletion, test data management, assurance, and related security guidance.

### 10. Add a lightweight ownership model

To support community maintenance, each major area should identify maintainers or owning communities. This could be documented in local README files rather than enforced through repository settings.

Suggested ownership fields:

- Area owner.
- Reviewing community.
- Approval route.
- Review cadence.
- Slack, Teams, or contact route if appropriate.

## Suggested phased approach

### Phase 1: Improve navigation without moving content

- Add a repository-wide content map.
- Add or improve local README files.
- Add audience journeys.
- Add status and ownership metadata to high-value documents.
- Add related-links sections to documents that already have obvious dependencies.

This phase gives immediate value with low risk because existing paths do not change.

### Phase 2: Establish conventions for new content

- Agree naming conventions.
- Agree document type definitions.
- Update contribution guidance to describe where new policy, standard, guidance, checklist, and reference documents should go.
- Apply the conventions to new documents first.

This prevents the structure from becoming harder to navigate while avoiding a large disruptive reorganisation.

### Phase 3: Reorganise selected areas gradually

- Move or rename only the areas where navigation pain is highest.
- Preserve links where possible.
- Update indexes and cross-links as documents move.
- Treat each area migration as a small pull request.

The `working` area and mixed policy or guidance folders are good candidates for gradual migration.

## Proposed immediate next actions

1. Create a top-level content map.
2. Add `README.md` files for `security`, `software-engineering`, and `working`.
3. Add a status and ownership template to contribution guidance.
4. Create an audience-led navigation section in the root README.
5. Agree a naming convention for new markdown documents.
6. Identify whether data guidance should have a first-class area.
7. Review the `working` folder and classify documents by lifecycle status.

## Expected benefits

- New community members can find the right starting point faster.
- Contributors can see where new material belongs before opening a pull request.
- Readers can distinguish approved policy from draft or reference material.
- Policy owners can identify stale documents more easily.
- Related software, test, security, and data guidance becomes easier to consume without duplicating content.
- The repository can continue to grow without becoming dependent on informal knowledge of where things live.
