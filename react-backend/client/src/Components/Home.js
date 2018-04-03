import React from 'react';
//import styles from '../../public/style.css';

export default class Home extends React.Component {

    renderSign() {
        if (this.props.user === undefined) {
            return (
                <div>
                    <ul className="sign">
                        <li>
                            <a href="#up">Sign Up!</a>
                        </li>
                        <li>
                            <a href="#in">Sign in!</a>
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
                        <a href="#about">Teams</a>
                    </li>
                    <li>
                        <a href="#services">Games</a>
                    </li>
                    <li>
                        <a href="#team">Score</a>
                    </li>
                    <li>
                        <a href="#contact">Create & manage</a>
                    </li>
                    <li>
                        <a href="#login">Log in</a>
                    </li>
                </ul>


                <div className="img1">
                    <div className="caption">
                        <div className="border">
                            <p className="desc">Compete with your friends</p>
                            <p className="desc">Track your score</p>
                            <p className="desc">Get live updates</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}