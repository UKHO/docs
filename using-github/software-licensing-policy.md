# Software Licensing Policy

## Overview

When developing software for government use, it is important to choose appropriate open-source licences that align with the [GOV.UK Service Standard point 12](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open), the [MOD Defence Service Manual (Section 12)](https://www.digital.mod.uk/policy-rules-standards-and-guidance/service-manual/meet-the-standard), and the UK Government's Open Source Licensing framework.

**All code produced by civil servants or contractors working on behalf of the Crown is automatically covered by [Crown Copyright](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/).** Regardless of repository visibility you should select and publish a licence so that the terms of use are clear, and so that GitHub can correctly identify the licence.

You must include a `LICENSE` file in the repository root. It is also recommended to add a licence section to the `README.md`.

### When a licence may not be required

There are limited circumstances where publishing a licence is not appropriate or required:

- **Never-public repositories** — internal-only tooling that is explicitly scoped as never publicly accessible (though teams should challenge this and default to openness)
- **Classified or restricted repositories** — repositories that carry security classifications and are not accessible outside the department; apply classification markings instead
- **Third-party owned code** — where UKHO does not hold the IP and therefore cannot grant a licence to others

If you believe a licence is not required for your repository, you must discuss this with your Security Champion or Technical Lead so it can be assessed on a case-by-case basis. Any exception must be documented and approved. Do not simply omit a licence without review.

## Recommended Open Source Licenses

The UK Government recommends using well-established, OSI-approved licenses for software projects:

### **MIT License**

- **Best for**: Most government software projects
- **Permissions**: Commercial use, modification, distribution, private use
- **Conditions**: Include license and copyright notice
- **Limitations**: No liability or warranty

### **Open Government Licence v3.0**

- **Best for**: Government projects containing data, documentation, or software that should align with UK Government policy
- **Permissions**: Commercial use, modification, distribution, private use
- **Conditions**: Include license and copyright notice, acknowledge the source
- **Limitations**: Does not cover personal data, third party rights, or Crown/departmental crests

## License Selection Guidelines

### Choose MIT License when

- Creating simple libraries or utilities
- Maximum adoption and reuse is desired
- Patent issues are not a concern
- You want minimal licensing overhead

### Choose Open Government Licence v3.0 when

- Your project contains data or documentation
- You want to align with UK Government's default licensing approach
- Creating mixed content (software, data, and documentation)
- Building government services or platforms

## Implementation Steps

1. **Choose your license** based on project requirements
2. **Add LICENSE file** to your repository root
3. **Include copyright headers** in source files
4. **Update README.md** with license information
5. **Ensure compliance** with any dependencies' licenses

## License File Template

### For MIT License

Add a `LICENSE` file to your repository root:

```
MIT License

Copyright (c) [year] Crown Copyright (UK Hydrographic Office)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### For Open Government Licence v3.0

```
Open Government Licence v3.0

You are encouraged to use and re-use the Information that is available under this licence freely and flexibly, with only a few conditions.

Using Information under this licence

Use of copyright and database right material expressly made available under this licence (the 'Information') indicates your acceptance of the terms and conditions below.

The Licensor grants you a worldwide, royalty-free, perpetual, non-exclusive licence to use the Information subject to the conditions below.

This licence does not affect your freedom under fair dealing or fair use or any other copyright or database right exceptions and limitations.

You are free to:
- copy, publish, distribute and transmit the Information;
- adapt the Information;
- exploit the Information commercially and non-commercially for example, by combining it with other Information, or by including it in your own product or application.

You must (where you do any of the above):
- acknowledge the source of the Information in your product or application by including or linking to any attribution statement specified by the Information Provider(s) and, where possible, provide a link to this licence;

If the Information Provider does not provide a specific attribution statement, you must use the following:
Contains public sector information licensed under the Open Government Licence v3.0.

© Crown Copyright (UK Hydrographic Office)
```

## README License Section

### For MIT License

```markdown
## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

© Crown Copyright (UK Hydrographic Office)
```

### For Open Government Licence v3.0

```markdown
## License

This project is licensed under the [Open Government Licence v3.0](LICENSE) - see the LICENSE file for details.

Contains public sector information licensed under the Open Government Licence v3.0.

© Crown Copyright (UK Hydrographic Office)
```

## Important Considerations

- **Crown Copyright**: All government-developed software is subject to Crown Copyright
- **Third-party dependencies**: Ensure all dependencies have compatible licences; see the [Open Source Use Policy](/software-engineering-policies/OpenSourceUse/OpenSourceUsePolicy.md) for permitted licence types
- **Commercial software boundaries**: If your repository integrates with or is built on commercial software, verify the vendor licence does not restrict you from openly publishing your own code. The vendor's proprietary licence applies to their code — **not** to your code that calls or wraps it, unless the contract states otherwise. Engage the Legal Adviser if uncertain.
- **Vendor-supplied code**: Code written by a contractor or third-party supplier as part of a delivery contract should be covered by the contract terms. Ensure contracts require IP assignment to the Crown and permit open publication under an OSI licence.
- **Contributor agreements**: Consider requiring Contributor Licence Agreements (CLAs) for significant external contributions to ensure IP is clearly assigned
- **Export controls**: Be aware of any export control restrictions on your software
- **Security review**: Ensure security-sensitive code is reviewed before public release; see the [Coding in the Open guidance](./coding-in-the-open.md)
- **Mixed content**: If your repository contains both software and data/documentation, consider OGL v3.0 for consistency

## Resources

- [GOV.UK Service Standard – Point 12: Make new source code open](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open)
- [MOD Defence Service Manual – Meet the Standard (Section 12)](https://www.digital.mod.uk/policy-rules-standards-and-guidance/service-manual/meet-the-standard)
- [GDS – Making source code open and reusable](https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable)
- [GDS – When code should be open or closed](https://www.gov.uk/government/publications/open-source-guidance/when-code-should-be-open-or-closed)
- [UK Government Open Source Policy](https://www.gov.uk/government/publications/open-source-procurement-toolkit)
- [Choose an open source license](https://choosealicense.com/)
- [OSI Approved Licenses](https://opensource.org/licenses)
- [Open Government Licence v3.0](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
- [Crown Copyright framework](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/)

---

*This policy aligns with the UK Government's licensing framework and the MOD/GOV.UK Service Standard. Review annually or when government guidance changes.*
