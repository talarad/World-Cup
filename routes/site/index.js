var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');
let dataJson = require('./dataJson.js')
let Users = require('./sample-users').users;
let Groups = require('./sample-groups');
let counter = 0;
const Group = require('./Group.js');
const User = require('./User.js');
const firebase = require('../../Fire');
const auto = require("firebase/auth");
const db = require('firebase/database');

var database = firebase.database();


let scores = []
let Bets = [];
let scoredGames = []
// let dataJson;

// firebase.database().ref('Users/').set(Users);
// firebase.database().ref('Groups/').set(Groups);
// firebase.database().ref('Bets/').set(Bets);
// firebase.database().ref('scoredGames/').set(scoredGames);
// firebase.database().ref('counter/').set(counter);
// firebase.database().ref('scores/').set(scores);

var firebaseUsers = firebase.database().ref('Users/');
firebaseUsers.on("value", function (snapshot) {
  Users = snapshot.val();
})


var firebaseGroups = firebase.database().ref('Groups/');
firebaseGroups.on("value", function (snapshot) {
  Groups = snapshot.val();
})

var firebaseScores = firebase.database().ref('scores');
firebaseScores.on("value", function (snapshot) {
  scores = snapshot.val() || [];
})


var firebaseBets = firebase.database().ref('Bets');
firebaseBets.on("value", function (snapshot) {
  Bets = snapshot.val() || [];
})


var firebaseScoredGames = firebase.database().ref('scoredGames');
firebaseScoredGames.on("value", function (snapshot) {
  scoredGames = snapshot.val() || [];
})


var firebasecounter = firebase.database().ref('Counter');
firebasecounter.on("value", function (snapshot) {
  counter = snapshot.val() || [];
})


// var firebasescores = firebase.database().ref('scores');
// firebasescores.on("value", function (snapshot) {
//   scores = snapshot.val() || [];
// })


// function updatePastGames() {
//   let games = [];
//   const groupA = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=793')
//     .then(data => data.json());
//   const groupB = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=794')
//     .then(data => data.json());
//   const groupC = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=795')
//     .then(data => data.json());
//   const groupD = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=796')
//     .then(data => data.json());
//   const groupE = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=797')
//     .then(data => data.json());
//   const groupF = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=798')
//     .then(data => data.json());
//   const groupG = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=799')
//     .then(data => data.json());
//   const groupH = fetch('http://livescore-api.com/api-client/scores/history.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=800')
//     .then(data => data.json());

//   Promise.all([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH])
//     .then(([...groups]) => {
//       groups.forEach(group => {
//         group.data.fixtures.forEach(game => {
//           games.push(game)
//         })
//       })
//     })
//     .then(data => {
//       scoredGames = data;
//     })
// }




