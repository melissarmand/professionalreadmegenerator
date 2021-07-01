// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions= [ {
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

     {
         type: 'input',
         name: 'usage',
         message: 'How will this project be used?',
     },
     
     {
         type: 'input',
         name: 'tests',
         message: 'What tests will need to be run to ensure this project is functioning correctly?',
     },

     {  type: 'list',
        name: 'license',
        message: 'Please choose the license used for this project:',
        choices: [
            'Apache',
            'IBM',
            'MIT',
            'Mozilla',
            'ODbL',
            'WTFPL',
    ]
     },

     {
         type: 'input',
         name: 'github',
         message: 'Please enter your GitHub Repository name.',
     },
       
     {
         type: 'input',
         name: 'email',
         message: 'Please enter your email address to contact you with any questions regarding this project.'
     }
    ]
;


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
        const generateReadMe = generateMarkdown(answers)

            fs.writeFile('./utils/readMeTemplate.md', generateReadMe, (error) =>
                error ? console.log(err) : console.log('Your readMe has been generated!'))
            ;
        })

}

// Function call to initialize app
init()