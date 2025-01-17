# Python Coding Standards

## Purpose and Scope

These guidelines are written to represent best practices but do not supersede expected personal engineering high standards.  

We utilise coding standards to:

* Create a consistent look and feel.
* Enabling readers to understand more quickly by making * assumptions based on experience.
* Facilitate changes and maintenance.
* Demonstrate best practice.
* Reduce ambiguities in the ISO auditing process.

## Roles and Responsibilities

Anyone who writes code is responsible for following these guidelines. Code reviews are subject to the following criteria:

* Code reviews shall take place as part of the Software Development Process (SDP) for safety-critical or Defence work.
* Code reviews should take place as part of the Software Development Process (SDP) for all other work.

It will be the responsibility of the coder(s) and reviewer(s) to document and demonstrate adherence to the SDP to any internal or external auditors.

## Python Coding Conventions

We follow Python's own in-built coding standards, known as PEP 8. The full PEP 8 Style Guide can be found here: <https://www.python.org/dev/peps/pep-0008/>

There are several Integrated Development Environments (IDEs) which actively monitor code for PEP 8 violations. At the time of writing, JetBrains PyCharm is the recommended IDE for writing Python code. If this IDE cannot be used for any reason, then a command-line tool called Flake8 may be used to check for PEP 8 violations.

## Secure Coding Conventions

Python is an interpreted language, and as such, security flaws may be harder to spot. It is recommended to use a static analysis tool such as SonarQube, or a Python-specific tool such as Bandit (<https://github.com/openstack/bandit>)

OWASP publishes lots of significant guidance around application design and architecture. <https://www.owasp.org>

A taxonomy of security errors can be found here: <https://vulncat.fortify.com/en>

## Type Annotations

Since Python version 3.5, there has been in-built support for type annotations.  Simply put, these provide a mechanism by which to specify the types which a method should be taking in its parameter list, or returning.

The use of type annotations makes code somewhat more verbose, but arguably more secure and easier to read, review, and maintain.  Furthermore, they provide more capable IDEs with a basic form of static type checking (i.e. the ability to point out when an incorrect type is being passed to or returned from a method) prior to runtime.

​The official Python standard for Type Annotations can be found here: <https://www.python.org/dev/peps/pep-0484/​>

## Secure Coding Practices

1. Validate input. Validate all input from untrusted data sources.  Be suspicious of most external data sources, including command line arguments, network interfaces, environmental variables and user controlled files.
1. Warnings as errors.  All IDE warnings should be treated as errors.
1. Keep it simple. Complex designs lead to an increased likelihood of errors in implementation and configuration.
1. Default deny. Base access decisions on permission rather than exclusion.
1. Adhere to the principle of least privilege. A process should execute with the least set of privileges required to complete the job.
1. Sanitize data sent to other systems. Sanitize all data passed to subsystems. The subsystem may not be aware of the context in which a call to it is being made, therefore as the calling process understands the context, it is responsible for sanitizing the data.
1. Define security requirements. Identify and document security requirements early in the development life cycle and ensure that they are documented and evaluated for compliance.
1. Do not use the eval() or exec() methods. Both of these built-in methods allow dynamic execution of Python code. Their use leaves your code open to numerous security vulnerabilities, and as such, they should be prohibited in code used in safety-critical or Defence systems.

## Python versions and Legacy Code

Python 2 reached end-of-life on January 1st 2020, and will not be maintained past that point. As a result, Python 3 **shall** be used wherever possible.

Any Python 2 code will have to be re-written before 2020 to avoid technical debt.  Exceptions include where a system only supports Python 2 (e.g. ESRI ArcGIS), but these must be upgraded to Python 3 as soon as possible.

## Unit Testing Requirements and Guidelines

Since Python is an interpreted language, there are no compile-time warnings. This means that Python code is more susceptible to bugs and vulnerabilities than many compiled languages.  For this reason, unit test coverage must be as close to 100% as possible, with a minimum of 95% coverage.

It is recommended to use libraries such as Hypothesis to aide in testing validation cases.

It is recommended to use the Python Coverage library to indicate the completeness of test code coverage.

Note that if using the Python Coverage tool, the reported figure will indicate the percentage of lines of code executed, and not necessarily the percentage of lines of code tested.  It is the responsibility of the coder(s) to ensure that sufficient testing has taken place.

With this in mind, it is recommended that the unit tests cover the following areas in order to attain sufficiently high code coverage:

* Has each unit been tested with good inputs?
* Has each unit been tested with bad inputs?
* Have each of the branching conditions in the unit been tested?
* Have any sub-calls been tested?
* Have the parameters passed to the sub-calls been tested?
* Has the return from the unit been tested?
* Have any error / exception conditions been tested?
* Note: There is a Python library called Hypothesis which provides a mechanism for data-driven testing, and will generate many sets of test data for each of your unit tests. See <https://hypothesis.readthedocs.io/en/latest/>

## Productionisation Guidelines

Productionisation of Python code is subjective and depends upon the uses to which the software will be put.  Broadly speaking, it involves (but is not limited to) the following:

* Ensure that the code follows coding guidelines and standards.  For Python, this is PEP 8.
* Ensure that the code has unit tests which provide 100% code coverage.
* Ensure that the code has been peer-reviewed for non-testable aspects such as maintainability or extensibility.
* Ensure that the code has been reviewed for security vulnerabilities.
* Ensure that the deployment mechanism is reliable, repeatable, and consistent.
* Ensure that appropriate user and technical documentation has been written.
