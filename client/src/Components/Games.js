import React from 'react';
import Game from './Game'

export default class Games extends React.Component {

    getCurrentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd
        return today
    }

    renderGames() {
        if (this.props.games === undefined) {
            return null;
        }

        let date;
        const today = this.getCurrentDate();

        for (let i = 0; i < this.props.games.length; i++) {
            if (this.props.games[i].date >= today) {
                date = this.props.games[i].date;
                break;
            }
        }

        let counter = 0;

        return (
            this.props.games.filter(game => game.date === date).sort((a, b) => a.time < b.time).map((game, index) => {
                if (game.date === date && counter < 5) {
                    counter++;
                    return (<Game time={this.props.time} today={today} game={game} key={index} user={this.props.user} updateBet={this.props.updateBet} />)

                }
                return null;
            }))
    }

    render() {

        return (
            <div className="regular" id="games">
                <div className="borderScores">
                    <p className="desc3">Bet on future games' scores</p>
                    {this.renderGames()}
                </div>
            </div>
        )
    }
}
