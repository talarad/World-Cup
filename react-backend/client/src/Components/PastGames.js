import React from 'react';

export default class PastGames extends React.Component {

    renderGames() {
        if (this.props.scores === undefined) {
            return null;
        }
       
        return (
            this.props.scores.map(score => {
                return (
                <div className="game">
                {score.homeTeam} - {score.awayTeam} <br />
                {score.home}       -       {score.away} <br />

                </div>
                )
            })
        )
    }

    render() {

        return (
            <div className="regular2" id="past-games">
                <div className="border">
                    <p className="desc3">Past matches scores:</p>
                    {this.renderGames()}
                </div>
            </div>
        )
    }
}
