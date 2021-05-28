
# Automated Accessibility Testing

Automated accessibility tests will very quickly help you identify common fails. They will not find everything, we know they find less than 50% of all known issues, but they will give you a good foundation to start your manual testing from. Read more about the [limitations of automated accessibility testing tools](https://alphagov.github.io/accessibility-tool-audit/).

When doing automated accessibility testing you can use tools that run as part of your build pipeline (such as axe-core) and/or browser plugins (such as Wave) that are triggered manually but will then scan through web pages.

## Links to automated tools

[axe-core](https://github.com/dequelabs/axe-core)
[axe-core pipeline examples](https://www.deque.com/axe/core-documentation/integrations/)
[Wave browser plugin](https://wave.webaim.org/extension/)

## Manual Accessibility Testing

Automated accessibility testing is good at finding obvious errors, but it won’t find everything so you need to make sure you manually check each page as well. These manual checks need to cover all 50 of the WCAG 2.1 AA criteria. You can find more information regarding WCAG 2.1 in W3.org's [Quick Reference Guide](https://www.w3.org/WAI/WCAG21/quickref/). You can filter this guide to show the components of AA compliance.

There is also a browser plugin called Accessibility Insights by Microsoft that does a relatively painless accessibility assessment. It will guide you through the process and generate a HTML report at the end.

### Links to manual tools

* [Microsoft Accessibility Insights](https://accessibilityinsights.io/)

* [List of free test tools](https://accessibility.blog.gov.uk/2018/09/27/assistive-technology-tools-you-can-use-at-no-cost/)
