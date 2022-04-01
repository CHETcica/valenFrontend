import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carduser from "./Carduser";
import { fetchAllUser } from "../action";
import { getDistance } from "geolib";

const Description = (props) => {
  const users = props.users;
  // console.log(users)
  // console.log(users.user.username)

  const calculateAge = () => {
    var today = new Date();
    var birthDate = new Date(users.user.born);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const distance = getDistance(
    // { latitude: 13.838598, longitude: 19.0398371 },
    { latitude: users.user.location[0], longitude: users.user.location[1] },
    { latitude: 13.838962, longitude: 19.0398375 }
  );
  console.log(users.user.location[0]);  
  return (
    <div>
      <input type="checkbox" id="modal-Description" className="modal-toggle" />
      <label className="modal w-full " for="modal-Description">
        <label
          className="btn-clost-description  sm:hidden"
          for="modal-Description"
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_277_5557)">
              <circle cx="64" cy="44" r="29" fill="white" />
            </g>
            <path
              d="M74.7083 33.2917L54.2916 53.7084"
              stroke="#FEA5B7"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M74.7083 53.7084L54.2916 33.2917"
              stroke="#FEA5B7"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_d_277_5557"
                x="0"
                y="0"
                width="128"
                height="128"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="5"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_277_5557"
                />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_277_5557"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_277_5557"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </label>
        <div className="modal-box mt-3 sm:h/4/5  grid lg:grid-cols-2  grid-cols-1">
          <Carduser users={users} />
          <div className=" pt-5">
            <div className="grid grid-cols-2">
              <h1 className="text-3xl ">
                {users.user.username ? users.user.username : "-"}
              </h1>
              <h1 className="text-3xl ml-auto">
                Age
                {calculateAge()}
              </h1>
            </div>
            <hr />
            <div className="my-3">
              <h3 className="text-xl ">
                higth :
                {users.user.userDetails.higth
                  ? users.user.userDetails.higth
                  : "-"}
                cm.
              </h3>
              <h3 className="text-xl ">
                weigth :
                {users.user.userDetails.weigth
                  ? users.user.userDetails.weigth
                  : "-"}
                kg.
              </h3>
              <h3 className="text-xl ">
                gender : {users.user.gender ? users.user.gender : "-"}
              </h3>
              <h3 className="text-xl ">
                interested :
                {users.user.interested ? users.user.interested : "-"}
              </h3>
              <h3>
                <div className="py-1 mt-2">
                  <h3 className="distance-seccsion text-xl">distance : {distance} Km</h3>
                  {/* <h1 className="pl-3 pt-1 text-xl mb-2">distance :</h1>
                  <div className="ml-3 text-lg my-auto">{distance} Km</div> */}
                </div>
              </h3>
            </div>
            {/* <div className="text-3xl mt-3 ">
              <div className=" flex distance-seccsion">
                <h1 className="pl-3 text-3xl mb-2">distance</h1>
                <div className="ml-3 text-2xl my-auto">{distance}</div>
              </div>
            </div> */}
            <div className="text-3xl mt-3">
              <h1 className="text-3xl mb-2">Passions</h1>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 text-center">
                {users.user.passion
                  ? users.user.passion.map((el) => (
                      <div className="text-color-black text-xl card-actions-passion-primary ">
                        {el}
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="text-3xl mt-3">
              <h1 className="text-3xl mb-2">Album</h1>

              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {users.user.userimage ? (
                  <img
                    src={users.user.userimage[0]}
                    alt="+"
                    className="avatar rounded-2xl"
                  />
                ) : (
                  ""
                )}
                {users.user.userimage[1] ? (
                  <img
                    src={users.user.userimage[1]}
                    alt="+"
                    className="avatar rounded-2xl"
                  />
                ) : (
                  ""
                )}

                {users.user.userimage[2] ? (
                  <img
                    src={users.user.userimage[2]}
                    alt="+"
                    className="avatar rounded-2xl"
                  />
                ) : (
                  ""
                )}
                {users.user.userimage[3] ? (
                  <img
                    src={users.user.userimage[3]}
                    alt="+"
                    className="avatar rounded-2xl"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Description;
