const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your application?",
    },
    {
      type: "input",
      name: "purpose",
      message: "What is the purpose of it?",
    },
    {
      type: "input",
      name: "installation",
      message: "What API's are needed to install this application?",
    },
    {
      type: "input",
      name: "usage",
      message: "How does the user use this application?",
    },
    {
      type: "input",
      name: "credits",
      message: "Who would you like to give credit to?",
    },
    {
      type: "input",
      name: "license",
      message: "What licenses were used in this project?",
    },
    {
      type: "input",
      name: "picture",
      message:
        "If you have a picture you would like to attach, provide the url here.",
    },
    {
      type: "input",
      name: "pictureAlt",
      message: "Please provide an alt text for the picture.",
    },
  ]);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
const init = async () => {
  console.log("hi");
  try {
    const answers = await promptUser();

    const markdown = await generateMarkdown(answers);

    await writeFileAsync("README.md", markdown);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
