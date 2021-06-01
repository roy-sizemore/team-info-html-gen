const inquirer = require('inquirer');
const fs = require('fs');

const generateOrgChart = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Org Chart</title>
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="script.js"></script>
    </body>
    </html>`;

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
    ])
    .then((answers) => {
        // const genOrg = generateOrgChart(answers);

        fs.writeFile('./dist/index.html', generateOrgChart(answers), (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
