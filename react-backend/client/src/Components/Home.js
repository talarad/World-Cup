import React from 'react';
import Log from './Log.js';

export default class Home extends React.Component {

    renderSign() {
        if (this.props.user !== undefined) {
            return (
                <li onClick={() => this.props.signout()}>
                    <a href="#signOut" >Sign Out</a>
                </li>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="img1" id="home">
                <Log user={this.props.user} login={this.props.login} notRegistered={this.props.notRegistered} registerClick={this.props.registerClick} />
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
                    {this.renderSign()}
                </ul>
            </div>
        )
    }
}