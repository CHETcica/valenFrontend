import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../action";

import { Link } from "react-router-dom";
const Profilemanu = () => {
  const usersignin = useSelector((state) => state.signs);
  //const [usersignin, setUsers] = useState({
  //   user: {
  //     userDetails: {
  //       unlikes: [],
  //       taste: [],
  //       likes: [],
  //       unlike: [],
  //       likesMe: [],
  //     },
  //     _id: "6214a395e543ba936f58d2ed",
  //     username: "ฺkany",
  //     email: "kanzaza@gmail.com",
  //     password: "$2a$12$tqlhdJ4a7Pmor28MGCHkYuLdt/kH8ACIwvfy4iWqX8Qqu3d/gnV3u",
  //     gender: "gayqueen",
  //     born: "2000-09-09T00:00:00.000Z",
  //     phone: "0823636036",
  //     location: [13.838598, 19.0398371],
  //     passion: ["music", "series"],
  //     interested: "gayking",
  //     bio: "love wow",
  //     social: {
  //       Facebook: "kanzaza",
  //     },
  //     userimageprofile:
  //       "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
  //     userimage: [
  //       "https://cdn.discordapp.com/attachments/792729018608648204/800269786050592838/profile7.jpg",
  //     ],
  //     friendId: [],
  //     __v: 0,
  //   },
  // });
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 my-40">
        <div className="col-span-1 mx-auto">
          <div className="avatar online">
            <div className="rounded-full w-24 h-24">
              <img src={usersignin.user.userimageprofile} />
            </div>
          </div>
        </div>
        <div className="col-span-1 pl-10 w-3/4">
          <p className="truncate text-2xl my-9 pl-5">
            {usersignin.user.username}
          </p>

          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/editPersonal"}>
              แก้ไขข้อมูลส่วนตัว
            </Link>
          </p>
          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/Liking"}>
              ความชอบ
            </Link>
          </p>
          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/Liking"}>
              นโยบาย
            </Link>
          </p>
          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/Liking"}>
              ข้อเสนอแนะ
            </Link>
          </p>
          <hr />
          <button onClick={(e) => logout()} className="text-lg my-3 pl-5">
              ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profilemanu;
