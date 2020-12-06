import React, { Component } from "react";
import MyEventCard from "./MyEventCard";
const EventURL = "http://localhost:3000/events";

export default class MyEvent extends Component {
  state = {
    myEvents: [],
  };

  componentDidMount() {
    let userId = localStorage.getItem("user_id");

    fetch(`http://localhost:3000/users/${userId}/add_event`)
      .then((resp) => resp.json())
      .then((myEvents) => {
        this.setState({
          myEvents,
        });
      });
  }

  render() {
    // console.log("gedaa", this.state);
    return (
      <div>
        {this.state.myEvents.map((event) => (
          <MyEventCard key={event.id} event={event} />
        ))}
      </div>
    );
  }
}
