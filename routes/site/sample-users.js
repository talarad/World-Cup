const User = require('./User.js');

const users = []
let counter = 0;

const user1 = new User('tal', '123456', 'Tal', 'Arad', counter++);
user1.joinGroup(0);
user1.joinGroup(1);
user1.joinGroup(2);

const user2 = new User('omer', '123456', 'Omer', 'Prizner', counter++);
user2.joinGroup(0);

const user3 = new User('michael', '123456', 'Michael', 'Levi', counter++);
user3.joinGroup(0);

const user4 = new User('itamar', '123456', 'Itamar', 'Fellus', counter++);
user4.joinGroup(0);
user4.joinGroup(2);

const user5 = new User('dor', '123456', 'Dor', 'Lamay', counter++);
user5.joinGroup(0);

const user6 = new User('shiran', '123456', 'Shiran', 'Kushnir', counter++);
user6.joinGroup(0);
user6.joinGroup(1);
user6.joinGroup(2);

const user7 = new User('ron', '123456', 'Ron', 'Arbib', counter++);
user7.joinGroup(0);
user7.joinGroup(1);

const user8 = new User('iddo', '123456', 'Iddo', 'Kertes', counter++);
user8.joinGroup(0);
user8.joinGroup(2);

const user9 = new User('shiri', '123456', 'Shiri', 'Ronen', counter++);
user9.joinGroup(0);
user9.joinGroup(2);

const user10 = new User('nitzan', '123456', 'Nitzan', 'Hershkovitz', counter++);
user10.joinGroup(0);
user10.joinGroup(1);

const user11 = new User('shaked', '123456', 'Shaked', 'Keinan', counter++);
user11.joinGroup(0);
user11.joinGroup(2);

// user1.increaseScore(user1, 40);
// user2.increaseScore(user2, 20);
// user3.increaseScore(user3, 15);
// user4.increaseScore(user4, 25);
// user5.increaseScore(user5, 25);
// user6.increaseScore(user6, 40);
// user8.increaseScore(user8, 10);
// user7.increaseScore(user7, 50);
// user9.increaseScore(user9, 20);
// user10.increaseScore(user10, 20);
// user11.increaseScore(user11, 30);

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);
users.push(user11);




module.exports = {
    users, counter
};