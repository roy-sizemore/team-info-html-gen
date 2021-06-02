class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    };

    getGitHub() {
        return Engineer.github;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;