router.get('/', function (req, res, next) {
  // let games = [];
  // const groupA = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=793')
  //   .then(data => data.json());
  // const groupB = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=794')
  //   .then(data => data.json());
  // const groupC = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=795')
  //   .then(data => data.json());
  // const groupD = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=796')
  //   .then(data => data.json());
  // const groupE = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=797')
  //   .then(data => data.json());
  // const groupF = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=798')
  //   .then(data => data.json());
  // const groupG = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=799')
  //   .then(data => data.json());
  // const groupH = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LzMQ8qCNACCnT8HQ&secret=c4rqnS1zbf6Lw1dhAZ8JqKw1n9ohh57u&league=800')
  //   .then(data => data.json());


  // Promise.all([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH])
  //   .then(([...groups]) => {
  //     groups.forEach(group => {
  //       group.data.fixtures.forEach(game => {
  //         games.push(game)
  //       })
  //     })
  //   })
  //   .then(data => {
  //     dataJson = games;
  let games = dataJson;
  games.sort(function (a, b) {
    if (a.date <= b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  })
  res.json({ status: true, games, scoredGames });
  // })
})

router.post('/', function (req, res, next) {
  const { username, password } = req.body;

  const user = login(username.toLowerCase(), password)
  if (user) {
    if (req.session.name === undefined) {
      req.session.name = username.toLowerCase();
    }
    currentUser = getCurrentUser(user);

    // if (currentUser.username === 'tal') {
    if (req.session.name.toLowerCase() === 'tal') {
      currentUser.scoredGames = scoredGames;
    }

    updateUser(currentUser);
    const userGroups = getGroups(user);
    res.json({ user: currentUser, userGroups, status: true, scoredGames });
  } else {
    res.json({ status: false })
  }
});

router.post('/register', function (req, res, next) {
  const { username, password, firstName, lastName } = req.body;
  let isUsernameFree = true;

  Users.forEach(user => {
    if (user.username.toLowerCase() === username.toLowerCase()) {
      isUsernameFree = false;
    }
  })

  if (isUsernameFree) {
    const user = new User(username.toLowerCase(), password, firstName, lastName, counter++);
    Users.push(user);
    firebase.database().ref('Users/').set(Users);
    firebase.database().ref('Counter/').set(counter);

    res.json({ user, status: true, scoredGames });
  } else {
    res.json({ status: false })
  }
})


router.post('/placeScore', function (req, res, next) {
  const { user, game, awayTeamScore, homeTeamScore } = req.body;
  if (req.session.name === 'tal') {
    const currentUser = getCurrentUser(user);

    const currentGame = {
      id: game.id,
      homeName: game.home_name,
      date: game.date,
      awayName: game.away_name,
      home: homeTeamScore,
      away: awayTeamScore,
      done: true
    };

    scores.push(currentGame);
    scoredGames.push(currentGame)
    updatePoints(currentGame)

    firebase.database().ref('scoredGames').set(scoredGames);

    currentUser.scoredGames = scoredGames;

    updateUser(currentUser);

    firebase.database().ref('Users').set(Users);
    firebase.database().ref('Groups').set(Groups);

    const userGroups = getGroups(currentUser);
    res.json({ user: currentUser, userGroups, status: true, scoredGames });
  } else {
    res.json({ status: false })
  }
});


router.post('/bet', function (req, res, next) {
  const { user, matchID, awayTeamScore, homeTeamScore } = req.body;
  const currentUser = getCurrentUser(user);

  const bet = {
    playerid: user.id,
    id: matchID,
    home: homeTeamScore,
    away: awayTeamScore,
    done: false
  };

  const betName = `${user.id}-${matchID}`;

  Bets.push(bet);
  firebase.database().ref('Bets').set(Bets);

  currentUser.bets[matchID] = bet;
  updateBet(currentUser, bet, matchID)

  updateUser(currentUser);

  firebase.database().ref('Users').set(Users);
  firebase.database().ref('Groups').set(Groups);

  const userGroups = getGroups(currentUser);
  res.json({ user: currentUser, userGroups, status: true, scoredGames });
});

router.post('/addToGroup', function (req, res, next) {
  const { user, friendUsername, groupID } = req.body;
  const friend = Users.find(userFromUsers => { return userFromUsers.username.toLowerCase() === friendUsername.toLowerCase() })
  const currentUser = getCurrentUser(user);
  const currentGroup = getGroup(groupID);
  let isAlreadyInGroup = false;

  if (friend && friend !== -1) {
    if (friend.groups.length >= 5) {
      res.json({ status: "tooMany" });
    } else {
      isAlreadyInGroup = friend.groups.includes(groupID);
      if (friend && currentGroup.admin === user.id && !isAlreadyInGroup) {
        friend.groups.push(groupID);
        addMember(currentGroup, friend)
        updateUser(friend);

        firebase.database().ref('Users').set(Users);
        firebase.database().ref('Groups').set(Groups);

        const userGroups = getGroups(currentUser);
        res.json({ user: currentUser, userGroups, status: true, scoredGames });
      } else {
        res.json({ status: "something" });
      }
    }
  } else {
    res.json({ status: false });
  }
});

router.post('/createGroup', function (req, res, next) {
  const { user, groupName } = req.body;
  const currentUser = getCurrentUser(user);

  if (currentUser.adminAt.length >= 3) {
    res.json({ status: 'tooMany' });
  } else {
    let group = new Group(groupName, currentUser.id)
    group = addMember(group, currentUser)
    currentUser.adminAt.push(group.id);
    currentUser.groups.push(group.id);
    Groups.push(group);
    updateUser(currentUser);
    const userGroups = getGroups(currentUser);

    firebase.database().ref('Users').set(Users);
    firebase.database().ref('Groups').set(Groups);
    res.json({ user: currentUser, userGroups, status: true, scoredGames });
  }
})

router.post('/leaveGroup', function (req, res, next) {
  const { user, groupID } = req.body;
  let currentUser = getCurrentUser(user);
  let currentGroup = getGroup(groupID);

  if (currentUser.adminAt.includes(currentGroup.id) && currentGroup.members.length > 1) {
    if (currentGroup.members[0].id !== currentUser.id) {
      currentGroup.admin = currentGroup.members[0].id;
      const newAdmin = getUser(currentGroup, 0)
      if (!newAdmin.adminAt) {
        newAdmin.adminAt = []
      }
      newAdmin.adminAt.push(currentGroup.id);
      var index = currentUser.adminAt.indexOf(currentGroup.id);
      currentUser.adminAt.splice(index, 1);
      updateUser(newAdmin);
    } else {
      currentGroup.admin = currentGroup.members[1].id;
      const newAdmin = getUser(currentGroup, 1);
      if (!newAdmin.adminAt) {
        newAdmin.adminAt = []
      }
      newAdmin.adminAt.push(currentGroup.id);
      var index = currentUser.adminAt.indexOf(currentGroup.id);
      currentUser.adminAt.splice(index, 1);
      updateUser(newAdmin);
    }
  } else {
    var index = currentUser.adminAt.indexOf(currentGroup.id);
    currentUser.adminAt.splice(index, 1);
  }

  currentGroup = removeUserFromGroup(currentUser, currentGroup);
  currentUser = removeGroupFromUser(currentUser, currentGroup);
  updateUser(currentUser);
  updateGroup(currentGroup);

  firebase.database().ref('Users').set(Users);
  firebase.database().ref('Groups').set(Groups);

  const userGroups = getGroups(currentUser);
  res.json({ user: currentUser, userGroups, status: true, scoredGames });
})

function removeGroupFromUser(user, group) {
  var index = user.groups.indexOf(group.id);
  user.groups.splice(index, 1);
  return user;
}

function updateUser(user) {
  let index;
  Users.forEach((member, i) => {
    if (user.id === member.id) {
      index = i;
    }
  })

  if (index > -1) {
    Users[index] = user;
  }
}

function updateGroup(group) {
  let index = Groups.indexOf(group);
  if (Groups[index].members.length === 0) {
    Groups.splice(index, 1);
  } else {
    Groups[index] = group;
  }
}

function getUser(group, id) {
  return Users.find(member => {
    return member.id === group.members[id].id
  })
}

function getGroup(groupID) {
  const currentGroup = Groups.find(group => {
    if (group)
      return group.id === groupID
  })

  if (!currentGroup.members) {
    currentGroup.members = [];
  }

  return currentGroup;
}

function getCurrentUser(user) {
  const currentUser = Users.find(userFromUsers => {
    return userFromUsers.id === user.id
  });

  if (!currentUser.bets) {
    currentUser.bets = {};
  }

  if (!currentUser.groups) {
    currentUser.groups = [];
  }

  if (!currentUser.adminAt) {
    currentUser.adminAt = [];
  }

  return currentUser;
}

function addMember(group, newMember) {
  const user = {
    firstName: newMember.firstName,
    lastName: newMember.lastName,
    bets: newMember.bets || {},
    score: newMember.score,
    id: newMember.id
  }

  group.members.push(user);
  return group;
}

function updateBet(currentUser, bet, matchID) {
  Groups.forEach(group => {
    currentUser.groups.forEach(userGroup => {
      if (group.id === userGroup) {
        group.members.forEach(member => {
          if (member.id === currentUser.id) {
            if (!member.bets) {
              member.bets = {};
            }
            member.bets[matchID] = bet;
          }
        })
      }
    })
  })
}

function login(username, password) {
  const user = Users.find(user => {
    return (user.username.toLowerCase() === username.toLowerCase() && user.password === password);
  });

  if (user === undefined) {
    return false;
  } else {
    return user;
  }
}

function getGroups(user) {
  let userGroup = {}

  user.groups.forEach((group, groupIdx) => {
    const grp = `group${groupIdx}`;

    let indexOfGroup = -1;
    Groups.forEach((element, i) => {
      if (element.id === group) {
        indexOfGroup = i;
      }
    })

    if (indexOfGroup !== -1) {
      userGroup[grp] = {};
      userGroup[grp].name = Groups[indexOfGroup].name;
      userGroup[grp].admin = Groups[indexOfGroup].admin;
      userGroup[grp].id = Groups[indexOfGroup].id;
      Groups[indexOfGroup].members.forEach((friend, index) => {

        if (index === 0) {
          userGroup[grp].members = [];
        }

        userGroup[grp].members.push(friend);
      })
    }
  })

  Object.keys(userGroup).map(group => {
    userGroup[group].members.sort(function (a, b) {
      if (a.score <= b.score) return 1;
      if (a.score > b.score) return -1;
      return 0;
    })
  })

  return userGroup;
}

function updatePoints(game) {
  Bets.forEach((bet, index) => {
    const betUser = Users.find(user => {
      return user.id === bet.playerid;
    })

    if (bet.id === game.id) {
      if (bet.home.toString() === game.home.toString() && bet.away.toString() === game.away.toString()) {
        betUser.score += 30;
      } else if ((bet.home.toString() > bet.away.toString() && game.home.toString() > game.away.toString()) ||
        (bet.home.toString() < bet.away.toString() && game.home.toString() < game.away.toString()) ||
        (bet.home.toString() === bet.away.toString() && game.home.toString() === game.away.toString())) {
        betUser.score += 10;
      }
    }
  })

  Bets = Bets.filter(bet => {
    return (bet.id !== game.id);
  })

  Groups.forEach(group => {
    group.members.forEach(member => {
      const friendMember = Users.find(friend => {
        return member.id === friend.id;
      })
      member.score = friendMember.score;
    })
  })

  firebase.database().ref('Users').set(Users);
  firebase.database().ref('Groups').set(Groups);
  firebase.database().ref('Bets').set(Bets);
}


function removeUserFromGroup(user, group) {
  var index;
  group.members.forEach((member, i) => {
    if (user.id === member.id) {
      index = i;
    }
  })

  if (index > -1) {
    group.members.splice(index, 1);
  }

  return group;
}


module.exports = router;