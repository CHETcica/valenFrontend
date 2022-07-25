import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RandomSetting from "../component/RandomUser/Randomsetting";
import Userdescription from "../component/RandomUser/Description";
import { RandomNull } from "../component/RandomUser/RandomNull";
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
  //     _id: "6214a395e543ba936f58d2ed",
  //     username: "kany",
  //     email: "kanzaza@gmail.com",
  //     password: "$2a$12$tqlhdJ4a7Pmor28MGCHkYuLdt/kH8ACIwvfy4iWqX8Qqu3d/gnV3u",
  //     gender: "gayqueen",
  //     born: "2000-09-09T00:00:00.000Z",
  //     phone: "0823636036",
  //     location: {
  //       required: [],
  //       type: "Point",
  //       coordinates: [13.838598, 19.0398371],
  //     },
  //     passion: ["music", "series"],
  //     interested: "gayking",
  //     bio: "love wow",
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
      
      randomUser(
        usersignin?.user?.interested ? usersignin.user.interested : "women",
        usersignin?.user?.passion ? usersignin.user.passion : [],
        usersignin?.user?.friendId ? usersignin.user.friendId : [],
        usersignin?.user?.userDetails?.likes
          ? usersignin.user.userDetails.likes
          : [],
        usersignin?.user?.userDetails?.unlikes
          ? usersignin.user.userDetails.unlikes
          : [],
        usersignin?.user?.userDetails?.superlikes
          ? usersignin.user.userDetails.superlikes
          : [],
        usersignin?.user?.location?.coordinates
          ? usersignin.user.location.coordinates
          : [],
        usersignin?.user?.userSetting.MaxDistance
          ? usersignin.user.userSetting.MaxDistance * 1000
          : 10 * 1000
      )
    );
  },[]);

  return (
    <>{users.user == null ? <RandomNull /> : <RandomSetting users={users} />}</>
  );
};

export default Homepage;
