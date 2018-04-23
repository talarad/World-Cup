let counter = 0;

class User {
    constructor(username, password, email, firstName, lastName) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;
        this.groups = [];
        this.id = counter++;
        this.bets = {}
        this.adminAt = []
    }

    increaseScore(user, scoreToIncrease) {
        user.score += scoreToIncrease;
    }

    joinGroup(groupID) {
        this.groups.push(groupID);
    }

    removeGroup(groupID) {
        // maybe in the furture
    }
}

module.exports = User; 