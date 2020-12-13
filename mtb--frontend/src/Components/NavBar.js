import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./Nav.css"
import About from "./About";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/" style={{ marginRight: 80, color: "white", marginTop: 12 }}>
        MTB🚵🏾‍♂️
      </Link>
      <Link
        to="/about"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        About
      </Link>
      <Link
        to="/create-trail"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        Add Trail
      </Link>
      <Link
        to="/my-favorite"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        My Favorites
      </Link>
      {/* <Link to="/SignUp" style = {{marginRight:80, color:"white"}}>Sign Up</Link> */}
      <Link
        to="event"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        Events
      </Link>
      <Link
        to="/my-event"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        My Events
      </Link>
      <Link
        to="/profile"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        Profile
      </Link>
      <Link
        to="/contact"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        Contact Us
      </Link>
      <Link
        to="/login"
        style={{ marginRight: 80, color: "white", marginTop: 12 }}
      >
        Log Out
      </Link>
      <br />
    </div>
  );
};

export default NavBar;
