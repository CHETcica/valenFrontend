import React, { useState, useEffect } from "react";

const Menubar = () => {
  return (
    <>
      <div className="mx-auto navbar shadow-lg text-neutral-content h-7">
        <div className="container mx-auto">
          <div className="flex-none hidden lg:flex"></div>
          <div className="flex">
            <img
              className="h-20 mt-10"
              src="https://cdn.discordapp.com/attachments/921282715888783410/938679327631998976/unknown.png"
            />
          </div>
          
          <div className="flex-1 lg:flex hidden">
            <h1 className="text-2xl">Valen Matching</h1>
          </div>
          <div className="flex-1 lg:flex ">
            
          </div>
          <div className="flex-initial lg:flex-none"></div>
          <div className="flex-initial lg:flex-none"></div>
          <div className="flex">
            <div className="avatar">
              <div className="rounded-full w-10 h-10 m-1">
                <img src="https://i.pravatar.cc/500?img=32" />
              </div>
            </div>
            <h3 className="lg:flex my-auto ml-5 hidden">Chetsadakorn Mueangnam</h3>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Menubar;
