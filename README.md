# Software Licensing Compliance Skill

> **⚠️ LEGAL DISCLAIMER**
> This guide is provided for **educational and informational purposes only** and does not constitute legal advice. The author is **not a lawyer**, and this material should not be relied upon as a substitute for professional legal counsel.
>
> For production software, consult a qualified attorney familiar with intellectual property law, open source licensing, and your jurisdiction's legal requirements.

---


> **GitHub Disclaimer**
> This repository provides general information and templates. It does **not** provide legal advice, create an attorney-client relationship, or guarantee compliance.
> Use at your own risk and consult qualified counsel for legal questions.

---

## Overview

A comprehensive reference guide for managing software licensing compliance in modern software projects. This skill covers dependency auditing, license compatibility analysis, third-party attribution, EULA creation, and compliance workflows across multiple ecosystems.

**Use this skill to:**
- ✅ Audit open source dependencies for license compatibility
- ✅ Detect copyleft obligations (GPL, LGPL, MPL)
- ✅ Generate compliant third-party license bundles
- ✅ Create attribution UI (About dialogs, credits screens)
- ✅ Draft EULA templates with regional compliance (GDPR, CCPA)
- ✅ Handle multi-license expressions and dual licensing
- ✅ Scope build-time vs runtime dependencies

---

## Contents

```
managing-software-licensing/
├── README.md                      # This file
├── SKILL.md                       # Complete licensing workflow guide
└── references/
    ├── eula-template.md           # EULA template with regional compliance
    ├── third-party-licenses-template.md  # License bundling formats
    └── attribution-ui-template.md # UI attribution examples
```

---

## Features

### 1. **Multi-Ecosystem Dependency Scanning**
- **JavaScript/Node.js:** license-checker, npm-license-crawler
- **Python:** pip-licenses with json/csv/markdown output
- **Rust:** cargo-license with TSV/JSON formats
- **Go:** go-licenses for dependency scanning
- **.NET/NuGet:** dotnet-project-licenses for license reporting
- **Java:** Maven/Gradle plugins for license reports
- **Ruby/PHP/Swift/C++:** Ecosystem-specific tools (Composer, CocoaPods, vcpkg, Conan)
- Guidance for handling multi-license expressions (OR/AND/dual-license)

### 2. **Non-Code Asset & Binary Auditing**
- **Fonts:** SIL OFL, Apache-2.0 license verification
- **Icons/Images:** Creative Commons, MIT, proprietary asset tracking
- **Datasets/Models:** CC-BY, ODbL, ML model licensing
- **Bundled Binaries:** DLLs, embedded runtimes (Python, .NET, Node.js), native libraries
- **OS Components:** WebView2, GTK/Qt, system library disclosure

### 3. **Third-Party Services & Data**
- API terms of service disclosure (Google Maps, Stripe, etc.)
- SaaS library attribution (Sentry, Mixpanel, Firebase)
- Public dataset licensing (NCBI, OpenStreetMap, Kaggle)
- Content delivery network (CDN) requirements

### 4. **License Compatibility Analysis**
- Permissive licenses (MIT, Apache-2.0, BSD)
- Weak copyleft (LGPL, MPL-2.0)
- Strong copyleft (GPL, AGPL)
- Build-time vs runtime scoping
- Proc-macro and target-specific dependency exclusion

### 5. **Packaging & Distribution Compliance**
- Tauri/Electron/desktop app bundle.resources configuration
- Docker/container image license bundling
- Mobile app (iOS/Android) license disclosure
- Installer license file inclusion (Windows/Linux/macOS)
- Risk/decision matrix (ship/disclose/remove/replace)

### 6. **Platform-Specific Checklists**
- **Electron:** Chromium, Node.js, FFmpeg, native modules, auto-update disclosure
- **Avalonia:** .NET runtime, NuGet packages, SkiaSharp, embedded resources
- **WPF:** WebView2, third-party controls, P/Invoke DLLs, XAML resources

