import React, { Component } from "react";

export default class ProfilePage extends Component {
  state = {
    user: "",
  };

  componentDidMount() {
    let userId = localStorage.getItem("user_id");
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => response.json())
      .then((profile) =>
        this.setState({
          user: profile.user,
        })
      );
  }
  render() {
    return (
      <div className="profile-page">
        <table>
          <tr>
            <td>
              <div>
                <img className="profile-pic" src={this.state.user.image} />{" "}
                <br />
                <button className="edit-profile">Edit</button>
              </div>
            </td>
            <td>
              <div className="profile-detail">
                <div> Name: {this.state.user.name} Gurung </div>
                <div>Age: 25 </div>
                <div>Username: {this.state.user.username}</div>
                <div> Email address: {this.state.user.email}</div>
                {/* <div>Location: NewYork</div> */}
                <div>Short Bio: I Love Mountain Biking!!!!!!!!!! </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
