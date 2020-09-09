import React, { Component } from "react";
import pic from "./../../assets/images/deno.jpg";

export class Header extends Component {
  render() {
    return (
      <div className="w-full h-40 relative z-0">
        <img src={pic} alt="" className="header h-full w-full object-cover" />
        <div className="profile w-20 h-20 absolute rounded-full top-0 ml-64 mt-24  mx-auto">
          <img
            src={pic}
            alt=""
            className="header h-full w-full object-cover rounded-full"
          />
        </div>
      </div>
    );
  }
}

export default Header;
