// Generate org chart HTML using inquirer prompt answers and functions from lib files
const generateTeam = (org) => {

    // Generate Manager card
    const generateManager = (manager) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-card">Employee ID: ${manager.getId()}</li>
                <li class="list-card">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-card">Office No.: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // Generate Engineer card
    const generateEngineer = (engineer) => {
        return `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-card">Employee ID: ${engineer.getId()}</li>
                        <li class="list-card">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-card">GitHub Username: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>`;
    };

    // Generate Intern card
    const generateIntern = (intern) => {
        return `
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-card">Intern ID: ${intern.getId()}</li>
                        <li class="list-card">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-card">College/University: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>`;
    };

    // Display role in appropriate card using getRole()
    const content = [];
    content.push(org.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));
    content.push(org.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""));
    content.push(org.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""));

    return content.join("");

};

// Function to export org page
module.exports = org => {

    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Org Chart</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 org-top">
                        <h1 class="text-center">Org Chart</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${generateTeam(org)}
                    </div>
                </div>
            </div>
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </body>
        </html>
            `;
};
