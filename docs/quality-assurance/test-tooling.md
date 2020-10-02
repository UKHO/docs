
# Test Tooling

## Standalone

|Tool|Notes|Links|Version info (if applicable)|
|--|--|--|--|
|ChromeDriver|Chrome driver for Selenium|https://chromedriver.chromium.org/ ||
|OWASP Zap|Vulnerability scanning (Web and API)|https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project| |
|Pickles|Living documentation generator|http://www.picklesdoc.com/||
|Postman|Rest API client|https://www.getpostman.com/||
|Selenium|Browser automation|https://www.seleniumhq.org/||i
|SOAP UI|REST and SOAP client|https://www.soapui.org||
|Cypress|Browser automation|https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell||
|Playwright|Browser automation|https://playwright.dev/||

## .NET

|Tool|Notes|Links|Version info (if applicable)|
|--|--|--|--|
|Fluent Assertions|Readable assertions compatible with all unit test frameworks|https://fluentassertions.com/|
|Polly|.NET resilience and transient-fault-handling library|https://github.com/App-vNext/Polly| 
|SpecFlow|Binding Business Requirements to .NET Code|https://specflow.org/ |
|Visual Studio Profiling|Measure app performance|https://docs.microsoft.com/en-us/visualstudio/profiling/?view=vs-2019| 
|Win App Driver|Windows Application Driver|https://github.com/microsoft/WinAppDriver 

## Java

|Tool|Notes|Links|Version info (if applicable)|
|--|--|--|--|
|Cucumber|Binding Business Requirements to Java code|https://cucumber.io/docs||
|Jmeter|Load test functional behaviour and measure performance|https://jmeter.apache.org/||
|REST-assured|Testing and validating REST services|http://rest-assured.io/||
|swagger-request-validator|A Java library for validating request/responses against a OpenAPI / Swagger specification|https://bitbucket.org/atlassian/swagger-request-validator||

## Browser Automation - what tools to use?
This section will cover the browser automation tools we use at the UKHO and the recommended uses for each one. 

The 3 recommended tools for Browser Automation (UI, e2e and Integration) at the UKHO are:

### Cypress
Cypress is a front end testing tool built for testing web apps. Cypress test code is executed directly within the browser as JavaScript, meaning there are no language or driver bindings and the tests can execute much faster and with more reliability. It also has full dom and network traffic recording to aid debugging within the Cypress Test Runner. 

Cypress, however, does have its limitations. It has fundamently been created to test your application and your application only, and works best if the Application-Under-Test is a Single Page Application or a Multi Page Application in the same domain that does not utilise pop-ups or new tabs / windows.

Some authentication scenarios can be worked out, primarly SSO and NTLM Windows Auth, but not MSAL Azure B2C Auth.

### Playwright
Playwright enables fast, reliable and capable automation across all modern browsers. It is a Node.js library to automate Chromium, Firefox and WebKit with a single API.

One of the big disadvantages over Cypress is that it does not have a Test Runner therefore screenshots, videos, dom and network traffic are not recorded out the box, so debugging tests is not as intuitive.

The core advantage of using Playwright over Cypress is it is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with multiple pages.

Playwrights documentation and community is also not as comprehensive as Cypress or Selenium, yet, it is constantly being added to as the tool is developed and the community is growing.

### Selenium
Selenium is a tool for web browser automation that uses WebDrivers to remotely control browser instances and emulate a user’s interaction with the browser. One of the reasons that Selenium is popular is because of its available language bindings, these include Java, C#, JavaScript and Python - whereas Cypress and Playwright are JavaScript based.

Selenium is a very good tool to automate true E2E and user interactions, but it takes time and effort to get the framework right, and the overhead of maintaining this along with the WebDrivers and browser versions. It is also not as fast or intuitive as Cypress or Playwright.

### Which tool should I use?
Here is a list of sample questions to work through, alongside the Tool Capabilities, with a Test Lead to decide which tool is right for the job.

1. Is the application a Single Page Application or a Multi Page Application in the same domain? That doesn't use MSAL Azure B2C Auth.

      *Use Cypress. There is a package to deal with ntlm (Windows) authentication and recipes for general SSO.*


2. Will the application have multiple tabs / windows / domains?

      *Use Playwright.*


3. Do I need to test against non-chromium based browser versions (e.g. Edge and IE)?

      *If yes, consider if this needs to be automated. If it does then Selenium, if not refer back to the previous questions.*

#### Tool Capabilities
This section will outline the capabilities of each tool to assist in the selection of the correct tool.

|Capablity|Cypress|Playwright|Selenium|
|--|--|--|--|
|Documentation| Yes ([link](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell))| Yes ([link](https://playwright.dev/))| Yes ([link](https://www.selenium.dev/documentation/en/))|
|Open-source|Yes|Yes|Yes|
|Supported Browsers|Chrome, Electron, Firefox, Edge|Chrome and Edge (with Chromium), Safari (with WebKit) and Firefox|Chrome, Safari, Firefox, Edge, IE|
|Supported Languages|JavaScript|JavaScript|Java, C#, JavaScript, Python, Ruby|
|Cross Domain Support|No|Yes|Yes|
|Managing Tabs|No|Yes|Yes|
|Managing Pages |No|Yes|Yes|
|Using iframes|No|Yes|Yes|
|Auto-wait| Yes| Yes| No|
|Intercept Network Traffic|Yes|Yes|No (currently)|
|Screenshots on failure|Yes (Built in)| Yes (Not built in)|Yes (Not built in)|
|Record Test|Yes (Built in)|Yes (Not built in)|Yes (Not built in / not easy to implement)|

