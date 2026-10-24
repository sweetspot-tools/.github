# Security policy

The Sweetspot Tools projects are under active development and are not recommended for production use yet. Security
reports are still welcome and taken seriously, in every repository of the
[sweetspot-tools](https://github.com/sweetspot-tools) organization.

## Supported versions

Only the latest release of each repository, and its default branch, receive security fixes. There are no long-term
support branches.

## Reporting a vulnerability

**Do not open a public issue, pull request or discussion for a vulnerability.**

1. **Preferred:** use GitHub's private report form. In the repository concerned, open the **Security** tab and choose
   **Report a vulnerability**. The report is visible only to the maintainer and to you.
2. **Otherwise** write to myentity@inwind.it with the subject `[security] <repository>`.

Please include:

- the repository, and the version or commit;
- the host (DAW, browser or operating system) and its version;
- a description of the problem and of its impact;
- the steps to reproduce it, or a proof of concept;
- a suggested fix, if you have one;
- whether you want to be credited.

## What to expect

The projects are maintained by one person, so the answers are best-effort. You will get an acknowledgement, and we will
keep you informed while the problem is verified and fixed. We follow coordinated disclosure: the fix is released first,
then the advisory is published (with a CVE when it applies), with credit if you wish. Please give us a reasonable time
before disclosing the problem publicly.

## Scope

- **In scope:** the code of the repositories of the organization: the plug-ins, the standalone apps and the web tools.
- **Dependencies:** report a flaw of a third-party component (VST3 SDK, JUCE, NAM, Airwindows and the others listed in
  each repository) to its maintainers, and tell us as well when our use of it is affected.
- Please test only systems you own or are allowed to test.
