import React from "react";
import Carduser from "../component/Carduser";
import Columchat from "../component/Columchat";
import Chatbox from "../component/Chatbox";

const Chatpage = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 w-2/4">
      <div className="col-span-1"><Columchat /></div>
      <div className="col-span-2 "><Chatbox /></div>
      
    </div>
  );
};

export default Chatpage;
