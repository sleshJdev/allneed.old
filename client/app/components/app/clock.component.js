import React from 'react';

export default class Clock extends React.Component {

    tick() {
        this.setState({
            date: new Date().toISOString()
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toISOString()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Current Time: {this.state.date}</h1>
            </div>
        );
    }
}

