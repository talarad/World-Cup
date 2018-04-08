let counter = 0

class Group {
    constructor(name, admin) {
        this.name = name;
        this.admin = admin;
        this.members = [];
        this.id = counter++;
    }

    addMember(newMember) {
        const user = {
            user: newMember,
            score: 0,
            id: newMember.id
        }

        this.members.push(user);
        return this.members;
    }

    increaseScore(userID, scoreToIncrease) {

        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i].id === userID) {
                this.members[i].score += scoreToIncrease;
                break;
            }
        }
    }

    remove(user) {
        // maybe in the furture
    }
}

module.exports = Group; 