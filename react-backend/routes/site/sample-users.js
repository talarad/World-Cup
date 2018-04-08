const User = require('./User.js');

const users = []

const user1 = new User('tal', '123456', 'Tal', 'Arad');
user1.joinGroup(0);
user1.joinGroup(1);
user1.joinGroup(2);

user1.bets[856735] = {
    id: "856735",
    away: 3,
    home: 1
}

const user2 = new User('omer', 123456, 'Omer', 'Prizner');
user2.joinGroup(0);

const user3 = new User('michael', 123456, 'Michael', 'Levi');
user3.joinGroup(0);

const user4 = new User('itamar', 123456, 'Itamar', 'Fellus');
user4.joinGroup(0);
user4.joinGroup(2);

const user5 = new User('dor', 123456, 'Dor', 'Lamay');
user5.joinGroup(0);

const user6 = new User('shiran', 123456, 'Shiran', 'Kushnir');
user6.joinGroup(0);
user6.joinGroup(1);
user6.joinGroup(2);

const user7 = new User('ron', 123456, 'Ron', 'Arbib');
user7.joinGroup(0);
user7.joinGroup(1);

const user8 = new User('iddo', 123456, 'Iddo', 'Kertes');
user8.joinGroup(0);
user8.joinGroup(2);

const user9 = new User('shiri', 123456, 'Shiri', 'Ronen');
user8.joinGroup(0);
user8.joinGroup(2);

const user10 = new User('nitzan', 123456, 'Nitzan', 'Hershkovitz');
user8.joinGroup(0);
user8.joinGroup(1);

const user11 = new User('shaked', 123456, 'Shaked', 'Keinan');
user8.joinGroup(0);
user8.joinGroup(2);

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


module.exports = users;