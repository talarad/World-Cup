import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Scores from './Scores.js';
import Manage from './Manage.js';
import PastGames from './PastGames.js';
import Games from './Games.js';
import ServerMethods from './ServerMethods.js'
import AdminPanel from './AdminPanel'
import { confirmAlert } from 'react-confirm-alert';

export default class App extends React.Component {
  constructor() {
    super()

    this.signout = this.signout.bind(this);
    this.login = this.login.bind(this)
    this.changeGroupView = this.changeGroupView.bind(this)
    this.updateBet = this.updateBet.bind(this);
    this.getgroup = this.getgroup.bind(this)
    this.register = this.register.bind(this)
    this.registerClick = this.registerClick.bind(this)
    this.addToGroup = this.addToGroup.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
    this.renderAdmin = this.renderAdmin.bind(this);
    this.placeScore = this.placeScore.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.alertBox = this.alertBox.bind(this);

    this.state = {
      notRegistered: true,
      time: ''
    };
  }

  login(usename, password) {
    ServerMethods.getUser(usename, password)
      .then(data => {
        if (data.status) {
          const loggedUser = data.user;
          loggedUser.groups = data.userGroups;
          const state = {};
          state.notRegistered = false;
          state.user = loggedUser;
          state.scores = data.scoredGames;
          if (data.admin) {
            state.admin = data.admin;
          }

          localStorage.setItem('token', data.token);

          this.setState(state);
        } else {
          this.alertBox('Wrong username or password', 'Please try again')
        }

      })
  }

  componentWillMount() {
    // let games = [];
    // ServerMethods.getGames().then(result => {
    //   // console.log(result)
    //   result.forEach(group => {
    //     group.data.fixtures.forEach(element => {
    //       games.push(element);
    //       //console.log(element)
    //     })
    //   })
    // }).then(() => {
    //   console.log(JSON.stringify(games))
    // })

    const token = localStorage.getItem('token')
    if (token) {

      ServerMethods.loginWithToken(token)
        .then(data => {

          if (data.status) {
            const loggedUser = data.user;
            loggedUser.groups = data.userGroups;
            const state = {};
            state.notRegistered = false;
            state.user = loggedUser;
            state.scores = data.scoredGames;
            if (data.admin) {
              state.admin = data.admin;
            }
            this.setState(state);
          }
        })
    }


    ServerMethods.getData()
      .then(data => {
        if (data.status === true) {
          this.setState({ games: data.games, scores: data.scoredGames })
        }
      })
  }

  signout() {
    const notRegistered = true;
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token')
    }