### 7. **Third-Party Attribution Templates**
- `THIRD_PARTY_LICENSES.txt` format (consolidated)
- Apache `NOTICE` file format
- GPL/LGPL source availability notices
- Multi-license summary guidance

### 8. **EULA Template (Comprehensive)**
- Clickwrap vs browsewrap acceptance
- Regional compliance sections (EU GDPR, California CCPA, Germany pre-purchase)
- Third-party software disclosure
- Export control language
- Dispute resolution (arbitration)
- Warranty disclaimers and limitation of liability

### 9. **Attribution UI Examples**
- React/TypeScript About dialog components
- Mobile settings screen layouts
- Web credits page templates
- Best practices for discoverability

---

## Installation

### Via npm (from npm registry)

```bash
npm install @rajioba1/managing-software-licensing
```

### Via npm (from GitHub)

```bash
npm install github:Rajioba1/managing-software-licensing
```

---

## Use with Codex

**Option A: Copy into Codex skills**

```text
$CODEX_HOME/skills/managing-software-licensing/
```

Place this repo folder there so `SKILL.md` is at the root of the skill folder.

**Option B: Install from GitHub (if you use a Codex skill installer)**

```text
Rajioba1/managing-software-licensing
```

Then reference the skill by name in your prompt:

```
Use the managing-software-licensing skill to audit my dependency licenses.
```

---

## Use with Claude

**Project Knowledge**

Add `SKILL.md` to your Claude Project Knowledge. Then prompt:

```
Use the managing-software-licensing guide to review my license compliance plan.
```

**One-off sessions**

Paste the contents of `SKILL.md` into the chat and ask for the specific task.

### Usage

**Command Line:**

```bash
# View the complete guide
licensing-skill guide

# Copy templates to your project
licensing-skill copy eula
licensing-skill copy licenses
licensing-skill copy attribution

# List available templates
licensing-skill list
```

**Programmatic Usage (Node.js):**

```javascript
const licensing = require('@rajioba1/managing-software-licensing');

// Get the complete guide
const guide = licensing.getGuide();

// Get templates
const eulaTemplate = licensing.getEulaTemplate();
const licensesTemplate = licensing.getThirdPartyLicensesTemplate();
const attributionTemplate = licensing.getAttributionTemplate();

// Copy a template to your project
licensing.copyTemplate('eula', './EULA.txt');
```

---

## Quick Start

### 1. Review the Main Guide

Read **[SKILL.md](SKILL.md)** for the complete licensing compliance workflow:

```bash
# Audit JavaScript dependencies
npx license-checker --production --json > licenses.json
npx license-report --output=table > THIRD_PARTY_LICENSES.txt

# Audit Python dependencies
pip-licenses --format=plain --with-license-file > THIRD_PARTY_LICENSES.txt

# Audit Rust dependencies
cargo install cargo-license
cargo license --json > licenses.json
```

### 2. Use the Templates

**EULA Template:**
See [references/eula-template.md](references/eula-template.md)

- Customize `[Company Name]`, `[Software Name]`, `[Contact Email]`
- Add regional compliance sections as needed (EU, California, Germany)
- Include third-party software disclosure
- **Get legal review before shipping**

**Third-Party License Bundle:**
See [references/third-party-licenses-template.md](references/third-party-licenses-template.md)

- Copy the `THIRD_PARTY_LICENSES.txt` template
- Run automated license scans for your ecosystems
- Include full license text (not just SPDX identifiers)
- Bundle with your installer

**Attribution UI:**
See [references/attribution-ui-template.md](references/attribution-ui-template.md)

- Add an About dialog with "Third-Party Licenses" link
- Include copyright notices for major dependencies
- Link to full `THIRD_PARTY_LICENSES.txt` file

### 3. Before Shipping

- [ ] Run license scans for **runtime dependencies only** (exclude dev/build-time)
- [ ] Generate `THIRD_PARTY_LICENSES.txt` with full license text
- [ ] Bundle license file with installer (Windows: NSIS, macOS: DMG, Linux: .deb/.rpm)
- [ ] Add attribution to About dialog or Settings → Legal
- [ ] Review for copyleft obligations (GPL/LGPL)
- [ ] **Get legal review from qualified attorney**

