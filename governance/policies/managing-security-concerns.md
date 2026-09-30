# Managing Security Concerns Policy

This policy defines how UKHO software development teams manage current security concerns. See the [how-to guide](managing-security-concerns-how-to.md) for the process and the [explanation](managing-security-concerns-explanation.md) for context.

## Requirements

- Every software development team will keep a prioritised list of current security concerns.
- The list should be kept in the same work item tracking system used for bugs and general work, usually Azure DevOps. Concerns should be identified as a Risk with the Risk Category **Security**.
- Each concern should be assessed using Inherent, Residual and Target risk measures. The Security Champion or Lead Technical Software Engineer (Security) will ensure an initial assessment is carried out within 2 working days of the concern being raised. Another team member may carry out the assessment on their behalf.
- The team should review its list on a regular delivery cadence and highlight all new concerns. Sprint teams should do this during sprint review or planning activities; Kanban teams should do this during their regular flow review or service review.
- Each concern should be assessed to determine whether additional training is required to prevent further issues.
- Security-impacting changes and new features will have their Risks updated with the Category **Security** to highlight them to the IT Security Team.

## Raising a concern

Once identified, a concern should be raised in the team's backlog. The Risk should:

- have its Risk Category set to **Security**;
- have a title that includes details such as the service name and type of security issue;
- include a detailed description, such as the services affected;
- include steps to reproduce the issue, if possible;
- identify key stakeholders, such as the service owner; and
- record relevant conversations in its comments.

## Prioritisation and risk acceptance

Teams usually prioritise concerns during their regular prioritisation activities, such as sprint planning or refinement, or Kanban replenishment or flow review. In most cases, the team can address a concern within its planned work cycle.

The IT Security Team will drive very high priority concerns, usually through Security Working Groups (SWGs) or ad-hoc meetings. If a concern is directly related to an existing project and can readily be addressed in the next delivery window, this must be pursued first. If a concern is not remediated, it may need to be risk accepted; a further discussion with an IT Security Officer (ITSO) is required.

## Related documents

- [Managing Security Concerns: How-to](managing-security-concerns-how-to.md)
- [Why Managing Security Concerns Matters](managing-security-concerns-explanation.md)
