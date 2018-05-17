import React from 'react';


export default class FinishedGame extends React.Component {

    renderBetButton() {
        
        if (this.props.game) {
            const { game } = this.props;
            return (
                <span>
                    score:  {game.away} - {game.home}
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
