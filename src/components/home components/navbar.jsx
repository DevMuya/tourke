import React, { Component } from "react";
import TopNot from './topnot';


export class Navbar extends Component {
  render() {
    return (
      <div className=" bg-green-700 z-10 w-full flex content-center sticky top-0 justify-center">
        <p className="font-bold md:text-lg text-indigo-100">TourKe App</p>
        <div className="absolute right-0 mr-2 md:text-sm hidden md:visible font-bold text-white mt-1">
          &#169; 2020 <a href="www.gitHub.com/DevMuya">Dennis Muya</a>&#8482;
        </div>
        <TopNot/>
      </div>
    );
  }
}

export default Navbar;
