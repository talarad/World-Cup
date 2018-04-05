var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const Users = require('./sample-users.js');
const Groups = require('./sample-groups.js');

router.post('/', function (req, res, next) {
  const { username, password } = req.body;

  const user = login(username, password)
  if (user) {
    const userGroups = getGroups(user);
    res.json({ user, userGroups, status: true });
  } else {
    res.json({ status: false })
  }
});

module.exports = router;

function login(username, password) {
  const user = Users.find(user => {
    return user.username === username;
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
    Groups[group].members.forEach((friend, index) => {
      if (index === 0) {
        userGroup[grp].members = [];
      }

      userGroup[grp].members.push(friend);
    })
  })

  return userGroup;
}