
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(a, b, c, d){

        super(a,b,c);
            this.school = d;
    }

getSchool(){
    return this.school;
}


getRole() {
    return "Intern";

}
}
module.exports = Intern;