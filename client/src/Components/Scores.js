import React from 'react';
import GroupTable from './GroupTable'

export default class Scores extends React.Component {

    showGroups() {
        if (this.props.user && this.props.user.groups) {
            return (
                Object.keys(this.props.user.groups).map((group, index) => {
                    const grp = `group${index}`;
                    return (
                        <div className="button3" key={index} onClick={() => this.props.changeGroupView(index)}>{this.props.user.groups[grp].name}</div>
                    )
                })
            )
        } else {
            return (null)
        }
    }

    renderTable(gamesInSameDay, closestDate) {
        if (this.props.user && this.props.user.groups && this.props.group) {
            let rows = [];

            this.props.group.members.forEach((member, index) => {

                rows.push(<GroupTable key={index} index={index} user={this.props.user} gamesInSameDay={gamesInSameDay} member={member} score={member.score}
                    games={this.props.games} groupID={this.props.group.id} closestDate={closestDate} leaveGroup={this.props.leaveGroup} />);
            });

            return (
                <table className="friends">
                    <tbody>
                        <tr key='tableHead'>
                            <th> # </th>
                            <th>Name</th>
                            <th colSpan={gamesInSameDay}>Next games</th>
                            <th>Total Score</th>
                        </tr>
                        {rows}</tbody>
                </table>
            )
        } else {
            return (
                <div className="caption">
                    <span className="borderScores">Log in and join a group first</span>
                </div>
            );
        }
    }

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

        today = yyyy + '-' + mm + '-' + dd;
        return today
    }

    render() {
        if (!this.props.games) return (<div className="img3" id="score"></div>);
        let closestDate;
        const today = this.getCurrentDate();
        let gamesInSameDay = 0;

        for (let i = 0; i < this.props.games.length; i++) {
            if (this.props.games[i].date >= today && !closestDate) {
                closestDate = this.props.games[i].date;
            }
            if (closestDate === this.props.games[i].date) {
                gamesInSameDay++;
            }
        }

        //closestDate = "2018-05-13"
        //gamesInSameDay = 1;

        return (
            <div className="img3" id="score">
                <div className="regular-text"> Score of you and your friends </div>
                <div className="ScoreButtons">
                    {this.showGroups()}
                </div>
                <div className="group-table">
                    {this.renderTable(gamesInSameDay, closestDate)}
                </div>
            </div>
        )
    }
}
