let counter = 0

class Group {
    constructor(name, admin) {
        this.name = name;
        this.admin = admin;
        this.members = [];
        this.id = counter++;
    }

    addMember(user) {
        this.members.push(user);
        return this.members;
    }

    remove(user) {
        // maybe in the furture
    }
}

module.exports = Group; 