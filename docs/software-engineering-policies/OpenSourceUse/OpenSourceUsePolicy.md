# Use of Free Open Source Software

## Introduction

UKHO is makes extensive use of open source assets (software, algorithms and data) to meet its goals. Incorporating them into our business solutions provides a business benefit but also introduces risks.  This document defines the policy and governance designed to mitigate these.

### Definition of Free Open Source Software

For the purposes of this policy, free open source software (FOSS) is [as defined by the Open Source Initiative](https://opensource.org/osd).  In particular, it:

- Governed by an Open Source License;
- Free to incorporate in a solution and to redistribute;
- Is available to use and modify as source code

### Risks addressed by this policy

| Risk | Description | Mitigation |
| ---- | ----------- | ---------- |
|**The licensing terms of OS asset cause us to inadvertently lose control of valuable IPR if we use it, or prevent us from using an OS asset that performs a function we require.**| Certain OS licenses, especially those that include so-called "[copyleft](https://en.wikipedia.org/wiki/Copyleft)" provisions may require that linked code or solutions built on incorporated code are also distributed under similar terms and conditions. Copyleft licenses may prevent us exploiting specific OS assets that would otherwise be our choice to meet a requirement.|See Permitted licenses, below |
|**Using OS assets results in unexpected costs to either exploit or support that asset.**|This is the issues that arise from so-called "open wash" (https://www.quora.com/What-is-openwashing) and "open core" (https://en.wikipedia.org/wiki/Open_core) software. A typical "open core" problem is where the main asset is released as OS, but to really exploit it requires the use of proprietary, paid-for SW, or commercial support from a single vendor. A typical "open wash" problem is where an asset purports to be OS but the owner of the OS asset refuses to allow certain features to be added by the community to the core. This is typically where a paid for module exists that meets the same requirement. The two problems are typically associated with each other – and are both common where the OS software is developed and supported by a single commercial company rather than being adopted by a wider community. | Evaluation criteria 1. and 2. |
|**An OS asset that we rely on becomes unmaintained.**| Not all OS assets are adopted and maintained by an active community. Similarly, not every OS asset has commercial companies that provide support.| Evaluation criteria 5,6 |
|**We expose ourselves to security issues by using OS assets.** | There may be cyber-security risk associated with OS assets, either in terms of its development, packaging and distribution or maintenance. | See Security vulnerabilities below.|
**We utilise OS assets that infringe someone's IPR OS assets may contain code, algorithms or data that includes 3rd party IPR that hasn't been licensed for use in the code concerned.** | The risk is that we need to stop using the software concerned and/or pay for a license and/or damages for past use. | Evaluation criteria 7 below |

## General guidance

### Permitted licenses

Lead Engineers are accountable for checking the license terms of all open source assets incorporated in our solutions.

The license **must** be on the UKHO allowlist of permitted licenses.

### Exceptions and changes

Any exceptions must be agreed by the Software Engineering Team Manager.

Changes to the allowlist must be agreed by the Software Engineering Team Manager and the UKHO Legal Advisor.

### Reporting and automation

It must be possible to report on the licenses of included packages at build time for UKHO systems.  

An automated process must restrict builds to only use packages with white-listed licenses.

### Security vulnerabilities

All referenced packages must be cross-referenced against known vulnerabilities, as per the Secure Development Policy.

### Other considerations

The table below shows further criteria that should be applied when considering whether to use a piece of FOSS.

The responsible person must validate the FOSS against these criteria.  

If the decision is one which needs to be presented to the ARB, the responsible person is the Solution Architect.  In this case, any exceptions must be signed off by ARB.

For other (smaller) decisions, the responsible person is the relevant Lead Engineer.  In this case, any exceptions must be agreed with the Software Engineering Team Manager.

### FOSS evaluation criteria

| | Reason | Positive indicators | Negative indicators |
|-| ------ | ------------------- | ------------------- |
| **1. Is it controlled by an open foundation, or by a commercial entity** | Control by a foundation means it is less likely to be exploited for commercial gain. |Controlled by a foundation.  E.g. The Apache HTTP server is governed by the [Apache Software Foundation (ASF)](https://apache.org/foundation/).  The ASF is a charitable foundation with a clear and open governance, free from proprietary control.| Controlled by a single commercial entity.  E.g. NServiceBus [is open source](https://particular.net/sourcecode), issued under the IPL1.5 license.  However, it is entirely controlled by one company, Particular Software. |
| **OR Is it under diverse control** | If several commercial organisations are in control, it is less likely that any one of them will exploit it for commercial gain.| Sometimes, multiple vendors form an organisation to govern an open source effort.  This diversity makes it less likely that the FOSS will be directly by the vendor. Cloud Foundry is an open source cloud application platform, whose [board of directors](https://www.cloudfoundry.org/board-of-directors/) includes representatives of VMWare, Dell, IBM & Cisco. | Sometimes a single vendor or organisation is in control (see Particular Software example above)|
| **2. Is it part of an '[open-core](https://en.wikipedia.org/wiki/Open_core)' offering? **| The owners of an open core project will be unlikely to accept modifications that would undermine the value of their commercial offering. | The FOSS has a free offering which is fully functional. If the FOSS is governed by a single company, this company might make its money instead from support, training and consulting (e.g. [Hortonworks](https://hortonworks.com/))| The software consists of a FOSS core which is just about adequate for basic use, with proprietary add-ons providing more advanced functionality (e.g. [Cloudera](https://www.cloudera.com/)).| 
| **3. Does it have a clear governance model?** | A comprehensive, published governance model will provide us clarity on how it is led and how it can be influenced.  It can also indicate that the project has reached a certain stage of maturity. | A clear governance model exists, e.g. that of [Ubuntu](https://community.ubuntu.com/community-structure/governance/). | No explicit governance model exists.  It isn't clear who owns the direction of the FOSS and how the UKHO could change it, e.g. by adding features that we need.|
| **4. Is there a defined contribution process?** | UKHO might need to need to add features or fix bugs and feed these back into the project, so that we can avoid [forking](https://en.wikipedia.org/wiki/Fork_(software_development)) it. | A clear process is published, which invites direct contributions from external parties.  E.g. [Ubuntu](https://community.ubuntu.com/community-structure/governance/). There should also be a track record of accepting contributions.| No process is published, or the process does not invite contribution from external parties.|
| **5. Is it actively maintained?** | All software has bugs and security flaws.  Change to the codebase shows that these issues are being dealt with. | There is a stream of commits to the codebase.  There is a recent track record of minor releases, with a roadmap for future releases. | Codebase seems stagnant, with no plans or progress being made towards new releases. |
| **6. Is it mature and well-used?** | Software that has been in use over time by large numbers of users will have be more stable| Software has been used for a long time and has a good reputation, e.g. Apache HTTP server | Software is new, with limited evidence that it is being seriously used. |
| **7. Does the license contain a patent peace clause?** | A patent peace clause in a license protects the licensee of FOSS against a patent claim from a contributor. |The license contains a patent peace clause, e.g. [CDDL-1.0](https://en.wikipedia.org/wiki/Common_Development_and_Distribution_License) | The license does not contain a patent peace clause, e.g. BSD licenses |

> Note that this table contains only open-source-specific concerns.  Generic criteria, such as technical fit, security, performance etc. are not included. 