---

## Key Concepts

### Permissive vs Copyleft Licenses

| License Type | Examples | Compatibility | Obligations |
|--------------|----------|---------------|-------------|
| **Permissive** | MIT, Apache-2.0, BSD | ✅ Compatible with proprietary software | Preserve copyright notice, include license text |
| **Weak Copyleft** | LGPL-2.1/3.0, MPL-2.0 | ⚠️ File-level or library copyleft | Modified MPL files must remain MPL; LGPL requires relinking allowance |
| **Strong Copyleft** | GPL-2.0, GPL-3.0, AGPL | ❌ Derivative works must be GPL | Must provide source code or written offer |

### Build-Time vs Runtime Dependencies

**Runtime dependencies:**
- Bundled in your final executable/installer
- **MUST** be included in `THIRD_PARTY_LICENSES.txt`
- Examples: production npm packages, Python requirements, statically linked Rust crates

**Build-time only (exclude from attribution):**
- Dev dependencies (e.g., eslint, pytest, clippy)
- Proc-macro crates (compile-time code generation)
- Target-specific dependencies not included in your platform build

### Multi-License Expressions

```
Apache-2.0 OR MIT        # Dual-licensed (you can choose either)
Apache-2.0 AND MIT       # Both licenses apply (must comply with both)
Apache-2.0 WITH LLVM-exception  # Apache with LLVM exception clause
```

**How to handle:**
- `OR` expressions: Choose the most permissive license for your use case
- `AND` expressions: Comply with both licenses
- Document your choice in `THIRD_PARTY_LICENSES.txt`

---

## Limitations

### What This Skill Does NOT Cover

❌ **Legal advice** - Consult a qualified attorney
❌ **No compliance guarantees** - This is guidance only; you are responsible for legal compliance

❌ **Patent analysis** - Patents are complex; get professional counsel
❌ **Trademark clearance** - Trademarks require separate legal review
❌ **Export control** - ITAR/EAR compliance requires specialized counsel
❌ **Industry-specific regulations** - Medical (FDA), finance (SOX), etc. need domain specialists
❌ **Contract negotiation** - Commercial license agreements need lawyers

### Scope

This skill focuses on:
- ✅ Open source license compliance (MIT, Apache, GPL, etc.)
- ✅ Third-party attribution requirements
- ✅ EULA template structure and common clauses
- ✅ Dependency scanning automation
- ✅ Best practices from industry sources

---

## Sources & Attribution

This skill incorporates best practices and templates from:

