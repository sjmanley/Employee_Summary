const Employee = require("./Employee");
class Engineer extends Employee {

    constructor(a,b,c,d) {

        super(a,b,c);
        this.github  = d;
    }

    getGithub(){
       return this.github;
        }


    getRole() {
    }
}

module.exports = Engineer;