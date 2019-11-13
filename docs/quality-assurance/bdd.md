# Behaviour-Driven Design (BDD) at UKHO

> "An approach that enhances communication between stakeholders and project team members by expressing product needs as concrete examples"

This page contains information about BDD and how it can be used to aid how we develop software at UKHO.

## What is BDD

* A process to enable the entire team to better understand stories before they are played
* BDD is about _collaboration_ - Product Owners (proxy for the customer), developers and testers communicating to gain an agreed understanding
* Uses rules and examples to illustrate this understanding
* When stories are played there is less ambiguity leading to better software development
* BDD is NOT:
  * Testing
  * SpecFlow or Cucumber
  * Just automated tests (tests are a downstream benefit)

## Aims of BDD

BDD aims to make the development of software more successful by:

* Incorporating diverse perspectives when defining requirements
* Creating a shared understanding in a delivery team of the required product changes
* Simplifying and shortening team Scrum events (refinement and planning)
* Ensures only the functionality to meet requirements is developed
* Reducing the amount of re-work required in the maintenance phase (by making the original change more complete)


## Stages of BDD

* Discovery - ensuring the team have a full understanding of a user requirement, using rules and examples to demonstrate this
* Formulation - transforming the examples into documentation that describes how the product behaves (i.e Gherkin)
* Automation - using the documentation to drive automated tests

## Suggested BDD Approach

* Discovery - The customer representative brings requirements to the team as user stories (PBIs)
* Discovery - The Example Mapping technique is applied to these stories by either the whole team or a “Three Amigos” subset
* Discovery - This will create rules and examples that illustrate understanding of the story
* Discovery - Stories are then ready for full team refinement and planning sessions
* Formulation - Examples can be formulated into gherkin
* Automation - Create automated tests from the gherkin

## Example Mapping - Simple Overview

### Description

Example Mapping is a technique to drive out understanding of a user requirement. It is a "structured" approach to this (rather than casual "unstructured" chats or kitchen discussions).

Example Mapping sessions can involve the whole team, or a subset (known as the Three Amigos). It is important that all perspectives in the team (customer representative, developers and testers) are involved.

These sessions can be short daily sessions through to longer weekly events. Theses need to take place to complete development effectively.

Different colour post-its can be used to represent rules, examples and questions.

### Approach

1. A story is created by the customer representative and presented to the group.
1. The group discuss the story and determine rules that clarify the purpose of the story.
1. Examples are created to demonstrate understanding of the rules.
1. When creating examples it may become clear that further rules are needed.
1. When there are lots of rules this may indicate the story is too big and should be split.
1. Any questions that cannot be answered in the session should be recorded and answered subsequently.
1. If there are lots of questions this may indicate the story is not understood and needs to go back to the customer.

# Resources

## Books

* Discovery: Explore behaviour using examples - Gaspar Nagy
  [Amazon link](https://www.amazon.co.uk/Discovery-Explore-behaviour-using-examples/dp/1983591254/ref=sr_1_2?keywords=bdd+discovery&qid=1572530563&s=books&sr=1-2)
* BDD in Action: Behaviour-driven development for the whole software lifecycle - John Ferguson Smart
  [Amazon link](https://www.amazon.co.uk/BDD-Action-Behavior-driven-development-lifecycle/dp/161729165X/ref=sr_1_1?keywords=bdd&qid=1572530667&s=books&sr=1-1)

## On-line resources

* [Example Mapping by Gaspar Nagy](http://gasparnagy.com/2019/05/divide-conquer-a-la-bdd-story-rule-scenario/)
* [Another description of Example Mapping by Matt Wynne](https://cucumber.io/blog/example-mapping-introduction/)
* [Writing better Gherkin scenarios](http://gasparnagy.com/2019/05/clean-up-bad-bdd-scenarios/?utm_source=BDD+Addicts+Newsletter&utm_campaign=d1bc786403-BDD_Addict_Newsletter_August_2019&utm_medium=email&utm_term=0_becf448392-d1bc786403-180800965)
* [Who should formulate the Gherkin](https://cucumber.ghost.io/blog/who-should-formulate-the-scenarios/?goal=0_02cca1920b-383aa96ce0-289488633&mc_cid=383aa96ce0&mc_eid=a98df43caa)
* [Gherkin - keeping your scenarios BRIEF](https://cucumber.io/blog/keep-your-scenarios-brief/)
* [How writing good gherkin enables better automation](http://angiejones.tech/writing-good-gherkin-enables-good-test-automation/?goal=0_02cca1920b-4b08e68d18-289488633&mc_cid=4b08e68d18&mc_eid=a98df43caa)
* [How to facilitate an Example Mapping session](http://gasparnagy.com/2019/04/example-mapping-the-good-enough-facilitator/?utm_source=BDD+Addicts+Newsletter&utm_campaign=1c0d110c08-BDD_Addict_Newsletter_August_2019_COPY_01&utm_medium=email&utm_term=0_becf448392-1c0d110c08-180800965)
