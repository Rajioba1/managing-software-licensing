# Attribution UI Templates (About Dialogs & Credits Screens)

Templates for displaying third-party software attribution in user interfaces, including About dialogs, settings screens, and credits pages.

**Last Updated:** January 2026
**Sources:** [Amazon OSS Attribution Builder](https://github.com/amzn/oss-attribution-builder), [AboutCode OSS Attribution Best Practices](https://aboutcode.org/2015/oss-attribution-best-practices/), [Android AttributionPresenter](https://github.com/franmontiel/AttributionPresenter)

---

## Why Display Attribution in UI?

**Legal Compliance:** Most open source licenses require preserving copyright notices and license text in distributions. UI attribution is often a **best practice** and may be required by certain licenses, app stores, or contractual terms.

**Best Practices:**
- ✅ Include attribution in an "About" dialog, "Settings → Legal" screen, or "Credits" page
- ✅ Make attribution easily discoverable (not buried in obscure menus)
- ✅ Provide links to full license texts (THIRD_PARTY_LICENSES.txt)
- ✅ Use consistent formatting for professionalism

**Common Placement:**
- **Desktop apps:** Help → About → Open Source Licenses
- **Mobile apps:** Settings → About → Legal Information → Open Source Licenses
- **Web apps:** Footer → Legal → Open Source Credits
- **Games:** Main Menu → Credits → Third-Party Software

**Reference:** [Best Practices for Open Source Software Attribution](https://aboutcode.org/2015/oss-attribution-best-practices/)

---

## Template 1: About Dialog (Desktop Applications)

### Simple About Dialog (Windows/macOS/Linux)

**Layout:**
```
+-----------------------------------------------------+
|  [App Icon]  MyAwesomeApp v1.2.3                   |
|                                                     |
|  Copyright © 2024-2026 Acme Corporation            |
|  Licensed under MIT License                        |
|                                                     |
|  [View License]  [Open Source Credits]             |
+-----------------------------------------------------+
```

**"Open Source Credits" dialog:**

```
+----------------------------------------------------------+
|  Open Source Credits                              [X]    |
+----------------------------------------------------------+
|  This software includes the following open source        |
|  components:                                             |
|                                                          |
|  • React (19.2.0) - MIT License                         |
|    © Meta Platforms, Inc.                               |
|    https://react.dev                                     |
|                                                          |
|  • Lodash (4.17.21) - MIT License                       |
|    © JS Foundation                                       |
|    https://lodash.com                                    |
|                                                          |
|  • Zustand (5.0.6) - MIT License                        |
|    © 2019 Paul Henschel                                 |
|    https://github.com/pmndrs/zustand                    |
|                                                          |
|  [View Full License Texts]                              |
+----------------------------------------------------------+
```

### HTML/React Example

```jsx
import React, { useState } from 'react';

const OpenSourceCreditsDialog = ({ isOpen, onClose }) => {
  const libraries = [
    {
      name: 'React',
      version: '19.2.0',
      license: 'MIT License',
      copyright: '© Meta Platforms, Inc.',
      url: 'https://react.dev'
    },
    {
      name: 'Lodash',
      version: '4.17.21',
      license: 'MIT License',
      copyright: '© JS Foundation',
      url: 'https://lodash.com'
    },
    {
      name: 'Zustand',
      version: '5.0.6',
      license: 'MIT License',
      copyright: '© 2019 Paul Henschel',
      url: 'https://github.com/pmndrs/zustand'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <div className="dialog-header">
          <h2>Open Source Credits</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="dialog-body">
          <p>This software includes the following open source components:</p>
          <ul className="credits-list">
            {libraries.map((lib, index) => (
              <li key={index} className="credit-item">
                <strong>{lib.name}</strong> ({lib.version}) - {lib.license}
                <br />
                {lib.copyright}
                <br />
                <a href={lib.url} target="_blank" rel="noopener noreferrer">
                  {lib.url}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={() => window.open('/THIRD_PARTY_LICENSES.txt')}>
            View Full License Texts
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceCreditsDialog;
```

**CSS Example:**

```css
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.dialog-content {
  background: white;
  border-radius: 8px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
}

.dialog-header h2 {
  margin: 0;
  font-size: 20px;
}

.dialog-header button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.dialog-body {
  padding: 24px;
}

.credits-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.credit-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.credit-item:last-child {
  border-bottom: none;
}

.credit-item a {
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
}

.credit-item a:hover {
  text-decoration: underline;
}
```

---

## Template 2: Settings Page (Mobile Apps - iOS/Android)

### iOS Style

**Navigation Path:** Settings → About → Legal → Open Source Licenses

```
┌─────────────────────────────────────┐
│  < Legal                            │
├─────────────────────────────────────┤
│  Open Source Licenses               │
│                                     │
│  React (19.2.0)                  > │
│  MIT License                        │
│  © Meta Platforms, Inc.             │
│                                     │
│  Lodash (4.17.21)                > │
│  MIT License                        │
│  © JS Foundation                    │
│                                     │
│  Zustand (5.0.6)                 > │
│  MIT License                        │
│  © 2019 Paul Henschel               │
│                                     │
└─────────────────────────────────────┘
```

**Tapping a library shows full license text:**

```
┌─────────────────────────────────────┐
│  < React                            │
├─────────────────────────────────────┤
│  Version: 19.2.0                    │
│  License: MIT License               │
│  Copyright: © Meta Platforms, Inc.  │
│  URL: https://react.dev             │
│                                     │
│  ───────────────────────────────    │
│                                     │
│  MIT License                        │
│                                     │
│  Permission is hereby granted,      │
│  free of charge, to any person      │
│  obtaining a copy of this software  │
│  ...                                │
│                                     │
└─────────────────────────────────────┘
```

### React Native / Expo Example

```jsx
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking } from 'react-native';

const libraries = [
  {
    id: '1',
    name: 'React',
    version: '19.2.0',
    license: 'MIT License',
    copyright: '© Meta Platforms, Inc.',
    url: 'https://react.dev',
    licenseText: 'MIT License\n\nPermission is hereby granted, free of charge...'
  },
  // ... more libraries
];

const OpenSourceLicensesScreen = ({ navigation }) => {
  const renderLibrary = ({ item }) => (
    <TouchableOpacity
      style={styles.libraryItem}
      onPress={() => navigation.navigate('LicenseDetail', { library: item })}
    >
      <View>
        <Text style={styles.libraryName}>{item.name} ({item.version})</Text>
        <Text style={styles.libraryLicense}>{item.license}</Text>
        <Text style={styles.libraryCopyright}>{item.copyright}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={libraries}
        renderItem={renderLibrary}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const LicenseDetailScreen = ({ route }) => {
  const { library } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailLabel}>Version: {library.version}</Text>
      <Text style={styles.detailLabel}>License: {library.license}</Text>
      <Text style={styles.detailLabel}>Copyright: {library.copyright}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(library.url)}>
        <Text style={styles.link}>URL: {library.url}</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <Text style={styles.licenseText}>{library.licenseText}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  libraryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  libraryName: {
    fontSize: 16,
    fontWeight: '600',
  },
  libraryLicense: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  libraryCopyright: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  chevron: {
    fontSize: 24,
    color: '#ccc',
  },
  detailLabel: {
    fontSize: 14,
    marginBottom: 8,
    padding: 16,
  },
  link: {
    fontSize: 14,
    color: '#0066cc',
    padding: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  licenseText: {
    fontSize: 12,
    lineHeight: 18,
    padding: 16,
    fontFamily: 'monospace',
  },
};

export { OpenSourceLicensesScreen, LicenseDetailScreen };
```

**Reference:** [Android AttributionPresenter Library](https://github.com/franmontiel/AttributionPresenter)

---

## Template 3: Credits Page (Web Applications)

### Footer Link Approach

**Footer:**

```html
<footer>
  <p>© 2024-2026 Acme Corporation. All rights reserved.</p>
  <p>
    <a href="/privacy">Privacy Policy</a> |
    <a href="/terms">Terms of Service</a> |
    <a href="/open-source-credits">Open Source Credits</a>
  </p>
</footer>
```

### Dedicated Credits Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Open Source Credits - MyAwesomeApp</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
    }
    h1 {
      border-bottom: 2px solid #333;
      padding-bottom: 10px;
    }
    .library {
      margin: 30px 0;
      padding: 20px;
      background: #f9f9f9;
      border-left: 4px solid #0066cc;
    }
    .library-header {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .library-info {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }
    .library-link {
      color: #0066cc;
      text-decoration: none;
    }
    .library-link:hover {
      text-decoration: underline;
    }
    .license-text {
      margin-top: 15px;
      padding: 15px;
      background: white;
      border: 1px solid #ddd;
      font-family: monospace;
      font-size: 12px;
      white-space: pre-wrap;
      max-height: 200px;
      overflow-y: auto;
    }
  </style>
</head>
<body>
  <h1>Open Source Credits</h1>

  <p>
    This software includes the following open source components. We are grateful
    to the authors and contributors of these projects.
  </p>

  <div class="library">
    <div class="library-header">React (19.2.0)</div>
    <div class="library-info">
      License: MIT License<br>
      Copyright: © Meta Platforms, Inc. and affiliates<br>
      <a href="https://react.dev" class="library-link" target="_blank">https://react.dev</a>
    </div>
    <details>
      <summary>View License Text</summary>
      <div class="license-text">
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
      </div>
    </details>
  </div>

  <div class="library">
    <div class="library-header">Lodash (4.17.21)</div>
    <div class="library-info">
      License: MIT License<br>
      Copyright: © JS Foundation and other contributors<br>
      <a href="https://lodash.com" class="library-link" target="_blank">https://lodash.com</a>
    </div>
    <details>
      <summary>View License Text</summary>
      <div class="license-text">
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
      </div>
    </details>
  </div>

  <p>
    <a href="/THIRD_PARTY_LICENSES.txt">Download Full License Texts</a>
  </p>

</body>
</html>
```

**Reference:** Google Chrome uses `chrome://credits/` for a similar approach.

---

## Template 4: Game Credits Screen

### Scrolling Credits (Unity/Godot/Unreal)

```
═══════════════════════════════════════════════

                AWESOME GAME
             Copyright © 2026
              Acme Game Studio

═══════════════════════════════════════════════

               DEVELOPMENT TEAM

     Producer - John Doe
     Lead Programmer - Jane Smith
     Artist - Bob Johnson

═══════════════════════════════════════════════

            THIRD-PARTY SOFTWARE

              React (19.2.0)
            © Meta Platforms, Inc.
              Licensed under MIT

               Lodash (4.17.21)
            © JS Foundation
              Licensed under MIT

              Zustand (5.0.6)
            © 2019 Paul Henschel
              Licensed under MIT

═══════════════════════════════════════════════

          SPECIAL THANKS

     [Contributors, Testers, etc.]

═══════════════════════════════════════════════

   For full license texts, see
   Main Menu → Legal → Open Source Licenses

═══════════════════════════════════════════════
```

---

## Template 5: Spreadsheet/CSV Format (Dependency Inventory)

Use this format for internal tracking and auditing.

**CSV Example:**

```csv
Package Name,Version,License,Copyright,Project URL,License URL,Notes
React,19.2.0,MIT,© Meta Platforms Inc.,https://react.dev,https://github.com/facebook/react/blob/main/LICENSE,Core UI library
Lodash,4.17.21,MIT,© JS Foundation,https://lodash.com,https://github.com/lodash/lodash/blob/master/LICENSE,Utility functions
Zustand,5.0.6,MIT,© 2019 Paul Henschel,https://github.com/pmndrs/zustand,https://github.com/pmndrs/zustand/blob/main/LICENSE,State management
Apache Arrow,21.1.0,Apache-2.0,© Apache Software Foundation,https://arrow.apache.org,https://www.apache.org/licenses/LICENSE-2.0,Data format
```

**Google Sheets / Excel Template:**

| Package Name | Version | License | Copyright | Project URL | License URL | Notes |
|-------------|---------|---------|-----------|-------------|-------------|-------|
| React | 19.2.0 | MIT | © Meta Platforms, Inc. | https://react.dev | https://github.com/facebook/react/blob/main/LICENSE | Core UI library |
| Lodash | 4.17.21 | MIT | © JS Foundation | https://lodash.com | https://github.com/lodash/lodash/blob/master/LICENSE | Utility functions |
| Zustand | 5.0.6 | MIT | © 2019 Paul Henschel | https://github.com/pmndrs/zustand | https://github.com/pmndrs/zustand/blob/main/LICENSE | State management |

**When to use:** Internal compliance tracking, legal review, M&A due diligence.

---

## Automation: Generating UI Attribution

### Node.js (JavaScript/TypeScript)

```bash
# Install license-checker
npm install --save-dev license-checker

# Generate JSON for UI consumption
npx license-checker --production --json > public/licenses.json
```

**Load in React:**

```jsx
import React, { useEffect, useState } from 'react';

const OpenSourceCredits = () => {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    fetch('/licenses.json')
      .then(res => res.json())
      .then(data => {
        const formatted = Object.entries(data).map(([name, info]) => ({
          name: name.split('@')[0],
          version: name.split('@')[1],
          license: info.licenses,
          copyright: info.copyright || 'N/A',
          repository: info.repository || 'N/A',
        }));
        setLicenses(formatted);
      });
  }, []);

  return (
    <div>
      <h2>Open Source Licenses</h2>
      {licenses.map((lib, i) => (
        <div key={i}>
          <h3>{lib.name} ({lib.version})</h3>
          <p>License: {lib.license}</p>
          <p>Copyright: {lib.copyright}</p>
        </div>
      ))}
    </div>
  );
};
```

### Python (Flask/Django)

```bash
# Generate licenses for web app
pip-licenses --format=json > static/licenses.json
```

### Rust (Tauri/Desktop)

```bash
# Generate JSON attribution
cargo about generate about.hbs > src/licenses.json
```

---

## Best Practices Summary

| Best Practice | Why It Matters |
|--------------|----------------|
| **Make attribution easily discoverable** | Legal requirement; users should not have to hunt for it |
| **Use consistent formatting** | Professionalism; shows respect for open source contributors |
| **Link to full license texts** | Some licenses are too long for UI display |
| **Automate updates** | Dependencies change frequently; manual updates are error-prone |
| **Include copyright notices** | Required by most OSS licenses |
| **Provide offline access** | Users should be able to view licenses without internet |

---

## Checklist: Before Shipping UI

- [ ] Attribution visible in About/Settings/Credits
- [ ] Copyright notices included for each dependency
- [ ] License type clearly stated (e.g., "MIT License")
- [ ] Link to full THIRD_PARTY_LICENSES.txt provided
- [ ] UI attribution matches THIRD_PARTY_LICENSES.txt
- [ ] Tested on all platforms (desktop, mobile, web)
- [ ] Attribution is accessible (keyboard navigation, screen readers)

---

## Additional Resources

### Official Sources
- [Best Practices for Open Source Software Attribution](https://aboutcode.org/2015/oss-attribution-best-practices/)
- [Apache Licensing Howto](https://infra.apache.org/licensing-howto.html)

### Tools
- [Amazon OSS Attribution Builder](https://github.com/amzn/oss-attribution-builder)
- [Android AttributionPresenter](https://github.com/franmontiel/AttributionPresenter)

### Examples in the Wild
- **Google Chrome:** `chrome://credits/`
- **Visual Studio Code:** Help → About → License Information
- **Android:** Settings → About Phone → Legal Information → Open Source Licenses

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01 | Initial template with web, mobile, and desktop examples |

---

**Disclaimer:** This template is provided for informational purposes only and does not constitute legal advice. Consult a qualified attorney for binding legal guidance on open source compliance and attribution requirements.
