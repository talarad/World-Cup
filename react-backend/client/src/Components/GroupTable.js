import React from 'react';

export default class GroupTable extends React.Component {

    renderNextGames() {
        if (this.props.member.user.id !== this.props.user.id) {
            return (
                this.props.games.map((game, index) => {
                    if (game.date === this.props.closestDate) {
                        const away = this.props.member.user.bets[game.id] ? this.props.member.user.bets[game.id].away : '';
                        const home = this.props.member.user.bets[game.id] ? this.props.member.user.bets[game.id].home : '';
                        return (<td key={index}> {game.away_name}: {away}, {game.home_name}: {home} </td>)
                    }
                    return null;
                })
            )
        } else {
            return (
                this.props.games.map((game, index) => {
                    if (game.date === this.props.closestDate) {
                        const away = this.props.user.bets[game.id] ? this.props.user.bets[game.id].away : '';
                        const home = this.props.user.bets[game.id] ? this.props.user.bets[game.id].home : '';
                        return (<td key={index}> {game.away_name}: {away}, {game.home_name}: {home} </td>)
                    }
                    return null;
                })
            )
        }
    }



    render() {
        if (this.props.member) {
            return (
                <tr>
                    <td>{`${this.props.member.user.firstName} ${this.props.member.user.lastName}`}</td>
                    {this.renderNextGames()}
                    <td>{this.props.score}</td>
                </tr>
            )
        } else {
            return null;
        }
    }
}
