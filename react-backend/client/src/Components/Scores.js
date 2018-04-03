import React from 'react';
import GroupTable from './GroupTable'

export default class Scores extends React.Component {

    showGroups() {
        if (this.props.user && this.props.user.groups) {
            return (this.props.user.groups.map((group, index) => {
                return (
                    <div className="button3" key={index} onClick={() => this.props.changeGroupView(group)}>Group {index + 1}</div>
                )
            })
            )
        } else {
            return (
                <div>
                    Score of you and your friends
                </div>
            )
        }
    }

    renderTable(head) {
        if (this.props.group) {
            let rows = [head];

            this.props.group.forEach((friend, index) => {
                rows.push(<GroupTable key={index} friend={friend} />);
            })
            return (
                <tbody>{rows}</tbody>)
        } else {
            return null;
        }
    }

    render() {
        const head = <tr key={21214241}>
            <th>Name</th>
            <th>Last game</th>
            <th>Next game</th>
            <th>Score game</th>
        </tr>;

        return (
            <div className="img3">
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
