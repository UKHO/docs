# Software Licensing Guidance for Government Projects

## Overview

When developing software for government use, it's important to choose appropriate open source licenses that align with the UK Government's Open Source Policy and the Open Government License framework. No matter the visibility of the repository you should select a license to support the project you are working on to protect the project in case of visibility change.

It is important that we include a LICENSE file with the relevant contents within the repository so that GitHub can correctly pick up the license in which we are publishing our code with. It is also advised to add a section at the bottom of the README.md for the relevant license type so that it is visible for anybody viewing the repository. 

### Sidenote

There will be instances where adding a license to the repo may not be applicable/required due to a multitude of reasons. It is important that if you feel that this applies to your repository that you reach out to your Security Champion or Technical Lead so that this can be assessed on a case by case basis. Exceptions will be made where deemed necessary, ensuring there are other methods of protection are in place. 

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

- **Crown Copyright**: Government-developed software is subject to Crown Copyright
- **Third-party dependencies**: Ensure all dependencies have compatible licenses
- **Contributor agreements**: Consider requiring contributor license agreements for external contributions
- **Export controls**: Be aware of any export control restrictions on your software
- **Security review**: Ensure security-sensitive code is reviewed before public release
- **Mixed content**: If your repository contains both software and data/documentation, consider using OGL v3.0 for consistency

## Resources

- [UK Government Open Source Policy](https://www.gov.uk/government/publications/open-source-procurement-toolkit)
- [Choose an open source license](https://choosealicense.com/)
- [OSI Approved Licenses](https://opensource.org/licenses)
- [Open Government Licence v3.0](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)

---

*This guidance is based on the UK Government's licensing framework and current best practices for open source software development.*
