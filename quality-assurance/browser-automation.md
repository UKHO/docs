# Browser Automation

This section will cover the browser automation tools we use at the UKHO and the recommended uses for each one.

The three recommended tools for Browser Automation (for UI, e2e and integration testing) are:

## Cypress

Cypress is a front end testing tool built for testing web apps. Cypress runs within available and supported browsers installed on the machine (the Electron browser is baked into Cypress and does not need to be installed separately). Cypress test code is executed directly within the browser as JavaScript, meaning there are no language or driver bindings and the tests can execute much faster and with more reliability. It also has full DOM and network traffic recording to aid debugging within the Cypress Test Runner. Cypress also provide a [Real World App](https://cypress.io/blog/2020/06/11/introducing-the-cypress-real-world-app/?utm_content=149165601&utm_medium=social&utm_source=linkedin&hss_channel=lcp-9293724) project to help learn Cypress best practices.

Cypress, however, does have its limitations. It has been created to test your application and your application only, and works best if the application is a Single Page Application; or a Multi Page Application in the same domain that does not utilise pop-ups or new tabs / windows.

Some authentication scenarios can be worked out, primarily SSO and NTLM Windows Auth, but not MSAL Azure B2C Auth.

## Playwright

Playwright enables fast, reliable and capable automation across all modern browsers. It is a Node.js library (also available in Python, Java and .NET) to automate Chromium, Firefox and WebKit with a single API. 

Upon install, Playwright downloads a version of Chromium/Chrome and uses the Chrome DevTools Protocol to orchestrate the browser instance. For Firefox and WebKit engines, Playwright downloads the actual browser but extends their debugging protocol capabilities to provide a unified API and features. There is no modification of the actual browsers, so that it is expected to work exactly the same in the testing and the real user's browser. Go [here for more information on the browser binaries](https://playwright.dev/docs/browsers).

The core advantage of using Playwright over Cypress is that it is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with multiple pages and popups.

Playwrights [documentation is excellent](https://playwright.dev/), tool is being continually developed and the community is growing.

## Selenium

Selenium is a tool for web browser automation that uses WebDrivers to remotely control browser instances and emulate a user’s interaction with the browser. This allows tests to be run across many browsers and versions using the associated WebDriver.

Selenium is popular because of its long history, large community and available language bindings - these include Java, C#, JavaScript and Python.

Selenium is a very good tool to automate true E2E and user interactions, but it takes time and effort to get the framework right. It suffers  and then there is the overhead of maintaining it along with the WebDrivers and browser versions (though this overhead can be reduced through the use of tools such as [automated driver synchronisation](https://github.com/UKHO/ChromeDriverBinarySync-PSModule).

It is not as fast, intuitive or maintainable as Cypress and Playwright and so we do not recommend using it for new test suites.

## Which tool should I use

Here is a list of **sample** questions / statements and responses to work through (alongside the tool capabilities) with a **Test Lead to decide which tool is right for the job**.

### I just want to do pure UI testing

> Use Cypress and stub or mock external dependencies as required.

### I want to do E2E / Integration testing but our application uses MSAL Azure B2C authentication

> Use Playwright. As this authentication requires interactive login, Cypress cannot deal with this use case.

### The application is a Single Page Application or a Multi Page Application in the same domain

> Use Cypress. There is a package to deal with NTLM(Windows) authentication and recipes for general SSO.

### The application has multiple tabs / windows / domains

> Use Playwright.

### I need to test against non-chromium based browser versions (e.g. Edge and IE)

> If yes, consider if this needs to be automated. If it does then
> Selenium, if not refer back to the previous questions.

## Tool Capabilities

This section will outline the capabilities of each to assist in the selection of the correct tool.

|Capability|Cypress|Playwright|Selenium|
|--|--|--|--|
|Documentation| Yes ([link](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell))| Yes ([link](https://playwright.dev/))| Yes ([link](https://www.selenium.dev/documentation/en/))|
|Relative speed of execution|Fastest|Fast|Slowest|
|Open-source|Yes|Yes|Yes|
|Supported Browsers|Chrome, Edge (Chromium), Electron, Firefox|Chrome, Edge (Chromium), Safari (WebKit), Firefox|Chrome, Edge (Legacy and Chromium), Safari, Firefox, Internet Explorer|
|Supported Languages|JavaScript|JavaScript|JavaScript, Java, C#, Python, Ruby|
|Cross Domain Support|No|Yes|Yes|
|Supports Multiple Tabs|No|Yes|Yes|
|Supports Multiple Pages |No|Yes|Yes|
|Accessing iFrames|Not fully supported|Yes|Yes|
|Auto-wait| Yes| Yes| No|
|Intercept Network Traffic|Yes|Yes|No (currently)|
|Mock WebSockets|Yes|Unproven|No|
|Screenshots on failure|Yes (Built in)| Yes (configurable)|Yes (Not built in)|
|Record Test|Yes (Built in)|Yes ([configurable](https://playwright.dev/docs/videos))|Yes (Not built in / not easy to implement)|
|Full DOM recording|Yes|Yes ([configurable](https://playwright.dev/docs/trace-viewer))|No|
