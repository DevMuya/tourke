import React, { Component } from "react";
import Main from "./main";
import Nav from "./../home components/navbar";

export class Profile extends Component {
  render() {
    return (
      <div className="h-full w-full relative ">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default Profile;
