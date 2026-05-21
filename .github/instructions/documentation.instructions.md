---
applyTo: "**/*.md"
---

# Documentation guidance

Use this guidance when creating or updating documentation in this repository.

## Core principle

Write documentation around the reader's need. Do not organise or expand content only around ownership, internal structure, or where similar material already exists.

Use these four documentation modes to keep pages focused and useful:

- **Tutorials**: teach a newcomer through a safe, successful first experience.
- **How-to guides**: help a reader complete a specific task.
- **Reference**: provide accurate information for lookup.
- **Explanation**: build understanding, context, and judgement.

A page should usually have one primary mode. If a page must include more than one mode, make the sections clearly distinct and link out to dedicated pages when the content grows.

## Repository structure

Keep the current repository structure.

Use the existing top-level areas as follows:

- `communities/`: audience, practice, or community landing pages.
- `policies/`: authoritative statements of what must be done.
- `standards/`: authoritative implementation expectations.
- `guidance/how-to/`: task-oriented guides.
- `guidance/playbooks/`: repeatable workflow guidance.
- `guidance/checklists/`: review, assurance, or workflow prompts.
- `guidance/examples/`: concrete examples, labelled by purpose.
- `reference/`: lookup material, templates, roles, and reusable supporting assets.

This repository has a complex hierarchy. It is acceptable for audience, governance type, and topic area to sit above or alongside these documentation modes, provided each page remains clear about the reader need it serves.

## Map local document types to documentation modes

Use this mapping when deciding where content belongs and how it should be written:

| Local type | Primary documentation mode | Write it as |
| --- | --- | --- |
| Policy | Reference | Authoritative requirements. Keep rationale separate or clearly marked. |
| Standard | Reference | Repeatable implementation expectations. Link to how-to guidance for procedures. |
| Guidance | How-to or explanation | Decide whether the page helps the reader act or understand. |
| Checklist | Reference or how-to | Use reference style for lookup checklists and how-to style for workflow checklists. |
| Example | Tutorial, explanation, or reference | State whether the example teaches, explains, or provides a pattern to copy. |
| Community page | Landing page | Orient an audience and route them to the right material. |

## Page-purpose guidance

For new pages, and for substantial edits to existing pages, include a clear purpose near the top when it helps readers choose correctly.

Prefer this shape:

```text
Document type: How-to guide
Audience: Delivery team developers
Use this when: you need to deploy a service to a cloud environment
```

Use wording that fits the page. The important point is that the page should make clear:

- what kind of document it is;
- who it is for;
- when to use it.

## Tutorials

Create tutorial material only when there is a real learning need. Do not use a tutorial for a general task guide.

A tutorial should:

- be learning-oriented;
- be safe for a newcomer;
- have a clear start and end;
- guide the reader to a successful result;
- avoid branching into many options;
- link onward to relevant how-to, reference, and explanation pages.

## How-to guides

Use how-to guides for specific tasks.

A how-to guide should:

- start from the reader's task;
- use action-oriented headings;
- keep background explanation brief;
- link to policy or reference material instead of repeating it;
- avoid becoming a broad topic overview.

## Reference material

Use reference pages for authoritative lookup information.

Reference material should:

- be accurate and complete for its scope;
- be structured consistently;
- avoid tutorial-style teaching;
- avoid long explanatory digressions;
- link to explanation pages for rationale where needed.

Policies and standards are usually reference material. Keep mandatory wording precise and easy to find.

## Explanation

Use explanation pages to build understanding.

Explanation should:

- explain why something matters;
- provide context, rationale, trade-offs, and judgement;
- avoid step-by-step task instructions unless they are examples in support of the explanation;
- link to how-to guides for action and reference pages for details.

## Landing pages

README files and other landing pages should be written for humans, not just as link lists.

A landing page should:

- explain the area it covers;
- tell readers when to use each sub-area;
- group links under meaningful headings when there are more than a few items;
- include short introductory text where it improves discoverability;
- link to related areas when the same topic spans communities, policies, standards, guidance, or reference.

Avoid long flat lists. If a list grows beyond about seven items, group it by user need, lifecycle stage, role, topic, or mandatory versus recommended material.

## Mixed-purpose pages

Avoid mixing policy, standard, how-to, reference, and explanation content on one page.

When an existing page has mixed purposes:

1. identify the primary reader need;
2. keep the page focused on that need;
3. move or link secondary material to a better page;
4. use a landing page to route readers if several needs must remain visible together.

Pay particular attention when a page path, title, and content type disagree. Align them where practical.

## Cross-linking

Cross-link deliberately because topics often span multiple modes and repository areas.

For example, a testing topic might need links between:

- community guidance;
- testing policies;
- testing standards;
- checklists;
- examples.

Prefer linking over duplicating content. Duplicate only when the repeated text is small, stable, and genuinely helps the reader.

## Contributor checklist

Before adding or substantially changing a document, check:

- Does the page have one clear primary documentation mode?
- Is the page in the right repository area for its local document type?
- Does the heading match the path and purpose?
- Would a reader know when to use this page?
- Is mandatory content separated from advice and explanation?
- Are long lists grouped into smaller meaningful sections?
- Are related policies, standards, guidance, and reference pages linked where useful?
- Have relevant local `README.md` files been updated?
