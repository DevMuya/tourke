import React, { Component } from "react";
import Header from "./header";
import Menu from './menu';
import Content from './content'

export class Main_profile extends Component {
  render() {
    return (
      <div className="main w-1/2 mx-auto bg-green-200 h-full flex flex-col">
        <Header />
        <Menu/>
        <Content />

      </div>
    );
  }
}

export default Main_profile;
