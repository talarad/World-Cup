import React from 'react';
//import styles from '../../public/style.css';

export default class Log extends React.Component {

    render() {
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
                        <button onClick={() => this.login()}> Log in </button>
                    </div>
                </span>
            </div>

        )
    }
}
