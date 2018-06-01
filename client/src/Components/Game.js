import React from 'react';

export default class Game extends React.Component {

    renderBetButton() {
        if (this.props.user) {
            const { user, time } = this.props;
            const gameID = this.props.game.id;

            let userBet;
            if (this.props.ended) {
                return (
                    <span>
                        {/* ... */}
                    </span>
                )
            }
            if (user.bets) {
                Object.keys(user.bets).forEach(bet => {
                    if (user.bets[bet].id.toString() === gameID.toString()) {
                        userBet = user.bets[bet];
                    }
                })
            }

            let gameTime = this.props.game.time.substring(0, 5);

            //if ((this.props.today <= this.props.game.date && time < gameTime) || (this.props.game.date === this.props.today && time < gameTime)) {
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
            // } else {
            //     if (userBet === null || userBet === undefined) {
            //         return ('Bets finished')
            //     } else {
            //         return (
            //             <span>
            //                 My bet:  {userBet.away} - {userBet.home}
            //                 <br />
            //                 Bets finished
            //                 </span >
            //         )
            //     }
            // }

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
                <span className="bet-render">
                    {this.renderBetButton()}
                </span>
            </div>
        )
    }
}
