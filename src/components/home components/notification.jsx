import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";
// import pic from "./../assets/images/profile.jpg";

export class Notify extends Component {
  render() {
    return (
      <div className="absolute  visible ">
        <div className="noti">
          <Icon.BellFill />
          <Icon.ChatFill />
          <Icon.BookmarkCheckFill />
        </div>
      </div>
    );
  }
}

export default Notify;
