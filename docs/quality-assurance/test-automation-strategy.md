# Test Automation Strategy

## Introduction

This strategy document details the UKHO approach to test automation. As an organisation we recognise the importance of embracing test automation and utilising it to enable faster development and release of our software products.

This strategy acts as a baseline for UKHO delivery teams, with each team empowered to determine how they will adhere to this strategy.

## Our Test Automation Model

To summarise our approach to test automation we created our take on the standard Test Pyramid Model. This promotes:

* The areas of testing we aim to automate
* The correct level in the pyramid we should add testing

![Test Automation Vision Diagram](test-automation-vision.png)

## Principles of Test Automation

We suggest that all teams using automation should adhere to these principles:

* New functionality must be covered by passing automated tests (unless there is a legitimate reason not to)
* Make use of test design patterns and principles
* Add tests at the correct level of the test pyramid – lower is better
* All tests should be independent of each other

## Test Automation Standards

The following standards act as a guide for the creation of automated tests:

[Test Standards](test-code-standards.md)

## Ways of Working

Test automation has provided the opportunity to move away from the traditional developer – tester divide and move towards an integrated way of working. The following principles are promoted:

* Use Test-Driven Design when developing functionality
* Pairing developer-tester can improve the quality of testing at all levels
* Ensure there is a process to manage existing test automation (reviewing execution time, test relevance, code refactoring)
* Test results are made visible to the team
* Follow the “green tests run” policy (i.e. all tests must pass before new functionality is submitted)

## How we measure our progress

We will maintain metrics to determine our current state of automation at the UKHO. The metrics will be produced by comparing the state of test automation in a product against the exemplar test pyramid.

## The Future

The UKHO Test Community will review and evolve this strategy over time to ensure our approach and ways or working continue to support our development and release processes.
