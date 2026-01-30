---
name: managing-software-licensing
description: Guide on software licensing choices, compliance auditing, and dependency obligations. Use when selecting open source licenses, evaluating license compatibility, auditing dependencies for compliance, preparing NOTICE/attribution files, or resolving license conflicts in projects.
---

# Managing Software Licensing

Practical guidance for choosing licenses, ensuring compliance, and managing third-party dependencies—without getting lost in legal complexity.

**Remember:** This skill provides operational guidance, not legal advice. Consult qualified legal counsel for binding interpretations.

---

## When to Use This Skill

- **License Selection**: Choosing a license for new projects or open-sourcing existing code
- **Obligation Interpretation**: Understanding what licenses require (MIT, Apache-2.0, GPL, LGPL, MPL, AGPL)
- **Compatibility Analysis**: Determining if licenses can be combined in a single project
- **Dependency Auditing**: Scanning third-party packages for license compliance
- **Attribution Preparation**: Creating NOTICE files, license headers, and compliance bundles
- **SPDX Usage**: Working with standardized license identifiers and expressions

---

## Quick Reference

### License Family Overview

| Family | Obligations | Closed-Source OK? | Examples |
|--------|-------------|-------------------|----------|
| **Permissive** | Keep notices; minimal restrictions | Yes | MIT, BSD-2/3-Clause, Apache-2.0, ISC |
| **Weak Copyleft** | Modifications to licensed files must stay open | Partial | LGPL-2.1/3.0, MPL-2.0, EPL-2.0 |
| **Strong Copyleft** | Entire derivative work must use same license | No | GPL-2.0, GPL-3.0 |
| **Network Copyleft** | SaaS/network use triggers source disclosure | No | AGPL-3.0 |
| **Public Domain-like** | Minimal restrictions; dedication or near-zero terms | Yes | CC0-1.0, Unlicense, 0BSD |
| **Proprietary** | All rights reserved; no copying/modification | No | Commercial EULA |

### Golden Rules

1. **No license = All rights reserved** — Code without a license cannot be legally used
2. **Always use SPDX identifiers** for tooling compatibility (e.g., `MIT`, `Apache-2.0`, `GPL-3.0-only`)
3. **Verify OSI approval** before selecting a license for open source projects
4. **Include full license text** in all distributions (source and binary)
5. **Copyleft licenses are often incompatible**; verify explicit compatibility before combining

### EULA vs Open Source Licenses

**Use a proprietary EULA when:**
- Distributing closed-source software (desktop apps, mobile apps, games)
- Selling commercial software with restrictions on redistribution
- Retaining all intellectual property rights (no source code disclosure)
- Controlling how users can use, modify, or distribute your software

**Use an open source license when:**
- Sharing source code publicly (GitHub, GitLab, etc.)
- Encouraging community contributions and collaboration
- Building trust through transparency (users can audit the code)
- Leveraging ecosystem effects (e.g., Node.js packages, Python libraries)

**EULA Template:** For a comprehensive EULA template with EU/CCPA compliance, clickwrap guidance, and export control clauses, see `references/eula-template.md`.

**Note:** Some projects use **dual licensing** (e.g., GPL for open source, commercial EULA for closed-source use). This allows free use under GPL while offering a paid commercial license for proprietary integrations.

**Template usage checklist (quick):**
- Choose your **license model** (per-seat, per-device, subscription, trial).
- Confirm **distribution model** (desktop/client app vs SaaS — SaaS still needs ToS + Privacy Policy).
- Fill in **jurisdiction**, **liability cap**, **support**, and **termination** terms.
- Ensure **third-party notices** are accurate and bundled with your installer.

### Policy Guardrails (Operational)

- **No token matching**: accept only exact SPDX IDs (e.g., `CC-BY-4.0`), never partial matches like `CC-BY`.
- **Unknown/NOASSERTION/NONE**: treat as **blocked** until reviewed or replaced.
- **Dual-licensed packages**: record the **chosen SPDX option**; if not chosen, bundle **both** license texts.
- **Non-OSI or custom licenses**: treat as **proprietary** unless explicitly approved.
- **Copyleft in proprietary distribution**: require legal review before shipping.
- **Non-code assets** (fonts, icons, datasets, images): audit separately; many have non-software terms (NC/ND/SA).

---

### Public Release Guardrails (GitHub / External Sharing)

- **Add a clear disclaimer**: state “not legal advice” at the top of the repository and in this SKILL.md.
- **Use hedged language**: say “guidance,” “template,” “example,” “best-effort,” not “compliant,” “safe,” or “guaranteed.”
- **Remove unverifiable claims**: delete hard stats, enforcement claims, or jurisdictional guarantees unless you can cite sources.
- **Include a license for the skill content**: pick MIT/CC-BY/CC0 or explicitly reserve rights; do not leave the repo unlicensed.
- **Encourage legal review**: tell users to consult qualified counsel for binding interpretations.
- **Keep scope clear**: distinguish software licensing guidance from privacy policy, ToS, or regulatory compliance.

---

## Intake Checklist

Before advising on licensing, gather these details:

### Project Context
- [ ] **Project type**: Library, application, plugin, CLI tool, SaaS, SDK, data/model, documentation
- [ ] **Distribution model**: Internal only, public binaries, source release, app stores, SaaS/cloud
- [ ] **Commercial intent**: Open source community project, dual-licensed, proprietary with open deps

### Dependencies & Contributions
- [ ] **Known dependency licenses**: List SPDX IDs for all direct dependencies
- [ ] **Unknown/unlicensed deps**: Flag for review or replacement
- [ ] **Contribution model**: No contributors, CLA required, DCO (Developer Certificate of Origin)

### Constraints
- [ ] **Company policy**: Copyleft allowed? AGPL banned? Approved license list?
- [ ] **Patent considerations**: Need explicit patent grants (Apache-2.0, GPL-3.0)?
- [ ] **Jurisdictional requirements**: GDPR, export controls, government contracts

---

## License Selection Workflow

### Step 1: Define Your Goals

| Goal | Recommended License | Why |
|------|---------------------|-----|
| Maximum adoption, permissive | **MIT** or **Apache-2.0** | Minimal obligations; widely trusted |
| Require sharing improvements | **GPL-3.0** | Strong copyleft; derivative works must be GPL |
| Library linking flexibility | **LGPL-3.0** | Weak copyleft; linking OK, modifications shared |
| Protect against SaaS exploitation | **AGPL-3.0** | Network use triggers source disclosure |
| Explicit patent protection | **Apache-2.0** | Express patent grant from contributors |
| No restrictions at all | **MIT-0**, **Unlicense**, or **CC0-1.0** | Public domain-like |

### Step 2: Match Community Norms

- **JavaScript/Node.js**: MIT is dominant
- **Rust ecosystem**: MIT OR Apache-2.0 dual licensing common
- **Python**: MIT, BSD, Apache-2.0 widely used
- **Java enterprise**: Apache-2.0 preferred
- **Linux kernel**: GPL-2.0-only (not "or later")
- **FSF projects**: GPL-3.0-or-later

### Step 3: Validate and Document

