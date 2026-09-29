# Prompt: Split a policy into Diataxis documents

Analyse the individual policy document provided below and split its content into separate documents using the Diataxis model.

## Input

The input is one policy document. Treat its content as authoritative source material. Do not add requirements, approvals, roles, timescales, technical steps, examples or rationale that are not supported by the source.

## Classification

First classify each substantive part of the source document. Use the following categories:

### Policy

The policy document is the authoritative normative document. Include statements that define what an organisation, team or person:

- must or must not do
- is required or forbidden to do
- may or may not do
- is responsible or accountable for
- is permitted, exempted or subject to an exception

Include normative definitions and scope where they are needed to interpret the rules. Keep the policy concise and explicit. Do not weaken a requirement by turning it into advice. Do not move a rule into another document merely because it appears in a procedure, explanation or example.

### How-to

Create a how-to document only when the source contains a practical procedure for achieving a specific outcome, such as complying with, adopting or applying the policy. A how-to should help a reader do something now. Include supported prerequisites, an ordered procedure, decision points and an expected outcome when the source provides them.

How-to guidance may restate a policy requirement to make the task actionable, but the policy remains the authoritative statement. Do not invent missing implementation steps. If the source contains only a requirement and no meaningful procedure, leave it in the policy and do not create a how-to document.

### Explanation

Create an explanation document only when the source explains why the policy exists or helps the reader understand its context. Include supported motivation, risks, benefits, trade-offs, scope, relationships, history and consequences. Explanation should answer questions such as "why is this required?" or "how should this be understood?" It must not become an instruction manual or silently introduce new rules.

How-to and explanation documents are expected to be more common than reference and tutorial documents, but create them only when the source contains enough relevant content.

### Reference

Create a reference document only when the source contains substantial information that readers need to look up rather than learn or follow as a process. Suitable content includes authoritative definitions, specifications, classifications, thresholds, required fields, supported options, tables, mappings, standards or other stable facts.

Do not create a reference document for a short list that belongs naturally in the policy. Do not convert normative requirements into neutral facts: keep the requirement in the policy and include reference material only as supporting lookup information.

### Tutorial

Create a tutorial document only when the source supports a complete, reproducible, learning-oriented journey for a reader who is learning the subject. A tutorial must have a clear learning outcome and a sequence of practical activities that a learner can complete. It should teach through a guided experience, not merely describe the policy or list its requirements.

If the source does not provide enough information for a complete learning journey, do not create a tutorial. Do not turn a how-to, checklist or policy summary into a tutorial by inventing exercises or teaching content.

## Diataxis boundaries

- Use the user's need to distinguish the types: learning is a tutorial, accomplishing a specific task is a how-to, looking up authoritative facts is reference, and understanding context or rationale is explanation.
- Policy is a governance purpose, not a fifth Diataxis type. Treat its normative content as the authoritative policy/reference document and separate supporting how-to, explanation, reference or tutorial content only when the user need changes.
- Separate content only where doing so improves the reader's task. Do not split every heading mechanically.
- Preserve distinctions between requirements, procedures, rationale and facts. Clearly signpost links between related documents rather than duplicating large sections.
- Preserve uncertainty, conditions, exceptions and scope from the source. Do not resolve ambiguity by guessing.
- Retain relevant links, names, terminology and examples from the source. Fix only an obvious link or formatting error when necessary for the generated documents, and do not silently change policy meaning.

## File names and output location

Create the output files in the same directory as the input policy. Derive a lowercase, hyphenated base name from the original document's subject, removing words such as `Policy` only when they are a document-type suffix in the original name.

Use these names:

- Policy: `<base-name>.md`
- How-to: `<base-name>-how-to.md`
- Explanation: `<base-name>-explanation.md`
- Reference: `<base-name>-reference.md`
- Tutorial: `<base-name>-tutorial.md`

For example, an input named `OpenSourcePublishingPolicy.md` produces `open-source-publishing.md`, `open-source-publishing-how-to.md`, `open-source-publishing-explanation.md`, `open-source-publishing-reference.md` and, only when justified, `open-source-publishing-tutorial.md`.

If the input filename is already lowercase and hyphenated, use its subject as the base name and remove an existing policy-type suffix only where it is clearly part of the filename convention. Do not overwrite unrelated files. If a target file already exists, update it only when it is clearly the corresponding generated document and preserve unrelated user changes.

## Document requirements

Every generated document must:

- use a clear title that states its purpose
- contain only content supported by the source policy
- use plain, direct language
- preserve the source's obligations and qualifiers accurately
- link to the other generated documents when that helps navigation
- avoid repeating content that belongs in another document
- use Markdown consistent with the surrounding repository

The policy document should include a short related-documents section when supporting documents are created. Supporting documents should link back to the policy. Do not create empty, speculative or placeholder files for categories with no substantive source content.

## Required response

Before editing, briefly report:

1. the source document and derived base name
2. which content belongs in each category
3. which output files will actually be created and why any category is omitted

Then create the selected files. After editing, validate the generated Markdown if repository tooling is available. Report the files created and any validation result. Do not modify the original source policy unless explicitly asked. Move the original policy into a subfolder called "Processed".

## Using this prompt in Visual Studio Code

In Visual Studio Code Chat, attach this prompt and the policy document you want to process as separate attachments. Then send a request such as:

> Follow the attached prompt to process the attached policy document.

Treat the attached policy document as the source policy. Do not require the user to paste its Markdown into the chat or into this prompt. If no policy document is attached, or it is unclear which attachment is the policy, ask the user to attach or identify it before processing.
