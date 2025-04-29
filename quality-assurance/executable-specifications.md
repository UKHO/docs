# Executable Specifications 

## Background

An executable specification is an expression of business requirements, usually in a language that resembles prose, which can be executed as automated tests.  [Reqnroll](https://reqnroll.net/), which is a fork of Specflow is an example.  This uses a 'Given - When - Then' syntax, which is the most common form of executable specification.

## When to use executable specifications

The downside of executable specifications is that they add an extra technology plus a layer of mapping code to a project.  In theory this is offset by the advantage that tests can be created in collaboration with business users as part of a [BDD](./bdd.md) process.  It is therefore our policy that an executable specification like Specflow should NOT be used except as part of a BDD process.  If a BDD process has not been used, it usually better to express the intent of tests by naming them well and making them easy to read.

## Technology

Specflow is no longer a supported technology.  We should take the opportunity to remove it from our code where appropriate, either by replacing the specification layer entirely, or migrating it to [Reqnroll](https://reqnroll.net/).
