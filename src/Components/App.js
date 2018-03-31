import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Scores from './Scores.js';
import Manage from './Manage.js';
import Teams from './Teams.js';
import Games from './Games.js';
import Log from './Log.js';



export default class App extends React.Component {
  constructor() {
    super()

    this.state = {};
  }

  // componentWillMount() {
  // const matches = fetch('http://worldcup.sfg.io/matches').then(res => res.json())
  // const results = fetch('http://worldcup.sfg.io/teams/group_results').then(res => res.json())
  // const teams = fetch('http://worldcup.sfg.io/teams/').then(res => res.json())
  // const current = fetch('http://worldcup.sfg.io/matches/current').then(res => res.json())

  // Promise.all([matches, results, teams, current]).then(([matches, results, teams, current]) => this.setState({ matches, results, teams, current }))

  //const test = fetch('https://heisenbug-world-cup-2018-live-scores-v1.p.mashape.com/api/worldcup').then(res => res.json()).then(res => {
  //this.setState({ res });
  // }

  render() {
    return (
      <div>
        <Home />
        <Teams />
        <About />
        <Games />
        <Scores />
        <Manage />
        
        <Log />
      </div>
    )
  }
} 