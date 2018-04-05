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

    renderTable(head) {
        if (this.props.user && this.props.user.groups) {
            let rows = [head];
            let index = 0;
            console.log(this.props.group)
            this.props.group.members.forEach(friend => {
                rows.push(<GroupTable key={index} friend={friend} />);
                index++;
            });

            return (
                <tbody>{rows}</tbody>)
        } else {
            return null;
        }
    }

    render() {
        // ??????????? key??
        const head = <tr key={21214241}>
            <th>Name</th>
            <th>Last game</th>
            <th>Next game</th>
            <th>Score game</th>
        </tr>

        return (
            <div className="img3" id="score">
                <div className="regular-text"> Score of you and your friends </div>
                <div className="ScoreButtons">

                    {this.showGroups()}
                </div>
                <div className="group-table">
                    <table className="friends">
                        {this.renderTable(head)}
                    </table>
                </div>
            </div>
        )
    }
}
