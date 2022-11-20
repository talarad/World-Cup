import React from 'react';

export default class Manage extends React.Component {

    renderGroupsAdmin() {
        const { user } = this.props;

        if (user && user.groups) {
            return (
                Object.keys(user.groups).map((group, index) => {
                    if (user.groups[group].admin === user.id) {
                        return (
                            <div className="group" key={index}>
                                {user.groups[group].name}: <br />
                                <input type="text" className="friendinput" placeholder="Enter a friend's Username" id={group} />
                                <button className="button3" onClick={() => this.props.addToGroup(user, document.getElementById(group).value, user.groups[group].id, group)}>Add to group</button>
                            </div>
                        )
                    }
                    return null;
                }))
        }
    }

    createGroup() {
        const { user } = this.props;

        if (user) {
            return (
                <div className="group">
                    New group: <br />
                    <input type="text" placeholder="Group name" className="friendinput" id="create" />
                    <button className="button3" onClick={() => this.props.createGroup(user, document.getElementById("create").value)}>Create group</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="img2" id="manage">
                {/* <div className="regular-text2">
                    Manage and join groups
                    </div> */}
                <div className="caption2">
                    {this.renderGroupsAdmin()}
                </div>

                <div className="caption3">
                    {this.createGroup()}
                </div>
            </div>

        )
    }
}
