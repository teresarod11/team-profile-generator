// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generatehtml');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let all = [];


function main(){
    inquirer.prompt([
    {
       type: "list",
       name: "choice",
       message: "Would you like to add an employee?",
       choices: ["manager", "engineer", "intern", "Build profile"] 
    }
]) 
    .then((answers) => {
        if (answers.choice === "engineer"){
            addEngineer()
        } else if (answers.choice === "intern"){
            addIntern()
        } else if (answers.choice === "manager"){
            addManager()
        } else {
            addProfile()
        }
    })
} 
main();

function addEngineer(){
    inquirer.prompt([ 
    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",

    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github?",
    },
])
    .then((answers) => {
        const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github);
        all.push(engineer);
        main();
    })
} 
function addIntern(){
    inquirer.prompt([ 
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",

    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
    },
])
    .then((answers) => {
        const intern = new Intern(answers.id, answers.name, answers.email, answers.school);
        all.push(intern);
        main();
    })
} 
function addManager(){
    inquirer.prompt([ 
    {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
    },
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",

    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
])
    .then((answers) => {
        const manager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber);
        all.push(manager);
        main();
    })
} 

function addProfile(){
    const html = generateHtml(all)

    fs.writeFile('./dist/index.html', html, (err) => 
    err ? console.log(err) : console.log('Profile was successfully made!')
    )
}