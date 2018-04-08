import React from 'react';

export default class Home extends React.Component {

    renderSign() {
        if (this.props.user === undefined) {
            return (
                <li>
                    <a href="#login">Sign Up / Sign in</a>
                </li>
            )
        } else {
            return (
                <li onClick={() => this.props.signout()}>
                    <a href="#signOut" >Sign Out</a>
                </li>
            )
        }
    }

    render() {
        return (
            <div className="img1" id="home">
                <ul className="menu">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#teams">Teams</a>
                    </li>
                    <li>
                        <a href="#games">Games</a>
                    </li>
                    <li>
                        <a href="#score">Score</a>
                    </li>
                    <li>
                        <a href="#manage">Create & manage</a>
                    </li>
                    <li>
                        {this.renderSign()}
                    </li>
                </ul>
            </div>
        )
    }
}