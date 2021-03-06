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
  ๐ ${answers.description}

  ## Installation
  ๐พ ${answers.installation}

  ## Usage
  ๐ป  ${answers.usage}

  ## Tests
  โ๏ธ  ${answers.tests}

  ## Credit
  ๐ช ${answers.credits}

  ## License
  ๐๏ธ This project is covered under the ${answers.license} license.

  ## Questions
  ๐ Questions? Please contact me at the links below:

  ๐งEmail: [${answers.email}](mailto:${answers.email})
  
  
  ๐GitHub Link: [${answers.github}](https://github.com/${answers.github}) 

`;
}


module.exports = generateMarkdown;
