import React from 'react';

export default class GroupTable extends React.Component {



    render() {
        if (this.props.friend) {
            return (
                <tr>
                    <td>{this.props.friend.firstName}</td>
                    <td>England: 2, German: 1</td>
                    <td>China: 0, Russia: 1</td>
                    <td>70</td>
                </tr>
            )
        } else {
            return null;
        }
    }
}
