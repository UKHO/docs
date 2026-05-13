# Software Engineering at the UKHO

This repository contains documentation about digital delivery teams, their behaviours and processes, and our engineers at the UKHO.

We have eight software engineering teams that develop and support software using .NET, Java, Python, and other languages. Our [technology radar](./reference/technology-radar/README.md) contains more detail on the tools and approaches we use.

We’re proud that we’ve created this group by recruiting people who share a commitment to professional development and watched them grow with us. Right now, we have people pursuing certification in Azure, AWS, Kubernetes, and Security; we have others on management training courses; we even have people on Masters degree programmes.

## Start here

Use this README as the main content map for the repository.

- If you want community-led entry points, start in [communities](./communities/README.md).
- If you need mandatory requirements, go to [policies](./policies/README.md).
- If you need implementation expectations, go to [standards](./standards/README.md).
- If you need practical advice, playbooks, or checklists, go to [guidance](./guidance/README.md).
- If you need supporting roles, templates, or radar material, go to [reference](./reference/README.md).

## Repository structure overview

```text
/
├── README.md
├── communities/
├── policies/
├── standards/
├── guidance/
└── reference/
```

### Communities

- [Quality assurance](./communities/quality-assurance/README.md)
- [Security](./communities/security/README.md)
- [Software engineering](./communities/software-engineering/README.md)
- [Data engineering](./communities/data-engineering/README.md)

### Policies

- [Engineering policies](./policies/engineering/README.md)
- [Security policies](./policies/security/README.md)
- [Testing policies](./policies/testing/README.md)
- [Data policies](./policies/data/README.md)
- [Platform policies](./policies/platform/README.md)

### Standards

- [Coding standards](./standards/coding/README.md)
- [Testing standards](./standards/testing/README.md)
- [Source control standards](./standards/source-control/README.md)
- [Observability standards](./standards/observability/README.md)
- [Documentation standards](./standards/documentation/README.md)

### Guidance

- [How-to guidance](./guidance/how-to/README.md)
- [Playbooks](./guidance/playbooks/README.md)
- [Checklists](./guidance/checklists/README.md)
- [Examples](./guidance/examples/README.md)

### Reference

- [Roles](./reference/roles/README.md)
- [Technology radar](./reference/technology-radar/README.md)
- [Templates and supporting assets](./reference/templates/README.md)

## Audience journeys

### New starter in engineering

1. Read [Software engineering](./communities/software-engineering/README.md).
2. Review [Engineering policies](./policies/engineering/README.md).
3. Review [Coding standards](./standards/coding/README.md).

### Developer implementing a feature

1. Start with [Engineering policies](./policies/engineering/README.md).
2. Review [Secure development](./policies/security/secure-development/SecureDevelopmentPolicy.md).
3. Use [Coding standards](./standards/coding/README.md) and [Source control standards](./standards/source-control/README.md).
4. Use [Cloud development guidance](./guidance/how-to/cloud-development/README.md) and [GitHub guidance](./guidance/how-to/github/README.md) where relevant.

### Tester planning test coverage

1. Start with [Quality assurance](./communities/quality-assurance/README.md).
2. Review [Testing policies](./policies/testing/README.md).
3. Use [Testing standards](./standards/testing/README.md).

### Test lead reviewing assurance

1. Start with [Quality assurance](./communities/quality-assurance/README.md).
2. Review [Test strategy](./communities/quality-assurance/test-strategy.md).
3. Review [Defect management](./policies/testing/defect-management/DefectManagementPolicy.md).

### Security champion reviewing delivery risks

1. Start with [Security](./communities/security/README.md).
2. Review [Secure development](./policies/security/secure-development/SecureDevelopmentPolicy.md).
3. Review [Managing security concerns](./communities/security/managing-security-concerns.md).

### Delivery manager checking team practices

1. Start with [Software engineering](./communities/software-engineering/README.md).
2. Review [Platform policies](./policies/platform/README.md).
3. Review [Reference roles](./reference/roles/README.md).

### Data practitioner handling data-related concerns

1. Start with [Data engineering](./communities/data-engineering/README.md).
2. Review [Data policies](./policies/data/README.md).
3. Use [Cloud development guidance](./guidance/how-to/cloud-development/README.md), especially [Data use in the cloud](./guidance/how-to/cloud-development/DataUse.md).

### Contributor proposing a policy update

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md).
2. Use the area index for the document type you are changing.
3. Update the relevant local `README.md` files when you add or move material.

## How we work

Everything we do is team based. We take Agile seriously; your delivery team will be small but will have the people it needs to get things done - developers, testers, a product owner, and a delivery manager - as well as access to infrastructure specialists, UX experts, and analysts.

Quality is paramount. Our [engineering policies](./policies/engineering/README.md) and [quality assurance community guidance](./communities/quality-assurance/README.md) support our teams to do good work. Most code is done [in pairs](./policies/engineering/pair-programming/PairProgrammingPolicy.md) or larger groups to ensure quality and to spread knowledge. Everyone [reviews code](./policies/engineering/code-review/CodeReviewPolicy.md) and everyone welcomes feedback.

We strive to automate as much as possible: [testing](./communities/quality-assurance/test-strategy.md), builds, and deployments use the latest automation tools available.

We actively look to pay down [technical debt](./policies/engineering/technical-debt/TechnicalDebtMonitoring.md).

## Our community

We encourage the formation of specialist communities to support our interests and our work.

The community of Lead Developers provides technical leadership, recommending tools, technologies, and techniques for adoption. This group contains people with various specialisms and levels of experience who all support each other in their roles.

Our [Security Champion](./communities/security/security-champion-responsibilities.md) community is made up of people interested in [application security](./policies/security/secure-development/SecureDevelopmentPolicy.md), and coaches teams to create safer software, as well as increasing their own skills and qualifications.

We also have many other communities of interest covering such things as accessibility, testing, UX, Azure, AWS, and .NET.

## Balance

We offer a great work / life balance - start and end times are fluid, centred around a 10am – 2pm team time, where the team is focussed on building things (no meetings). We’re all set up for working from home and encourage people to make use of this if they prefer. We are committed to providing part-time options and offer reasonable accommodations to help people meet their needs.
