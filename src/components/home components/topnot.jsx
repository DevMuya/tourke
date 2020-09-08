import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import pic from "./../../assets/images/profile.jpg";

export class TopNot extends Component {
  render() {
    return (
      <div className=" sm:visible md:hidden flex text-white ">
        <div className=" notf flex justify-between absolute right-0 mr-4 mt-1 ">
          <div className="mx-2">
            <Icon.BellFill
              className="hover:text-green-800  cursor-pointer"
              size={15}
            />
          </div>
          <div className="bell  mx-2">
            <Icon.ChatFill
              className="hover:text-green-800 cursor-pointer"
              size={15}
            />
          </div>
          <div className="bell ml-2">
            <Icon.BookmarkCheckFill
              className=" hover:text-green-800 sm:hidden md:visible cursor-pointer  "
              size={15}
            />
          </div>
        </div>
        <div className="mr-6 self-center absolute left-0 ml-2 sm:hidden md:visible cursor-pointer">
          <img className="rounded-full w-5" src={pic} alt="profile_img" />
        </div>
     <div/>
     </div>
    );
  }
}

export default TopNot;