- **License Compliance:**
  - [AboutCode OSS Attribution Best Practices](https://aboutcode.org/2015/oss-attribution-best-practices/)
  - [Apache Licensing Howto](https://infra.apache.org/licensing-howto.html)
  - [Google Open Source Licenses](https://opensource.google/documentation/reference/thirdparty/licenses)
  - [Amazon OSS Attribution Builder](https://github.com/amzn/oss-attribution-builder)

- **EULA Templates:**
  - [TermsFeed EULA Guide](https://www.termsfeed.com/blog/sample-eula-template/)
  - [Termly EULA Resources](https://termly.io/resources/templates/eula/)
  - [ComplyDog EULA Guide](https://complydog.com/blog/complete-eula-guide-end-user-license-agreement-software-companies)
  - [Hyperstart EULA Best Practices](https://www.hyperstart.com/blog/end-user-license-agreement/)

- **Attribution UI:**
  - [Android AttributionPresenter](https://github.com/franmontiel/AttributionPresenter)
  - [Amazon OSS Attribution Builder](https://github.com/amzn/oss-attribution-builder)

All templates have been adapted for general use and are provided under the terms specified in [LICENSE](#license).

---

## Related Resources

- [SPDX License List](https://spdx.org/licenses/) - Standard license identifiers
- [Choose a License](https://choosealicense.com/) - GitHub's license guide
- [TLDRLegal](https://tldrlegal.com/) - Software licenses in plain English
- [FOSSology](https://www.fossology.org/) - Open source license scanning tool
- [ScanCode Toolkit](https://github.com/nexB/scancode-toolkit) - Comprehensive license scanner

---

## License

This skill is licensed under the **MIT License** (see [LICENSE](LICENSE) file).

**Note:** Replace placeholders in `LICENSE` before publishing.

**You are free to:**
- ✅ Use this skill for personal or commercial projects
- ✅ Modify templates for your specific needs
- ✅ Distribute copies with attribution

**You must:**
- ✅ Include the original MIT license and copyright notice
- ✅ Provide attribution to this repository

**You cannot:**
- ❌ Hold the author liable for damages
- ❌ Use this material as a substitute for legal advice

---

## Disclaimer & Warranty

**NO WARRANTY:** This information is provided "as is" without warranty of any kind, express or implied. The author makes no representations or warranties about the accuracy, completeness, or suitability of this information.

**NO LIABILITY:** In no event shall the author be liable for any claim, damages, or other liability arising from the use of this information.

**NOT LEGAL ADVICE:** This skill does not create an attorney-client relationship. For legal matters, consult a licensed attorney in your jurisdiction.

---

## Contributing

Contributions are welcome! If you find errors, outdated information, or want to add new templates:

1. **Open an issue** to discuss proposed changes
2. **Submit a pull request** with clear descriptions
3. **Cite sources** for any new legal/compliance information
4. **Maintain the educational tone** - this is a reference guide, not legal advice

**Note:** Contributions should focus on factual information, best practices, and template improvements. Legal interpretations should cite authoritative sources.

---

## Changelog

### v1.5.0 (2026-01-29)
- ✅ Added non-code asset audit (fonts, icons, images, datasets, ML models)
- ✅ Added bundled binaries & native libraries audit (DLL/.so/.dylib, embedded runtimes)
- ✅ Added third-party services & data disclosure (API terms, SaaS, datasets)
- ✅ Added OS-provided components disclosure (WebView2, GTK/Qt, system libraries)
- ✅ Added packaging surface checklist (Tauri, Electron, Docker, mobile, installers)
- ✅ Added risk/decision matrix (ship/disclose/remove/replace framework)
- ✅ Added platform-specific checklists (Electron, Avalonia, WPF)
- ✅ Expanded ecosystem coverage (Go, .NET/NuGet, Java/Gradle, Ruby, PHP, Swift, C++/vcpkg/Conan)

### v1.4.0 (2026-01-29)
- ✅ Added third-party license bundling templates
- ✅ Added attribution UI examples (React, mobile, web)
- ✅ Added scan command examples (Node.js, Python, Rust)
- ✅ Clarified UI attribution scope (best practice vs requirement)
- ✅ Expanded license text guidance in templates

### v1.3.1 (2026-01-29)
- ✅ Initial EULA template with regional compliance
- ✅ Clickwrap guidance and acceptance mechanisms
- ✅ Export control and data privacy sections

### v1.0.0 (2025-12-15)
- ✅ Initial release with dependency scanning workflows
- ✅ License compatibility analysis
- ✅ Basic THIRD_PARTY_LICENSES.txt templates

---

## Support & Questions

This resource is maintained by the author. For questions:

1. **Check the [SKILL.md](SKILL.md) guide** - Most questions are answered there
2. **Search existing issues** - Your question may already be answered
3. **Open a new issue** - Provide context and specific questions

**For legal questions:** Consult a qualified attorney. This project cannot provide legal advice.

---

## Acknowledgments

Thanks to the open source community for publishing licensing best practices, and to the organizations cited in [Sources](#sources--attribution) for making compliance resources freely available.

---

**Version:** 1.5.0
**Last Updated:** January 29, 2026
**Author:** Rajioba1
**Repository:** https://github.com/Rajioba1/managing-software-licensing

---

**Remember:** Licensing compliance is not one-size-fits-all. Use these templates as starting points, customize for your specific needs, and **always get legal review before shipping production software.**
