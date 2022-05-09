import React from "react";
import { Link } from "react-router-dom";
import { toggleMatchModal } from "../../action";
import { useSelector } from "react-redux";



const Matchmodal = (props) => {
  const users = props.users;
  const usersignin = useSelector((state) => state.signs);
  return (
    <div className="matchmodal" id="matchmodal">
      <div className="bg-modalblur"></div>
      <div className="mx-auto matchmodal__card w-96 h-80 drop-shadow-lg">
        <div className="flex matchmodal__card--header">
          <div className="matchmodal__card--borderprofile ">
            <img
              className="matchmodal__card--profile"
              // src="https://cdn.discordapp.com/attachments/662893950687772684/965268755892551740/06ce798640c2328122204ab73a753295.jpg"
              src={
                usersignin.user.userimageprofile
                  ? usersignin.user.userimageprofile
                  : "https://cdn.discordapp.com/attachments/792729018608648204/800269761069711370/profile1.jpg"
              }
           />
          </div>
          <div className="mt-3">
            <div id="heart"></div>
          </div>
          <div className="ml-3 matchmodal__card--borderprofile border-yellow">
            <img
              className="matchmodal__card--profile"
              // src="https://cdn.discordapp.com/attachments/662893950687772684/965268703899971614/6c8ba3681240d2acdd120b021f1ef162.jpg"
              src={
                users.user.userimageprofile
                  ? users.user.userimageprofile
                  : "https://cdn.discordapp.com/attachments/792729018608648204/800269761069711370/profile1.jpg"
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-3 matchmodal__card--title">
          <div className="matchmodal__card--component">
            <div className="triangle">
              <div className="triangle2"></div>
            </div>
            <div className="square"></div>
            <div className="circle"></div>
            <div className="close"></div>
          </div>
          <div>
            <p className="text-center matchmodal__title--animation">new</p>
            <p className="text-center matchmodal__title--puple matchmodal__title--animation">
              Matching
            </p>
          </div>
          <div className="matchmodal__card--component">
            <div className="triangle3">
              <div className="triangle22"></div>
            </div>
            <div className="square2"></div>
            <div className="circle2"></div>
            <div className="close2"></div>
          </div>
        </div>
        <div className="grid  matchmodal__card--action">
          <Link to={"/chat"} className="mx-auto">
            <button className="matchmodal__button--primary mx-auto">
              Go chat
            </button>
          </Link>
          <button onClick={(e) => toggleMatchModal()} className="matchmodal__button--secondary mx-auto">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Matchmodal;
