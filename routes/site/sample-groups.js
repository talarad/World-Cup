const Users = require('./sample-users.js').users;
const Group = require('./Group.js');

const group1 = new Group("Adir", Users[0].id, 0)
Users[0].adminAt.push(group1.id);

Users.forEach(user => {
    group1.addMember(user);
})

const group2 = new Group("bla", Users[0].id, 1)
Users[0].adminAt.push(group2.id);
group2.addMember(Users[0]);
group2.addMember(Users[5]);
group2.addMember(Users[6]);

const group3 = new Group("Yoyo", Users[8].id, 2)
Users[8].adminAt.push(group3.id);
group3.addMember(Users[0]);
group3.addMember(Users[1]);
group3.addMember(Users[3]);
group3.addMember(Users[5]);
group3.addMember(Users[8]);


const Groups = [group1, group2, group3]

module.exports = Groups;


const friends = [{
    away: "1",
    done: false,
    home: "1",
    id: "1",
    playerid: 0 //tal
}, {
    away: "2",
    done: false,
    home: "0",
    id: "1",
    playerid: 1 //michael
}, {
    away: "2",
    done: false,
    home: "0",
    id: "1",
    playerid: 2 //doron
}, {
    away: "2",
    done: false,
    home: "1",
    id: "1",
    playerid: 3 //nitz
}, {
    away: "1",
    done: false,
    home: "1",
    id: "1",
    playerid: 4 //priz
}, {
    away: "2",
    done: false,
    home: "1",
    id: "1",
    playerid: 5 //ishai
}, {
    away: "3",
    done: false,
    home: "1",
    id: "1",
    playerid: 6 //shiran
}, {
    away: "2",
    done: false,
    home: "1",
    id: "1",
    playerid: 7 //itamar
}, {
    away: "2",
    done: false,
    home: "0",
    id: "1",
    playerid: 9 //ron
}
]