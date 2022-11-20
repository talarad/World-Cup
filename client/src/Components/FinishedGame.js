import React from 'react';


export default class FinishedGame extends React.Component {

    renderMyBet(game) {
        if (this.props.user && this.props.user.bets) {
            const bets = this.props.user.bets;
            if (bets && bets[game.id]) {
                return (
                    <div className="mybettext">
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
                    Score:  {game.away} - {game.home}
                    {this.renderMyBet(game)}
                </span>
            )
        }
    }

    renderPoints() {
        if (this.props.game && this.props.user && this.props.user.bets) {
            const { game } = this.props;
            const bets = this.props.user.bets;

            if (bets && bets[game.id]) {
                const bet = bets[game.id];
                let score;
                if (bet.home === game.home && bet.away === game.away) {
                    score = 30
                } else if ((bet.home > bet.away && game.home > game.away) || (bet.home < bet.away && game.home < game.away)) {
                    score = 10;
                } else if (bet.home === bet.away && game.home === game.away) {
                    score = 10;
                } else {
                    score = 0
                }

                if (score === 0) {
                    return 0
                } else {
                    return (
                        <div className="gamepoints">
                            +{score}
                        </div>
                    )
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="game">
                {this.props.game.date} <br />
                {this.props.game.awayName} - {this.props.game.homeName} <br />
                {this.renderBetButton()}
                {this.renderPoints()}
            </div>
        )
    }
}
