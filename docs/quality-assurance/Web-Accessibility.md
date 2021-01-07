# Web Accessibility Testing
Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can perceive, understand, navigate, and interact with the Web.  It encompasses all disabilities that affect access to the Web, including
- auditory 
- cognitive
- neurological 
- physical 
- speech
- visual  

Web accessibility also benefits people without disabilities, like older people with changing abilities due to ageing and people with “temporary disabilities” such as 
- a broken arm
- lost glasses 
- people using a slow Internet connection, 
- people who have limited or expensive bandwidth

As a test engineer, you’re responsible for checking the finished product is actually accessible. This means running automated tests, manually checking the pages against the WCAG criteria, and testing usability with assistive technology.

# Automated Accessibility Testing
Automated accessibility tests will very quickly help you identify common fails. They will not find everything, we know they actually find less than 50% of all known issues, but they will give you a good foundation to start your manual testing from. Read more about the limitations of automated accessibility testing tools at https://alphagov.github.io/accessibility-tool-audit/.

When doing automated accessibility testing, you can either run browser plugins against each page or you can build the tools into your deployment process. One approach is to build AxeCore (https://github.com/dequelabs/axe-core) into pipeline, and then run the Wave browser plugin (https://wave.webaim.org/extension/) against each page.

# Manual Accessibility Testing
Automated accessibility testing is good to find obvious errors, but it won’t find everything. So you need to make sure you manually check each page before it is signed off as done.  These manual checks need to cover all 50 of the WCAG 2.1 AA criteria.  You can find more information regarding WCAG 2.1 in W3.org's Quick Referance Guide (https://www.w3.org/WAI/WCAG21/quickref/).  You can filter this guide to show the componants of AA compliance.

There is also a browser plugin called Accessibility Insights by Microsoft (https://accessibilityinsights.io/) that does a relatively painless accessibility assessment. It will guide you through the process and generate a HTML report at the end.

# Incorporating Accessibility Testing into the Definition of Done 
We can’t deploy code which is not accessible, otherwise we are breaking the law (see https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps). So if it’s not accessible it’s not done.  As part of the definition of done, the service should be checked for accessibility using both automated and manual tests.

An example of accessibility considerations in a definition of done:
- Automated accessibility tests (using AxeCore as an example) are passing in the deployment pipeline
- Manual accessibility tests passed using Accessibility Insights
- Manually checked usability using only a keyboard
- Manually checked usability using a screenreader 
- Manually checked usability using a screen magnifier 
- Manually checked usability using speech recognition
You can find information on free test tools for the above at https://accessibility.blog.gov.uk/2018/09/27/assistive-technology-tools-you-can-use-at-no-cost/

# Recording testing evidence
It is important to keep evidence of all the accessibility testing. This means at any point you have an understanding of how accessible your service is. It also means you know when you are ready for a full audit, it is unlikely you will find any major issues when doing so.

