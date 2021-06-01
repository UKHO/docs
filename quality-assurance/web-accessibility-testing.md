
# How to test for Accessibility

## Overview

When testing for accessibility you will need to include in your approach:

* Automated testing to identify common problems
* Manual testing using browser plugins that will automatically report problems
* Manual testing using screen readers
* Manual testing using screen magnifiers
* Manual testing using voice control

You also need to consider cross-browser testing. Unless you are supporting a single browser it's unlikely you will have enough time to complete all testing against all browsers. Therefore the aim is to carry out a selection of the above against all the supported browsers.

## Test Approach

1. Integrate an automated tool into your build pipeline to identiofy common problems.
1. Run browser plugins manually against each page of your website. Note the different browsers supported by each.
1. Read [how to test with assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies) to understand how to test using screen readers, magnifiers and voice control.

## Automated Testing - recommended tooling

* [axe-core](https://github.com/dequelabs/axe-core)
* [ject-core](https://www.npmjs.com/package/jest-axe) - axe-core called by the Jest test framework.

## Manual Testing using browser plugins - recommended tooling

* [Microsoft Accessibility Insights](https://accessibilityinsights.io/) - for Edge and Chrome
* [WAVE](https://wave.webaim.org/extension/) - for Chrome and Firefox

## Manual testing using screen readers - recommended tooling

* [NVDA](https://www.nvaccess.org/download/) - Windows
* [Windows Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) - built into Windows 10 but not used by many people so only use if NVDA cannot be
* [Apple VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) - Apple Mac

Note that JAWS is a common screen reader but it is not free. It also attempts to fix issues on-the-fly that does not aid finding issues.

## Manual testing using screen magnifiers - recommended tooling

* [Windows Magnifier](https://support.microsoft.com/en-us/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) - Windows 10
* [Apple Zoom](https://support.apple.com/en-gb/HT210978) - Apple Mac

Note that ZoomText is a recommended tool for screen magnifiers but is not free.

## Manual testing using voice control - recommended tooling

* [Windows Speech Recognition](https://support.microsoft.com/en-us/windows/use-voice-recognition-in-windows-10-83ff75bd-63eb-0b6c-18d4-6fae94050571) - Windows 10
* [Apple Dictation](https://support.apple.com/en-gb/HT210539) - Apple Mac