    ServerMethods.signOut(token).then(() => {
      this.setState({ user: undefined, notRegistered, groupToShow: null });
    })
  }

  changeGroupView(group) {
    const user = { ...this.state.user };
    user.groupToShow = group;
    this.setState({ user })
  }

  getgroup() {
    if (this.state.user && this.state.user.groups && this.state.user.groupToShow) {
      const str = `group${this.state.user.groupToShow}`
      return (this.state.user.groups[str]);
    } else if (this.state.user && this.state.user.groups) {
      return (this.state.user.groups.group0)
    } else {
      return undefined
    }
  }

  updateBet(user, matchID, awayTeamScore, homeTeamScore) {
    const homeCheck = homeTeamScore && !isNaN(homeTeamScore) && homeTeamScore % 1 === 0 && homeTeamScore >= 0 && homeTeamScore <= 12;
    const awayCheck = awayTeamScore && !isNaN(awayTeamScore) && awayTeamScore % 1 === 0 && awayTeamScore >= 0 && awayTeamScore <= 12;
    if (homeCheck && awayCheck) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h2>Are you sure? cannot be changed after</h2>
              <button onClick={() => {
                onClose()
                ServerMethods.bet(user, matchID, awayTeamScore, homeTeamScore)
                  .then(data => {
                    if (data.status === true) {
                      const state = { ...this.state }
                      const loggedUser = data.user;
                      loggedUser.groups = data.userGroups;
                      state.user = loggedUser
                      state.scores = data.scoredGames;
                      this.setState(state);
                    }
                  })
              }}>Yes</button>
              <button onClick={() => {
                onClose()
              }}>Cancel</button>
            </div>
          )
        }
      })
    } else {
      this.alertBox('Please enter valid values')
    }
  }

  register(username, password, firstName, lastName) {
    if (username.length >= 2 && password.length >= 4 && firstName.length >= 2 && lastName.length >= 2) {
      ServerMethods.register(username, password, firstName, lastName)
        .then(data => {
          if (data.status === true) {
            const state = { ...this.state }
            const loggedUser = data.user;
            loggedUser.groups = data.userGroups;
            state.user = loggedUser
            document.getElementById("username").value = '';
            document.getElementById("password").value = '';
            document.getElementById("firstname").value = '';
            document.getElementById("lastname").value = '';
            state.scores = data.scoredGames;

            localStorage.setItem('token', data.token);

            this.setState(state);
          } else {
            this.alertBox("Username is already in use")
          }
        })
    } else {

      this.alertBox("Please fill up all fields with a valid value (atleast 2 letters)"
      );
    }
  }

  registerClick() {
    const notRegistered = !this.state.notRegistered
    this.setState({ notRegistered });
  }

  addToGroup(user, friendUsername, groupID, inputID) {
    ServerMethods.addToGroup(user, friendUsername, groupID)
      .then(data => {
        if (data.status === true) {
          const state = { ...this.state }
          const loggedUser = data.user;
          loggedUser.groups = data.userGroups;
          state.user = loggedUser
          state.scores = data.scoredGames;
          document.getElementById(inputID).value = '';
          this.setState(state);
          this.alertBox('Friend has been successfully added to group!')

        } else if (data.status === 'tooMany') {
          this.alertBox("Can't add friend, has reached maximum number of groups")
        } else if (data.status === 'maxMembers') {
          this.alertBox("Maximun number of friends in group")
        } else {
          this.alertBox('Wrong username or friend is already in this group!')
        }
      })
  }

  createGroup(user, groupName) {
    if (groupName.length > 0 && groupName.length < 15) {
      ServerMethods.createGroup(user, groupName)
        .then(data => {
          if (data.status === true) {
            const state = { ...this.state }
            const loggedUser = data.user;
            loggedUser.groups = data.userGroups;
            state.user = loggedUser;
            state.scores = data.scoredGames;
            this.setState(state);
            document.getElementById("create").value = '';
            this.alertBox('You have created a new group')
          } else if (data.status === 'tooMany') {
            this.alertBox('You can create up to 3 groups')
          }
        })
    } else {
      this.alertBox('Please enter a valid group name')
    }
  }

  alertBox(string, string2 = null) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h2>{string}</h2>
            <p>{string2}</p>
            <button onClick={() => {
              onClose()
            }}>Ok</button>
          </div>
        )
      }
    })
  }

  leaveGroup(user, groupID) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h2>Are you sure you want to leave the group?</h2>
            <button onClick={() => {
              onClose()
              ServerMethods.leaveGroup(user, groupID)
                .then(data => {
                  if (data.status === true) {
                    const state = { ...this.state }
                    const loggedUser = data.user;
                    loggedUser.groups = data.userGroups;
                    loggedUser.groupToShow = null;
                    state.user = loggedUser
                    state.scores = data.scoredGames;
                    this.setState(state);
                    this.alertBox("You have left the group")
                  }
                })
            }}>Yes</button>
            <button onClick={() => {
              onClose()
            }}>Cancel</button>
          </div>
        )
      }
    })
  }

  placeScore(user, game, awayTeamScore, homeTeamScore) {
    const homeCheck = homeTeamScore && !isNaN(homeTeamScore) && homeTeamScore % 1 === 0 && homeTeamScore >= 0 && homeTeamScore <= 12;
    const awayCheck = awayTeamScore && !isNaN(awayTeamScore) && awayTeamScore % 1 === 0 && awayTeamScore >= 0 && awayTeamScore <= 12;
    if (homeCheck && awayCheck && user.username === 'tal') {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h2>Are you sure?</h2>
              <button onClick={() => {
                onClose()
                ServerMethods.placeScore(user, game, awayTeamScore, homeTeamScore)
                  .then(data => {
                    if (data.status === true) {
                      const state = { ...this.state }
                      const loggedUser = data.user;
                      loggedUser.groups = data.userGroups;
                      state.user = loggedUser;
                      state.scores = data.scoredGames;
                      this.setState(state);
                    } else {
                      this.alertBox("huh!");
                    }
                  })
              }}>Yes</button>
              <button onClick={() => {
                onClose()
              }}>Cancel</button>
            </div>
          )
        }
      })
    } else {
      this.alertBox("Please enter valid values");
    }
  }

  updateTime(time) {
    if (time.length === 4) {
      time = `0${time}`;
    }

    this.setState({ time })
  }

  renderAdmin() {
    if (this.state.admin && this.state.user && this.state.user.username === 'tal') {
      return <AdminPanel scoredGames={this.state.scores} games={this.state.games} user={this.state.user} placeScore={this.placeScore} />
    }
  }

  render() {
    return (
      <div>
        <Home updateTime={this.updateTime} register={this.register} signout={this.signout} login={this.login} user={this.state.user} notRegistered={this.state.notRegistered} registerClick={this.registerClick} />
        <About />
        <Scores leaveGroup={this.leaveGroup} changeGroupView={this.changeGroupView} group={this.getgroup()} games={this.state.games} user={this.state.user} />
        <Games time={this.state.time} games={this.state.games} user={this.state.user} updateBet={this.updateBet} />
        <Manage user={this.state.user} addToGroup={this.addToGroup} createGroup={this.createGroup} />
        <PastGames games={this.state.games} scores={this.state.scores} />
        {this.renderAdmin()}
      </div>
    )
  }
} 