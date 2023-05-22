# Acceptance Criteria Guidance

This page provides tips on writing effective acceptance criteria (AC).

## What is Acceptance Criteria

> Conditions that a software product must satisfy to be accepted by a user, customer or other stakeholder. 
> They are confirmation that the requirements captured in the description have been achieved, and used as part 
> of the test criteria also

## Why write good Acceptance Criteria

To ensure all members of a team have a shared understanding of the requirements of the stories they are developing and what needs to be tested 
in order to confirm that the story is DONE

## How do I know I am doing it right

1. The whole team is involved in the creation and refinement of AC
1. they should be clear and unambigious to ensure clarity
1. AC is recorded and agreed before a user story are played
1. Every user story has at least 1 AC - too many ACs? Split the story
1. All criteria are independently testable with a clear pass / fail outcome
1. Non-functional criteria is included where applicable

## How to generate good Acceptance Criteria

1. Use Example Mapping sessions - [Example Mapping as part of BDD](bdd.md)
1. Record it using Gherkin scenario-orientated syntax - “Given...When...Then...”
1. Gherkin is behaviour driven and reflects the users flow for a single activity, so they are not intended to depict more than one set of  actions in terms of the behaviours. See example given below 


 > example of what not to do
 
 > 1. **Given** the user have entered data
 > 2. **And** they have completed all the mandatory fields
 > 3. **when** then submit / click (complete a specific action)
 > 4. **Then** they will be presented with the expected results
 > 5. **When** the user clicks the next button
 > 6. **Then** confirm the next set of results


