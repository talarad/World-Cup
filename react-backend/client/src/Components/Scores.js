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

    renderTable(head, closestDate) {
        if (this.props.user && this.props.user.groups) {
            let rows = [head];
            let index = 0;


            this.props.group.members.forEach(member => {
                rows.push(<GroupTable key={index} user={this.props.user} member={member} score={member.score}
                    games={this.props.games} closestDate={closestDate} />);
                index++;
            });

            return (
                <tbody>{rows}</tbody>)
        } else {
            return (
                <div className="caption">
                    <span className="border">Log in and join a group first</span>
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

        today = mm + '-' + dd + '-' + yyyy;
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

        closestDate = "2018-06-15"
        gamesInSameDay = 3;

        // ??????????? key??
        const head = <tr key={21214241}>
            <th>Name</th>
            <th colSpan={gamesInSameDay}>Next games</th>
            <th>Total Score</th>
        </tr>

        return (
            <div className="img3" id="score">
                <div className="regular-text"> Score of you and your friends </div>
                <div className="ScoreButtons">
                    {this.showGroups()}
                </div>
                <div className="group-table">
                    <table className="friends">
                        {this.renderTable(head, closestDate)}
                    </table>
                </div>
            </div>
        )
    }
}
