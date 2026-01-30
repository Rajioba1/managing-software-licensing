#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const commands = {
  help: () => {
    console.log(`
Software Licensing Skill CLI

Usage:
  licensing-skill <command> [options]

Commands:
  help              Show this help message
  guide             Display the complete licensing workflow guide (SKILL.md)
  eula              Display the EULA template
  licenses          Display the third-party licenses template
  attribution       Display the attribution UI template
  list              List all available templates
  copy <template>   Copy a template to current directory

Templates:
  - eula
  - licenses
  - attribution

Examples:
  licensing-skill guide
  licensing-skill copy eula
  licensing-skill copy licenses

Documentation:
  For full documentation, see README.md in the package directory.
`);
  },

  guide: () => {
    const skillPath = path.join(__dirname, '..', 'SKILL.md');
    const content = fs.readFileSync(skillPath, 'utf8');
    console.log(content);
  },

  eula: () => {
    const templatePath = path.join(__dirname, '..', 'references', 'eula-template.md');
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath, 'utf8');
      console.log(content);
    } else {
      console.error('EULA template not found. Please check the installation.');
    }
  },

  licenses: () => {
    const templatePath = path.join(__dirname, '..', 'references', 'third-party-licenses-template.md');
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath, 'utf8');
      console.log(content);
    } else {
      console.error('Third-party licenses template not found. Please check the installation.');
    }
  },

  attribution: () => {
    const templatePath = path.join(__dirname, '..', 'references', 'attribution-ui-template.md');
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath, 'utf8');
      console.log(content);
    } else {
      console.error('Attribution UI template not found. Please check the installation.');
    }
  },

  list: () => {
    console.log(`
Available Templates:

1. eula              - End-User License Agreement template
2. licenses          - Third-party licenses bundling template
3. attribution       - Attribution UI examples (About dialogs, credits)

Use "licensing-skill copy <template>" to copy a template to your current directory.
`);
  },

  copy: (template) => {
    if (!template) {
      console.error('Error: Please specify a template to copy.');
      console.log('Usage: licensing-skill copy <template>');
      console.log('Available templates: eula, licenses, attribution');
      process.exit(1);
    }

    const templateMap = {
      eula: 'eula-template.md',
      licenses: 'third-party-licenses-template.md',
      attribution: 'attribution-ui-template.md'
    };

    const templateFile = templateMap[template.toLowerCase()];
    if (!templateFile) {
      console.error(`Error: Unknown template "${template}".`);
      console.log('Available templates: eula, licenses, attribution');
      process.exit(1);
    }

    const sourcePath = path.join(__dirname, '..', 'references', templateFile);
    const destPath = path.join(process.cwd(), templateFile);

    if (fs.existsSync(destPath)) {
      console.error(`Error: File "${templateFile}" already exists in current directory.`);
      process.exit(1);
    }

    try {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied ${templateFile} to current directory`);
    } catch (err) {
      console.error(`Error copying template: ${err.message}`);
      process.exit(1);
    }
  }
};

const [,, command, ...args] = process.argv;

if (!command || command === 'help' || command === '--help' || command === '-h') {
  commands.help();
} else if (commands[command]) {
  commands[command](...args);
} else {
  console.error(`Error: Unknown command "${command}"`);
  console.log('Run "licensing-skill help" for usage information.');
  process.exit(1);
}
