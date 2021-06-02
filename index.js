const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const org = [];

const startOrgGenerator = () => {

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

    const generateEmployee = () => {
        inquirer
        .prompt([
            {
                name: "exit",
                message: "Please select a type of employee or exit to generate your org chart",
                choices: [
                    "Engineer",
                    "Intern",
                    "Exit prompts and generate org chart"
                ]
            }
        ])
        .then(answer => {
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
        fs.writeFile('./dist/index.html', render(org), "utf-8");
    };

    generateManager();
};

startOrgGenerator();

