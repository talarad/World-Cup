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
    res.json({ user, userGroups });
  } else {
    res.json(false)
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
  let userGroup = []

  user.groups.forEach(group => {
    Groups[group].forEach((friendIndex, index) => {
      if (index === 0) {
        userGroup.push([]);
      }
      
      userGroup[group].push(Users[friendIndex]);

    })
  })

  return userGroup;
}