import React, { useState } from "react";
import Carduser from "./Carduser";
import { useDispatch, useSelector } from "react-redux";
import Userdescription from "./Description";
import Matchmodal from "./MatchModal";

const Usersetting = (props) => {
  const users = props.users;
  const usersignin = useSelector((state) => state.signs);
  const [distance, setDistance] = useState(
    usersignin?.user?.userSetting?.MaxDistance
      ? usersignin.user.userSetting.MaxDistance
      : 10
  );
  const [MinAge, setMinAge] = useState(
    usersignin?.user?.userSetting?.MinAge
      ? usersignin.user.userSetting.MinAge
      : 18
  );
  const [MaxAge, setMaxAge] = useState(
    usersignin?.user?.userSetting?.MaxAge
      ? usersignin?.user.userSetting.MaxAge
      : 19
  );

  const setminage = (value) => {
    MinAge > MaxAge ? setMaxAge(value) : setMinAge(value);
    setMinAge(value);
  };
  const setmaxage = (value) => {
    MaxAge < MinAge ? setMinAge(value) : setMaxAge(value);
    setMaxAge(value);
  };

  return (
    <div className="rounded-lg  drawer drawer-end h-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className=" items-center justify-center drawer-content">
        <div className="m-auto">
          <div className="grid">
            <Carduser users={users} setting={[distance, MinAge, MaxAge]} />
            <Userdescription users={users} />
            <Matchmodal users={users} />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <h6>Max Distance</h6>
            <p className="ml-auto">{distance} km.</p>
            {/* <p className="ml-auto">
              {usersignin.user.userSetting.MaxDistance} km.
            </p> */}
            <input
              type="range"
              min="1"
              max="100"
              // value={usersignin.user.userSetting.MaxDistance}
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="range range-primary"
            />
          </li>
          <hr className="m-3 " />
          <li>
            <h6>Min Age</h6>
            <p className="ml-auto">{MinAge} year</p>
            {/* <p className="ml-auto">
              {usersignin.user.userSetting.MaxDistance} year
            </p> */}
            <input
              type="range"
              min="18"
              max="100"
              // value={usersignin.user.userSetting.MaxDistance}
              value={MinAge}
              // onChange={(e) => setMinAge(e.target.value)}
              onChange={(e) => setminage(e.target.value)}
              className="range range-primary"
            />
            <h6>Max Age</h6>
            <p className="ml-auto">{MaxAge} year</p>
            {/* <p className="ml-auto">
              {usersignin.user.userSetting.MaxDistance} year
            </p> */}
            <input
              type="range"
              min="18"
              max="100"
              // value={usersignin.user.userSetting.MaxDistance}
              value={MaxAge}
              onChange={(e) => setmaxage(e.target.value)}
              className="range range-primary"
            />
          </li>
          <hr className="m-3 " />
          <li>
            <h6>Passion</h6>
            <input
              type="checkbox"
              checked="checked"
              className="toggle toggle-primary ml-auto"
            ></input>
            <div className="mt-3 grid grid-flow-row grid-cols-2 gap-4 text-center">
            {usersignin.user.passion[0] ? (
                <div className="text-color-black card-actions-passion-primary">
                  {usersignin.user.passion[0]}
                </div>
              ) : (
                ""
              )}
              {usersignin.user.passion[1] ? (
                <div className="text-color-black card-actions-passion-primary">
                  {usersignin.user.passion[1]}
                </div>
              ) : (
                ""
              )}
              {usersignin.user.passion[2] ? (
                <div className="text-color-black card-actions-passion-primary">
                  {usersignin.user.passion[2]}
                </div>
              ) : (
                ""
              )}
              {usersignin.user.passion[3] ? (
                <div className="text-color-black card-actions-passion-primary">
                  {usersignin.user.passion[3]}
                </div>
              ) : (
                ""
              )}
              {usersignin.user.passion[4] ? (
                <div className="text-color-black card-actions-passion-primary">
                  {usersignin.user.passion[4]}
                </div>
              ) : (
                ""
              )}
              
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Usersetting;
