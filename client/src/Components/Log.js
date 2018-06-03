import React from 'react';
//import styles from '../../public/style.css';

export default class Log extends React.Component {

    renderLogin() {
        if (this.props.user !== undefined) {
            return (
                null
            )
        } else if (this.props.notRegistered) {
            return (
                <span className="sign">
                    <div className="log">User name:
                        <input type="text" id='username' />
                    </div>
                    <div className="log">Password:
                        <input type="password" id='password' />
                    </div>
                    <div className="space">  </div>
                    <div className="log">
                        <button id="logButton" onClick={() => this.props.login(document.getElementById('username').value, document.getElementById('password').value)}> Log in </button>
                        <button id="register" onClick={() => this.props.registerClick()}> Not registered? </button>
                    </div>
                </span >
            )
        } else {
            return (
                <span className="sign">
                    <div className="log">User name:
            <input type="text" id='username' maxLength="10"/>
                    </div>
                    <div className="log">Password
            <input type="password" id='password' maxLength="10"/>
                    </div>
                    <div className="log">First name:
            <input type="text" id='firstname' maxLength="10"/>
                        <div className="log">Last name:
            <input type="text" id='lastname' maxLength="10"/>
                        </div>
                    </div>
                    <div className="space">  </div>
                    <div className="log">
                        <button id="logButton" onClick={() => this.props.register(document.getElementById('username').value,
                            document.getElementById('password').value, document.getElementById('firstname').value, document.getElementById('lastname').value)}> Register </button>
                        <button id="register" onClick={() => this.props.registerClick()}> Already registered? </button>
                    </div>
                </span >
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