1. **Verify OSI approval**: Check [opensource.org/licenses](https://opensource.org/licenses)
2. **Use SPDX identifier**: e.g., `Apache-2.0`, `MIT`, `GPL-3.0-only`
3. **Add required files**:
   - `LICENSE` (full text, required)
   - `NOTICE` (if Apache-2.0, required for attribution)
   - `COPYING` (traditional name for GPL)
4. **Document rationale**: Optional `LICENSE_DECISION.md` explaining choice

---

## SPDX Usage Guidelines

**SPDX** (Software Package Data Exchange) provides standardized license identifiers recognized by all major package managers and compliance tools.

### Common Identifiers

| License | SPDX ID | OSI Category |
|---------|---------|--------------|
| MIT License | `MIT` | Popular / Strong Community |
| Apache License 2.0 | `Apache-2.0` | Popular / Strong Community |
| BSD 2-Clause | `BSD-2-Clause` | Popular / Strong Community |
| BSD 3-Clause | `BSD-3-Clause` | Popular / Strong Community |
| GNU GPL v2.0 | `GPL-2.0-only` | Popular / Strong Community |
| GNU GPL v3.0 | `GPL-3.0-only` | Popular / Strong Community |
| GNU LGPL v2.1 | `LGPL-2.1-only` | Popular / Strong Community |
| GNU LGPL v3.0 | `LGPL-3.0-only` | Popular / Strong Community |
| GNU AGPL v3.0 | `AGPL-3.0-only` | Uncategorized |
| Mozilla Public License 2.0 | `MPL-2.0` | Popular / Strong Community |
| Eclipse Public License 2.0 | `EPL-2.0` | Popular / Strong Community |
| ISC License | `ISC` | Uncategorized |
| The Unlicense | `Unlicense` | Special Purpose |
| CC0 1.0 Universal | `CC0-1.0` | Special Purpose |

### SPDX Expressions

Use expressions to represent complex licensing:

```
MIT                           # Single license
MIT OR Apache-2.0             # User can choose either (disjunction)
MIT AND BSD-3-Clause          # Both apply (conjunction)
GPL-3.0-only WITH Classpath-exception-2.0  # License with exception
(MIT OR Apache-2.0) AND BSD-3-Clause       # Compound expression
```

### Handling Unknowns

- **`NOASSERTION`**: License exists but is not identified (queue for review)
- **`NONE`**: No license information found (treat as "all rights reserved")
- **Custom license**: Use `LicenseRef-[idstring]` for non-standard licenses

---

## License Families Deep Dive

### Permissive Licenses

**Examples**: MIT, BSD-2-Clause, BSD-3-Clause, Apache-2.0, ISC, Unlicense

**Key characteristics**:
- Allow commercial use, modification, distribution, private use
- Require preserving copyright/license notices
- Allow closed-source derivatives
- No patent grant (BSD, MIT, ISC) vs. explicit patent grant (Apache-2.0)

**Apache-2.0 specifics**:
- Provides express patent grant from contributors
- Requires NOTICE file preservation **if** a NOTICE file is provided upstream
- Requires stating changes to modified files
- **Incompatible with GPL-2.0** (patent clause conflict); compatible with GPL-3.0+
- NOTICE should include only legally required notices and should reflect bundled contents of the distribution
- LICENSE/NOTICE should match the exact contents of each distribution (source vs binary can differ)
- Do not add non-bundled dependencies to LICENSE/NOTICE; only bundled bits matter

### Weak Copyleft Licenses

**Examples**: LGPL-2.1, LGPL-3.0, MPL-2.0, EPL-2.0

**Key characteristics**:
- Modifications to licensed code must be shared under same license
- Linking/using as library may not trigger copyleft (varies by license)
- Allow combining with proprietary code under certain conditions

**LGPL specifics**:
- Designed for libraries—allows proprietary programs to link
- Modifications to LGPL code itself must remain LGPL
- Must allow users to relink with modified library versions

**MPL-2.0 specifics**:
- File-level copyleft (only modified files must be MPL)
- GPL compatibility can be enabled via Secondary License terms; confirm headers and whether files are marked "Incompatible With Secondary Licenses"
- Can combine MPL code with proprietary code in same project
- MPL FAQ notes Secondary License incompatibility is opt-in (Exhibit B), not the default

### Strong Copyleft Licenses

**Examples**: GPL-2.0, GPL-3.0

**Key characteristics**:
- Derivative works must be distributed under the same license
- Source code must be made available to recipients
- "Viral" effect: combining GPL code with other code may require entire work to be GPL

**GPL-2.0 vs GPL-3.0**:
- GPL-3.0 adds: Tivoization protection, patent retaliation, compatibility with Apache-2.0
- GPL-2.0 is NOT compatible with Apache-2.0 (patent clause conflict)
- Use `GPL-3.0-or-later` to allow future version upgrades

### Network Copyleft (AGPL-3.0)

**Key characteristics**:
- Same as GPL-3.0, plus: network use triggers source disclosure
- If you modify and deploy as SaaS, users can request source code
- Designed to close the "SaaS loophole" in GPL

**When to use AGPL**:
- Cloud/SaaS applications where you want to prevent closed-source forks
- When you want competitors to contribute back if they use your code

---

## License Compatibility Matrix

Understanding which licenses can be combined is critical for multi-dependency projects.

**Note:** This matrix is simplified guidance. Always verify compatibility against the actual license text and authoritative compatibility references.

### Compatibility Principles (from FSF/GNU)

1. **Lax/permissive licenses** are compatible with almost everything
2. **Copyleft licenses are often incompatible** with each other (unless explicit compatibility exists)
3. **License subsumption**: License A subsumes B if compliance with A implies compliance with B

### Common Compatibility Rules

| Outbound License | Compatible Inbound Licenses |
|------------------|----------------------------|
| **MIT** | MIT, BSD, ISC, CC0, Unlicense, public domain |
| **Apache-2.0** | MIT, BSD, ISC, CC0, Unlicense (NOT GPL-2.0) |
| **GPL-2.0-only** | MIT, BSD, ISC, LGPL-2.1 (NOT Apache-2.0, NOT GPL-3.0) |
| **GPL-3.0-only** | MIT, BSD, ISC, Apache-2.0, LGPL-2.1+, LGPL-3.0, GPL-2.0+ |
| **AGPL-3.0** | Everything GPL-3.0 allows (with explicit AGPL-GPL provision) |
| **LGPL-3.0** | Similar to GPL-3.0 for modifications to the library |
| **MPL-2.0** | MIT, BSD, ISC, Apache-2.0; GPL/LGPL/AGPL only if Secondary License terms apply |

### Incompatibility Examples

- **GPL-2.0 + Apache-2.0**: Incompatible (patent clause conflict in Apache-2.0)
- **GPL-2.0-only + GPL-3.0-only**: Incompatible (different versions, no "or later")
- **AGPL-3.0 + proprietary**: Incompatible (AGPL requires source disclosure)
- **Original BSD (4-clause) + GPL**: Incompatible (advertising clause)

### Dual Licensing Strategy

Dual licensing offers users a choice:
```
SPDX-License-Identifier: MIT OR Apache-2.0
```
- User chooses which license to comply with
- Common in Rust ecosystem for maximum compatibility
- Resolves Apache-2.0/GPL-2.0 conflict (user picks MIT for GPL-2.0 projects)

---

## Compliance Checklist (Redistribution)

### For All Licenses

- [ ] Include **full license text** in all distributions (source and binary)
- [ ] Preserve **copyright notices** in source files
- [ ] Keep **attribution statements** intact

### For Apache-2.0 Specifically

- [ ] Include `NOTICE` file **if present** in original
- [ ] **State changes**: Document modifications to licensed files
- [ ] Preserve the Apache-2.0 license text (patent grant is in the license)

### For GPL/LGPL/AGPL

- [ ] Include **complete corresponding source code** with binaries
- [ ] If not bundling source, provide a **written offer** valid for at least 3 years where applicable (see GPLv2/GPLv3 text)
- [ ] GPLv3 also allows offering equivalent network access to Corresponding Source alongside object code distribution
- [ ] Use **same license** for derivative works
- [ ] For LGPL: Allow user to relink with modified library
- [ ] GPLv2 object-code distribution options include shipping source or providing a written offer; see GPLv2 for the complete set of options
- [ ] "Complete corresponding source" includes build scripts and interface definition files (not system libraries)

### For AGPL

- [ ] Offer source code download to **network users** of modified AGPL software
- [ ] Treat SaaS deployment as triggering AGPL obligations when applicable

### Binary Distribution Checklist

- [ ] Bundle all license texts in `licenses/` directory
- [ ] Generate attribution file (e.g., `THIRD_PARTY_LICENSES.txt`)
- [ ] Include copyright year and holder for each dependency
- [ ] Verify no copyleft violations if distributing closed-source

---

## Closed-Source Binary + Commercial Distribution Requirements

Use this section when you want to ship proprietary binaries and charge money.

### Permissive Licenses (MIT/BSD/ISC/Apache-2.0)

- **Commercial use is allowed.** You can sell binaries and keep your source closed.
- **Must keep notices**: include the license text and preserve copyright/permission notices.
- **Apache-2.0 adds**: retain NOTICE content (if provided) and mark modified files.

### Weak Copyleft (LGPL/MPL)

**LGPL (libraries)**:
- You can keep your app closed-source **if** users can relink with a modified LGPL library.
- Use **dynamic linking** or provide **linkable object files** for static linking.
- Provide LGPL license text and the library source code you ship/modify.

**MPL 2.0 (file-level copyleft)**:
- You can distribute a proprietary **Larger Work**, but MPL-covered files must remain MPL.
- Provide **source for MPL-covered files** when distributing executables.
- Preserve MPL notices and license text; do not relicense MPL files unless Secondary License terms apply.

### Strong Copyleft (GPL/AGPL)

- **You cannot distribute closed-source derivative works.**
- If you distribute binaries, you must provide full corresponding source under the same license.
- **Commercial distribution is allowed**, but copyleft obligations still apply.
- **AGPL**: network deployment of modified AGPL software must offer source to network users.

### Quick Decision Rules

- **Want closed-source binaries** → choose permissive or weak copyleft (with compliance).
- **Have GPL/AGPL deps** → closed-source distribution is usually not possible unless you isolate/replace.
- **Selling is OK** under GPL/AGPL, but you must distribute source with binaries.

---

## Dependency Audit Workflow

### Phase 1: Discovery

1. **Generate dependency tree** with versions:
   ```bash
   # Node.js
   npm ls --all --json > deps.json
   npx license-checker --json > licenses.json

   # Python
   pip-licenses --format=json > licenses.json

   # Rust
   cargo license --json > licenses.json
   ```

2. **Map each dependency** to SPDX identifier

### Phase 2: Classification

3. **Flag for review**:
   - Unknown licenses (`NOASSERTION`)
   - Non-OSI-approved licenses
   - Custom/proprietary licenses
   - No license at all (`NONE` — cannot legally use)

4. **Categorize by risk**:
   - **Low risk**: MIT, BSD, ISC, Apache-2.0, CC0
   - **Medium risk**: LGPL, MPL, EPL (check linking requirements)
   - **High risk**: GPL, AGPL (copyleft implications)
   - **Blocked**: Proprietary, unlicensed, incompatible

### Phase 3: Compatibility Check

5. **Evaluate compatibility** with your distribution model:
   - Internal use only → All licenses OK
   - Public source → Check copyleft compatibility
   - Closed-source binary → No strong copyleft allowed
   - SaaS deployment → No AGPL without source disclosure

### Phase 4: Documentation

6. **Create attribution bundle**:
   - `THIRD_PARTY_LICENSES.txt` with all license texts
   - `NOTICE` file aggregating required notices
   - License inventory spreadsheet for auditing

---

## Non-Code Asset Audit

Beyond source code dependencies, modern applications bundle **non-code assets** that have their own licensing requirements.

### Asset Categories

**1. Fonts**
- **Licenses**: SIL OFL 1.1, Apache-2.0, proprietary
- **Requirements**: Include full license text, preserve copyright notices, respect Reserved Font Names
- **Common sources**: Google Fonts (OFL/Apache), Adobe Fonts (proprietary), Font Squirrel (various)
- **Tools**: Manual verification via font metadata or source repository

**2. Icons & Images**
- **Licenses**: MIT, Apache-2.0, CC-BY-4.0, CC0, proprietary
- **Requirements**: Attribute creators, include license text, respect "No Derivatives" (ND) restrictions
- **Common sources**: Material Design Icons (Apache-2.0), Font Awesome (mixed licenses; check current terms), custom artwork
- **Pitfalls**: Many icon packs have mixed licenses (free for personal, paid for commercial)

**3. Datasets & Models**
- **Licenses**: CC-BY-4.0, CC-BY-SA-4.0, CC0, ODbL (Open Database License), proprietary
- **Requirements**: Attribute data sources, share derivatives under same license (if SA/copyleft)
- **Common sources**: Kaggle datasets, Hugging Face models, public APIs
- **Pitfalls**: "Non-Commercial" (NC) clauses prohibit commercial distribution

**4. Audio & Video**
- **Licenses**: CC-BY, CC-BY-SA, proprietary
- **Requirements**: Attribute creators, preserve license notices
- **Common sources**: Freesound (CC licenses), YouTube Audio Library (varies)

### Audit Workflow

1. **Inventory**: List all fonts, icons, images, datasets, models in `public/`, `src/assets/`, `Resources/`
2. **Source verification**: Check original download location, license metadata, or embedded EXIF data
3. **License extraction**: Download original license files or generate from Creative Commons chooser
4. **Attribution bundle**: Add to `THIRD_PARTY_LICENSES.txt` or `ATTRIBUTIONS.md`
5. **UI disclosure**: Consider "Credits" or "About" dialog with asset attributions

### Common License Types for Assets
**Reminder:** Creative Commons licenses are for content (assets), not software code.


| License | Commercial Use | Attribution Required | Derivatives Allowed | Share-Alike |
|---------|----------------|---------------------|-----------------------|-------------|
| **CC0-1.0** | Yes | No | Yes | No |
| **CC-BY-4.0** | Yes | Yes | Yes | No |
| **CC-BY-SA-4.0** | Yes | Yes | Yes | Yes |
| **CC-BY-NC-4.0** | No | Yes | Yes | No |
| **CC-BY-ND-4.0** | Yes | Yes | No | No |
| **SIL OFL 1.1** | Yes | Yes | Yes | Yes (fonts only) |

**Pitfall**: Creative Commons **NonCommercial (NC)** and **NoDerivatives (ND)** clauses are **incompatible** with most commercial software distribution.

---

## Bundled Binaries & Native Libraries Audit

Applications often include **native binaries**, **DLLs**, or **embedded runtimes** that require separate license tracking.

### Common Bundled Components

**1. Embedded Language Runtimes**
- **Python embedded** (python.exe, python312.dll, DLLs/)
  - License: PSF License Version 2 (permissive)
  - Bundled components: OpenSSL (Apache-2.0), libffi (MIT), bzip2 (BSD)
  - Requirements: Include `LICENSE.txt` from Python distribution

- **.NET runtime** (self-contained apps)
  - License: MIT
  - Requirements: Include .NET runtime license notices

- **Node.js/Electron** (bundled V8, Chromium)
  - License: Multiple components with different licenses; see bundled license files
  - Requirements: Include `LICENSES.chromium.html` and Node.js `LICENSE`

**2. Native Libraries (DLLs/.so/.dylib)**
- **OpenSSL** (libssl, libcrypto): Apache-2.0
- **FFmpeg** (video/audio codecs): LGPL-2.1+ or GPL-2.0+ (depends on build options)
- **SQLite**: Public domain
- **zlib**: zlib License (permissive)
- **libcurl**: MIT-like (curl license)

**3. Third-Party Tools**
- **EdgeDriver**, **ChromeDriver**: See Chromium license terms (verify for your distribution)
- **Python packages with binary extensions**: Check each package (e.g., NumPy includes BLAS/LAPACK)

### Audit Workflow

1. **Scan binary directories**:
   ```bash
   # Windows
   dir /s /b *.dll *.exe

   # Linux/macOS
   find . -type f \( -name "*.so" -o -name "*.dylib" -o -name "*.a" \)
   ```

2. **Identify provenance**:
   - Check DLL properties (Right-click → Details on Windows)
   - Use `ldd` (Linux) or `otool -L` (macOS) to list dynamic dependencies
   - Review build scripts and dependency lock files

3. **Extract licenses**:
   - Check for `LICENSE.txt` or `COPYING` in runtime directories
   - Download from original source if missing
   - For system libraries (MSVC runtime, glibc), check OS vendor terms

4. **Bundle with distribution**:
   - Add to `THIRD_PARTY_LICENSES.txt`
   - Include in installer resources
   - Document in README or About dialog

### Platform-Specific Considerations

**Windows**:
- **Microsoft VC++ Redistributable** (vcruntime140.dll): Microsoft Software License Terms (permissive, usually no action required if installed via official redistributable)
- **WebView2 Runtime**: Microsoft Software License Terms (disclosure recommended)

**Linux**:
- **glibc**: LGPL-2.1 (system library exception applies)
- **GTK/Qt**: LGPL-2.1/3.0 (relinking requirements apply)

**macOS**:
- **System frameworks**: Apple Software License Agreement (system library exception)

---

## Third-Party Services & Data Disclosure

External services, APIs, and datasets may have **terms of service** requiring disclosure or attribution.

### Service Categories

**1. API Services**
- **Examples**: Google Maps API, Stripe API, Twilio SMS, OpenAI API
- **Requirements**: May require attribution in UI, terms of service acceptance, usage limits disclosure
- **License implications**: API terms may restrict commercial use, require privacy policy, or mandate data handling practices

**2. SaaS Libraries & SDKs**
- **Examples**: Sentry (error tracking), Mixpanel (analytics), Firebase (backend)
- **Requirements**: Include SDK license (usually MIT/Apache-2.0), comply with service ToS
- **License implications**: SDK code may be open source, but **service usage** governed by separate ToS

**3. Public Datasets**
- **Examples**: NCBI Gene Database, OpenStreetMap data, Kaggle datasets
- **Requirements**: Attribute data sources, comply with usage restrictions (e.g., ODbL for OpenStreetMap)
- **License implications**: Some datasets prohibit redistribution or require share-alike

**4. Content Delivery Networks (CDNs)**
- **Examples**: jsDelivr, unpkg, Google Fonts CDN
- **Requirements**: Usually permissive, but check terms for commercial use
- **License implications**: Bundling locally may change license obligations vs. hotlinking

### Disclosure Checklist

- [ ] **Identify all external services**: API calls, SDKs, data downloads
- [ ] **Review terms of service**: Check for attribution requirements, usage restrictions
- [ ] **Document in license bundle**: Add section to `THIRD_PARTY_LICENSES.txt` for services
- [ ] **Update Privacy Policy**: Disclose data sharing with third-party services (GDPR/CCPA)
- [ ] **UI attribution**: Consider footer or About dialog for major services (e.g., "Maps powered by Google Maps")

### Example Attribution (Third-Party Services)

```
Third-Party Services

This application uses the following external services:

- MyGene.info API (https://mygene.info)
  - License: CC-BY-3.0
  - Usage: Gene annotation data
  - Attribution: "Data provided by MyGene.info (Wu et al., 2013)"

- Stripe API (https://stripe.com)
  - License: Stripe Terms of Service
  - Usage: Payment processing
  - Note: No customer data is stored locally

```

---

## OS-Provided Components

Operating system components and runtimes may require disclosure even if not bundled directly.

### Common OS Components

**1. WebView Runtimes**

**Microsoft Edge WebView2 (Windows)**:
- **License**: Microsoft Software License Terms
- **Distribution**: Not bundled by default (downloads from Microsoft if missing)
- **Disclosure**: Recommended to document in README or installer notes
- **Example text**: "This application requires Microsoft Edge WebView2 Runtime. If not installed, it will be downloaded from Microsoft."

**WebKitGTK (Linux)**:
- **License**: LGPL-2.1+ (WebKit), BSD (parts)
- **Distribution**: System package dependency
- **Disclosure**: Document in README (`apt install webkit2gtk-4.0` or similar)

**2. System Libraries**

**Microsoft Visual C++ Redistributable (Windows)**:
- **License**: Microsoft Software License Terms
- **Distribution**: Installer includes vcredist_x64.exe
- **Disclosure**: Usually handled by installer, but document in release notes

**.NET Runtime (Windows/Linux/macOS)**:
- **License**: MIT
- **Distribution**: Self-contained (bundled) or framework-dependent (system install)
- **Disclosure**: Include .NET license if self-contained

**glibc (Linux)**:
- **License**: LGPL-2.1+
- **Distribution**: System library (not bundled)
- **Disclosure**: No action required (system library exception)

**3. Desktop Integration Libraries**

**GTK/Qt (Linux)**:
- **License**: LGPL-2.1/3.0
- **Distribution**: Dynamic linking via system packages
- **Disclosure**: Document required system packages, ensure dynamic linking for LGPL compliance

### Disclosure Best Practices

- **README.md**: List required OS components and installation instructions
- **Installer**: Include redistributable installers (e.g., vcredist, WebView2 bootstrapper)
- **License bundle**: Add section for OS components with links to license terms
- **About dialog**: Optional mention of runtime dependencies (e.g., "Powered by Microsoft Edge WebView2")

---

## Packaging Surface Checklist

Ensure all required license files and attributions are included in your final distribution package.

### Packaging Checklist

**1. Source Distribution (GitHub Release, npm package, PyPI)**
- [ ] `LICENSE` or `COPYING` in repository root
- [ ] `NOTICE` file (if Apache-2.0 or aggregating notices)
- [ ] `THIRD_PARTY_LICENSES.txt` or `licenses/` directory
- [ ] `README.md` with license badges and attribution links
- [ ] SPDX headers in source files (optional but recommended)

**2. Binary Distribution (Installers, App Stores)**
- [ ] `LICENSE.txt` or `LICENSE.rtf` displayed during installation
- [ ] `THIRD_PARTY_LICENSES.txt` bundled in app resources
- [ ] About dialog or Settings → Legal with license viewer
- [ ] Embedded font licenses (if bundled)
- [ ] Python/Node.js/runtime licenses (if bundled)

**3. Tauri/Electron/Desktop Apps**

**Tauri** (`src-tauri/tauri.conf.json`):
```json
{
  "bundle": {
    "resources": [
      "THIRD_PARTY_LICENSES.txt",
      "licenses/*"
    ]
  }
}
```
- [ ] Add license files to `bundle.resources`
- [ ] Verify files are included in final `.msi`/`.dmg`/`.deb` package
- [ ] Test license viewer in About dialog

**Electron** (`package.json` or `electron-builder.yml`):
```json
{
  "build": {
    "extraResources": [
      "THIRD_PARTY_LICENSES.txt",
      "licenses/**/*"
    ]
  }
}
```
- [ ] Add to `extraResources` for `electron-builder`
- [ ] Include `LICENSES.chromium.html` from Electron distribution

**4. Mobile Apps (iOS/Android)**
- [ ] Settings → About → Open Source Licenses
- [ ] Bundle licenses in `Resources/` or `assets/`
- [ ] App Store description mentions open source components (optional)

**5. Docker/Container Images**
- [ ] `LICENSE` file in image filesystem (`/usr/share/licenses/` or `/app/licenses/`)
- [ ] Generate SBOM (Software Bill of Materials) with Syft or Trivy
- [ ] Document base image licenses (e.g., Alpine, Ubuntu)

### Validation Steps

1. **Extract installer**: Unpack `.msi`/`.dmg`/`.deb` and verify license files are present
2. **Check file paths**: Ensure licenses are accessible at runtime (not stripped during build)
3. **Test UI**: Open About dialog and verify license viewer works
4. **Automated scanning**: Run `licensee` or `scancode-toolkit` on final package

---

## Risk/Decision Matrix

When encountering license issues, use this matrix to decide your next action.

### Decision Framework

| License Type | Risk Level | Ship As-Is? | Disclose? | Remove/Replace? |
|--------------|------------|-------------|-----------|-----------------|
| **MIT, BSD, ISC, Apache-2.0** | Low | Yes | Yes (required) | No action needed |
| **CC0, Unlicense, 0BSD** | Low | Yes | Optional | No action needed |
| **MPL-2.0** (unmodified files) | Medium | Yes | Yes (required) | Consider if many files |
| **MPL-2.0** (modified files) | Medium | Conditional | Yes + source | Evaluate alternatives |
| **LGPL-2.1/3.0** (dynamic linking) | Medium | Yes | Yes (required) | Ensure relinking possible |
| **LGPL** (static linking) | High | Conditional | Yes + object files | Replace if possible |
| **GPL-2.0/3.0** | High | No (proprietary) | N/A | Replace immediately |
| **AGPL-3.0** | High | No (proprietary/SaaS) | N/A | Replace immediately |
| **Unknown / NOASSERTION** | High | Block | N/A | Contact maintainer or replace |
| **NONE** (no license) | High | Block | N/A | Cannot use (all rights reserved) |
| **CC-BY-NC, CC-BY-ND** | High | No (commercial) | N/A | Replace with permissive asset |
| **Proprietary** | High | Depends on terms | Check EULA | Review contract |

### Action Steps by Scenario

**Scenario 1: Discovered GPL in Proprietary Codebase**
1. **STOP**: Do not release product as-is
2. **Verify**: Confirm GPL is actually used (not just a dev dependency)
3. **Replace**: Find MIT/Apache-2.0 alternative
4. **Legal review**: If no alternative, consider dual-licensing or purchasing commercial license
5. **Validate**: Re-run license scan after replacement

**Scenario 2: LGPL Library Required for Core Functionality**
1. **Dynamic linking**: Ensure library is loaded as shared library (.dll/.so/.dylib)
2. **Disclose**: Include LGPL license text in distribution
3. **Relinking**: Document how users can relink with modified library
4. **Test**: Verify users can replace library without recompiling app
5. **Alternatives**: Consider replacing with permissive library if relinking is complex

**Scenario 3: Unknown License on Critical Dependency**
1. **Research**: Check GitHub repo, npm/PyPI metadata, package source code
2. **Contact**: Email maintainer requesting license clarification
3. **Wait**: Give 1-2 weeks for response
4. **Replace**: If no response, find alternative (do not ship unlicensed code)
5. **Block**: Treat as "all rights reserved" until clarified

**Scenario 4: Font with Non-Commercial License**
1. **STOP**: Do not bundle with commercial product
2. **Replace**: Use Google Fonts (OFL/Apache-2.0) or commission custom font
3. **Alternative**: Adobe Fonts (via Creative Cloud) may have commercial terms
4. **Verify**: Always check license file, not just font website claims

**Scenario 5: Dual-Licensed Dependency (GPL OR MIT)**
1. **Choose**: Select MIT option for proprietary distribution
2. **Document**: Record choice in `THIRD_PARTY_LICENSES.txt` (e.g., "Used under MIT license")
3. **Comply**: Include MIT license text (not GPL)
4. **Verify**: Ensure chosen license is actually offered by maintainer

---

## Platform-Specific Checklists

### Electron App Checklist

**Bundled Runtime Components:**
- [ ] Electron/Chromium license: Include `LICENSES.chromium.html` from Electron distribution
- [ ] Node.js license: Include Node.js `LICENSE` file
- [ ] FFmpeg/codecs: If enabled or replaced, include FFmpeg license (LGPL-2.1+ or GPL depending on build)
- [ ] Native modules: Scan `*.node` binaries for vendor DLLs/shared libraries

**App Package Contents:**
- [ ] Scan `resources/` or `app.asar` for fonts, images, model files
- [ ] Include `THIRD_PARTY_LICENSES.txt` in `extraResources` (electron-builder)
- [ ] Verify license file is accessible at runtime (not inside asar if unpackAsarIntegrity)

**Auto-Update & Services:**
- [ ] Disclose auto-update endpoints (Squirrel, custom CDN) in Privacy Policy
- [ ] Document any telemetry or crash reporting services (Sentry, etc.)

**System Dependencies:**
- [ ] Windows: Note WebView2 or Edge requirement (if using webview-based features)
- [ ] Linux: List GTK/system library dependencies in README

**Example Electron License Bundle**:
```
electron-app/
├── resources/
│   ├── THIRD_PARTY_LICENSES.txt
│   ├── licenses/
│   │   ├── chromium.html
│   │   ├── nodejs.txt
│   │   └── ffmpeg.txt
└── app.asar
```

---

### Avalonia App Checklist (.NET/Cross-Platform)

**Runtime Components:**
- [ ] .NET runtime: If self-contained, include .NET runtime license notices (`LICENSE.txt` from runtime directory)
- [ ] NuGet packages: List transitive licenses using `dotnet list package --include-transitive`
  - Use `dotnet-project-licenses` tool: `dotnet tool install --global dotnet-project-licenses`
  - Generate report: `dotnet-project-licenses -i . -o -f licenses/`
- [ ] Theme packs/controls: Check licenses for Avalonia.Themes.Fluent, Material.Avalonia, etc.

**Native Libraries:**
- [ ] SkiaSharp: MIT license (SkiaSharp) + BSD license (Skia native)
- [ ] HarfBuzzSharp: MIT license (wrapper) + HarfBuzz license (native)
- [ ] Other native libs: Scan `runtimes/` directory for platform-specific binaries

**Assets & Resources:**
- [ ] Fonts: Embedded in `.axaml` or `Resources/` directory
- [ ] Icons/images: Check `Assets/` directory
- [ ] Include asset licenses in `THIRD_PARTY_LICENSES.txt`

**Installer Bundling:**
- [ ] Verify license files are copied to app folder during installation
- [ ] Windows: Include in WiX/Inno Setup resources
- [ ] Linux: Include in `.deb`/`.rpm` package (`/usr/share/licenses/`)
- [ ] macOS: Include in `.app/Contents/Resources/`

**Example Avalonia License Structure**:
```
avalonia-app/
├── bin/Release/net8.0/
│   ├── MyApp.exe
│   ├── licenses/
│   │   ├── THIRD_PARTY_LICENSES.txt
│   │   ├── dotnet-runtime.txt
│   │   └── nuget-packages.txt
│   └── runtimes/
│       ├── win-x64/native/SkiaSharp.dll
│       └── linux-x64/native/libSkiaSharp.so
```

---

### WPF App Checklist (.NET/Windows-Only)

**Runtime Components:**
- [ ] .NET runtime: Self-contained vs. framework-dependent
  - Self-contained: Bundle .NET runtime license (`LICENSE.txt` from publish directory)
  - Framework-dependent: Document required .NET version in README
- [ ] WebView2: If using WebView2 control, disclose Microsoft Edge WebView2 Runtime terms
  - Include bootstrapper in installer or document auto-download behavior

**Third-Party Controls:**
- [ ] Telerik/DevExpress/Syncfusion/etc.: Check redistribution terms in commercial license
- [ ] Free controls (e.g., MahApps.Metro, ModernWpf): Include license text (usually MIT)
- [ ] NuGet packages: Generate report with `dotnet-project-licenses`

**Native Interop:**
- [ ] P/Invoke DLLs: Any native libraries called via DllImport
- [ ] COM components: Check licensing for third-party COM objects
- [ ] System DLLs: Document if bundling MSVC runtime or other redistributables

**Assets & Resources:**
- [ ] Icons: Embedded as `Resource` in `.csproj` or `Resources/` directory
- [ ] Fonts: Embedded fonts in `Resources/Fonts/`
- [ ] Images: Check `Assets/` or `Resources/Images/`
- [ ] XAML resources: Check for third-party themes or styles

**Installer Bundling:**
- [ ] WiX/Inno Setup: Include license files in installer resources
- [ ] Display license during installation: Use `LicenseFile` (WiX) or `LicenseFile` (Inno Setup)
- [ ] Bundle `THIRD_PARTY_LICENSES.txt` in app directory

**Example WPF License Structure**:
```
wpf-app/
├── bin/Release/net8.0-windows/
│   ├── MyApp.exe
│   ├── LICENSE.txt (your app license or EULA)
│   ├── THIRD_PARTY_LICENSES.txt
│   └── licenses/
│       ├── dotnet-runtime.txt
│       ├── webview2-terms.txt
│       └── nuget-packages.txt
```

**WebView2 Disclosure Example**:
```
This application uses Microsoft Edge WebView2 Runtime.

- License: Microsoft Software License Terms
- Distribution: Downloaded automatically if not installed
- More info: https://developer.microsoft.com/en-us/microsoft-edge/webview2/
```

---

## License Compliance Tools

### Package Manager Plugins

| Ecosystem | Tool | Command |
|-----------|------|---------|
| **Node.js** | license-checker | `npx license-checker --summary` |
| **Node.js** | license-report | `npx license-report --output=table` |
| **Python** | pip-licenses | `pip-licenses --format=markdown` |
| **Rust** | cargo-license | `cargo license` |
| **Java/Maven** | license-maven-plugin | `mvn license:third-party-report` |
| **Java/Gradle** | gradle-license-plugin | `./gradlew generateLicenseReport` |
| **Go** | go-licenses | `go-licenses csv ./...` |
| **.NET/NuGet** | dotnet-project-licenses | `dotnet-project-licenses -i . -o licenses/` |
| **Ruby/Gem** | license_finder | `license_finder report` |
| **PHP/Composer** | composer | `composer licenses` |
| **Swift/CocoaPods** | CocoaPods | `pod install` (generates Acknowledgements.plist) |
| **C/C++ (vcpkg)** | vcpkg | `vcpkg export --nuget` (includes licenses) |
| **C/C++ (Conan)** | conan | `conan info . --only license` |

### Enterprise Compliance Platforms

- **FOSSA** (fossa.com) — Full lifecycle license compliance
- **Snyk Open Source** — License compliance + vulnerability scanning
- **WhiteSource/Mend** — Automated policy enforcement
- **Black Duck** — Open source risk management
- **Licensee** (GitHub) — License detection for repositories

### SPDX & SBOM Tools

- **SPDX tools** (spdx.dev) — Generate Software Bill of Materials
- **Syft** (Anchore) — SBOM generation for containers
- **CycloneDX** — Alternative SBOM format

---

## Common Issues & Pitfalls

### License File Problems

| Issue | Impact | Solution |
|-------|--------|----------|
| **No LICENSE file** | Code is "all rights reserved" | Add explicit license immediately |
| **LICENSE in wrong location** | May not be detected by tools | Put in repository root |
| **Mismatched license** | package.json says MIT, file says GPL | Audit and correct inconsistencies |
| **Multiple LICENSE files** | Ambiguous licensing | Use SPDX expression, clarify scope |

### Dependency Issues

| Issue | Impact | Solution |
|-------|--------|----------|
| **Unlicensed dependency** | Cannot legally use | Contact maintainer or replace |
| **GPL in proprietary product** | License violation | Replace or open-source product |
| **AGPL in SaaS** | Must offer source code to network users | Replace or comply with source disclosure |
| **Apache-2.0 + GPL-2.0** | Incompatible | Upgrade to GPL-3.0+ or replace Apache dep |

### Attribution Problems

| Issue | Impact | Solution |
|-------|--------|----------|
| **Missing NOTICE file** | Apache-2.0 violation | Create NOTICE with required attributions |
| **Stripped copyright headers** | License violation | Restore original headers |
| **No attribution in binary** | Potential violation | Bundle licenses with distribution |

### Modern Pitfalls

| Issue | Context | Solution |
|-------|---------|----------|
| **Commons Clause** | Not OSI-approved; restricts commercial use | Treat as proprietary for compliance |
| **Server Side Public License (SSPL)** | MongoDB license; not OSI-approved | Evaluate carefully for cloud use |
| **Business Source License (BSL)** | Time-delayed open source | Track conversion date |
| **License changes mid-stream** | Elasticsearch (Apache→SSPL), Redis | Pin versions before license change |

---

## License Selection Decision Tree

```
Start
│
├─ Is this for internal use only?
│  └─ Yes → Usually lower risk, but still comply with license terms and contracts
│
├─ Will you distribute source code publicly?
│  ├─ Want maximum adoption? → MIT or Apache-2.0
│  ├─ Want modifications shared back? → GPL-3.0 or AGPL-3.0
│  └─ Library with linking flexibility? → LGPL-3.0 or MPL-2.0
│
├─ Will you distribute closed-source binaries?
│  ├─ Have any GPL dependencies? → Likely must open-source derivative or replace/isolate
│  ├─ Have LGPL dependencies? → OK if you allow relinking (dynamic or static with object files)
│  └─ Only permissive deps? → Any license works
│
└─ Is this a SaaS/cloud deployment?
   ├─ Have AGPL dependencies? → Must offer source download
   ├─ Have GPL dependencies? → No distribution, so OK
   └─ Only permissive deps? → No special requirements
```

---

## LGPL Linking Footnote

LGPL compliance for proprietary apps typically requires **allowing users to relink** your application with a modified version of the LGPL library. This is commonly satisfied by **dynamic linking** or by distributing **linkable object files** for static linking scenarios. Verify the exact license version and terms.

---

## Closed-Source Binaries & Commercial Use

### All OSI-Approved Licenses Permit Commercial Use

**Important clarification**: OSI-approved open source licenses allow commercial use, but **commercial closed-source distribution** may still be restricted by copyleft obligations. The key question is *what obligations* apply to your distribution model.

| License Type | Commercial Use | Closed-Source Binary | Key Obligations |
|--------------|----------------|---------------------|-----------------|
| **Permissive** (MIT, BSD, Apache-2.0) | Yes | Yes | Include license/copyright notices |
| **Weak Copyleft** (LGPL, MPL) | Yes | Conditional | Share modifications to licensed code; allow relinking |
| **Strong Copyleft** (GPL) | Yes | No | Entire derivative must be GPL; source required |
| **Network Copyleft** (AGPL) | Yes | No | Same as GPL + SaaS triggers source disclosure |

### License Risk Classifications (internal policy buckets)

| Risk Level | Licenses | Closed-Source Binary Distribution |
|------------|----------|-----------------------------------|
| **Low** | MIT, Apache-2.0, BSD-2/3-Clause, ISC, Unlicense, CC0, 0BSD | **Fully allowed** — Keep notices, attribute |
| **Medium** | LGPL-2.1, LGPL-3.0, MPL-2.0, EPL-2.0 | **Partially allowed** — File-level copyleft or relinking obligations |
| **High** | GPL-2.0, GPL-3.0, AGPL-3.0 | **Restricted** — See detailed requirements below |

---

### Requirements for Closed-Source Binary Distribution

#### Permissive Licenses (MIT, BSD, Apache-2.0, ISC)

**You CAN**:
- Distribute closed-source binaries
- Sell commercially without royalties
- Modify code without sharing changes
- Sublicense to your customers

**You MUST**:
- Include the original license text in your distribution
- Preserve copyright notices (in source, or in documentation/about box for binaries)
- For **Apache-2.0**: Include NOTICE file if upstream provides one; state changes to modified files

**Apache-2.0 Binary Distribution Checklist**:
```
your-product/
├── licenses/
│   ├── Apache-2.0.txt        # Full license text
│   └── NOTICE                # Attribution notices from upstream (if any)
├── THIRD_PARTY_LICENSES.txt  # Aggregated license info
└── your-binary.exe
```

---

#### Weak Copyleft (MPL-2.0, LGPL)

**MPL-2.0 (File-Level Copyleft)**:

**You CAN**:
- Distribute closed-source binaries
- Combine MPL code with proprietary code in the same project
- Keep your proprietary files closed

**You MUST**:
- Make source available for **any MPL-licensed files you modify**
- Unmodified MPL files: No source disclosure required (just attribution)
- Clearly separate MPL-covered files from proprietary files

**LGPL (Library-Level Copyleft)**:

**You CAN**:
- Link to LGPL libraries from proprietary applications
- Distribute closed-source binaries that use LGPL libraries

**You MUST**:
- Allow users to **relink** your application with a modified version of the LGPL library
- Provide one of:
  - **Dynamic linking** (most common): Use shared libraries (.dll, .so, .dylib)
  - **Static linking with object files**: Provide your object files so users can relink
  - **Source code**: Distribute your application's source (not required if relinking is possible)
- Include LGPL license text
- Provide source code for any **modifications to the LGPL library itself**

**LGPL Relinking Compliance**:
```
# Dynamic linking (preferred)
your-app.exe + libfoo.so (LGPL)
→ User can replace libfoo.so with modified version [OK]

# Static linking with object files
your-app.o + libfoo.a (LGPL) → your-app.exe
→ Distribute your-app.o so user can relink with modified libfoo.a [OK]

# Static linking without object files
your-app.exe (contains libfoo.a statically linked)
→ User cannot relink [LGPL violation]
```

---

#### Strong Copyleft (GPL)

**You CANNOT distribute closed-source binaries that incorporate GPL code.**

**The GPL "viral" effect**:
- If your program is a "derivative work" of GPL code, the **entire program** must be GPL
- You must provide complete corresponding source code to all binary recipients
- No closed-source distribution is possible for the combined work

**What constitutes a derivative work** (non-exhaustive, varies by jurisdiction):
- Copying GPL code into your source files
- Statically linking against GPL libraries
- Dynamically linking may or may not create a derivative (disputed; FSF says yes, some courts unclear)
- Modifying GPL code and distributing the result

**GPL Binary Distribution Requirements**:
1. Distribute under GPL (no proprietary license terms)
2. Include complete corresponding source code, OR
3. Provide a written offer (valid 3+ years) to provide source to any third party

**"Complete Corresponding Source" includes**:
- All source code for the entire combined program
- Build scripts and installation instructions
- Interface definition files needed to recompile
- **Does NOT include**: System libraries (libc, kernel, etc.)

---

#### Network Copyleft (AGPL-3.0)

**Same as GPL, plus**:
- If you modify AGPL software and let users interact with it over a network (SaaS), you must offer source code download to those users
- This closes the "SaaS loophole" in GPL

**AGPL SaaS Requirements**:
- Prominently offer users a way to download the complete source
- Common implementation: "Source code" link in footer/about page

---

### Commercial Dual-Licensing Strategy

Many companies use **dual licensing** to enable commercial closed-source use:

| Model | How It Works | Examples |
|-------|--------------|----------|
| **Open Core** | Core is open source (GPL/AGPL); proprietary extensions/features sold separately | GitLab, Elastic (pre-SSPL) |
| **Commercial + Open Source** | Same code under GPL for free; commercial license for closed-source use | Qt, MySQL, MongoDB (pre-SSPL) |
| **Contributor License Agreement** | Contributors grant rights allowing dual licensing | Most dual-licensed projects |

**If you need closed-source use of GPL/AGPL code**:
1. Check if copyright holder offers a commercial license
2. Contact the project maintainers
3. Replace with permissively-licensed alternatives

---

### M&A Due Diligence Considerations

License compliance is critical during mergers and acquisitions:

**Buyer Risks**:
- Undiscovered GPL in codebase → Forced open-sourcing of proprietary IP
- License conflicts → Product cannot be sold as-is
- Missing attributions → Breach of contract, legal exposure

**Due Diligence Checklist**:
- [ ] Run full SCA scan of all codebases
- [ ] Identify all high-risk licenses (GPL, AGPL, LGPL)
- [ ] Verify NOTICE files and attributions are complete
- [ ] Check for license conflicts between dependencies
- [ ] Confirm no "all rights reserved" unlicensed code
- [ ] Validate build process doesn't introduce unlicensed code

License conflicts are common in complex dependency trees; treat unknown or copyleft items as high-risk until resolved.

---

## License Text Templates

### For New Projects

**MIT License** (most permissive, widely adopted):
```
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy...
[full text at opensource.org/licenses/MIT]
```

**Apache-2.0** (with patent protection):
```
Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
[full text at apache.org/licenses/LICENSE-2.0]
```

### SPDX Header for Source Files

```
// SPDX-License-Identifier: MIT
// Copyright (c) 2024 Your Name

// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2024 Your Company

// SPDX-License-Identifier: GPL-3.0-or-later
```

---

## References

### Official Sources
- **OSI Approved Licenses**: [opensource.org/licenses](https://opensource.org/licenses)
- **SPDX License List**: [spdx.org/licenses](https://spdx.org/licenses/)
- **Choose A License**: [choosealicense.com](https://choosealicense.com/)
- **GNU License Compatibility**: [gnu.org/licenses/license-compatibility](https://www.gnu.org/licenses/license-compatibility.html)
- **GNU GPL FAQ**: [gnu.org/licenses/gpl-faq](https://www.gnu.org/licenses/gpl-faq.html)
- **TLDRLegal**: [tldrlegal.com](https://tldrlegal.com/) — Plain English summaries
- **MIT-0 (SPDX)**: [spdx.org/licenses/MIT-0.html](https://spdx.org/licenses/MIT-0.html)
- **0BSD (SPDX)**: [spdx.org/licenses/0BSD.html](https://spdx.org/licenses/0BSD.html)
- **MPL 2.0 FAQ**: [mozilla.org/MPL/2.0/FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/)
- **Apache License 2.0**: [apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)
- **Apache NOTICE guidance**: [infra.apache.org/licensing-howto.html](https://infra.apache.org/licensing-howto.html)
- **GitHub Licensing Guide**: [docs.github.com/licensing](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- **GPLv2 License**: [gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
- **GPLv3 License**: [gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.en.html)
- **LGPL v2.1 License**: [gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)
- **GPL FAQ (commercial use)**: [gnu.org/licenses/gpl-faq.html](https://www.gnu.org/licenses/gpl-faq.html)
- **MPL 2.0 License**: [mozilla.org/MPL/2.0](https://www.mozilla.org/en-US/MPL/2.0/)
- **Apache 2.0 License**: [apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)
- **MIT License**: [opensource.org/license/mit](https://opensource.org/license/mit/)

### Reference Files

**Proprietary Licensing:**
- **EULA template (comprehensive)**: `references/eula-template.md` — Complete End-User License Agreement template for desktop/mobile apps with regional compliance (EU/CCPA), clickwrap guidance, and export control

**Attribution & Compliance:**
- **Third-party license templates**: `references/third-party-licenses-template.md` — THIRD_PARTY_LICENSES.txt formats, NOTICE files, GPL/LGPL source offers, automation tools, multi-license scans
- **Attribution UI templates**: `references/attribution-ui-template.md` — About dialogs, credits screens, mobile settings, web pages, dependency tracking spreadsheets

**Open Source Licensing:**
- SPDX license identifiers: `references/spdx-license-list.md`
- OSI approved licenses: `references/osi-approved.md`
- License chooser guidance: `references/choosealicense.md`
- GPL-3.0 full text: `references/gpl-3.md`
- Apache-2.0 full text: `references/apache-2.md`
- GPLv2 written offer: `references/gplv2-written-offer.md`
- GPLv3 written offer: `references/gplv3-written-offer.md`
- MPL 2.0 Secondary License guidance: `references/mpl-2-faq.md`
- Apache NOTICE guidance: `references/apache-notice-guidance.md`
- GPLv2 binary distribution: `references/gplv2-binaries.md`
- GPLv3 object-code distribution: `references/gplv3-binaries.md`
- LGPL-2.1 relinking rules: `references/lgpl-2.1-relinking.md`
- MPL-2.0 executable form: `references/mpl-2-binaries.md`
- Apache-2.0 redistribution: `references/apache-2-redistribution.md`
- MIT redistribution basics: `references/mit-redistribution.md`
- GPL FAQ commercial: `references/gpl-faq-commercial.md`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.5.0 | 2026-01-30 | Added non-code asset audit (fonts/icons/datasets), bundled binaries audit, third-party services disclosure, OS components, packaging checklist, risk/decision matrix, platform-specific checklists (Electron/Avalonia/WPF), expanded ecosystem coverage (Go/.NET/Java/Ruby/PHP/Swift/C++) |
| 1.4.0 | 2026-01-29 | Added third-party license + attribution UI templates and multi-license scan guidance |
| 1.3.1 | 2026-01-29 | Added EULA template usage checklist and SaaS note |
| 1.3.0 | 2026-01 | Added comprehensive EULA template with EU/CCPA compliance, clickwrap guidance, export control |
| 1.2.0 | 2025-01 | Added closed-source binary requirements, commercial use guide, M&A due diligence |
| 1.1.0 | 2025-01 | Added compatibility matrix, tooling section, decision tree |
| 1.0.0 | 2024-12 | Initial skill creation |

---

**Disclaimer:** This skill provides operational guidance based on publicly available information about software licensing. It does not constitute legal advice. For binding legal interpretations, license disputes, or compliance certification, consult qualified legal counsel familiar with intellectual property law in your jurisdiction.
