import React, { useEffect, useState } from "react";
import { BtnGroupt } from "./BtnGroupt";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";

const Carduser = () => {
  //const users = useSelector((state) => state.users);
  const [users, setUsers] = useState({
    user: [
      {
        user_details: {
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
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
        passion: {
          music: 5,
          game: 5,
          cooking: 2,
        },
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
      {
        user_details: {
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6214a044e543ba936f58d2ea",
        username: "BOWcica",
        email: "supansa@gmail.com",
        password:
          "$2a$12$ZwJaLXxBevU9LJ90OWwb6eehgPVYDgDAVa96QA.4X6TMk13U4h9JW",
        gender: "woman",
        born: "2002-02-05T00:00:00.000Z",
        phone: "0823636036",
        location: [13.838598, 19.0398371],
        passion: {
          music: 5,
          "korean series": 5,
        },
        interested: "man",
        bio: "𝐆𝐎𝐓 𝟕💚",
        social: {
          Facebook: "Bow Supansa",
          Instagram: "𝐛𝐨𝐰𝐥.𝐢𝐧𝐠𝟐𝟎𝟎𝟐",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
        ],
        frind_id: [],
        __v: 0,
      },
      {
        user_details: {
          taste: [],
          likes: [],
          unlike: [],
          likesMe: [],
        },
        _id: "6214a395e543ba936f58d2ed",
        username: "ฺkany",
        email: "kanzaza@gmail.com",
        password:
          "$2a$12$tqlhdJ4a7Pmor28MGCHkYuLdt/kH8ACIwvfy4iWqX8Qqu3d/gnV3u",
        gender: "gayqueen",
        born: "2000-09-09T00:00:00.000Z",
        phone: "0823636036",
        location: [13.838598, 19.0398371],
        passion: {
          music: 5,
          "korean series": 5,
        },
        interested: "gayking",
        bio: "love wow",
        social: {
          Facebook: "kanzaza",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
        ],
        frind_id: [],
        __v: 0,
      }
    ],
  });
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchAllUser());
  },[]);

  if (!users && Object.keys(users).length === 0) return;
  return (
    <>
      <div className=" m-auto md:w-80 my-6">
        <div className="card shadow-xl image-full border-card-solid border-solid border-2 text-color-black">
          <figure className="userimage">
            <img src={users.user[0].userimageprofile} />
          </figure>
          <div className="justify-end card-body mt-80 ">
            <div className="grid grid-cols-2 ">
              <h2 className="card-title my-auto text-color-black">
                {users.user[0].username}
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
            <p className="text-color-black">{users.user[0].bio}</p>
            <hr className="text-color-black" />
            <div className="lx:hidden card-actions grid grid-cols-3 text-center">
              {/* { users.user[0].passion.map((el) => {
              return (
                <div className="text-color-black card-actions-passion-primary">
                  el
                </div>
              );
            })}  */}
              <div className="text-color-black card-actions-passion-primary">
                Game
              </div>
              <div className="text-color-black card-actions-passion-secondary">
                Music
              </div>
            </div>
            <div className="sm:card-actions md:hidden ">
              <BtnGroupt />
            </div>
          </div>
        </div>
        <div className="btn-groupt-hidden">
          <BtnGroupt />
        </div>
      </div>
    </>
  );
};

export default Carduser;
