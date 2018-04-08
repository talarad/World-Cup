var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');

const dataJson = require('./dataJson.js')
const Users = require('./sample-users.js');
const Groups = require('./sample-groups.js');

const pastGames = []
//let serverData = updateData();

router.get('/', function (req, res, next) {
  //fetch('http://livescore-api.com/api-client/scores/live.json?key=VUNDFCPGYqp4nWzr&secret=UNa1DZ3uMUCslilgc8USLJzJaYOxVnZQ&country=55')
  // fetch('http://api.football-data.org/v1/competitions/55/teams', {
  //   headers: {
  //     'X-Auth-Token': '1839ebb72e4f4a06a05ff72ea0918431'
  //   }

  let games = [];
  // const groupA = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=793')
  //   .then(data => data.json());
  // const groupB = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=794')
  //   .then(data => data.json());
  // const groupC = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=795')
  //   .then(data => data.json());
  // const groupD = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=796')
  //   .then(data => data.json());
  // const groupE = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=797')
  //   .then(data => data.json());
  // const groupF = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=798')
  //   .then(data => data.json());
  // const groupG = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=799')
  //   .then(data => data.json());
  // const groupH = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=800')
  //   .then(data => data.json());


  // Promise.all([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH])
  //   .then(([...groups]) => {
  //     groups.forEach(group => {
  //       group.data.fixtures.forEach(game => {
  //         games.push(game)
  //       })
  //     })
  //   })
  // .then(data => {

  games = dataJson;
  games.sort(function (a, b) {
    if (a.date <= b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  })
  // }).then(data => {
  res.json({ status: true, games });
})
// })

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

router.post('/bet', function (req, res, next) {
  const { user, matchID, homeTeamScore, awayTeamScore } = req.body;

  user.bets[matchID] = {
    id: matchID,
    home: homeTeamScore,
    away: awayTeamScore
  }

  res.json({ user, status: true });
});

module.exports = router;

// function updateData() {
//   const games = [];
//   setTimeout(() => {
//     const groupA = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=793')
//       .then(data => data.json());
//     const groupB = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=794')
//       .then(data => data.json());
//     const groupC = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=795')
//       .then(data => data.json());
//     const groupD = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=796')
//       .then(data => data.json());
//     const groupE = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=797')
//       .then(data => data.json());
//     const groupF = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=798')
//       .then(data => data.json());
//     const groupG = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=799')
//       .then(data => data.json());
//     const groupH = fetch('http://livescore-api.com/api-client/fixtures/matches.json?key=LOkpeBUcRkFcqRgy&secret=kDdTgB9dLneq92tUQOk5qeihzXu0PKz9&league=800')
//       .then(data => data.json());


//     Promise.all([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH])
//       .then(([...groups]) => {
//         groups.forEach(group => {
//           group.data.fixtures.forEach(game => {
//             games.push(game)
//           })
//         })
//       })
//       .then(data => {
//         games.sort(function (a, b) {
//           if (a.date <= b.date) return -1;
//           if (a.date > b.date) return 1;
//           return 0;
//         })
//       })
//       .then(result => {
//         serverData = games;
//       })
//     updateData()
//   }, 600000);

//   return games;
// }

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