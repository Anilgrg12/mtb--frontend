import React, { Component } from 'react'
import DisplayEvent from './DisplayEvent'

export default class Event extends Component {
    state = {
        events: []
    }
    componentDidMount(){
        fetch('http://localhost:3000/events')
        .then(resp =>resp.json())
        .then(events => {this.setState({events})})
    }
    render() {
        console.log("event",this.state)
        return (
            <div>
                {this.state.events.map(event => <DisplayEvent event = {event}/>)}
                
            </div>
        )
    }
}