import React, { Component } from "react";
import pic from "./../assets/images/profile.jpg";
import * as Icon from "react-bootstrap-icons";

export class Navbar extends Component {
  render() {
    return (
      <div className=" bg-green-700 flex content-center ">
        <div className="flex justify-end w-1/2">
          <p className="font-bold text-lg text-indigo-100">TourKe</p>
        </div>
        <div className="flex justify-end content-center w-1/2">
          <div className="flex mr-20 self-center text-indigo-100">
            <div className="bell mr-5 tooltip">
              <Icon.BellFill
                className="hover:text-indigo-200 cursor-pointer"
                size={20}
              />
              <p className="tooltip-text text-green-800 text-sm font-bold">
                Notifications
              </p>
            </div>
            <div className="bell mr-5 tooltip">
              <Icon.ChatFill
                className="hover:text-indigo-200 cursor-pointer "
                size={20}
              />
              <p className="tooltip-text text-green-800 text-sm font-bold">
                Messages
              </p>
            </div>
            <div className="bell mr-15 mr-20 tooltip">
              <Icon.BookmarkCheckFill
                className=" hover:text-indigo-200 cursor-pointer  "
                size={20}
              />
              <p className="tooltip-text text-green-800 text-sm font-bold">
                Saved Events
              </p>
            </div>
          </div>
          <div className="mr-6 self-center tooltip1 cursor-pointer">
            <img className="rounded-full w-6" src={pic} alt="profile_img" />
            <p className="tooltip-text1 text-green-800 text-sm font-bold">
             profile
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
