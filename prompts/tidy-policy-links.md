# Prompt: Audit and tidy policy links

Audit the Markdown links in the policy documents attached or identified by the user. Find and repair broken local links when the correct destination is clear, especially links to policies that have been moved into a `Processed` folder and have a current replacement elsewhere in the repository.

## Scope

- Treat the attached or explicitly identified documents as the files to audit. If it is unclear which files are in scope, ask before proceeding.
- Inspect the repository to resolve link targets and find replacement documents. Do not modify unrelated documents or perform a repository-wide link rewrite.
- Preserve link text and surrounding content unless a change is necessary to make the link accurate.

## Audit procedure

1. Find all Markdown links in the in-scope documents, including inline links and reference-style links. Check local paths relative to the document that contains each link. Check fragments against the destination heading when practical.
2. Do not treat external URLs or email links as local paths. Do not claim external destinations are valid unless they have actually been checked; report them separately only if external-link checking is relevant and available.
3. For each broken local link, first determine whether the intended file exists at another path. Search the repository rather than assuming a fixed location or filename.
4. To identify archived policies, discover every relevant directory named `Processed` in the repository and inspect its contents dynamically. Do not rely on a hard-coded list of archived filenames: this folder may gain policies over time.
5. If a broken link points to a policy found under `Processed`, search for its current replacement outside the archive. Compare the policy title, subject, content, and related-document links. A current Diataxis-style policy filename may differ from the archived filename; use repository evidence to establish the correspondence.
6. Update the link target only when the replacement is unambiguous. Keep the existing link label unless it is inaccurate.
7. If the destination or replacement is unclear, do not guess or change that link. Finish any independent, unambiguous repairs, then ask the user a concise question that identifies the source document, broken target, and plausible destination(s).

## Editing and validation

- Make the smallest edits needed, and preserve unrelated or pre-existing user changes.
- After editing, recheck every local link in the in-scope documents, not just the links changed. Use an available repository link checker or a focused check of resolved paths and fragments.
- Report links that remain broken or could not be verified, with the reason. Do not describe an unchecked link as fixed.
- Do not move, rename, or delete archived policies as part of link repair.

## Required response

Briefly report:

- which documents were audited
- which broken links were updated and their replacement destinations
- the validation performed and its result
- any unresolved links, with a direct question where user input is needed

If all local links resolve and there are no ambiguities, say so. Do not ask the user to confirm links that are already established by repository evidence.

## Using this prompt in Visual Studio Code

Attach this prompt and the Markdown policy documents to audit, then ask:

> Follow the attached prompt to audit and tidy links in the attached documents.

Alternatively, identify the policy documents in the request. Do not require the user to paste their contents into the chat. If neither attachments nor document paths identify the audit scope, ask the user to provide them. Ignore mdlint.json as there is no local tooling to run linting, this will be handled manually.
