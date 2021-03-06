import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carduser from "./Carduser";
import { fetchAllUser } from "../../action";
import { getDistance } from "geolib";

const Description = (props) => {
  const users = props.users;
  // console.log(users);
  const calculateAge = () => {
    var today = new Date();
    var birthDate = new Date(users?.user?.born?users.user.born:"2000-01-23T00:00:00.000+00:00");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    return age;
  };
  const distance = getDistance(
    {
      latitude: users?.user?.location?users.user.location.coordinates[1]:13.566704,
      longitude: users?.user?.location?users.user.location.coordinates[0]:100.060139,
    },
    { latitude: 13.566704, longitude: 100.060139 }
  );
  let distanceKM = distance * 0.001;
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
                {users.user.username ? users.user.username : "unknowuser"}
              </h1>
              <h1 className="text-3xl ml-auto">
                Age
                {users?.user?.born? calculateAge():"??"}
              </h1>
            </div>
            <hr />
            <div className="my-3">
              <h3 className="text-xl ">
                higth :
                {users?.user?.userDetails?.higth? users.user.userDetails.higth
                  : "-"}
                cm.
              </h3>
              <h3 className="text-xl ">
                weigth :
                {users?.user?.userDetails?.weigth? users.user.userDetails.weigth
                  : "-"}
                kg.
              </h3>
              <h3 className="text-xl ">
                gender : {users?.user?.gender? users.user.gender : "-"}
              </h3>
              <h3 className="text-xl ">
                interested :
                {users?.user?.interested? users.user.interested : "-"}
              </h3>
              <h3>
                {distanceKM?<div className="py-1 mt-2">
                  <h3 className="distance-seccsion text-xl">
                    distance : {distanceKM.toFixed(1)} Km
                  </h3>
                </div>:""}
              </h3>
            </div>
            <div className="text-3xl mt-3">
              <h1 className="text-3xl mb-2">{users?.user?.passion?"Passions":""}</h1>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 text-center">
                {users?.user?.passion?.map((el) => (
                      <div className="text-color-black text-xl card-actions-passion-primary ">
                        {el}
                      </div>
                    ))
                  }
              </div>
            </div>
            {users?.user?.userimage?<div className="text-3xl mt-3">
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
            </div>:""}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Description;
