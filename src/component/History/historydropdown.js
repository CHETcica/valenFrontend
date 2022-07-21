import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Historydropdown = () => {
  // const historys = useSelector((state) => state.signs);
  const [historys, setHistorys] = useState({
    history: [
      {
        _id: "62d9113ea996c2f16eb3c1a6",
        _id1: "6213b95e3ee259b511fbcf3e",
        _id2: "625c2faf339d6e4495b74a48",
        details: "new match",
        __v: 0,
      },
      {
        _id: "62d9113ea996c2f16eb3c1a6",
        _id1: "6213b95e3ee259b511fbcf3e",
        _id2: "625c2faf339d6e4495b74a48",
        details: "new match",
        __v: 0,
      }
    ],
  });
  const disPatch = useDispatch();
  // useEffect(() => {
  //   disPatch(

  //   );
  // },[]);

  return (
    <ul
      tabindex="0"
      className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-96"
    >
      {historys.history.map((el) => (
      <li>
        <a>
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=28212" />
            </div>
          </div>
          <div className="">
            <p className="text-xl">{el.details}</p>
            <p className="text-xs">{el._id2}</p>
          </div>
        </a>
      </li>
      ))}
    </ul>
  );
};

export default Historydropdown;
