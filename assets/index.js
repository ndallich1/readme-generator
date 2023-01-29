// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  inquirer.prompt([
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
      type: "input",
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
      type: "input",
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
  ]),
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
init();
