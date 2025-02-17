import React from "react";

export default class SortTrail extends React.Component {
  render() {
    return (
      <div className="sort-trail">
        <label className="sort-text">Sort Trails By: </label>
        <select
          className="menu-item"
          name="sortBy"
          value={this.props.type}
          onChange={this.props.handleChange}
        >
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="length">Length</option>
          <option value="description">Description</option>
          <option value="stars">Rating</option>
          <option value="location">Location</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      </div>
    );
  }
}
