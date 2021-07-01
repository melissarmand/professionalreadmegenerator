const licenseBadgeLinks = require('./licensebadges')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   switch (answers.license) {
//     case 'Apache':
//       licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
//       break;
    
//     case 'IBM':
//       licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
//       break;

//       case 'MIT':
//         licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//         break;

//       case 'Mozilla':
//         licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
//         break;
      
//       case 'ODbL':
//         licenseBadge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
//         break;

//       case 'WTFPL':
//         licenseBadge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
//         break;

//       default: '';
//         break;
//   }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  answers.licenseBadge = licenseBadgeLinks[answers.license];

  return `## Title ${answers.titleofProject}

  ## Table of Contents
  -[Description](#description) <br>
  -[Installation](#installation) <br>
  -[Usage](#usage) <br>
  -[Tests](#tests) <br>
  -[Credit](#credit) <br>
  -[License](#license) <br>
  -[Questions](#questions)

  ${answers.licenseBadge}

  ## Description
  🔍 ${answers.description}

  ## Installation
  💾 ${answers.installation}

  ## Usage
      ${answers.usage}

  ## Tests
      ${answers.tests}

  ## Credit
  👪 ${answers.credits}

  ## License
  ${answers.license}

  ## Questions

    [${answers.questions}](answers.link)
    ${answers.questions2}
`;
}

//renderLicenseBadge (license);

module.exports = generateMarkdown;
