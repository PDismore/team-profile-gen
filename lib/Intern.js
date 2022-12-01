const Employee = require ("./Employee");

// adds employee into intern class

class Intern extends Employee{
    constructor (name, id, email, university){
        super (name, id, email, university);
        this.university = university;
    }
    getUniversity(){
        return this.university;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;