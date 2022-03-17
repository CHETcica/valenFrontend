import React, { useEffect, useState } from "react";
import { BtnGroupt } from "./BtnGroupt";
import { useDispatch, useSelector } from "react-redux";


const Carduser = (props) => {
  //const users = useSelector((state) => state.users);
  const users = props.users;
  
  if (!users && Object.keys(users).length === 0) return;
  return (
    <div className=" m-auto md:w-80 my-6">
      <div className="card shadow-xl image-full border-card-solid border-solid border-2 text-color-black">
        <figure className="userimage">
          <img
            src={
              users.user.userimageprofile
                ? users.user.userimageprofile
                : "https://cdn.discordapp.com/attachments/792729018608648204/800269761069711370/profile1.jpg"
            }
          />
        </figure>
        <div className="justify-end card-body mt-80 ">
          <div className="grid grid-cols-2 ">
            <h2 className="card-title my-auto text-color-black">
              {users.user.username ? users.user.username : "unknowuser"}
            </h2>
            <label
              className="my-auto ml-auto modal-button"
              htmlFor="modal-Description"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.74924 19C14.3294 19 18.0423 14.9706 18.0423 10C18.0423 5.02944 14.3294 1 9.74924 1C5.16911 1 1.45618 5.02944 1.45618 10C1.45618 14.9706 5.16911 19 9.74924 19Z"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.74924 9V14"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.70335 6H9.79549V6.1H9.70335V6Z"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          <p className="text-color-black">
            {users.user.bio ? users.user.bio : ""}
          </p>
          <hr className="text-color-black" />
          {users.user.passion ? (
            <div className="lx:hidden card-actions grid grid-cols-3 text-center">
              {users.user.passion[0] ? (
                <div className="text-color-black card-actions-passion-primary">
                  {users.user.passion[0]}
                </div>
              ) : (
                ""
              )}
              {users.user.passion[1] ? (
                <div className="text-color-black card-actions-passion-primary">
                  {users.user.passion[1]}
                </div>
              ) : (
                ""
              )}
              {users.user.passion[2] ? (
                <div className="text-color-black card-actions-passion-secondary">
                  {users.user.passion[2]}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <div className="sm:card-actions md:hidden ">
            <BtnGroupt />
          </div>
        </div>
      </div>
      <div className="btn-groupt-hidden">
        <BtnGroupt />
      </div>
    </div>
  );
};
export default Carduser;