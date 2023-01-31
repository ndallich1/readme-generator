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
      choices: ["MIT", "Apache", "GNU"],
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

${projectLicense}

## Features

${projectFeatures}

## Tests

${projectTestInstructions}
`;

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => writeFile("README.md", generateReadMe(answers)))
    .then(() => console.log("Successfully created README.md!"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
