import React, { Component } from "react";

export class Menu extends Component {
  render() {
    return (
      <div className="links flex flex-row justify-between text-base md:w-1/2 w-screen mx-auto text-center">
        <div className="flex bg-green-800 shadow-2xl px-1 text-sm rounded-md items-center h-7  font-bold text-white">
          <p className="shadow-xm self-center">Home</p>
        </div>
        <div className="flex bg-green-500 shadow-2xl px-1 text-base rounded-md items-center h-7  font-bold text-white">
          <p className="shadow-xm self-center">Travel</p>
        </div>
        <div className="flex bg-green-500 shadow-2xl px-1 text-base rounded-md items-center h-7  font-bold text-white">
          <p className="shadow-xm self-center">Booking</p>
        </div>
        <div className="flex bg-pr z-20 shadow-2xl px-1 text-base rounded-md items-center h-7  font-bold text-white bg-green-500">
          <p className="shadow-xm self-center">Travel</p>
        </div>
        <div className="flex bg-green-500 shadow-2xl px-1 text-base rounded-md items-center h-7 font-bold text-white">
          <p className="shadow-xm self-center">Exprole</p>
        </div>
      </div>
    );
  }
}

export default Menu;
