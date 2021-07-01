//Links the license.js to this file for the badges
const licenseBadgeLinks = require('./licensebadges')


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  answers.licenseBadge = licenseBadgeLinks[answers.license];

  return `## ${answers.titleofProject}

  ## Table of Contents
  - [Description](#description) <br>
  - [Installation](#installation) <br>
  - [Usage](#usage) <br>
  - [Tests](#tests) <br>
  - [Credit](#credit) <br>
  - [License](#license) <br>
  - [Questions](#questions)

  ${answers.licenseBadge}

  ##   Description
  🔍 ${answers.description}

  ## Installation
  💾 ${answers.installation}

  ## Usage
  💻  ${answers.usage}

  ## Tests
  ✏️  ${answers.tests}

  ## Credit
  👪 ${answers.credits}

  ## License
  🗃️ This project is covered under the ${answers.license} license.

  ## Questions
  🙋 Questions? Please contact me at the links below:

  📧Email: [${answers.email}](mailto:${answers.email})
  
  
  🔗GitHub Link: [${answers.github}](https://github.com/${answers.github}) 

`;
}


module.exports = generateMarkdown;
