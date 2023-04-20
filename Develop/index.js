// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
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

const licenseBadges = {
    "Apache 2.0 License": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "ISC License": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "The MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "SIL Open Font License 1.1": "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "The Do What the Fuck You Want to Public License": "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    "The zlib/libpng License": "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",

}

function generateReadmeFile(answer){
    console.log("answer from func: ", answer);
    const markdown = 
    `
# ${answer.title}

## Description

${answer.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answer.installation}

## Usage

${answer.usage}

Include screenshots as needed.

To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    \`\`\`md
    ![alt text](assets/images/screenshot.png)
    \`\`\`

## Credits

${answer.contribution}

## License

${answer.license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

${licenseBadges[answer.license]}

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${answer.tests}

## Questions

How to reach me with additional questions:

Github Profile: [${answer.githubUsername}](https://github.com/${answer.githubUsername})

Email: [${answer.email}](mailto:${answer.email})
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
            writeToFile("README.md", generateReadmeFile(answer))
        });
}

// Function call to initialize app
init();
