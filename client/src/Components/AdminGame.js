import React from 'react';

export default class AdminGame extends React.Component {

    renderBetButton() {
        if (this.props.user && this.props.scoredGames) {
            const { user, scoredGames } = this.props;
            const gameID = this.props.game.id;
            let score;

            if (this.props.ended) {
                return (
                    <span>
                        {/* ... */}
                    </span>
                )
            }
            Object.values(scoredGames).forEach(scoredGame => {
                if (scoredGame.id.toString() === gameID.toString()) {
                    score = scoredGame;
                }
            })

            if (score === null || score === undefined) {
                return (
                    <span>
                        <input type="number" id={`Admin${this.props.game.id}1`} className="betInput" />
                        <button onClick={() => this.props.placeScore(user, this.props.game, document.getElementById(`Admin${this.props.game.id}1`).value, document.getElementById(`Admin${this.props.game.id}2`).value)}>Set score</button>
                        <input type="number" id={`Admin${this.props.game.id}2`} className="betInput" />
                    </span>
                )
            } else {
                return (
                    <span>
                        score:  {score.away} - {score.home}
                    </span>
                )
            }

        } else if (this.props.ended) {
            return (
                <span>
                    {/* ... */}
                </span>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="game">
                {this.props.game.date}, {this.props.game.time.substring(0, 5)} <br />
                {this.props.game.away_name} - {this.props.game.home_name} <br />
                {this.renderBetButton()}
            </div>
        )
    }
}
