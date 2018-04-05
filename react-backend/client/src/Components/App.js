import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Scores from './Scores.js';
import Manage from './Manage.js';
import Teams from './Teams.js';
import Games from './Games.js';
import Log from './Log.js';
import ServerMethods from './ServerMethods.js'
import base from '../base';

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

  componentDidMount() {

  }

  componentWillMount() {
    //fetch('https://www.flashscore.com/standings/fFsiH75r/OneVXSrp/#table').then(data => console.log(data))
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
      console.log(this.state.user.groups[str]);
      return (this.state.user.groups[str]);
    } else if (this.state.user && this.state.user.groups) {
      return (this.state.user.groups.group0)
    } else {
      return undefined
    }
  }

  render() {
    return (
      <div>
        <Home signout={this.signout} user={this.state.user} />
        <About />
        <Scores changeGroupView={this.changeGroupView} group={this.getgroup()} user={this.state.user} />
        <Games />
        <Teams />
        <Manage />
        <Log user={this.state.user} login={this.login} />        
      </div>
    )
  }
} 