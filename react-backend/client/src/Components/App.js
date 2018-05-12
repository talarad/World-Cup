import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Scores from './Scores.js';
import Manage from './Manage.js';
import PastGames from './PastGames.js';
import Games from './Games.js';
import ServerMethods from './ServerMethods.js'
import AdminPanel from './AdminPanel'

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

    this.state = {
      notRegistered: true
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
          this.setState(state);
        } else {
          alert("Wrong username or password")
        }
      })
  }

  componentWillMount() {
    ServerMethods.getData()
      .then(data => {
        if (data.status === true) {
          this.setState({ games: data.games, scores: data.scoredGames })
        }
      })
  }

  signout() {
    const notRegistered = true;
    this.setState({ user: undefined, notRegistered, groupToShow: null });
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
    const homeCheck = homeTeamScore && !isNaN(homeTeamScore) && homeTeamScore >= 0 && homeTeamScore <= 12;
    const awayCheck = awayTeamScore && !isNaN(awayTeamScore) && awayTeamScore >= 0 && awayTeamScore <= 12;
    if (homeCheck && awayCheck) {
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
    } else {
      alert("Please enter valid values");
    }
  }

  register(username, password, email, firstName, lastName) {
    ServerMethods.register(username, password, email, firstName, lastName)
      .then(data => {
        if (data.status === true) {
          const state = { ...this.state }
          const loggedUser = data.user;
          loggedUser.groups = data.userGroups;
          state.user = loggedUser
          document.getElementById("username").value = '';
          document.getElementById("password").value = '';
          document.getElementById("email").value = '';
          document.getElementById("firstname").value = '';
          document.getElementById("lastname").value = '';
          state.scores = data.scoredGames;
          this.setState(state);
        }
      })
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
          alert("Friend has been successfully added to group!")

        } else if (data.status === 'tooMany') {
          alert('Can\'t add friend since he has too many groups')
        } else {
          alert("Wrong username or friend is already in this group!")
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
            alert("You have created a new group")
          } else if (data.status === 'tooMany') {
            alert("You can create up to 3 groups")
          }
        })
    } else {
      alert("Please enter a valid group name");
    }
  }

  leaveGroup(user, groupID) {
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
          alert("You have left the group")
        }
      })
  }

  placeScore(user, game, awayTeamScore, homeTeamScore) {
    const homeCheck = homeTeamScore && !isNaN(homeTeamScore) && homeTeamScore >= 0 && homeTeamScore <= 12;
    const awayCheck = awayTeamScore && !isNaN(awayTeamScore) && awayTeamScore >= 0 && awayTeamScore <= 12;
    if (homeCheck && awayCheck && user.username === 'tal') {
      ServerMethods.placeScore(user, game, awayTeamScore, homeTeamScore)
        .then(data => {
          if (data.status === true) {
            const state = { ...this.state }
            const loggedUser = data.user;
            loggedUser.groups = data.userGroups;
            state.user = loggedUser;
            state.scores = data.scoredGames;
            this.setState(state);
          }
        })
    } else {
      alert("Please enter valid values");
    }
  }

  renderAdmin() {
    if (this.state.user && this.state.user.username === 'tal') {
      return <AdminPanel games={this.state.games} user={this.state.user} placeScore={this.placeScore} />
    }
  }

  render() {

    return (
      <div>
        <Home register={this.register} signout={this.signout} login={this.login} user={this.state.user} notRegistered={this.state.notRegistered} registerClick={this.registerClick} />
        <About />
        <Scores leaveGroup={this.leaveGroup} changeGroupView={this.changeGroupView} group={this.getgroup()} games={this.state.games} user={this.state.user} />
        <Games games={this.state.games} user={this.state.user} updateBet={this.updateBet} />
        <Manage user={this.state.user} addToGroup={this.addToGroup} createGroup={this.createGroup} />
        <PastGames games={this.state.games} scores={this.state.scores} />
        {this.renderAdmin()}
      </div>
    )
  }
} 