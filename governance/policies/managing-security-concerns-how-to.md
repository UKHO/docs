# Managing Security Concerns: How-to

This guide describes how to raise, assess, prioritise, remediate and monitor a security concern. The [Managing Security Concerns Policy](managing-security-concerns.md) is the authoritative source for requirements.

## Raise and describe the concern

Raise the concern in the team's backlog as a Risk with the Risk Category **Security**. Record:

- a title that includes the service name and type of security issue;
- a detailed description, including affected services;
- steps to reproduce the issue, if possible;
- key stakeholders, such as the service owner; and
- relevant conversations in the comments.

For example, a penetration test identifies a possible XSS vulnerability on the customer details form of the Contoso website. The Risk could be titled *Contoso Website, XSS possible on customer details form* and assigned the **Security** category.

## Assess the risk

The Security Champion or Lead Technical Software Engineer (Security) ensures that an initial assessment is carried out within 2 working days. Another team member may carry it out on their behalf.

Give the concern a standard score using the Inherent, Residual and Target risk measures. Carry out a more in-depth assessment when needed, for example by researching the issue online.

## Prioritise and schedule a fix

Work with the IT Security Team, Product Owner and relevant Security Champions to prioritise and schedule a fix. Discuss prioritisation through the team's regular activities, such as sprint planning or refinement, or Kanban replenishment or flow review.

For a very high priority concern, raise it with the team's Security Champion or Lead Technical Software Engineer (Security). Based on the information, they will advise on next steps, such as raising it to an ITSO as High/Critical or as a long-standing issue with mitigations.

The ITSO will discuss the concern with relevant parties and review the Risk with the **Security** category. They will discuss and verify the risk score, which may require follow-up meetings with the Security Champion or the person who raised the concern. Record the discussions in the bug.

If the concern is directly related to an existing project and can readily be addressed in the next delivery window, pursue that first. The ITSO can contact the Delivery Manager for inclusion in the next appropriate planning or prioritisation meeting if required.

If the concern is not remediated, it may need to be risk accepted. Discuss this further with the ITSO, who will guide the process.

## Implement and monitor

Implement the fix, deploy and test it, and have any testing tools that reported the issue retest it. The retest checks that the issue has been resolved or that no new issues have been introduced.

Update the Risk PBI with information supporting remediation, such as pull requests, test results and pipeline successes. Continue to monitor security concerns.

Review the current list on the team's regular delivery cadence, highlight new concerns, and assess whether additional training is needed to prevent further issues. For a security-impacting change or new feature, update its Risk with the Category **Security** to highlight it to the IT Security Team.
