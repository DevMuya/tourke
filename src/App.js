import React, { Component } from "react";
import Navbar from "./components/home components/navbar";
import Tabmenu from "./components/home components/tabmenu";
import Body from "./components/home components/body";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Tabmenu />
        <Body />
      </div>
    );
  }
}
