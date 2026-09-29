# Why the FOSS Policy Addresses Specific Risks

UKHO makes extensive use of open source assets to meet its goals. Incorporating them into business solutions provides a business benefit, but also introduces risks. This document explains the risks described by the [Use of Free Open Source Software Policy](open-source-use.md) and the context for its controls.

## Licensing and intellectual property

Some open source licences, particularly those with [copyleft](https://en.wikipedia.org/wiki/Copyleft) provisions, may require linked code or solutions built on incorporated code to be distributed under similar terms. This can affect UKHO's ability to exploit an asset or retain control of valuable intellectual property rights (IPR).

UKHO prefers to use third-party components rather than rewrite them where practical, while taking their licence terms into account. The source policy gives GPL-3 as an example of a licence that can require linked code to be disclosed under a GPL 3.0-compatible licence. The [permitted licence list](open-source-use-reference.md#permitted-licences) supports this control by identifying licences approved for use.

Open source assets may also contain code, algorithms or data that include third-party IPR not licensed for use in that code. This can require stopping use of the software, obtaining a licence, or paying damages for past use.

## Unexpected costs and restrictions

An asset may be presented as open source while practical use depends on proprietary, paid software or commercial support from a single vendor. This is a risk associated with [open-core software](https://en.wikipedia.org/wiki/Open_core).

An asset may also appear open while its owner does not allow the community to add features to the core, often where a paid module provides those features. This is sometimes called [open washing](https://www.quora.com/What-is-openwashing). These issues are commonly associated with software developed and supported by a single commercial company rather than adopted by a wider community.

## Maintenance and security

Not all open source assets are adopted and maintained by an active community, and not all have commercial companies that provide support. Assets can also present cyber-security risks in their development, packaging, distribution or maintenance.

## How the policy responds

The policy addresses these risks through its permitted-licence, build reporting, automated restriction, vulnerability-checking and FOSS evaluation requirements. The [evaluation criteria](open-source-use-reference.md) include project control, open-core offerings, governance, contribution processes, maintenance, maturity and patent protection. The policy remains the authoritative source for requirements and exceptions.
