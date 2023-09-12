//const fs = require("fs");
//const path = require("path");
//const inquirer = require("inquirer");
//const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
//const questions = [];

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
//function init() {
//console.log("The Program Starter");

//inquirer
//.prompt([{
//type: "input",
//message: "What is the title of your Project?",
//name: "title",
//}, {
//type: "input",
//message: "What is the description?",
//name: "description",
//}, {
//type: "input",
//message: "what is your email",
//name: "email",
//},
//])
//.then((response) => console.log(response));
//}

// function call to initialize program
//init();// This section exports the packages that are required for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// This setion exports the function that generates the markdown for the README file.
const generateMarkdown = require("./utils/generateMarkdown");

// Using util.promisify to promisify fs.writeFile
const writeFileAsync = util.promisify(fs.writeFile);
// Validating the user's input. If the input is empty, it will return an error message else it will return true.
function validateInput(input) {
    if (input.trim() === "") {
        return "This cannot be empty. Please enter a valid input.";
    } else {
        return true;
    }
}
// Validating the user's email address. Checking if the email input is empty or its format is incorrect. Otherwise it will return true.
function validateEmailFormat(input) {
    // Regex for email format.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input === "") {
        return "The email cannot be empty. Please enter a valid email address.";
    } else if (!emailRegex.test(input)) {
        return "Please enter a valid email address.";
    } else {
        return true;
    }
}
// This function prompts the user for the input and returns the answers that are validated.
const promptUser = async() => {
    try {
        const answers = await inquirer.prompt([{
                type: "input",
                name: "title",
                message: "What is the title of your project?",
                validate: validateInput,
            },
            {
                type: "input",
                name: "description",
                message: "Please provide a description of your project.",
                validate: validateInput,
            },
            {
                type: "input",
                name: "installation",
                message: "Please provide installation instructions.",
                validate: validateInput,
            },
            {
                type: "input",
                name: "usage",
                message: "Please provide usage information.",
                validate: validateInput,
            },
            {
                type: "input",
                name: "contributers",
                message: "Please provide contributers.",
                validate: validateInput,
            },
            {
                type: "input",
                name: "tests",
                message: "Please provide tests.",
                validate: validateInput,
            },
            {
                type: "list",
                name: "license",
                message: "Please select a license.",
                choices: [
                    "Apache License 2.0",
                    "GNU GPLv3",
                    "MIT License",
                    "ISC License",
                    "None",
                ],
            },
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?",
                validate: validateInput,
            },
            {
                type: "email",
                name: "email",
                message: "What is your email address?",
                validate: validateEmailFormat,
            },
        ]);
        return answers;
    } catch (error) {
        throw error;
    }
};
// This function initializes the application. Using try...catch to handle errors.
async function init() {
    try {
        const answers = await promptUser();
        const readmeContent = generateMarkdown(answers);
        console.log("Generating README...");
        await writeFileAsync("README.md", readmeContent);
        console.log(
            "Successfully wrote to README.md. Check out your README.md to see the output!"
        );
    } catch (error) {
        console.error(error);
    }
}
// Function call to initialize the generator.
init();