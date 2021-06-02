class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {
        return Intern.school;
    }
    getRole() {
        return 'Intern';
    }
}
