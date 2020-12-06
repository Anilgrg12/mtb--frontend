import React, { Component } from "react";
import MyEvent from "./MyEvent";

class MyEventCard extends Component {
  state = {
    clicked: false,
  };
  toggleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  renderShort = () => {
    const {
      name,
      description,
      date_time,
      img,
      city,
      state,
      website,
    } = this.props.event;
    return (
      <div className="muji">
        <div className="Trails-card">
          <img style={{ height: 330, width: 410 }} src={img} /> <br />
          <div>Event: {name}</div>
          <div>City: {city}</div>
          <div>State: {state}</div>
          <div>Website:{website}</div>
          <button className="fav-event-del">Remove</button>
        </div>
      </div>
    );
  };

  renderFull = () => {
    const {
      name,
      description,
      date_time,
      img,
      city,
      state,
      website,
    } = this.props.event;
    return (
      <div className="Trail-card">
        <div>Name of the event: {name} </div>
        <div>City: {city}</div>
        <div>State: {state}</div>
        <div>Date: {date_time}</div>
        <div>Website: {website}</div>
        <div>Description: {description}</div>
      </div>
    );
  };
  render() {
    return (
      <div onClick={this.toggleClicked}>
        <div>
          {this.state.clicked ? this.renderFull() : this.renderShort()}
          {/* {this.renderShort()} */}
        </div>
      </div>
    );
  }
}
export default MyEventCard;
