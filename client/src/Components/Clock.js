import React from 'react'
import moment from 'moment-timezone'

export default class Clock extends React.Component {
    constructor() {
        super();
        this.state = { time: moment(Date.now()).tz('Europe/Moscow').format('HH:mm') };
    }

    componentWillMount() {
        setInterval(() => {
            const time = moment(Date.now()).tz('Europe/Moscow').format('HH:mm');
            this.setState({ time })
            this.props.updateTime(time)
        }, 1000);
    }


    render() {
        const { time } = this.state;

        return (<span id="clock">
            {time}
        </span>);
    }
}