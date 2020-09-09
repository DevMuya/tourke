import React, { Component } from "react";
import Content from "./content";
import Tabmenu from "./tabmenu";
import Navbar from "./navbar";



export class Body extends Component {
  render() {
    return (
      <div className=" w-full ">
        <Navbar />
        <Tabmenu />
        <Content />
      </div>
    );
  }
}

export default Body;
