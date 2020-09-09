import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import pic from "./../../assets/images/deno.jpg";

export class LogIn extends Component {
  render() {
    return (
      <div className="body px-2 md:px-0 md:py-0 h-screen m-0 my-auto bg-green-100 content-center  flex ">
        <img src={pic} alt="" className="cover object-cover w-full h-full" />
        <div className="deals h-32 w-full absolute bottom-0 mb-16 z-50 flex flex-row justify-between px-16">
          <div className="deal relative shadow-2xl border-gray-200 rounded-full   w-1/6">
            <p className="text absolute h-2 top-0 hover:text-grey-200 cursor-pointer ml-6 text-4xl font-bold text-white text-center shadow z-30 ">
              Hotels
            </p>
            <div className="bg-black  bg-opacity-50 hover:bg-red min-h-full min-w-full z-20 absolute top-0 left-0 object-cover"></div>
            <img src={pic} alt="" className="pic object-fill z-0" />
          </div>
          <div className="deal w-1/6 ">
            <img src={pic} alt="" className="pic object-cover mx-1 z-0" />
          </div>
          <div className="deal w-1/6 ">
            <img src={pic} alt="" className="pic object-cover mx-1 z-0" />
          </div>
          <div className="deal w-1/6 ">
            <img src={pic} alt="" className="pic object-cover mx-1 z-0" />
          </div>
          <div className="deal w-1/6 ">
            <img src={pic} alt="" className="pic mx-1 object-cover z-0 " />
          </div>
        </div>
        <div className="contains lg:absolute relative lg:top-0 lg:right-0 lg:mt-24 lg:mr-40 md:w-1/3 w-11/12 h-64  bg-white shadow-md rounded-md mx-auto self-center">
          <div className="login h-8 rounded-t-md bg-green-600 w-full flex justify-center content-center">
            <p className="name text-base font-bold text-green-100 shadow-xs">
              Log In Tourke
            </p>
          </div>
          <form
            method="post"
            className="relative flex flex-col details w-11/12 mx-auto p-3 mt-2"
          >
            <div className="username flex pt-1 ">
              <Icon.PersonCircle
                className="text-green-600 mr-2 mt-2  "
                size={20}
              />

              <label
                htmlFor="username"
                className="username text-sm text-green-600 top-0 absolute left-0 ml-10 italic font-bold"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                className=" username focus:border-green-800 border-b-2 p-0 border-green-300 mt-1 focus:outline-none text-base w-11/12"
              />
            </div>
            <div className="password flex mt-10 pt-3">
              <Icon.KeyFill className="text-green-600 mr-2 mt-2  " size={20} />

              <label
                htmlFor="username"
                className="username text-sm text-green-600 top-0 mt-20 absolute left-0 ml-10 italic font-bold"
              >
                Password
              </label>
              <input
                type="password"
                name="username"
                className=" username focus:border-green-800 border-b-2 p-0 border-green-300 mt-1 focus:bg-opacity-0 focus:outline-none text-base w-11/12"
              />
            </div>
            <div className="submits mt-6 w-1/2 flex items-center justify-center mx-auto">
              <input
                type="submit"
                className="bg-green-600 text-center py-1 outline-none hover:bg-green-800 cursor-pointer rounded-md m-0 text-base font-bold px-2 text-white"
                value="Log In"
              ></input>
            </div>
            <div className="links w-full text-xs flex justify-between text-green-400 font-bold">
              <Link to="/home" className="sign_up hover:text-green-800">
                or Sign up here ?
              </Link>
              <Link to="/home" className="sign_up hover:text-green-800 ">
                forgot password ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
