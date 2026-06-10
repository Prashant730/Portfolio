const fs = require('fs');

const filePath = '/Portfolio/src/data/skillDetails.js';
let content = fs.readFileSync(filePath, 'utf8');

const levelMap = {
  'JavaScript (ES6+)': 'Intermediate',
  'Java': 'Intermediate',
  'C++': 'Intermediate',
  'React.js': 'Intermediate',
  'Vite': 'Beginner',
  'HTML5': 'Advanced',
  'CSS3': 'Intermediate',
  'Tailwind CSS': 'Intermediate',
  'Node.js': 'Intermediate',
  'Express.js': 'Intermediate',
  'MongoDB (schema design, indexing)': 'Intermediate',
  'MySQL': 'Intermediate',
  'AWS (EC2, S3, Lambda, IAM Roles)': 'Beginner',
  'Git': 'Intermediate',
  'GitHub': 'Intermediate',
  'Vercel': 'Intermediate',
  'XAMPP': 'Beginner'
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

for (const [skill, newLevel] of Object.entries(levelMap)) {
  const escapedSkill = escapeRegExp(skill);
  // Match either `'Skill Name':` or `SkillName:`
  const regex = new RegExp(`('${escapedSkill}'|${escapedSkill}):\\s*\\{[\\s\\S]*?level:\\s*'[^']+'`, 'g');
  
  content = content.replace(regex, (match) => {
    return match.replace(/level:\s*'[^']+'/, `level: '${newLevel}'`);
  });
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully adjusted expertise levels.');
