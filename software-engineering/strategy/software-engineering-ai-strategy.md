# Software Engineering AI Strategy

## Foreword

Software Engineering plays a central role in delivering UKHO's digital products and services. AI-powered developer tools are an opportunity to increase productivity, improve code quality, and free engineers to focus on higher-value design and systems thinking. This document sets out our practical, security-conscious approach to adopting AI within software delivery, with GitHub Copilot established as the sanctioned coding assistant.

The strategy balances pragmatic adoption with strong governance: engineers remain accountable for all code, security and IP considerations are enforced, and we prioritise training, monitoring and targeted support so benefits are realised evenly across teams.

This is a living strategy and will be reviewed annually to reflect technology, policy and operational lessons learned.

## 1. Executive Summary

This strategy sets out how Software Engineering will use AI to improve delivery quality and developer productivity while maintaining security, IP and governance standards. Our pragmatic approach focuses on sanctioned developer tooling (GitHub Copilot), training and measurement to ensure benefits are realised safely and evenly across teams.

Key outcomes:
- Broad, effective adoption of GitHub Copilot with measurable productivity improvements.
- Clear governance, audit and safe-usage standards for developer-facing AI tools.
- Reduced cycle times and improved code quality through AI-assisted testing and code review support.

## 2. Purpose & Scope

This document describes the purpose, scope and constraints for adopting developer-facing AI within Software Engineering. It sets out how AI assistants and related tooling will be used to improve software delivery efficiency and quality while meeting obligations for security, legal compliance, data stewardship and public service transparency.

Scope

- Developer-facing AI assistants (primary focus: GitHub Copilot) used by engineers, testers and platform teams during development, test and documentation activities.
- Tooling that generates or suggests code, tests, infrastructure-as-code, configuration or documentation.
- Integration patterns and platform controls that permit safe experimentation with AI tools.

Out of scope

- Automated decision systems in operational services that impact safety, navigation, or core public-facing outcomes unless they have completed full assurance and governance reviews.

Applicability and constraints

- Applies to all civil service staff, contractors and suppliers working in or for Software Engineering.
- Use of AI tooling with classified, personal, or otherwise sensitive data is prohibited unless explicitly authorised by security policy and executed within approved sandboxes or vetted on-premises solutions.
- All use must comply with MOD/UKHO policies, data protection law and procurement rules.

Audience

This document is intended for software engineers, engineering managers, security and compliance teams, legal/IP advisers, procurement and vendor managers, platform and operations teams, and senior leadership.

Relationship to organisational strategy

This strategy aligns with the UKHO AI strategy and Data Strategy and supports cross-departmental interoperability, auditability and assurance. It complements existing security, accessibility and procurement policies and provides actionable controls for safe developer-facing AI adoption.

Refer to the [Code Generation Tools Policy](../../software-engineering-policies/CodeGenerationTools/CodeGenerationToolsPolicy.md) for detailed organisational requirements on the use of code generation and AI-assisted development tools.

## 3. Principles

- Responsible and pragmatic AI use: adopt tools where they demonstrably add value and remain easy to govern.
- Safety and quality first: all AI-assisted outputs must meet existing quality gates and testing standards.
- Human-in-the-loop and accountability: engineers retain responsibility for correctness and security of code; AI is an assistant not an approver.
- Reproducibility and traceability: track where AI suggestions were applied and keep reproducible pipelines for model-assisted tasks.
- Security and compliance: prevent leakage of sensitive data to external services and enforce licensing/IP checks.

## 4. Strategic Objectives

 - Delivery Excellence
   - Reduce routine engineering effort by automating repetitive tasks (tests, scaffolding, refactor suggestions) so engineers focus on architecture and domain complexity.
   - Improve code quality and reduce defect injection by using AI-assisted testing and linting alongside existing quality gates.

 - Enabling Platform & Tooling
   - Provide secure, supported Copilot integrations so engineers can experiment safely without exposing sensitive data.
   - Build observability and metric pipelines to measure Copilot usage and its impact on delivery and quality.

