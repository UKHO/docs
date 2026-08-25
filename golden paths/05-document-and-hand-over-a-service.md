# Golden Path: Document and Hand Over a Service

Use this when a service is new, significantly changed, or being handed over to a
support team.

## Outcome

You leave behind enough accurate documentation and non-functional evidence for a
delivery or support team to run and change the service safely.

## Steps

1. Capture the essential system view.
   Document the high-level architecture, build process, deployment approach,
   configuration model, and any practical guidance needed to get productive.
2. Keep the documentation with the audience.
   Store it where the delivery and support teams will naturally find and review
   it.
3. Treat documentation like code.
   Raise documentation changes through peer review with the implementation work.
4. Confirm non-functional requirements early.
   Make sure NFRs exist at the start of the work. If they do not, involve the
   solution architect.
5. Revisit NFRs during delivery.
   If they evolve, update the solution and evidence rather than deprioritising
   them.
6. Align with the intended support team.
   Validate any support-owned operational requirements before handover.
7. Demonstrate sign-off evidence.
   Handover should include proof that the relevant NFRs have been met.
8. Update the team definition of done.
   Ensure documentation and NFR evidence remain part of normal delivery, not a
   one-off exercise.

## Exit Criteria

- System documentation exists and is current.
- Documentation changes were peer reviewed.
- NFRs are identified and evidenced.
- The support team can accept the handover without missing prerequisite detail.

## Policy Basis

- [System Documentation Policy](../software-engineering-policies/SystemDocumentation/SystemDocumentationPolicy.md)
- [NFR Policy](../software-engineering-policies/NFRs/NFRPolicy.md)
- [Code Review Policy](../software-engineering-policies/CodeReview/CodeReviewPolicy.md)

## Anti-Patterns

- Treating handover documentation as an afterthought
- Keeping key run or deployment knowledge only in people’s heads
- Deferring NFR evidence until the end of delivery
