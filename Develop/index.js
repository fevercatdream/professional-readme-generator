// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter README title: ",
        name: "title",
    },
    {
        type: "input",
        message: "Enter README description: ",
        name: "desc",
    },
    {
        type: "input",
        message: "Enter README installation instructions: ",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter README usage instructions and examples of use: ",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter README credits such as assets used or collaborators: ",
        name: "contribution",
    },
    {
        type: "input",
        message: "Enter tests: ",
        name: "tests",
    },
    {
        type: "list",
        message: "Choose a license: ",
        name: "license",
        choices: ["apache", "boost", "eclipse", "isc", "mit", "mozilla", "sil", "unlicense", "wtfpl", "zlib"],
    },
    {
        type: "input",
        message: "Enter GitHub username: ",
        name: "githubUsername",
    },
    {
        type: "input",
        message: "Enter a contact me email: ",
        name: "email",
    },
];

const licenseBadges = {
    apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    boost: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    eclipse: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    sil: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    unlicense: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    wtfpl: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    zlib: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",

}

function generateReadmeFile(){
    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = "README.md";
    generateReadmeFile();
    fs.writeFile(`./output/${fileName}`, data, (err) => {
        if(err){
            throw err
        }
        console.log("success")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answer => {
            console.log(answer);
            writeToFile()
        });
}

// Function call to initialize app
init();
