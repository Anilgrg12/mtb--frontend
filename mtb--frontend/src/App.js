import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Login from "./Components/Login";
import TrailDetail from "./Components/TrailDetail";
import Picture from "./Components/Picture";
import TrailList from "./Components/TrailList";
import Trails from "./Components/Trails";
import TrailForm from "./Components/TrailForm";
import SignUp from "./Components/SignUp";
import Favorite from "./Components/Favorite";
import FavoriteCard from "./Components/FavoriteCard";
import { createBrowserHistory } from "history";
import useHistory from "react-router-dom";
import ProfilePage from "./Components/ProfilePage";
import Event from "./Components/Event";
import DisplayEvent from "./Components/DisplayEvent";
import MyEvent from "./Components/MyEvent";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Switch>
          <Route path="/trails/:id" component={TrailDetail} />
          <Route path="/signup" component={SignUp} />
          <Route path="/my-favorite" component={Favorite} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/event" component={Event} />
          <Route path="/my-event" component={MyEvent} />
          <Route path="/contact" component={Contact} />
          <Route path="/create-trail" component={TrailForm} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
