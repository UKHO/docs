# How to test a desktop app for Accessibility

## Overview

Desktop apps do not have to adhere to the WCAG requirements that web apps have to. However, the app must still be accessible. There is a W3C working group looking into applying WCAG standards to other forms of ICT.

Read the [Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/WAI/standards-guidelines/wcag/non-web-ict/).

Microsoft have a [checklist for ensuring a Windows App is accessible](https://docs.microsoft.com/en-us/windows/apps/design/accessibility/accessibility-checklist).

When testing for accessibility you will need to include the following in your approach:

* Use of accessibility test tooling
* Manual testing using a keyboard only
* Manual testing using screen readers
* Manual testing using screen magnifiers

Note that automated testing as part of a CI/CD pipeline will not be possible.

## Test Approach

1. Manual testing using an accessibility tool
1. Manual testing using assistive technologies

This is an older blog from Microsoft but describes a [good test approach using standard tools](https://blogs.windows.com/windowsdeveloper/2014/03/25/testing-for-accessibility-in-windows-store-apps/). Note that Accessibility Insights is now recommended over AccChecker.

This is another more recent blog from Microsoft on [accessibility testing a Windows App](https://docs.microsoft.com/en-us/windows/apps/design/accessibility/accessibility-testing).

### Accessibility Desktop Test Tools

* [Microsoft Accessibility Insights for Windows](https://accessibilityinsights.io/docs/en/windows/overview/)
* [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

### Keyboard only

See section in [UKHO web accessibility testing](web-accessibility-testing.md#keyboard-only).

### Screen Readers

See section in [UKHO web accessibility testing](web-accessibility-testing.md#screen-readers).

### Screen Magnifiers

See section in [UKHO web accessibility testing](web-accessibility-testing.md#screen-magnifiers).
