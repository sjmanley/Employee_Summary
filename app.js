const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
// const card = require("./lib/main");

ask();

async function ask() {
    var addPeople = "y";
    var people = [];
    do {
        const response = await promptUser();
        people.push(response);
        addPeople = response.end;
    } while (addPeople === "y");
    console.log("Building HTML file of team.")
    buildHtml(people);
}

function buildHtml(people) {
    for (i = 0; i < people.length; i++) {
        let person = people[i];
        switch (person.position) {
            case 'Manager':
                const manager = new Manager(person.name, person.id, person.email, person.officeNumber);
                // html = card.manager(manager);
                break;
            case 'Engineer':
                const engineer = new Engineer(person.name, person.id, person.email, person.github);
                // html = card.engineer(engineer);
                break;
            case 'Intern':
                const intern = new Intern(person.name, person.id, person.email, person.school);
                // html = card.intern(intern);
                break;
        }

    }

}

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'Company ID Number?'
        },
        {
            type: 'list',
            message: 'Position:',
            name: 'position',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ],
        },
        {
            type: 'input',
            message: 'Employee Email Address?',
            name: 'email',

        },
        {
            type: 'input',
            message: 'Manager Office Number',
            name: 'officeNumber',
            when: (answer) => answer.position === 'Manager'
        },
        {
            type: 'input',
            message: 'what is Engineer GitHub Username?',
            name: 'github',
            when: (answer) => answer.position === 'Engineer'
        },
        {
            type: 'input',
            message: 'What school did Intern attend?',
            name: 'school',
            when: (answer) => answer.position === 'Intern'
        },
        {
            type: "input",
            name: "end",
            message: "add another user [y/n]?"
        },
    ]);
}