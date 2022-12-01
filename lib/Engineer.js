const Employee  = require ("./Employee");
// adds employee into engineer class

class Engineer extends Employee{
    constructor (name, id, email, github){
        super (name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;