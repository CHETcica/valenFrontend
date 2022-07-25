import React from "react";
import Columchat from "../component/Chat/Columchat";
import { Chatbox, Call, Calling } from "../component/Chat/Chatbox";
import { Friend } from "../component/Chat/Friend";


const Chatpage = () => {
  return (
    <div className="container rounded-2xl shadow-2xl  my-5 mx-auto ">
      <div className="sm:col-span-1 md:col-span-1">
        <Friend />
      </div>

    </div>
  );
};

export default Chatpage;
