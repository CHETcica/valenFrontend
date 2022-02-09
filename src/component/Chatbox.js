import React from "react";
import Carduser from "../component/Carduser";

const Chatbox = () => {
  return (
    <div className="card text-center shadow-2xl">
      <figure className="px-10 pt-10">
        <img src="" className="rounded-xl " />
      </figure>
      <div className="card-body h-full">

        <div className="justify-center card-actions h-96">

          <button className="btn btn-outline btn-accent">Enter</button>
          
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