- Enabling Platform & Tooling
  - Provide secure, supported Copilot integrations and platform controls so engineers can experiment safely without exposing sensitive data.
  - Build observability and metric pipelines to measure Copilot usage and its impact on delivery and quality.

 - Governance, Ethics & Risk
   - Maintain clear policies and approval processes for developer-facing AI tooling and ensure guidance is readily available.
   - Monitor and mitigate risks (data leakage, licensing, model hallucination) and integrate AI-specific incidents into security playbooks.

## 5. Priority Use Cases for Software Engineering

- AI-assisted development (code generation, refactoring, documentation)
- Automated testing and test generation
- CI/CD optimisation and release automation
- Static and dynamic analysis, security scanning
- Observability, anomaly detection and incident triage
- Developer productivity tooling (chatbots, knowledge search)
- Requirements and design synthesis

Priority rationale:

- Low friction: developer assistants yield quick productivity gains for routine code and documentation tasks.
- High value: automated testing and CI/CD optimisations reduce downstream defects and rework.
- Safety alignment: security scanning and static analysis can be integrated with established security tooling to reduce risk.

## 6. Capability Development

To accelerate practical AI adoption within Software Engineering we will prioritise developer-facing tooling. GitHub Copilot has already been rolled out organisation-wide and licences issued to most engineers. The current phase focuses on consolidating that rollout by emphasising training, pilots, monitoring and targeted support to raise effective adoption across all teams.

- **GitHub Copilot adoption program:**
  - Licences have been provisioned for the majority of engineers; continue onboarding remaining staff as needed.
  - Establish a set of usage guidelines and best practices for Copilot.
  - Maintain and grow a Copilot champions network to support peer-to-peer learning and share patterns.

Implementation notes:

- Licensing: maintain a licence registry and reconcile seat usage quarterly.
- Training approach: each team will schedule team-level sessions at a cadence appropriate to their members; cadence will vary according to need. Periodic deep-dive workshops will remain available for cross-team topics. New starters should complete basic Copilot training as part of onboarding. Suitable training can be found on PluralSight.
- Champions: identify champions to spread knowledge.

- **Pilots and AI projects:**
  - Continue focused pilots that demonstrate Copilot benefits on real engineering tasks (e.g., test generation, refactoring, documentation updates).
  - Collect case studies and lessons learned to inform further improvements.

- **Monitoring & adoption support:**
  - Monitor usage metrics (adoption rate, active users, sessions) and correlate with productivity and quality metrics.
  - Identify slower adopters and provide targeted coaching, workshops, and incentives.

- **People & skills:**
  - Upskill engineers in safe and effective use of AI assistants and review practices for generated code.
  - Incorporate AI-assistant usage into onboarding and continuous professional development pathways.

- **Platform & tooling:**
  - Provide secure, approved integrations of Copilot with our development environments and repositories where permitted.

- **Partnerships:**
  - Work with GitHub and other vendors to stay aligned on security, licensing and feature roadmaps.

By focusing on Copilot as the primary developer-facing AI tool, we expect faster, measurable productivity gains while ensuring governance and security controls are in place.

## 7. Governance & Ethics for Developer-Facing AI

- **Tool approval and policy:**
  - GitHub Copilot is the recommended and organisationally approved coding assistant. Use of other external coding assistants must follow the tool approval process.
  - The current approval includes provisioning and management guidance for licences and access.

- **Data handling & privacy:**
  - Define acceptable data patterns to prevent exposure of sensitive or classified information to external services.

- **Intellectual property & licensing:**
  - Provide guidance to engineers on licensing considerations for code suggested by Copilot and how to validate and attribute where necessary.

- **Explainability & accountability:**
  - Engineers are responsible for code produced with Copilot. All generated code must be reviewed, tested and signed off according to existing code review processes.

- **Monitoring & audit:**
  - Track Copilot adoption and any incidents or misuse. Maintain an audit trail of tool approvals and major changes to usage policy.

Operational governance responsibilities:

