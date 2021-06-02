const inquirer = require('inquirer');
const fs = require('fs');

const generateOrgChart = (data) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <title></title>
    </head>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <script src="../src/index.js"></script>
    </body>
    </html>`;

const generateManager = () => {
inquirer
    .prompt([
        {
            name: 'managerName',
            message: "Please enter the manager's name: ",
            type: 'input'
        },
        {
            name: 'managerEmail',
            message: "Pleae enter the manager's email: ",
            type: 'input'
        },
        {
            name: 'managerID',
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
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        generateEmployee();
    });

const generateEmployee = () => {
    inquirer
        .prompt([
        {
            name: 'name',
            message: "Please enter the employee's name: ",
            type: 'input'
        },
        {
            name: 'id',
            message: "Please enter the employee's ID: ",
            type: 'input'
        },
        {
            name: 'email',
            message: "Please enter the employee's email address: ",
            type: 'input'
        },
        {
            name: 'mei',
            message: 'Please enter the type of employee: ',
            type: 'list',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            name: 'exit',
            message: 'Would you like to enter a new employee or exit?',
            type: 'list',
            choices: ['Enter another employee', 'Exit']
        }
    ])
    .then((answers) => {
        // const genOrg = generateOrgChart(answers);

        fs.writeFile('./dist/index.html', generateOrgChart(answers), (err) => {
            if (err) {
                console.error(err);
            };
        });
    })};
};
