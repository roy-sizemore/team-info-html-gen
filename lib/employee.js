class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return Employee.name;
    }
    getId() {
        return Employee.id;
    }
    getEmail() {
        return Employee.email;
    }
    getRole() {
        return 'Current Employee';
    }
}
