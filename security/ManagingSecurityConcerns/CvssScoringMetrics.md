# CVSS Scoring Metrics

- [CVSS Scoring Metrics](#cvss-scoring-metrics)
  - [Exploitability Metrics](#exploitability-metrics)
    - [Attack Vector (AV)](#attack-vector-av)
    - [Attack Complexity (AC)](#attack-complexity-ac)
    - [Privileges Required (PR)](#privileges-required-pr)
    - [User Interaction (UI)](#user-interaction-ui)
    - [Scope (S)](#scope-s)
  - [Impact Metrics](#impact-metrics)
    - [Confidentiality (C)](#confidentiality-c)
    - [Integrity (I)](#integrity-i)
    - [Availability (A)](#availability-a)

## Exploitability Metrics

The five Exploitability Metrics capture how the vulnerability is accessed and whether or not extra conditions are required to exploit it.

### Attack Vector (AV)

This metric reflects the context by which vulnerability exploitation is possible. This metric value (and consequently the Base Score) will be larger the more remote (logically, and physically) an attacker can be in order to exploit the vulnerable component. The assumption is that the number of potential attackers for a vulnerability that could be exploited from across a network is larger than the number of potential attackers that could exploit a vulnerability requiring physical access to a device, and therefore warrants a greater

### Attack Complexity (AC)

This metric describes the conditions beyond the attacker’s control that must exist in order to exploit the vulnerability. As described below, such conditions may require the collection of more information about the target, or computational exceptions. Importantly, the assessment of this metric excludes any requirements for user interaction in order to exploit the vulnerability (such conditions are captured in the User Interaction metric). If a specific configuration is required for an attack to succeed, the Base metrics should be scored assuming the vulnerable component is in that configuration. The Base Score is greatest for the least complex attacks.

### Privileges Required (PR)

This metric describes the level of privileges an attacker must possess *before* successfully exploiting the vulnerability. The Base Score is greatest if no privileges are required.

### User Interaction (UI)

This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner. The Base Score is greatest when no user interaction is required.

### Scope (S)

The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its *security scope*.

Formally, a *security authority* is a mechanism (e.g., an application, an operating system, firmware, a sandbox environment) that defines and enforces access control in terms of how certain subjects/actors (e.g., human users, processes) can access certain restricted objects/resources (e.g., files, CPU, memory) in a controlled manner. All the subjects and objects under the jurisdiction of a single *security authority* are considered to be under one *security scope*. If a vulnerability in a vulnerable component can affect a component which is in a different *security scope* than the vulnerable component, a Scope change occurs. Intuitively, whenever the impact of a vulnerability breaches a security/trust boundary and impacts components outside the security scope in which vulnerable component resides, a Scope change occurs.

The security scope of a component encompasses other components that provide functionality solely to that component, even if these other components have their own security authority. For example, a database used solely by one application is considered part of that application’s security scope even if the database has its own security authority, e.g., a mechanism controlling access to database records based on database users and associated database privileges.

The Base Score is greatest when a scope change occurs.

## Impact Metrics

### Confidentiality (C)

This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones. The Base Score is greatest when the loss to the impacted component is highest.

### Integrity (I)

This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information. The Base Score is greatest when the consequence to the impacted component is highest.

### Availability (A)

This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. While the Confidentiality and Integrity impact metrics apply to the loss of confidentiality or integrity of *data* (e.g., information, files) used by the impacted component, this metric refers to the loss of availability of the impacted component itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility of information resources, attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of an impacted component. The Base Score is greatest when the consequence to the impacted component is highest.

More information on the CVSS score metrics can be found on the specification document [here](https://www.first.org/cvss/v3.1/specification-document).
