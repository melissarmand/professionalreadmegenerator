// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions=() => {
    return inquirer.prompt ([ {
        type: 'input',
        name: 'titleofProject',
        message: 'What is the title of your project?',
     },
     {
         type: 'input',
         name: 'description',
         message: 'Give a brief description of your project.',
     },

     {
         type: 'input',
         name: 'installation',
         message: 'What are the steps required to install your project?',
     },
     {
         type: 'input',
         name: 'credits',
         message: 'List your collaborators, if any, and any tutorials you may have used.',
     },
     {  type: 'input',
        name: 'license',
        message: 'Please add any licenses used for this project'
     },
        
    ])
};


// TODO: Create a function to write README file
function writeToFile('generateMarkdown.js', generateMarkdown) {
    fs.writeFile('generateMarkdown', generateMarkdown)
}

// TODO: Create a function to initialize app
function init() {}

// const init = () => {
    // promptUser()
    //   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    //   .then(() => console.log('Successfully wrote to index.html'))
    //   .catch((err) => console.error(err));
//   };
// Function call to initialize app
init();