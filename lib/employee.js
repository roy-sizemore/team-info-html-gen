class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log('name')
    }
    getId() {
        console.log('id')
    }
    getEmail() {
        console.log('email')
    }
    getRole() {
        console.log('role')
    }
}

// dumping this here. From app.js:

// switch(data.level) {
//     case 'Manager':
//         inquirer.prompt({
//             type: 'input',
//             name: 'office',
//             message: "What is the Manager's office number?"
//         })
//     case 'Engineer':
//         inquirer.prompt({
//             type: 'input',
//             name: 'github',
//             message: "What is the Engineer's GitHub username?"
//         })
//     case 'Intern':
//         inquirer.prompt({
//             type: 'input',
//             name: 'school',
//             message: "Which school does the intern attend?"
//         })
// };