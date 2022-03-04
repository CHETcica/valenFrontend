import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carduser from "./Carduser";
import { fetchAllUser } from "../action";

const Description = () => {
  // const users = useSelector((state) => state.users);
  const [users, setUsers] = useState({
    user: [
      {
        user_details: {
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
          higth: 170,
          weigth: 54,
        },
        _id: "6213b95e3ee259b511fbcf3e",
        username: "CHETcica",
        email: "chetsadakozn2543@gmail.com",
        password:
          "$2a$12$l90I8YxiEP/1SzDvrx159.bTR1svAxWukjnH0USIig4mTVSPZv4tm",
        gender: "man",
        born: "2000-08-17T00:00:00.000Z",
        phone: "0823636036",
        location: [13.838598, 19.0398371],
        passion: ["music", "game"],
        // passion: { music: "5", game: "5" },
        interested: "woman",
        bio: "hello i like game",
        social: {
          Facebook: "Chet cica",
          Instagram: "Chet cica",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
        ],
        frind_id: [],
        __v: 0,
      },
    ],
  });
  const myObject = { 'a': 1, 'b': 2, 'c': 3 };
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(fetchAllUser());
  }, []);

  const calculateAge = () => {
    var today = new Date();
    var birthDate = new Date(users.user[0].born);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

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
          <Carduser />
          <div className=" pt-5">
            <div className="grid grid-cols-2">
              <h1 className="text-3xl ">{users.user[0].username}</h1>
              <h1 className="text-3xl ml-auto">Age {calculateAge()}</h1>
            </div>
            <hr />
            <div className="my-3">
              <h3 className="text-xl ">
                higth : {users.user[0].user_details.higth} cm.
              </h3>
              <h3 className="text-xl ">
                weigth : {users.user[0].user_details.weigth} kg.
              </h3>
              <h3 className="text-xl ">gender : {users.user[0].gender}</h3>
              <h3 className="text-xl ">
                interested : {users.user[0].interested}
              </h3>
            </div>
            <div className="text-3xl mt-3">
              <h1 className="text-3xl mb-2">Passions</h1>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 text-center">
                {/* {myObject.map(function (value, label) {
                   value * value
                })} */}
                
                {/* {users.user[0].passion.map((passion, frequency) => (
                  <div className="text-color-black text-xl card-actions-passion-primary ">
                    {frequency}
                  </div>
                ))} */}
                {users.user[0].passion.map((el) => (
                  <div className="text-color-black text-xl card-actions-passion-primary ">
                    {el}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-3xl mt-3">
              <h1 className="text-3xl mb-2">Album</h1>
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {users.user[0].userimage[0] ? (
                  <img
                    src={users.user[0].userimage[0]}
                    alt="+"
                    className="user-description rounded-2xl"
                  />
                ) : (
                  ""
                )}
                {users.user[0].userimage[1] ? (
                  <img
                    src={users.user[0].userimage[1]}
                    alt="+"
                    className="user-description rounded-2xl"
                  />
                ) : (
                  ""
                )}

                {users.user[0].userimage[2] ? (
                  <img
                    src={users.user[0].userimage[2]}
                    alt="+"
                    className="user-description rounded-2xl"
                  />
                ) : (
                  ""
                )}
                {users.user[0].userimage[3] ? (
                  <img
                    src={users.user[0].userimage[3]}
                    alt="+"
                    className="user-description rounded-2xl"
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
