import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {


  //const users = useSelector((state) => state.signs);
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
        username: "Bowcica",
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
  useEffect(()=>{

  });
  
  return (
      <div className="mx-auto navbar shadow-lg text-neutral-content h-7">
        <div className="container mx-auto">
          <div className="flex-none hidden lg:flex"></div>
          <div className="flex">
            <img
              className="h-20 mt-10"
              src="https://cdn.discordapp.com/attachments/921282715888783410/938679327631998976/unknown.png"
            />
          </div>
          <div className="flex-1 lg:flex hidden">
            <h1 className="text-2xl">Valen Matching</h1>
          </div>
          <div className="flex-1 lg:flex "></div>
          <div className="flex-initial lg:flex-none"></div>
          <div className="flex-initial lg:flex-none"></div>
          {users.user? (
            <Link to={"/profile"} className="flex">
              <div className="avatar">
                <div className="rounded-full w-10 h-10 m-1">
                  <img src={users.user.userimageprofile} />
                </div>
              </div>
              <h3 className="lg:flex my-auto ml-5 text-xl hidden">
                {users.user.username}
              </h3>
            </Link>
          ) : (
            <div className="flex">
              <Link
                to={"/login"}
                className="grid h-3/4 flex-grow text-lg place-items-center"
              >
                Login
              </Link>
                <div className="divider my-auto divider-vertical"></div>
              <Link
                to={"/register"}
                className="grid h-3/4 flex-grow text-lg place-items-center"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
  );
};

export default Navbar;
