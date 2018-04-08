import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Scores from './Scores.js';
import Manage from './Manage.js';
import Teams from './Teams.js';
import Games from './Games.js';
import Log from './Log.js';
import ServerMethods from './ServerMethods.js'

export default class App extends React.Component {
  constructor() {
    super()

    this.signout = this.signout.bind(this);
    this.login = this.login.bind(this)
    this.changeGroupView = this.changeGroupView.bind(this)
    this.updateBet = this.updateBet.bind(this);
    this.getgroup = this.getgroup.bind(this)

    this.state = {};
  }

  login(usename, password) {
    ServerMethods.getUser(usename, password)
      .then(user => {
        if (user.status) {
          const state = { ...this.state }
          const loggedUser = user.user;
          loggedUser.groups = user.userGroups;
          user.user.groups = user.userGroups;
          state.user = loggedUser
          this.setState(state);
        } else {
          alert("Wrong username or password")
        }
      })
  }
  
  // componentDidMount() {

  // }

  componentWillMount() {
    ServerMethods.getData()
      .then(data => {
        if (data.status) {
          this.setState({ games: data.games })
        }
      })
  }

  signout() {
    this.setState({ user: undefined });
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

  updateBet(user, matchID, homeTeamScore, awayTeamScore) {
    const homeCheck = homeTeamScore && !isNaN(homeTeamScore) && homeTeamScore >= 0 && homeTeamScore <= 12;
    const awayCheck = awayTeamScore && !isNaN(awayTeamScore) && awayTeamScore >= 0 && awayTeamScore <= 12;
    if (homeCheck && awayCheck) {
      ServerMethods.bet(user, matchID, homeTeamScore, awayTeamScore)
        .then(data => {
          if (data.status) {
            this.setState({ user: data.user })
          }
        })
    } else {
      alert("Please enter valid values");
    }
  }

  render() {
    return (
      <div>
        <Home signout={this.signout} user={this.state.user} />
        <About />
        <Scores changeGroupView={this.changeGroupView} group={this.getgroup()} games={this.state.games} user={this.state.user} />
        <Games games={this.state.games} user={this.state.user} updateBet={this.updateBet} />
        <Teams />
        <Manage />
        <Log user={this.state.user} login={this.login} />
      </div>
    )
  }
} 