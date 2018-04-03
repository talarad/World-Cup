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

    this.state = {};
  }

  login(usename, password) {
    ServerMethods.getUser(usename, password)
      .then(user => {
        if (user !== false) {
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

  componentWillMount() {
    const matches = fetch('http://worldcup.sfg.io/matches').then(res => res.json())
    const results = fetch('http://worldcup.sfg.io/teams/group_results').then(res => res.json())
    const teams = fetch('http://worldcup.sfg.io/teams/').then(res => res.json())
    const current = fetch('http://worldcup.sfg.io/matches/current').then(res => res.json())

    Promise.all([matches, results, teams, current]).then(([matches, results, teams, current]) => this.setState({ matches, results, teams, current }))
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
    if (this.state.user && this.state.user.groupToShow) {
      return (this.state.user.groupToShow);
    } else if (this.state.user && this.state.user.groups) {
      return (this.state.user.groups[0])
    } else {
      return undefined
    }
  }

  render() {
    return (
      <div>
        <Home signout={this.signout} user={this.state.user} />
        <Teams />
        <About />
        <Games />
        <Scores changeGroupView={this.changeGroupView} group={this.getgroup()} user={this.state.user} />
        <Manage />
        <Log user={this.state.user} login={this.login} />
      </div>
    )
  }
} 