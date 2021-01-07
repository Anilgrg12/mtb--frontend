import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({
        password: this.state.password,
        email: this.state.email,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.errors) {
          console.log("erorr");
        } else {
          localStorage.setItem("user_id", resp.id);
           debugger
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div className="about-image">
        <img
          className="about"
          src="https://trek.scene7.com/is/image/TrekBicycleProducts/b300_mtbMarqueeImage?$responsive-pjpg$&cache=on,on&wid=1920"
        ></img>
        <div className="login-input">
          <form onSubmit={this.submitHandler}>
            <input
              placeholder="Enter Email Address"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />{" "}
            <br />
            <input
              placeholder="Enter Password"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />{" "}
            <br />
            <div className="login-buton">
              <button>Log In</button> <br /> <br />
              <Link className="signup-button" to="/signup">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
