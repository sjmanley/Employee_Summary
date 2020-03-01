  const Employee = require("./Employee");

class Manager extends Employee{
    constructor(a,b,c,d) {

    super(a,b,c);
        this.officeNumber = d;
    }
getOfficeNumber(){
    return this.officeNumber;
}
getRole() {
    return "Manager";
}
}

module.exports = Manager;