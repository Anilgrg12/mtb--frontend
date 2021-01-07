import React, { Component } from "react";

export default class FavoriteCard extends Component {
  render() {
    console.log("answer", this.props);
    const {
      image_url,
      name,
      difficulty,
      length,
      location,
      rating,
      stars,
      high,
      low,
      description,
      id,
    } = this.props.trail;
    return (
      <div className="Trail-card-fav">
        <img className="image" src={image_url} />
        Name:{name} <br />
        Difficulty:{difficulty} <br />
        Distance: {length} miles <br />
        <button
          onClick={(e) => this.props.deleteHandler(e, this.props.trail.id)}
          className="del"
        >
          {" "}
          Delete
        </button>
      </div>
    );
  }
}
