import React from 'react';


export default class FinishedGame extends React.Component {

    renderMyBet(game) {
        if (this.props.user && this.props.user.bets) {
            const bets = this.props.user.bets;
            if (bets && bets[game.id]) {
                return (
                    <div className="regular-text3">
                        My bet: {bets[game.id].away} - {bets[game.id].home}
                    </div>
                )
            }
        } else {
            return null;
        }
    }

    renderBetButton() {
        if (this.props.game) {
            const { game } = this.props;
            return (
                <span>
                    score:  {game.away} - {game.home}
                    {this.renderMyBet(game)}
                </span>
            )
        }

    }

    render() {
        return (
            <div className="game">
                {this.props.game.date} <br />
                {this.props.game.awayName} - {this.props.game.homeName} <br />
                {this.renderBetButton()}
            </div>
        )
    }
}
