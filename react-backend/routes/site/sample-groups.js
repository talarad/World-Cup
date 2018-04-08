const Users = require('./sample-users.js');
const Group = require('./Group.js');

const group1 = new Group("Adir", Users[0])
Users.forEach(user => {
    group1.addMember(user);
})

group1.increaseScore(5, 40);
group1.increaseScore(6, 20);
group1.increaseScore(0, 25);
group1.increaseScore(1, 40);
group1.increaseScore(2, 10);
group1.increaseScore(3, 50);
group1.increaseScore(4, 20);
group1.increaseScore(5, 20);
group1.increaseScore(7, 30);
group1.increaseScore(8, 15);


const group2 = new Group("bla", Users[0])
group2.addMember(Users[0]);
group2.addMember(Users[5]);
group2.addMember(Users[6]);

group2.increaseScore(5, 50);
group2.increaseScore(6, 30);

const group3 = new Group("Yoyo", Users[8])
group3.addMember(Users[0]);
group3.addMember(Users[1]);
group3.addMember(Users[3]);
group3.addMember(Users[5]);
group3.addMember(Users[8]);

group3.increaseScore(8, 50);
group3.increaseScore(1, 20);


const Groups = [group1, group2, group3]

module.exports = Groups;