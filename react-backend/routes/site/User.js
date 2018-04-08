let counter = 0;

class User {
    constructor(username, password, firstName, lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.groups = [];
        this.id = counter++;
        this.bets = {}
    }

    joinGroup(groupID) {
        this.groups.push(groupID);
    }

    removeGroup(groupID) {
        // maybe in the furture
    }
}

module.exports = User; 