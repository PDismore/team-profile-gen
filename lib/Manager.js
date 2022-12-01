const Employee = require ("./Employee");
// adds Employee class into the manager class.
class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.officeNumber = office;
    }
    getPhone() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;