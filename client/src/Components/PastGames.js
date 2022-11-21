import React from 'react';
import FinishedGame from './FinishedGame'

export default class PastGames extends React.Component {

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
        
        if (this.props.scores === undefined) {
            return null;
        }
        const today = this.getCurrentDate();
        return (
            this.props.scores.filter(a => a).map((game, index) => {
                if (game.date < today) {
                    return (<FinishedGame placeScore={this.props.placeScore} game={game} key={index} user={this.props.user} updateBet={this.props.updateBet} />)

                }
                return null;
            }))
    }

    render() {

        return (
            <div className="regular2" id="past-games">
                <div className="borderScores">
                    <p className="desc3">Past matches scores:</p>
                    {this.renderGames()}
                </div>
            </div>
        )
    }
}






