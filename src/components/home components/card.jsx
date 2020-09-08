import React, { Component } from "react";
import pic from "./../../assets/images/profile.jpg";

import * as Icon from "react-bootstrap-icons";

export class Card extends Component {
  render() {
    return (
      <div>
        <div className=" mx-auto card bg-white flex flex-col sm:w-11/12 shadow md:w-11/12  mb-3">
          <div className="header h-10 flex mt-2 items-center">
            <img
              src={pic}
              alt={pic}
              className="h-8 rounded-full pt-1 pl-1"
              srcset=""
            />

            <p className="text-green-800 font-bold ml-1 name  self-start p-0 ">
              Maasai Mara
            </p>
            <p className=" time p-0 z-10 text-xs md:pl-1 pl-2 absolute ml-8 md:mt-3 mt-2 font-bold text-gray-600">
              Home of the eith world wonder
            </p>

            <p className=" time p-0 z-10 text-xs md:pl-1 pl-2 absolute ml-8 md:mt-6 pt-0 md:pt-2 mt-3 font-bold text-gray-600">
              2d ago
            </p>
            <div className="ml-auto mr-1">
              <Icon.ThreeDotsVertical className="text-gray-600 text-lg font-bold" />
            </div>
          </div>
          {/* body */}
          <div className="body w-full mx-auto mt-1 p-1">
            <img src={pic} className="w-full max-h-full" alt="" />
            <div className="content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                nisi quaerat iste harum suscipit maiores hic sed itaque numquam?
                Nemo?
              </p>
            </div>
            <hr className=" border-t mt-1" />
            <div className="likes-center flex flex-row items-center pt-2 pb-2">
              <div className="like ml-3 flex flex-roflexw items-center justify-between h-5 flex-row">
                <Icon.HandThumbsUp className=" text-green-600 stroke-1" />
                <p className="text-xs font-bold text-green-600 ml-2">200</p>
              </div>
              <div className="unlike ml-3 flex flex-row">
                <Icon.HandThumbsDown className=" text-green-600 stroke-1" />
                <p className="text-xs font-bold text-green-600 ml-2">200</p>
              </div>
              <div className="comment ml-3 flex flex-row">
                <Icon.ChatTextFill className=" text-green-600 stroke-1" />
                <p className="text-xs font-bold text-green-600 ml-2">200</p>
              </div>
              <div className="comment flex flex-row ml-auto mr-4 self-end">
                <Icon.ShareFill className=" text-green-600 stroke-1" />
                <p className="text-xs font-bold text-green-600 ml-2">200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
