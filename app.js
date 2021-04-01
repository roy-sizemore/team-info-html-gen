const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please enter the employee's name (first/last)",
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID"
    },
    {
        type: 'checkbox',
        name: 'level',
        message: 'Is this a Manager, Engineer or Intern?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
    },
  ])
  .then((data) => {
      if (data.level === 'Manager') {
          inquirer.prompt({
              type: 'input',
              name: 'office',
              message: 'Please enter an office number'
          })
      } else if (data.level === 'Engineer') {
          inquirer.prompt({
              type: 'input',
              name: 'github',
              message: "What is the Engineer's GitHub username?"
          })
      } else {
          inquirer.prompt({
              type: 'input',
              name: 'school',
              message: "What is the Intern's school?"
          })
      };
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  }); 

