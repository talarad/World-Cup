var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');
const dataJson = require('./dataJson.js')
const Users = require('./sample-users.js');
const Groups = require('./sample-groups.js');
const Group = require('./Group.js');
const User = require('./User.js');

const scores = [

]
const Bets = [];
const pastGames = []

router.get('/', function (req, res, next) {

  let games = dataJson;
  games.sort(function (a, b) {
    if (a.date <= b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  })
  res.json({ status: true, games, scores });
})

router.post('/', function (req, res, next) {
  const { username, password } = req.body;

  const user = login(username, password)
  if (user) {
   
    currentUser = getCurrentUser(user);
    updateUser(currentUser);
    const userGroups = getGroups(user);
    res.json({ user: currentUser, userGroups, status: true });
  } else {
    res.json({ status: false })
  }
});

router.post('/register', function (req, res, next) {
  const { username, password, email, firstName, lastName } = req.body;

  const user = new User(username, password, email, firstName, lastName);
  Users.push(user);

  res.json({ user, status: true });
})

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
  currentUser.bets[matchID] = bet;
  updatePoints()
  updateUser(currentUser);

  const userGroups = getGroups(currentUser);
  res.json({ user: currentUser, userGroups, status: true });
});

router.post('/addToGroup', function (req, res, next) {
  const { user, friendUsername, groupID } = req.body;
  const friend = Users.find(userFromUsers => { return userFromUsers.username === friendUsername })
  const currentUser = getCurrentUser(user);
  const currentGroup = getGroup(groupID);
  let isAlreadyInGroup = false;

  if (friend) {
    if (friend.groups.length >= 5) {
      res.json({ status: "tooMany" });
    } else {
      isAlreadyInGroup = friend.groups.includes(groupID);
      if (friend && currentGroup.admin === user.id && !isAlreadyInGroup) {
        friend.groups.push(groupID);
        currentGroup.addMember(friend)
        updateUser(friend);
        const userGroups = getGroups(currentUser);
        res.json({ user: currentUser, userGroups, status: true });
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
    const group = new Group(groupName, currentUser.id)
    currentUser.adminAt.push(group.id);
    group.addMember(currentUser)
    currentUser.joinGroup(group.id)
    Groups.push(group);
    updateUser(currentUser);

    const userGroups = getGroups(currentUser);
    res.json({ user: currentUser, userGroups, status: true });
  }
})

router.post('/leaveGroup', function (req, res, next) {
  const { user, groupID } = req.body;
  const currentUser = getCurrentUser(user);
  const currentGroup = getGroup(groupID);

  if (currentUser.adminAt.includes(currentGroup.id) && currentGroup.members.length > 0) {
    if (currentGroup.members[0].id !== currentUser.id) {
      currentGroup.admin = currentGroup.members[0].id;
      const newAdmin = getUser(currentGroup, 0)
      newAdmin.adminAt.push(currentGroup.id);
      var index = currentUser.adminAt.indexOf(currentGroup.id);
      currentUser.adminAt.splice(index, 1);
    } else {
      currentGroup.admin = currentGroup.members[1].id;
      const newAdmin = getUser(currentGroup, currentUser.id);
      newAdmin.adminAt.push(currentGroup.id);
      currentUser.adminAt.splice(index, 1);
      updateUser(newAdmin);
    }
  } else {
    var index = currentUser.adminAt.indexOf(currentGroup.id);
    currentUser.adminAt.splice(index, 1);
  }

  currentGroup.remove(currentUser)
  removeGroupFromUser(currentUser, currentGroup);
  updateUser(user);
  updateGroup(currentGroup);

  const userGroups = getGroups(currentUser);
  res.json({ user: currentUser, userGroups, status: true });
})

function removeGroupFromUser(user, group) {
  var index = user.groups.indexOf(group.id);
  user.groups.splice(index, 1);
}

function updateUser(user) {
  index = Users.indexOf(user);
  Users[index] = user;
}

function updateGroup(group) {
  index = Groups.indexOf(group);
  Groups[index] = group;
}

function getUser(group, id) {
  return Users.find(member => {
    return member.id === group.members[id].id
  })
}

function getGroup(groupID) {
  return Groups.find(group => {
    return group.id === groupID
  })
}

function getCurrentUser(user) {
  return Users.find(userFromUsers => {
    return userFromUsers.id === user.id
  })
}

function login(username, password) {
  const user = Users.find(user => {
    return (user.username === username && user.password === password);
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

    userGroup[grp] = {};
    userGroup[grp].name = Groups[group].name;
    userGroup[grp].admin = Groups[group].admin;
    userGroup[grp].id = Groups[group].id;
    Groups[group].members.forEach((friend, index) => {

      if (index === 0) {
        userGroup[grp].members = [];
      }

      userGroup[grp].members.push(friend);
    })
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


function updatePoints() {

  const workingBets = [...Bets];

  workingBets.forEach((bet, index) => {
    const betUser = Users.find(user => {
      return user.id === bet.playerid;
    })

    const game = scores.find((score, i) => {
      return score.id.toString() === bet.id.toString();
    })

    if (game) {
      if (bet.home.toString() === game.home.toString() && bet.away.toString() === game.away.toString()) {
        betUser.score += 30;
      } else if ((bet.home.toString() > bet.away.toString() && game.home.toString() > game.away.toString() ||
        bet.home.toString() < bet.away.toString() && game.home.toString() < game.away.toString() ||
        bet.home.toString() === bet.away.toString() && game.home.toString() === game.away.toString())) {
        betUser.score += 10;
      }

      Bets.splice(index, 1);
    }
  })

  Groups.forEach(group => {
    group.members.forEach(member => {
      const friendMember = Users.find(friend => {
        return member.id === friend.id;
      })
      member.score = friendMember.score;
    })
  })

}
module.exports = router;