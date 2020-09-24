# System Documentation Policy

Each system **must** have system documentation to support future maintenance of that system.  

It should contain the following types of information:

* High-level architecture
* Build process
* Deployment and configuration information
* Any other useful information to provide a 'jump start into the code' for a delivery team.

The audience for this documentation is the delivery team. The Agile principle of "Working software over comprehensive documentation" should be followed, meaning documentation is required but should be "just enough" to capture the elements above.

The documentation **must** be stored as part of the codebase of the system it describes.

Documentation **must** be treated the same as code and be subject to peer review, as per the [code review policy](../CodeReview/CodeReviewPolicy.md).

It is recommended that [CommonMark](https://commonmark.org/) (a standard, unambiguous syntax specification for Markdown) is used.

Each team's definition of done must include a statement on documentation.

## Other documentation

DS&T does not mandate any code commenting standards. Teams may specify their own standards according to their needs, remembering:

* The guidance is that code should be comprehensible without comments, and that code comments are a maintenance overhead and can indicate poor code.
* Teams should consider additional user-focused documentation (e.g. Javadoc or ///) if a package is to be consumed without the source code.

## Points of Contact

* Policy owner  - ​Neville Brown
* Policy editor - ​Greg Zealley
