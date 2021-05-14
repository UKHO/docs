# Web Accessibility Testing

Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can perceive, understand, navigate, and interact with the Web.  It encompasses all disabilities that affect access to the Web, including

* auditory
* cognitive
* neurological
* physical
* speech
* visual

Web accessibility also benefits people without disabilities, like older people with changing abilities due to ageing and people with “temporary disabilities” such as

* a broken arm
* lost glasses
* people using a slow Internet connection
* people who have limited or expensive bandwidth

As a test engineer, you are responsible for checking the finished product is accessible. This means running automated tests, manually checking the pages against the WCAG (Web Content Accessibility Guidelines) criteria, and testing usability with assistive technology.

## Automated Accessibility Testing

Automated accessibility tests will very quickly help you identify common fails. They will not find everything, we know they find less than 50% of all known issues, but they will give you a good foundation to start your manual testing from. Read more about the [limitations of automated accessibility testing tools](https://alphagov.github.io/accessibility-tool-audit/).

When doing automated accessibility testing you can use tools that run as part of your build pipeline (such as axe-core) and/or browser plugins (such as Wave) that are triggered manually but will then scan through web pages.

### Links to automated tools

[axe-core](https://github.com/dequelabs/axe-core)
[axe-core pipeline examples](https://www.deque.com/axe/core-documentation/integrations/)
[Wave browser plugin](https://wave.webaim.org/extension/)

## Manual Accessibility Testing

Automated accessibility testing is good at finding obvious errors, but it won’t find everything so you need to make sure you manually check each page as well. These manual checks need to cover all 50 of the WCAG 2.1 AA criteria. You can find more information regarding WCAG 2.1 in W3.org's [Quick Reference Guide](https://www.w3.org/WAI/WCAG21/quickref/). You can filter this guide to show the components of AA compliance.

There is also a browser plugin called Accessibility Insights by Microsoft that does a relatively painless accessibility assessment. It will guide you through the process and generate a HTML report at the end.

### Links to manual tools

* [Microsoft Accessibility Insights](https://accessibilityinsights.io/)

## Incorporating Accessibility Testing into the Definition of Done

We can’t deploy code which is not accessible, otherwise we are [breaking the law](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps). So if it’s not accessible it’s not done.  As part of the definition of done, the service should be checked for accessibility using both automated and manual tests.

An example of accessibility considerations in a definition of done:

* Automated accessibility tests (using axe-core as an example) are passing in the deployment pipeline
* Manual accessibility tests passed using Accessibility Insights
* Manually checked usability using only a keyboard
* Manually checked usability using a screen reader
* Manually checked usability using a screen magnifier
* Manually checked usability using speech recognition

## Recording testing evidence

It is important to keep evidence of all the accessibility testing. This means at any point you have an understanding of how accessible your service is. It also means you know when you are ready for a full audit, it is unlikely you will find any major issues when doing so.

## Further useful links

* [A11Y Statement Generator](https://www.w3.org/WAI/planning/statements/generator/#create)
* [List of free test tools](https://accessibility.blog.gov.uk/2018/09/27/assistive-technology-tools-you-can-use-at-no-cost/)
