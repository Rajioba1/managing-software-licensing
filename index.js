const fs = require('fs');
const path = require('path');

/**
 * Software Licensing Skill - Programmatic API
 *
 * This module provides programmatic access to licensing compliance templates
 * and documentation.
 */

/**
 * Read a file from the package directory
 * @param {string} relativePath - Path relative to package root
 * @returns {string} File contents
 */
function readFile(relativePath) {
  const filePath = path.join(__dirname, relativePath);
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Get the complete licensing workflow guide (SKILL.md)
 * @returns {string} The full SKILL.md content
 */
function getGuide() {
  return readFile('SKILL.md');
}

/**
 * Get the EULA template
 * @returns {string} The EULA template content
 */
function getEulaTemplate() {
  return readFile('references/eula-template.md');
}

/**
 * Get the third-party licenses template
 * @returns {string} The third-party licenses template content
 */
function getThirdPartyLicensesTemplate() {
  return readFile('references/third-party-licenses-template.md');
}

/**
 * Get the attribution UI template
 * @returns {string} The attribution UI template content
 */
function getAttributionTemplate() {
  return readFile('references/attribution-ui-template.md');
}

/**
 * Get the README
 * @returns {string} The README content
 */
function getReadme() {
  return readFile('README.md');
}

/**
 * Copy a template to a specified destination
 * @param {string} template - Template name ('eula', 'licenses', or 'attribution')
 * @param {string} destPath - Destination file path
 */
function copyTemplate(template, destPath) {
  const templateMap = {
    eula: 'references/eula-template.md',
    licenses: 'references/third-party-licenses-template.md',
    attribution: 'references/attribution-ui-template.md'
  };

  const templatePath = templateMap[template.toLowerCase()];
  if (!templatePath) {
    throw new Error(`Unknown template: ${template}. Available: eula, licenses, attribution`);
  }

  const sourcePath = path.join(__dirname, templatePath);
  fs.copyFileSync(sourcePath, destPath);
}

/**
 * Get package version
 * @returns {string} Package version
 */
function getVersion() {
  const pkg = require('./package.json');
  return pkg.version;
}

module.exports = {
  getGuide,
  getEulaTemplate,
  getThirdPartyLicensesTemplate,
  getAttributionTemplate,
  getReadme,
  copyTemplate,
  getVersion
};
