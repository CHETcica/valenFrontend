import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {
  const usersignin = useSelector((state) => state.signs);
  return (
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
          <div className="flex-1 lg:flex "></div>
          <div className="flex-initial lg:flex-none"></div>
          <div className="flex-initial lg:flex-none"></div>
          {usersignin.user? (
            <Link to={"/profile"} className="flex">
              <div className="avatar">
                <div className="rounded-full w-10 h-10 m-1">
                  <img src={usersignin.user.userimageprofile} />
                </div>
              </div>
              <h3 className="lg:flex my-auto ml-5 text-xl hidden">
                {usersignin.user.username}
              </h3>
            </Link>
          ) : (
            <div className="flex">
              <Link
                to={"/login"}
                className="grid h-3/4 flex-grow text-lg place-items-center"
              >
                Login
              </Link>
                <div className="divider my-auto divider-vertical"></div>
              <Link
                to={"/register"}
                className="grid h-3/4 flex-grow text-lg place-items-center"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
  );
};

export default Navbar;
