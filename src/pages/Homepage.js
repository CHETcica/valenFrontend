import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Usersetting from "../component/Randomsetting";
import Userdescription from "../component/Description";
import { randomUser } from "../action";

const Homepage = () => {
  const usersignin = useSelector((state) => state.signs);
  const users = useSelector((state) => state.users);

  // const [users, setUsers] = useState({
  //   user: {
  //     userDetails: {
  //       unlikes: [],
  //       taste: [],
  //       likes: [],
  //       unlike: [],
  //       likesMe: [],
  //     },
  //     userSetting: {
  //       MaxDistance: 10,
  //       MinAge: 18,
  //       MaxAge: 19,
  //     },
  //     _id: "6214a395e543ba936f58d2ed",
  //     username: "ฺkany",
  //     email: "kanzaza@gmail.com",
  //     password: "$2a$12$tqlhdJ4a7Pmor28MGCHkYuLdt/kH8ACIwvfy4iWqX8Qqu3d/gnV3u",
  //     gender: "gayqueen",
  //     born: "2000-09-09T00:00:00.000Z",
  //     phone: "0823636036",
  //     location: {
  //       required: [],
  //       type: "Point",
  //       coordinates: [
  //         13.838598, 19.0398371
  //       ],
  //     },
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

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(
      // randomUser(
      //   usersignin.user.interested,
      //   usersignin.user.passion,
      //   usersignin.user.friendId,
      //   usersignin.user.userDetails.likes,
      //   usersignin.user.userDetails.unlike
      // )

      randomUser(
        "man",
        ["coding", "gaming", "dance"],
        [
          "6213b95e3ee259b511fbcf3e",
          "6216ef7c968ef32ce2e2b49c",
          "6218562be73c780fb58669c1",
          "623e90c8c457f7c2b1b747e1",
        ],
        [100.060139, 13.566704],
        50000
      )
    );
  }, []);

  return (
    <>
      <Usersetting users={users} />
      <Userdescription users={users} />
    </>
  );
};

export default Homepage;
