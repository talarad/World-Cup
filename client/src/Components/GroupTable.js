import React from 'react';

export default class GroupTable extends React.Component {
    renderNextGames() {
        var counter = 0;
        if (this.props.member.id !== this.props.user.id) {
            return (
                this.props.games.map((game, index) => {
                    if (game.date === this.props.closestDate && this.props.member.bets && counter < this.props.gamesInSameDay && this.props.user.bets[game.id]) {
                        counter++;
                        const away = this.props.member.bets[game.id] ? this.props.member.bets[game.id].away : '';
                        const home = this.props.member.bets[game.id] ? this.props.member.bets[game.id].home : '';
                        return (<td key={index}> {game.away_name}: <span id="green"> {away} </span>, {game.home_name}:<span id="green">  {home} </span></td>)
                    } else if (game.date === this.props.closestDate && counter < this.props.gamesInSameDay) {
                        counter++;
                        return (<td key={index}> {game.away_name}: , {game.home_name}:</td>);
                    } else if (index === this.props.games.length - 1 && counter === 0) {
                        return <td key={index}></td>
                    }
                    return null
                })
            )
        } else {
            return (
                this.props.games.map((game, index) => {
                    if (game.date === this.props.closestDate && this.props.member.bets && counter < this.props.gamesInSameDay && this.props.user.bets[game.id]) {
                        counter++;
                        const away = this.props.user.bets[game.id] ? this.props.user.bets[game.id].away : '';
                        const home = this.props.user.bets[game.id] ? this.props.user.bets[game.id].home : '';
                        return (<td key={index}> {game.away_name}:  <span id="green">{away} </span>, {game.home_name}:  <span id="green">{home} </span> </td>)

                    } else if (game.date === this.props.closestDate && counter < this.props.gamesInSameDay) {
                        counter++;
                        return (<td key={index}> {game.away_name}: , {game.home_name}:</td>);
                    } else if (index === this.props.games.length - 1 && counter === 0) {
                        return <td key={index}></td>
                    }
                    return null
                })
            )
        }
    }



    render() {
        if (this.props.member) {
            if (this.props.member.id === this.props.user.id) {
                return (
                    <tr>
                        <td>{this.props.index + 1}</td>
                        <td>
                            <button id="leave" onClick={() => this.props.leaveGroup(this.props.user, this.props.groupID)}>X</button>
                            {`${this.props.member.firstName} ${this.props.member.lastName}`}</td>
                        {this.renderNextGames()}
                        <td>{this.props.score}</td>
                    </tr>
                )
            } else {
                return (
                    <tr>
                         <td>{this.props.index + 1}</td>
                        <td>
                            {`${this.props.member.firstName} ${this.props.member.lastName}`}</td>
                        {this.renderNextGames()}
                        <td>{this.props.score}</td>
                    </tr>
                )
            }
        } else {
            return null;
        }
    }
}
