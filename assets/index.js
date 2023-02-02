// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Describe your project below. (What, why, how?)",
    },
    {
      type: "input",
      name: "projectInstallation",
      message: "How would a new user install your project?",
    },
    {
      type: "input",
      name: "projectUsage",
      message: "How would a new user use your project?",
    },
    {
      type: "input",
      name: "webLink",
      message: "Is there a link for your website? Paste the web link below",
    },
    {
      type: "input",
      name: "imagePath",
      message:
        "Is there a screenshot of your application? Paste your local file path to the image below",
    },
    {
      type: "checkbox",
      name: "projectCredits",
      message: "Did you have any collaborators?",
      choices: ["yes", "no"],
    },
    {
      type: "input",
      name: "collaborator",
      message: "What is the collaborator's name?",
    },
    {
      type: "input",
      name: "collaboratorGithub",
      message: "What is the collaborator's Github username?",
    },
    {
      type: "checkbox",
      name: "projectLicense",
      message: "What license did you use?",
      choices: ["MIT", "Apache 2.0"],
    },
    {
      type: "input",
      name: "projectFeatures",
      message: "Does your project have any cool features? List them below",
    },
    {
      type: "input",
      name: "projectTestInstructions",
      message: "How would a user test your project to see if it works?",
    },
  ]);
};

const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
const apache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

const mitLicense = `MIT License

Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;
const apacheLicense = `Apache 2.0 License

Copyright [yyyy] Nikki Dallich

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
`;

// TODO: Create a function to write README file
const generateReadMe = ({
  projectTitle,
  projectDescription,
  projectInstallation,
  projectUsage,
  webLink,
  imagePath,
  collaborator,
  collaboratorGithub,
  projectLicense,
  projectFeatures,
  projectTestInstructions,
}) => `# ${projectTitle}

${licenseBadge(projectLicense)}

## Description

${projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${projectInstallation}

## Usage

${projectUsage}

To navigate to the web application in your browser, click [here](${webLink})

![screenshot of web application](${imagePath})

## Credits

Collaborators include:

[${collaborator}](${collaboratorGithub})

## License

${licenseCopy(projectLicense)}

## Features

${projectFeatures}

## Tests

${projectTestInstructions}
`;

function licenseBadge(projectLicense) {
  if (projectLicense === `MIT`) {
    return mit;
  }
  if (projectLicense === `Apache 2.0`) {
    return apache;
  }
  return ``;
}

function licenseCopy(projectLicense) {
  if (projectLicense === `MIT`) {
    return mitLicense;
  }
  if (projectLicense === `Apache 2.0`) {
    return apacheLicense;
  }
  return ``;
}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => writeFile("README.md", generateReadMe(answers)))
    .then(() => console.log("Successfully created README.md!"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
