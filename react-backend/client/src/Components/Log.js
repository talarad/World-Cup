import React from 'react';
//import styles from '../../public/style.css';

export default class Log extends React.Component {

    renderLogin() {
        if (this.props.user !== undefined) {
            return (
                null
            )
        } else {
            return (
                <div className="img4">
                    <span className="login">
                        <div className="log">User name:
                        <input type="text" id='username' />
                        </div>
                        <div className="log">Password:
                        <input type="password" id='password' />
                        </div>
                        <div className="log">
                            <button onClick={() => this.props.login(document.getElementById('username').value, document.getElementById('password').value)}> Log in </button>
                        </div>
                    </span>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderLogin()}

            </div>
        )

    }
}
