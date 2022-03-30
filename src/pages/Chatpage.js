import React from "react";
import Columchat from "../component/Columchat";
import { Chatbox, Call, Calling } from "../component/Chatbox";

const Chatpage = () => {
  return (
    <div className="container rounded-2xl shadow-2xl  my-5 mx-auto grid sm:grid-cols-4 sm:grid-cols-3  sm:w-full md:w-3/4 lg:w-2/4">
      <div className="sm:col-span-1 md:col-span-1">
        <Columchat />
      </div>

      <div className="sm:col-span-3 md:col-span-2 ">
        <Call />
      </div>
    </div>
  );
};

export default Chatpage;
