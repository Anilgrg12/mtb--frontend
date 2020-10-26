import React, { Component } from 'react'
import DisplayEvent from './DisplayEvent'

export default class Event extends Component {
    state = {
        events: []
    }
    componentDidMount(){
        document.body.style.backgroundColor = "rgba(50, 115, 220, 0.3)"
        fetch('http://localhost:3000/events')
        .then(resp =>resp.json())
        .then(events => {this.setState({events})})
    }
    render() {
        
        return (
            <div>
                {this.state.events.map(event => <DisplayEvent  key ={event.id} event = {event}/>)}
                
            </div>
        )
    }
}