const fs = require("fs");
const path = require('path'); // do I NEED IT?
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
    {
    type: 'input',
    name: 'description',
    message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your app/project?',
      },
    {
    type: 'input',
    name: 'usage',
    message: 'How to use it?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email: ',
      },
    {
    type: 'input',
    name: 'tests',
    message: 'How to run the test?',
    },
    {
        type: 'input',
        name: 'github_URL',
        message: 'Your GitHub url:',
      },
    {
    type: 'checkbox',
    name: 'license',
    message: 'License:',
    choices: ['GNU General Public License, version 3 (GPLv3)', 'Apache License 2.0', 'Berkeley Software Distribution (BSD)', 'MIT License' ]
    }

     
];

// function to write README file
// function writeToFile(fileName, err => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log('File written successfully');
//         }
//         fs.writeFile(fileName, generateMarkdown)

//     }
// )
// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers)
        generateMarkdown(answers);
    });

}

// function call to initialize program
init();
