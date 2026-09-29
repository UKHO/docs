# FOSS Evaluation Criteria Reference

The [Use of Free Open Source Software Policy](open-source-use.md) requires the responsible person to validate FOSS against these criteria. The criteria provide open-source-specific considerations and indicators for that evaluation.

## 1. Project control

### Is the project controlled by an open foundation or a commercial entity?

Control by a foundation makes it less likely that the asset will be exploited for commercial gain.

- Positive indicator: The project is controlled by a foundation. For example, the Apache HTTP Server is governed by the [Apache Software Foundation](https://apache.org/foundation/), a charitable foundation with open governance and no proprietary control.
- Negative indicator: The project is controlled by a single commercial entity. For example, [NServiceBus](https://particular.net/sourcecode) is issued under the IPL 1.5 licence but is entirely controlled by Particular Software.

### Or, is the project under diverse control?

If several commercial organisations are in control, it is less likely that any one of them will exploit the project for commercial gain. Multiple vendors sometimes form an organisation to govern an open source effort, making direct vendor control less likely.

- Positive indicator: The project is governed by an organisation with representatives from multiple vendors. For example, the [Cloud Foundry board of directors](https://www.cloudfoundry.org/board-of-directors/) includes representatives of VMware, Dell, IBM and Cisco.
- Negative indicator: A single vendor or organisation is in control, as in the Particular Software example above.

## 2. Open-core offering

### Is the project part of an [open-core](https://en.wikipedia.org/wiki/Open_core) offering?

Owners of an open-core project may be unlikely to accept modifications that undermine the value of their commercial offering.

- Positive indicator: The free offering is fully functional. A company governing the project may instead earn revenue from support, training and consulting, as with [Hortonworks](https://hortonworks.com/).
- Negative indicator: The FOSS core is only adequate for basic use, while proprietary add-ons provide more advanced functionality, as with [Cloudera](https://www.cloudera.com/).

## 3. Governance model

### Does the project have a clear governance model?

A comprehensive, published governance model clarifies how the project is led and how it can be influenced. It can also indicate that the project has reached a certain level of maturity.

- Positive indicator: A clear governance model is published, such as [Ubuntu's community governance](https://community.ubuntu.com/community-structure/governance/).
- Negative indicator: There is no explicit governance model, so it is unclear who directs the project or how UKHO could influence it, for example by adding needed features.

## 4. Contribution process

### Is there a defined contribution process?

UKHO might need to add features or fix bugs and contribute those changes back to the project to avoid [forking](https://en.wikipedia.org/wiki/Fork_(software_development)) it.

- Positive indicator: A published process invites direct contributions from external parties, and there is a track record of accepting contributions. [Ubuntu](https://community.ubuntu.com/community-structure/governance/) is an example.
- Negative indicator: No process is published, or the process does not invite contributions from external parties.

## 5. Maintenance

### Is the project actively maintained?

All software has bugs and security flaws. Changes to the codebase show that these issues are being addressed.

- Positive indicator: There is a stream of commits, a recent track record of minor releases and a roadmap for future releases.
- Negative indicator: The codebase appears stagnant, with no plans or progress towards new releases.

## 6. Maturity and use

### Is the project mature and well used?

Software used over time by large numbers of users is more likely to be stable.

- Positive indicator: The software has been used for a long time and has a good reputation, such as the Apache HTTP Server.
- Negative indicator: The software is new, with limited evidence of serious use.

## 7. Patent protection

### Does the licence contain a patent peace clause?

A patent peace clause protects a FOSS licensee against a patent claim from a contributor.

- Positive indicator: The licence contains a patent peace clause, such as [CDDL-1.0](https://en.wikipedia.org/wiki/Common_Development_and_Distribution_License).
- Negative indicator: The licence does not contain a patent peace clause, such as BSD licences.

These criteria cover open-source-specific concerns only. Generic criteria, such as technical fit, security and performance, are not included.