- Engineering managers: ensure team members complete baseline training and that Copilot is used in line with guidance.
- Platform/security: maintain secure integrations and monitoring dashboards; run periodic compliance checks.
- Legal/IP: provide fast-turnaround guidance for licensing questions and keep an approved patterns list for reuse.

## 8. Security & Resilience

- **Secure supply chain:** Ensure Copilot integrations and any model artifacts are vetted and kept up to date.
- **Threat modelling:** Analyse threats introduced by AI-assisted development workflows and mitigate accordingly.
- **Fallbacks:** Maintain standard development workflows to operate without Copilot where necessary.
- **Incident response:** Extend incident response playbooks to include AI-related supply chain or data leakage events.

Controls and safeguards:

- Pre-approved data patterns: lists of safe code and data that can be used with Copilot in non-sandboxed environments.
- Sandboxing: ephemeral workspaces where engineers can run Copilot on sensitive code without sending secrets to external services.
- Access controls: RBAC for Copilot features where supported and integration with SSO for auditability.

## 9. Implementation Roadmap

### Phase 1: Consolidate Rollout (Year 1)
- Rollout complete for most engineers; focus on onboarding remaining staff and closing any licence gaps.
- Complete training curriculum and ensure baseline training completion across teams.
- Capture early pilot results and case studies to support wider adoption.
- Finalise governance baseline and refresh policies based on pilot feedback.

Success criteria for Phase 1:
- 50%+ of engineers have completed basic Copilot training within 6 months.
- Two case studies demonstrating measurable productivity gains.

### Phase 2: Integrate & Scale (Years 2-3)
- Embed Copilot-enabled workflows into CI/CD, code review and documentation processes where safe.
- Launch monitoring dashboards and adoption incentives; provide targeted support for slower adopters.
- Expand sandbox and platform support for experimentation.

### Phase 3: Optimise & Institutionalise (Year 4+)
- Use metrics to continuously refine training and tooling.
- Institutionalise Copilot best practices and maintain a Copilot champions community.
- Explore advanced integrations (secure code generation, internal model tuning) where justified and governed.

## 10. Metrics & Evaluation

We will measure both adoption and impact:

- **Adoption metrics:** percentage of engineers with Copilot licences; active Copilot users; session frequency; training completion rates.
- **Quality metrics:** number of defects introduced by generated code, security findings related to AI-assisted changes.
- **Governance metrics:** number of tool approvals, incidents, and compliance with review processes.

Use these measures to target coaching for slower adopters and to verify that Copilot usage delivers expected benefits.

Data sources and cadence:
- Usage telemetry: weekly and monthly reports from Copilot management portal or platform integrations.
- Delivery metrics: pull request, CI and defect metrics from SCM and CI systems (weekly rollups).
- Quality/security: automated test and SAST/DAST results integrated into dashboards (per release).

Reporting:
- Monthly engineering leadership dashboard summarising adoption and key impact metrics.
- Quarterly review with security and legal for policy adjustments.

## 11. Risks & Mitigations

- Over-reliance on generated code and perfunctory review practices - enforce mandatory peer review and testing, with sufficiently detailed reviews of AI-assisted changes to keep engineers aligned with the codebase and to catch subtle security and quality issues.
- Erosion of core engineering skills where AI adoption is limited or inappropriate - reinforce code-writing and review capability through deep-dive reviews and periodic non-AI coding exercises or hackathons, particularly for teams operating in higher-security environments.
- Data leakage via external services - redact sensitive inputs.
- IP and licensing uncertainty - provide legal guidance and approval workflows.
- Uneven adoption - monitor usage and target support to teams lagging behind.

## 12. What we will not do

- Replace human judgement in safety-critical decisions.
- Expose sensitive operational data to unvetted services.
- Mandate Copilot in contexts where its use would breach security, privacy or licensing constraints; instead we will require approved alternatives or workflows.

*Draft created: [date]*

Final review checklist:

- Confirm leadership foreword and sign-off.
- Confirm proposed targets and timelines with engineering leadership.
- Ensure licence registry and monitoring dashboards in place.

Approved by: [Head of Software Engineering]  
Date: [TBD]

