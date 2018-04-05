import React from 'react';

export default class Home extends React.Component {

    renderSign() {
        if (this.props.user === undefined) {
            return (
                <div>
                    <ul className="sign">
                        <li>
                            <a href="#login">Sign Up!</a>
                        </li>
                        <li>
                            <a href="#login">Sign in!</a>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul className="sign">
                        Hello, {this.props.user.firstName}!
                        <li onClick={() => this.props.signout()}>
                            <a href="#signOut" >Sign Out</a>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderSign()}

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
                        <a href="#login">Log in</a>
                    </li>
                </ul>


                <div className="img1" id="home">

                </div>
            </div>
        )
    }
}