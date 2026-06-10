const fs = require('fs');

const filePath = '/Portfolio/src/data/skillDetails.js';
let content = fs.readFileSync(filePath, 'utf8');

// Regex to match the certificate object
// This will match `certificate: { ... },`
const regex = /certificate:\s*\{[\s\S]*?\}(,?)/g;

const replacement = `certificate: {
      title: 'Project-Based Experience',
      issuer: 'Self-Taught / Project-Based',
      year: 'Present'
    }$1`;

content = content.replace(regex, replacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated skillDetails.js');
