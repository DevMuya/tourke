import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./components/home components/body";
import LogIn from "./components/log components/login";
import Profile from './components/profile components/profile'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/home" component={Body} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    );
  }
}
