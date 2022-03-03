import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";

const Profilemanu = () => {
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
        passion: ["music", "game", "cooking"],
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
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 my-40">
        <div className="col-span-1 mx-auto">
          <div className="avatar online">
            <div className="rounded-full w-24 h-24">
              <img src={users.user[0].userimageprofile} />
            </div>
          </div>
        </div>
        <div className="col-span-1 pl-10 w-3/4">
          <p className="truncate text-2xl my-9 pl-5">{users.user[0].username}</p>
          <hr />
          <p className="text-lg my-3 pl-5">แก้ไขข้อมูลส่วนตัว</p>
          <hr/>
          <p className="text-lg my-3 pl-5">นโยบาย</p>
          <hr />
          <p className="text-lg my-3 pl-5">ข้อเสนอแนะ</p>
        </div>
      </div>
    </div>
  );
};
export default Profilemanu;
