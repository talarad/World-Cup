import React from 'react';
import AdminGame from './AdminGame'

export default class AdminPanel extends React.Component {

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
        
        return (
            this.props.games.map((game, index) => {
                
                if (game.date <= date) {
                    return (<AdminGame scoredGames={this.props.scoredGames} placeScore={this.props.placeScore} game={game} key={index} user={this.props.user} updateBet={this.props.updateBet} />)

                }
                return null;
            }))
    }

    render() {
        return (
            <div className="regular2" id="past-games">
                <div className="borderScores">
                    <p className="desc3">Admin Panel</p>
                    {this.renderGames()}
                </div>
            </div>
        )

    }
}
