class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    };
    
    getOfficeNumber() {
        return Manager.officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;
