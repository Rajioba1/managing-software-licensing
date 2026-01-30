# Third-Party License and Attribution Templates

Comprehensive templates for bundling third-party licenses with your software and providing proper attribution to open source dependencies.

**Last Updated:** January 2026
**Sources:** [AboutCode OSS Attribution Best Practices](https://aboutcode.org/2015/oss-attribution-best-practices/), [Apache Licensing Howto](https://infra.apache.org/licensing-howto.html), [Google Open Source Licenses](https://opensource.google/documentation/reference/thirdparty/licenses), [Amazon OSS Attribution Builder](https://github.com/amzn/oss-attribution-builder)

---

## Why Attribution Matters

**Legal Obligation:** Many open source licenses (MIT, Apache-2.0, BSD, etc.) require you to include:
1. Copyright notice
2. License text
3. Disclaimer of warranty (if applicable)

**Compliance Checklist:**
- ✅ Include THIRD_PARTY_LICENSES.txt or NOTICE file in all distributions (source and binary)
- ✅ Provide attribution in the software UI **when required** (by license, platform policy, or contract) or as a best practice
- ✅ UI attribution does **not** replace bundling license texts in your distribution
- ✅ Preserve copyright notices from source files
- ✅ Include full license text for each dependency
- ✅ For GPL/LGPL: Offer source code or written offer

**Reference:** [Best Practices for Open Source Software Attribution](https://aboutcode.org/2015/oss-attribution-best-practices/)

---

## File Naming Conventions

Common naming conventions for bundled license files:

| File Name | Use Case | Contents |
|-----------|----------|----------|
| **THIRD_PARTY_LICENSES.txt** | Most common | Full license texts for all dependencies |
| **THIRD_PARTY_NOTICES.txt** | Alternative | Aggregated copyright and license notices |
| **NOTICE** | Apache-2.0 projects | Required attribution notices (Apache style) |
| **LICENSES/** | Directory approach | Separate file per dependency (e.g., `LICENSES/MIT.txt`, `LICENSES/Apache-2.0.txt`) |
| **OSS_ATTRIBUTION.txt** | Amazon style | Attribution report with license summaries |

**Recommendation:** Use **THIRD_PARTY_LICENSES.txt** for simplicity, or **LICENSES/** directory for large projects with many dependencies.

---

## Template 1: THIRD_PARTY_LICENSES.txt (Comprehensive)

Use this template to bundle all third-party license texts in a single file.

```
===============================================================================
THIRD-PARTY SOFTWARE NOTICES AND INFORMATION

This software incorporates third-party components that are subject to their own
copyright and license agreements. The following is a list of such components
along with their respective copyright notices and license texts.
===============================================================================

This file is based on or incorporates material from the projects listed below
(collectively, "Third Party Code"). Your use of Third Party Code is subject to
the terms and conditions set forth in the applicable license(s). This file is
provided for informational purposes only and does NOT constitute legal advice.

===============================================================================

TABLE OF CONTENTS
-----------------

1. [Package Name 1] - [License Type]
2. [Package Name 2] - [License Type]
3. [Package Name 3] - [License Type]
...

===============================================================================

1. [PACKAGE NAME] ([VERSION])
   License: [LICENSE SPDX ID]
   Copyright: [COPYRIGHT HOLDER(S)]
   Project URL: [URL]

-------------------------------------------------------------------------------

[FULL LICENSE TEXT HERE]

===============================================================================

2. [NEXT PACKAGE NAME] ([VERSION])
   License: [LICENSE SPDX ID]
   Copyright: [COPYRIGHT HOLDER(S)]
   Project URL: [URL]

-------------------------------------------------------------------------------

[FULL LICENSE TEXT HERE]

===============================================================================
```

### Example (React + Lodash + Zustand):

```
===============================================================================
THIRD-PARTY SOFTWARE NOTICES AND INFORMATION

This software incorporates third-party components that are subject to their own
copyright and license agreements. The following is a list of such components
along with their respective copyright notices and license texts.
===============================================================================

TABLE OF CONTENTS
-----------------

1. React - MIT License
2. Lodash - MIT License
3. Zustand - MIT License

===============================================================================

1. REACT (19.2.0)
   License: MIT
   Copyright: (c) Meta Platforms, Inc. and affiliates.
   Project URL: https://react.dev

-------------------------------------------------------------------------------

MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

===============================================================================

2. LODASH (4.17.21)
   License: MIT
   Copyright: (c) JS Foundation and other contributors
   Project URL: https://lodash.com

-------------------------------------------------------------------------------

MIT License

Copyright (c) JS Foundation and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

===============================================================================

3. ZUSTAND (5.0.6)
   License: MIT
   Copyright: (c) 2019 Paul Henschel
   Project URL: https://github.com/pmndrs/zustand

-------------------------------------------------------------------------------

MIT License

Copyright (c) 2019 Paul Henschel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

===============================================================================
```

**Best Practice:** Automate generation with tools like `license-checker` (Node.js), `pip-licenses` (Python), or `cargo-license` (Rust).

**Reference:** [Google Third-Party Licenses Example](https://labs.google/fx/third-party-licenses.txt)

---

## Template 2: NOTICE File (Apache-2.0 Style)

Use this template if your project is Apache-2.0 licensed or bundles Apache-2.0 dependencies.

```
[PRODUCT NAME]
Copyright [YEAR(S)] [COPYRIGHT HOLDER]

This product includes software developed at [ORGANIZATION NAME] ([URL]).

===============================================================================

This product includes the following third-party software components:

-------------------------------------------------------------------------------

[COMPONENT NAME] ([LICENSE])
Copyright [YEAR] [COPYRIGHT HOLDER]
Licensed under [LICENSE] (see LICENSE file or [URL])

[ADDITIONAL ATTRIBUTION NOTICE IF REQUIRED BY THE LICENSE]

-------------------------------------------------------------------------------

[NEXT COMPONENT NAME] ([LICENSE])
Copyright [YEAR] [COPYRIGHT HOLDER]
Licensed under [LICENSE] (see LICENSE file or [URL])

[ADDITIONAL ATTRIBUTION NOTICE IF REQUIRED BY THE LICENSE]

===============================================================================
```

### Example (Apache-2.0 Project with Dependencies):

```
MyAwesomeApp
Copyright 2024-2026 Acme Corporation

This product includes software developed at Acme Corporation (https://acme.com).

===============================================================================

This product includes the following third-party software components:

-------------------------------------------------------------------------------

Apache Commons Lang (Apache-2.0)
Copyright 2001-2024 The Apache Software Foundation
Licensed under Apache License 2.0 (see LICENSE file or http://www.apache.org/licenses/LICENSE-2.0)

This product includes software developed at The Apache Software Foundation (http://www.apache.org/).

-------------------------------------------------------------------------------

Gson (Apache-2.0)
Copyright 2008-2024 Google Inc.
Licensed under Apache License 2.0 (see LICENSE file or https://github.com/google/gson/blob/main/LICENSE)

-------------------------------------------------------------------------------

SLF4J (MIT)
Copyright (c) 2004-2024 QOS.ch
Licensed under MIT License (see LICENSE file or https://www.slf4j.org/license.html)

===============================================================================
```

**Apache NOTICE Requirements:**
- Only include legally required notices (not just "nice to have" credits)
- If a bundled dependency provides a NOTICE file, analyze and bubble up relevant portions
- Keep the NOTICE file brief—each addition places a burden on downstream consumers
- Copyright notices embedded in MIT/BSD license texts do NOT need duplication in NOTICE

**Reference:** [Apache Licensing Howto - Assembling NOTICE Files](https://infra.apache.org/licensing-howto.html), [Apache Example NOTICE](https://www.apache.org/licenses/example-NOTICE.txt)

---

## Template 3: Minimal Attribution (Single-License Projects)

If all dependencies use the same license (e.g., all MIT), you can use a condensed format.

```
===============================================================================
THIRD-PARTY SOFTWARE NOTICES

The following components are licensed under the MIT License:

- [Package 1] ([Version]) - Copyright (c) [Year] [Holder]
- [Package 2] ([Version]) - Copyright (c) [Year] [Holder]
- [Package 3] ([Version]) - Copyright (c) [Year] [Holder]

===============================================================================

MIT License

[FULL MIT LICENSE TEXT HERE - ONLY ONCE]

===============================================================================
```

### Example:

```
===============================================================================
THIRD-PARTY SOFTWARE NOTICES

The following components are licensed under the MIT License:

- express (4.18.2) - Copyright (c) 2009-2024 TJ Holowaychuk and contributors
- body-parser (1.20.2) - Copyright (c) 2014 Jonathan Ong and contributors
- cookie-parser (1.4.6) - Copyright (c) 2014 TJ Holowaychuk and contributors

===============================================================================

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

===============================================================================
```

**When to use:** Small projects with <10 dependencies, all under the same license.

---

## Template 4: Directory-Based Approach (LICENSES/)

For large projects, organize licenses in a directory structure.

```
LICENSES/
├── MIT.txt
├── Apache-2.0.txt
├── BSD-3-Clause.txt
├── ISC.txt
└── THIRD_PARTY_ATTRIBUTIONS.md
```

**THIRD_PARTY_ATTRIBUTIONS.md:**

```markdown
# Third-Party Attributions

This software includes the following third-party components:

## MIT License

The following components are licensed under the MIT License (see [LICENSES/MIT.txt](LICENSES/MIT.txt)):

| Package | Version | Copyright |
|---------|---------|-----------|
| react | 19.2.0 | (c) Meta Platforms, Inc. |
| lodash | 4.17.21 | (c) JS Foundation |
| zustand | 5.0.6 | (c) 2019 Paul Henschel |

## Apache License 2.0

The following components are licensed under Apache-2.0 (see [LICENSES/Apache-2.0.txt](LICENSES/Apache-2.0.txt)):

| Package | Version | Copyright |
|---------|---------|-----------|
| apache-arrow | 21.1.0 | (c) Apache Software Foundation |

## BSD-3-Clause License

The following components are licensed under BSD-3-Clause (see [LICENSES/BSD-3-Clause.txt](LICENSES/BSD-3-Clause.txt)):

| Package | Version | Copyright |
|---------|---------|-----------|
| d3 | 7.8.5 | (c) 2010-2024 Mike Bostock |
```

**When to use:** Projects with 50+ dependencies, especially if many share the same license.

---

## Special Cases

### GPL/LGPL Components

If your software includes GPL/LGPL components, you **MUST** meet the applicable source availability obligations (e.g., provide source code, a written offer, or other required delivery mechanisms).

**Add to THIRD_PARTY_LICENSES.txt:**

```
===============================================================================

GPL/LGPL SOURCE CODE AVAILABILITY

This software includes components licensed under the GNU General Public License
(GPL) or Lesser General Public License (LGPL). Under these licenses, you are
entitled to receive the source code for these components.

To obtain source code for GPL/LGPL components, please contact:

[Company Name]
[Email: opensource@company.com]
[Address]

Alternatively, source code is available at:
[URL to source code repository or download page]

The following components are GPL/LGPL licensed:

- [Component Name] ([Version]) - [GPL-3.0 / LGPL-2.1 / etc.]

===============================================================================
```

**Reference:** See `references/gplv2-written-offer.md` and `references/gplv3-written-offer.md` for full templates.

---

### Dual-Licensed Dependencies

If a dependency offers dual licensing (e.g., `MIT OR Apache-2.0`), document which license you chose.

**Example:**

```
===============================================================================

RUST CRATE: SERDE (1.0.197)
License: MIT OR Apache-2.0 (chosen: MIT)
Copyright: (c) 2014 The Rust Project Developers
Project URL: https://serde.rs

Note: This component is dual-licensed. We have chosen to use it under the MIT License.

-------------------------------------------------------------------------------

[MIT LICENSE TEXT HERE]

===============================================================================
```

---

## Automation Tools

### Node.js

```bash
# Generate license report
npx license-checker --production --json > licenses.json
npx license-report --output=table > THIRD_PARTY_LICENSES.txt

# Generate attribution file
npx oss-attribution-generator
```

### Multi-License Scan (Node.js)

```bash
# Summarize licenses and detect multi-license expressions
node -e "
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('licenses.json', 'utf8'));
const byLicense = {};
const multi = [];
for (const [name, info] of Object.entries(data)) {
  const lic = (info.licenses || 'UNKNOWN').toString();
  (byLicense[lic] ||= []).push(name);
  if (/\\bOR\\b|\\bAND\\b|\\//i.test(lic)) multi.push({ name, lic });
}
for (const lic of Object.keys(byLicense).sort()) {
  console.log(`${lic}: ${byLicense[lic].length}`);
}
if (multi.length) {
  console.log('\\nMulti-license entries:');
  multi.forEach((m) => console.log(`- ${m.name}: ${m.lic}`));
}
"
```

### Python

```bash
# Generate license table
pip-licenses --format=markdown > THIRD_PARTY_LICENSES.md
pip-licenses --format=plain --with-license-file --no-license-path > THIRD_PARTY_LICENSES.txt
```

### Multi-License Scan (Python)

```bash
# Summarize licenses and detect multi-license expressions
pip-licenses --format=json > licenses.json
python - <<'PY'
import json, re
data = json.load(open('licenses.json', 'r', encoding='utf-8'))
by = {}
multi = []
for row in data:
    lic = row.get('License', 'UNKNOWN')
    name = row.get('Name')
    by.setdefault(lic, []).append(name)
    if re.search(r'\\bOR\\b|\\bAND\\b|/', lic):
        multi.append((name, lic))
for lic in sorted(by):
    print(f"{lic}: {len(by[lic])}")
if multi:
    print("\\nMulti-license entries:")
    for name, lic in multi:
        print(f"- {name}: {lic}")
PY
```

### Rust

```bash
# Generate license report
cargo license --json > licenses.json
cargo about generate about.hbs > THIRD_PARTY_LICENSES.txt
```

### Multi-License Scan (Rust)

```bash
python - <<'PY'
import json, re
data = json.load(open('licenses.json', 'r', encoding='utf-8'))
by = {}
multi = []
for row in data:
    name = row.get('name')
    lic = row.get('license', 'UNKNOWN')
    by.setdefault(lic, []).append(name)
    if re.search(r'\\bOR\\b|\\bAND\\b|/', lic):
        multi.append((name, lic))
for lic in sorted(by):
    print(f"{lic}: {len(by[lic])}")
if multi:
    print(\"\\nMulti-license entries:\")
    for name, lic in multi:
        print(f\"- {name}: {lic}\")
PY
```

### Java/Maven

```xml
<!-- Add to pom.xml -->
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>license-maven-plugin</artifactId>
    <version>2.4.0</version>
    <executions>
        <execution>
            <goals>
                <goal>add-third-party</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

**Reference:** [OSPOCO: Licenses, Dependencies, and NOTICE Files](https://ospo.co/blog/practice-tip-licenses-dependencies-and-notice-files/)

---

## Best Practices Summary

| Best Practice | Why It Matters |
|--------------|----------------|
| **Include full license text** | Required by MIT, Apache-2.0, BSD, and most OSS licenses |
| **Preserve copyright notices** | Legal requirement; failure = license violation |
| **Keep NOTICE brief** | Each addition burdens downstream consumers |
| **Automate generation** | Manual tracking is error-prone and doesn't scale |
| **Update with each release** | Dependency versions change; keep attribution current |
| **Bundle with installer** | Must be included in every distribution (source and binary) |
| **Separate your LICENSE from third-party licenses** | Your LICENSE is for your code only; third-party licenses go in THIRD_PARTY_LICENSES.txt |
| **Scope to shipped dependencies** | Exclude dev/build-only packages from runtime distributions |

---

## Checklist: Before Shipping

- [ ] Generated THIRD_PARTY_LICENSES.txt or NOTICE file
- [ ] Included full license text for each dependency
- [ ] Preserved copyright notices from all dependencies
- [ ] Verified GPL/LGPL source code availability (if applicable)
- [ ] Documented dual-license choices (if applicable)
- [ ] Bundled attribution file with installer/binary
- [ ] Added attribution to UI (About dialog, Settings → Legal)
- [ ] Reviewed for unlicensed or unknown licenses
- [ ] Verified no proprietary dependencies without permission

---

## Additional Resources

### Official Sources
- [Best Practices for Open Source Software (OSS) Attribution](https://aboutcode.org/2015/oss-attribution-best-practices/)
- [Apache Licensing Howto - Assembling NOTICE Files](https://infra.apache.org/licensing-howto.html)
- [Google Open Source Licenses Documentation](https://opensource.google/documentation/reference/thirdparty/licenses)
- [Apache Example NOTICE File](https://www.apache.org/licenses/example-NOTICE.txt)

### Tools
- [Amazon OSS Attribution Builder](https://github.com/amzn/oss-attribution-builder)
- [AboutCode Toolkit](https://github.com/nexB/aboutcode-toolkit)
- [SPDX Tools](https://spdx.dev/use/tools/)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01 | Initial template with comprehensive examples and automation guidance |

---

**Disclaimer:** This template is provided for informational purposes only and does not constitute legal advice. Consult a qualified attorney for binding legal guidance on open source compliance and attribution requirements.
