# UKHO Security Testing Strategy
*Note: This document is the property of the United Kingdom Hydrographic Office and may contain third party material.  It must not be copied or transmitted to any third parties without the written permission of the Owner(s).  :copyright: Crown Copyright 2019*

## Introduction
The purpose of this document is to outline, at a high level, how Security Testing will be carried out across the UKHO. This will include the tools and technologies used across the various stages of the software development lifecycle.

The Test Community focus will be on Web Application Penetration Testing.

Efforts will not be focused on networking or infrastructure. Security Testing of networking or infrastructure falls into ITSO domain, so we should work with ITSO on this.

> This is a working document and as such, will be updated to stay in line with our evolving Security Testing capability within the test community.

## Current Situation
There is currently very little formal security testing conducted by members of the Test Community. Testers are involved with Threat Modelling sessions that are starting to be done as a standard across development teams, these however predominantly led by developer security champions. Some testers do then carry out the manual security testing based on Threat Modelling outcomes, working closely with the security champion in the team.

## What is Security Testing?
Security Testing is a type / area of testing that aims to expose potential vulnerabilities of the system / application under test and determine that its data and resources are protected from potential attacks - to build trust and resilience in applications

Application security ‘testing’ can be split into two distinct areas:
 - Things we can define/test   
 - Things we need experts for

This document will focus on the things we can define/test.

## Manual Security Testing
This will predominantly be focusing on the OWASP Top 10 and based on the outcomes of the development teams Threat Modelling sessions.

OWASP Top 10:
 1. Injection 
 2. Broken Authentication 
 3. Sensitive data exposure
 4.  XML External Entities (XXE)
 5. Broken Access control 
 6. Security misconfigurations
 7. Cross Site Scripting (XSS) 
 8. Insecure Deserialization 
 9. Using Components with known vulnerabilities 
 10. Insufficient logging and monitoring

There will also be focus on utilising Security Testing techniques during exploratory testing, where it is applicable – this will grow overtime with knowledge and experience within the Test Community.

## Automated Dynamic Security Testing
This section will cover the two types of dynamic testing.

### OWASP Zap Scans
The Docker images supplied with Owasp Zed Attack Proxy preinstalled will be utilised within Azure DevOps Pipelines. These pipelines will execute one of the below pre-configured python scripts:

 - API Scan - a full scan of an API defined using OpenAPI / Swagger or SOAP
 - Full Scan - a full spider, optional ajax spider and active scan which reports issues found actively and passively

This will be carried out using the UKHO owasp-zap-scan GitHub repository, this provides the ability to execute a Full Scan against a web application or a API Scan with a supplied Swagger / OpenApi Definition using the OWASP ZAP Stable Docker image within an Azure DevOps pipeline. This generates:

 1. the standard OWASP ZAP Html report
 2. an NUnit test report to publish the results to the pipeline for easy visibility
 
These results and outputs can then be reviewed by the Security Champions, Technical Leads, Test Leads and ITSO to determine what needs to be fixed and what can be ignored (with context e.g. internal / external application). The instance of the Zap scan can then be configured for more accurate results, and the original report can be used as a baseline to ensure further vulnerabilities are not introduced.

###	Selenium
An output of the Threat Modelling sessions is the testing that is required to confirm that the identified vulnerability is not present. If it is deemed a high risk vulnerability (e.g. in the OWASP Top 10, the score (CVSS)), then this should be covered by an automated Specflow test using Selenium. 
These tests will then be added to the necessary regression pack to ensure that the vulnerability does not emerge with any future changes to the application.

## Automated Static Security Testing
:construction: Under Construction :construction:

## The Future
The UKHO Test Community, Security Champions and ITSO will review and evolve this strategy over time to ensure our approach and ways or working continue to support our development and release processes.
