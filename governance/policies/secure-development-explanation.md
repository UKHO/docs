# Why Secure Development Matters

This document explains the context and rationale behind the [Secure Development Policy](secure-development.md). The policy remains the authoritative source for requirements.

## Why the policy exists

Vulnerabilities in software exist because of poor design or mistakes in implementation. This can happen because of a lack of training, accidental error, insufficient guidance, poor-quality controls, or resource constraints. UKHO software needs to be secure as feasibly as possible.

The policy exists to help teams catch vulnerabilities during development. It also aims to make security expectations clear, ensure the right roles and processes are in place, confirm the use of authorised tooling, and provide evidence that security is considered throughout the software development lifecycle.

## Security roles and governance

The policy makes clear that security is not just a technical task. It is supported by people and governance structures. A Security Champion encourages secure development practices and supports threat modelling. The Security Working Group provides a forum for raising concerns and deciding whether to accept risk or seek mitigations. The risk owner defines the acceptable risk tolerance and decides whether to approve exceptions.

## How the controls work together

The policy requires security to be included in the Definition of Done and in agile delivery. It requires training, onboarding, and the maintenance of skills matrices so that all engineers understand the security baseline relevant to their technology stack. It expects teams to use approved source control, dependency scanning, SAST tooling, and threat modelling to reduce recurring issues and improve code quality.

The controls also support review and evidence. Dependency and SAST checks help detect known issues before release. Code review checklists and testing criteria derived from threat modelling make it easier to review and catch vulnerabilities consistently. This helps the team improve continuously while producing the evidence needed for security review and audit.
