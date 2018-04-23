import React from 'react';


export default class Game extends React.Component {

    renderBetButton() {
        if (this.props.user) {
            const { user } = this.props;
            const gameID = this.props.game.id;

            let userBet;
            if (this.props.ended) {
                return (
                    <span>
                       {/* ... */}
                    </span>
                )
            }
            Object.keys(user.bets).forEach(bet => {
                if (user.bets[bet].id.toString() === gameID.toString()) {
                    userBet = user.bets[bet];
                }
            })

            if (userBet === null || userBet === undefined) {
                return (
                    <span>
                        <input type="number" id={`${this.props.game.id}1`} className="betInput" />
                        <button onClick={() => this.props.updateBet(user, this.props.game.id, document.getElementById(`${this.props.game.id}1`).value, document.getElementById(`${this.props.game.id}2`).value)}>Place bet!</button>
                        <input type="number" id={`${this.props.game.id}2`} className="betInput" />
                    </span>
                )
            } else {
                return (
                    <span>
                        My bet:  {userBet.away} - {userBet.home}
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
                {this.props.game.date} <br />
                {this.props.game.away_name} - {this.props.game.home_name} <br />
                {this.renderBetButton()}
            </div>
        )
    }
}
