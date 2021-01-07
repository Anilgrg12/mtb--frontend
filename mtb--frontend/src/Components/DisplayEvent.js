import React, { Component } from "react";

class DisplayEvent extends Component {
  handleEvent = (e) => {
    e.preventDefault();
    let user_id = localStorage.getItem("user_id");
    let event_id = this.props.event.id;

    fetch("http://localhost:3000/fav_events/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({
        user_id: user_id,
        event_id: event_id,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  };

  render() {
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
      <div className="Trail-cards" style={{ backgroundColor: "white" }}>
        <table>
          <tr>
            <td>
              <img style={{ height: 500, width: 560 }} src={img} /> <br />
            </td>

            <td className="event-des">
              <div>Event: {name}</div>
              <div>City: {city}</div>
              <div>State: {state}</div>
              <div>Date/Time: {date_time}</div>
              <div>Description: {description}</div>
              <div>Website: {website}</div>
              <button className="event-button" onClick={this.handleEvent}>
                Add to my events
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DisplayEvent;
