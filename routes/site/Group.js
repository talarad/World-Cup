
class Group {
    constructor(name, admin, id) {
        this.name = name;
        this.admin = admin;
        this.members = [];
        this.id = id;
    }

    addMember(newMember) {
        const user = {
            firstName: newMember.firstName,
            lastName: newMember.lastName,
            bets: newMember.bets,
            score: newMember.score,
            id: newMember.id
        }

        this.members.push(user);
    }

    remove(user) {
        var index;
        this.members.forEach((member, i) => {
            if (user.id === member.id) {
                index = i;
            }
        })

        if (index > -1) {
            this.members.splice(index, 1);
        }
    }
}

module.exports = Group; 