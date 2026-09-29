# Use of Free Open Source Software Policy

This policy defines the requirements and governance for using free open source software (FOSS), including software, algorithms and data, in UKHO solutions.

## Scope and definition

For this policy, FOSS is as defined by the [Open Source Initiative](https://opensource.org/osd). It is governed by an open source licence, is free to incorporate into a solution and redistribute, and is available to use and modify as source code.

## Requirements

### Permitted licences

Lead Engineers are accountable for checking the licence terms of all open source assets incorporated into UKHO solutions. The licence must be on the UKHO allowlist of permitted licences.

Any exception to the permitted-licence requirement must be agreed by the Software Engineering Team Manager. Changes to the allowlist must be agreed by the Software Engineering Team Manager and the UKHO Legal Advisor.

Third-party components used in UKHO software must be released under a licence on the [approved licence list](open-source-use-reference.md#permitted-licences). Changes to third-party components must be reviewed by the team's Lead Engineer.

### Reporting and automation

It must be possible to report on the licences of included packages at build time for UKHO systems. An automated process must restrict builds to packages with approved licences.

### Security vulnerabilities

All referenced packages must be cross-referenced against known vulnerabilities, as set out in the [Secure Development Policy](secure-development.md).

### FOSS evaluation

The responsible person must validate FOSS against the [evaluation criteria](open-source-use-reference.md).

For a decision that must be presented to the ARB, the Solution Architect is the responsible person. Any exception in this case must be signed off by the ARB.

For other, smaller decisions, the relevant Lead Engineer is the responsible person. Any exception in this case must be agreed by the Software Engineering Team Manager.

## Related documents

- [Checking a licence and proposing an addition](open-source-use-how-to.md)
- [Why the FOSS policy addresses specific risks](open-source-use-explanation.md)
- [Permitted licences and FOSS evaluation criteria](open-source-use-reference.md)
- [Secure Development Policy](secure-development.md)
