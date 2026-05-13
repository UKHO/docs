# Contributing to UKHO Docs

Firstly, thank you for taking the time to contribute!

These are only guidelines for contributing to this repo, not hard rules. They may not fit all scenarios encountered, so please use your best judgment and feel free to propose a change to this document via a pull request if you think it can be improved.

## Repository structure

This repository is organised by reader intent first, then by subject area.

- `communities/` contains audience and practice entry points.
- `policies/` contains mandatory policy statements.
- `standards/` contains implementation expectations and standards.
- `guidance/` contains how-to material, playbooks, checklists, and examples.
- `reference/` contains supporting roles, templates, radar material, and similar background information.

Before adding a new document, decide what kind of document it is and place it in the correct destination folder rather than the nearest legacy location.

## Document types

- **Policy**: what must be done.
- **Standard**: how mandatory requirements should be implemented.
- **Guidance**: recommended approaches and explanation.
- **Checklist**: repeatable review or assurance steps.
- **Reference**: supporting information, templates, examples, or background material.

## Naming rules

- folders use `kebab-case`
- markdown files use `kebab-case.md`
- readme files use `README.md`

Avoid spaces, underscores, and mixed casing in new file and folder names.

## Navigation updates

When you add, move, or remove documentation:

- update the relevant local `README.md` file
- update the root `README.md` if the change affects top-level navigation or audience journeys
- add cross-links to related areas where they materially improve discoverability
- prefer moving or linking content instead of duplicating it

## Data-related content

If the material is primarily about data lifecycle, retention, test data, or related assurance concerns:

- start from `communities/data-engineering/`
- place mandatory requirements in `policies/data/`
- place practical advice in the appropriate area under `guidance/`

## Questions

If you have any questions, please open an issue.

## Improvements

If you have any improvements (things being poorly worded, misspelt, unclear, tweaks) please make a pull request. During the pull request review we will check to ensure your improvements have not changed the meaning of the guidance. Ensure prior to making any changes to the repository that you run the following commands so that our linting checks are performed on your changes.

```sh
npm run install
npm run prepare
```

## Changes

If you would like to make changes (disagreements about the current guidance, substantial adding of new guidance) the best approach is to open an issue with the details/ideas so we can discuss the changes before a pull request is made. If no issue is made before a pull request we will still consider it, however there is chance the your effort is wasted if we don't accept your pull request :(

## Contact

Nev Brown @nevillejrbrown
Greg Zealley @gregzealley
