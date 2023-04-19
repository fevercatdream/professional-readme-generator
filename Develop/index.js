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
        name: "description",
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
    const markdown = 
    `
# ${questions.title}

## Description

${questions.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${questions.installation}

## Usage

${questions.usage}

## Credits

${questions.contribution}

## License

${questions.license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

${licenseBadges}

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${questions.tests}

## Questions

How to reach me with additional questions:

Github Profile: https://github.com/${questions.githubUsername}

Email: ${questions.email}
    `;

    return markdown;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
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
            writeToFile("README.md", generateReadmeFile())
        });
}

// Function call to initialize app
init();
