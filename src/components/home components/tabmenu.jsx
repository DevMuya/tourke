import React, { Component } from "react";
import Notify from './notification';
import Menu from "./menu";


export class Tabmenu extends Component {
  render() {
    return (
      <div className="flex z-20 sticky top-0 w-full justify-center mx-auto bg-white shadow-md  box-border items-center h-12">
        <div className="flex w-full px-1 mx-auto justify-around">
          <Notify/>
          <Menu/>
        </div>
      </div>
    );
  }
}

export default Tabmenu;
