import React, { Component } from "react";
import Card from "./card";

export class Content extends Component {
  render() {
    return (
      <div className=" bg-green-100 shadow-md sm:w-full pb-4 pt-5 md:w-1/2 mx-auto md:border-l sm:pr-2 md:border-r flex flex-col justify-center items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Content;
