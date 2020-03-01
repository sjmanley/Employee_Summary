class Employee {
    constructor(a, b, c){
        this.name = a;
        this.id = b;
        this.email = c;
    }

getName() {
    return this.name;
}
getId(){
    return this.id;
}
getEmail(){
    return this.email;
}
getRole() {
    return "Employee";

}
}

module.exports = Employee;