// node modules
const inquirer = require('inquirer');
const fs = require ('fs');

// class imports
const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import html from src folder

// Team array
const teamArray = [];

 function memberPrompt(){
     inquirer.prompt({
        type: 'rawlist',
        name: 'newEmplyoee',
        message: 'Who are we adding to the team?',
        choices: [
            'Manager', 
            'Engineer', 
            'Intern',
            'Team Set! Exit'
        ]
    })
    .then(teamAnswer=>{
        console.log(teamAnswer);
    })

}



memberPrompt;

