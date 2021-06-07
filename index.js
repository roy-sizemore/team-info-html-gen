const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamPage = require("./src/index.js")

// Array to hold the org based on user input
const org = [];

const startOrgGenerator = () => {

    // Engineer function. User will need the Manager's name, email, ID and office number
    const generateManager = () => {
        inquirer
        .prompt([
            {
                name: 'name',
                message: "Please enter the manager's name: ",
                type: 'input'
            },
            {
                name: 'email',
                message: "Pleae enter the manager's email: ",
                type: 'input'
            },
            {
                name: 'id',
                message: "Please enter the manager's ID: ",
                type: 'input'
            },
            {
                name: 'officeNumber',
                message: "Please enter the manger's office number: ",
                type: 'input'
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            org.push(manager);

            generateEmployee();
        });
    };

    // Employee function. User will need to select which type of employee for which they'll be entering info or to exit and generate their org chart
    const generateEmployee = () => {
        inquirer
        .prompt([
            {
                name: "exit",
                message: "Please select a type of employee or exit to generate your org chart",
                type: 'list',
                choices: [
                    "Engineer",
                    "Intern",
                    "Exit prompts and generate org chart"
                ]
            }
        ])
        .then((answer) => {
            switch (answer.exit) {
                case "Engineer":
                    generateEngineer();
                    break;
        
                case "Intern":
                    generateIntern();
                    break;
        
                default:
                    generateOrgChart();
                    break;
            };
        });
    };

    // Engineer function. User will need the Engineer's name, ID, email and GitHub username
    const generateEngineer = () => {
        inquirer
            .prompt([
            {
                name: 'name',
                message: "Please enter the engineer's name: ",
                type: 'input'
            },
            {
                name: 'id',
                message: "Please enter the engineer's ID: ",
                type: 'input'
            },
            {
                name: 'email',
                message: "Please enter the engineer's email address: ",
                type: 'input'
            },
            {
                name: 'username',
                message: "Please enter the engineer's Github username: "
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username);
            org.push(engineer);

            generateEmployee();
        });
    };

    // Intern function. User will need the Intern's name, ID, email and college/university
    const generateIntern = () => {
        inquirer
        .prompt([
            {
                name: 'name',
                message: "Please enter the intern's name: ",
                type: 'input'
            },
            {
                name: 'id',
                message: "Please enter the intern's ID: ",
                type: 'input'
            },
            {
                name: 'email',
                message: "Please enter the intern's email: ",
                type: 'input'
            },
            {
                name: 'school',
                message: "Please enter the intern's school",
                type: 'input'
            }
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            org.push(intern);

            generateEmployee();
        })
    };
 
    const generateOrgChart = () => {
        fs.writeFile('./dist/index.html', teamPage(org), (err) => {
            if (err) {
                console.error(err);
            };
        });
    };

    generateManager();
};

startOrgGenerator();

