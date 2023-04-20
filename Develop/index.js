// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// An array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title",
    },
    {
        type: "input",
        message: 
`Provide a short description explaining the what, why, and how of your project.
Use the following questions as a guide:

- What was your motivation?
- Why did you build this project?
    --(Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?    
`,
        name: "description",
    },
    {
        type: "input",
        message: 
`What are the steps required to install your project?
Provide a step-by-step description of how to get the development environment running.        
`,
        name: "installation",
    },
    {
        type: "input",
        message: 
`Provide instructions and examples for use.
`,
        name: "usage",
    },
    {
        type: "input",
        message: 
`List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution,
list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
`,
        name: "contribution",
    },
    {
        type: "list",
        message: 
`The last section of a high-quality README file is the license.
This lets other developers know what they can and cannot do with your project.
If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`,
        name: "license",
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "Eclipse Public License 1.0", "GNU GPL v3","ISC License", "The MIT License", "Mozilla Public License 2.0", "SIL Open Font License 1.1", "The Unlicense", "The Do What the Fuck You Want to Public License", "The zlib/libpng License"],
    },
    {
        type: "input",
        message: 
`Go the extra mile and write tests for your application.
Then provide examples on how to run them here.
`,
        name: "tests",
    },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "githubUsername",
    },
    {
        type: "input",
        message: "Enter an email to contact you for further questions: ",
        name: "email",
    },
];

// A function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./output/${fileName}`, data, (err) => {
        if(err){
            throw err
        }
        console.log("success")
    })
}

// A function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answer => {
            console.log(answer);
            writeToFile("README.md", generateMarkdown.generateReadmeFile(answer))
        });
}

// Function call to initialize app
init();
