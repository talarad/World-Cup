import React from 'react';
import Log from './Log.js';
import Clock from './Clock';

export default class Home extends React.Component {



    renderSign() {
        if (this.props.user !== undefined) {
            return (
                <div>
                    <li onClick={() => this.props.signout()}>
                        <a href="#signOut" >Sign Out</a>
                    </li>
                </div>
            )
        } else {
            return null
        }
    }

    renderHello() {
        if (this.props.user) {
            return (
                <div className="hey">
                    Hello,  {this.props.user.firstName}  <Clock />
                </div>
            )
        } else {
            return null
        }
    }



    render() {
        return (
            <div className="img1" id="home">
                <Log register={this.props.register} user={this.props.user} login={this.props.login} notRegistered={this.props.notRegistered} registerClick={this.props.registerClick} />
                <ul className="menu">

                    {this.renderHello()}
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#score">Score</a>
                    </li>
                    <li>
                        <a href="#games">Bet games</a>
                    </li>
                    <li>
                        <a href="#manage">Create & manage</a>
                    </li>
                    <li>
                        <a href="#past-games">Past matches</a>
                    </li>
                    {this.renderSign()}
                </ul>


                <div className="local-scroll">
                    <span className="scroll-down"><i className="scroll-down-icon"></i>Scroll Down</span>
                </div>

            </div>
        )
    }
}

