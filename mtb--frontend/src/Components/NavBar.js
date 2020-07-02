import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import "./Nav.css"
import About from './About'

import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
            
           <div className = "nav">
          <Link to="/" style = {{marginRight:145}} >ATB</Link>
          <Link to="/about" style = {{marginRight:145}}>About</Link>
          <Link to="/create-trail" style = {{marginRight:145}}>Create trial</Link>
          <Link to="/my-favorite" style = {{marginRight:145}}>My Favorites</Link>
          {/* <Link to="/SignUp" style = {{marginRight:145}}>Sign Up</Link> */}
          <Link to="/profile" style = {{marginRight:145}}>Profile</Link>
          <Link to="/login" style = {{marginRight:145}}>Log In</Link>
          </div>
          )
        }


export default NavBar;