import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Usersetting from "../component/Usersetting";
import Userdescription from "../component/Description";
import { randomUser } from "../action";

const Homepage = () => {
  const usersignin = useSelector((state) => state.signs);
  const users = useSelector((state) => state.users);

  // const [users, setUsers] = useState({
  //   user: {
  //     userDetails: {
  //       unlikes: [],
  //       vacen: [],
  //       taste: [],
  //       likes: [],
  //       unlike: [],
  //       likesMe: [],
  //     },
  //     _id: "6214a044e543ba936f58d2ea",
  //     username: "BOWcica",
  //     password: "$2a$12$ZwJaLXxBevU9LJ90OWwb6eehgPVYDgDAVa96QA.4X6TMk13U4h9JW",
  //     gender: "woman",
  //     born: "2002-02-05T00:00:00.000Z",
  //     phone: "0823636036",
  //     location: [13.838598, 19.0398371],
  //     passion: ["music", "series"],
  //     interested: "man",
  //     bio: "𝐆𝐎𝐓 𝟕💚",
  //     social: {
  //       Facebook: "Bow Supansa",
  //       Instagram: "𝐛𝐨𝐰𝐥.𝐢𝐧𝐠𝟐𝟎𝟎𝟐",
  //     },
  //     userimageprofile:
  //       "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
  //     userimage: [
  //       "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
  //     ],
  //     friendId: ["6213b95e3ee259b511fbcf3e"],
  //     __v: 0,
  //   },
  // });

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(
      // randomUser(
      //   usersignin.user.interested,
      //   usersignin.user.passion,
      //   usersignin.user.friendId
      //   usersignin.user.userDetails.likes
      //   usersignin.user.userDetails.unlike
      // )
      randomUser("man", ["coding","gaming","dance"], ["6213b95e3ee259b511fbcf3e","6216ef7c968ef32ce2e2b49c","623e90c8c457f7c2b1b747e1"])
    );
  } );

  return (
    <>
      <Usersetting users={users} />
      <Userdescription users={users} />
    </>
  );
};

export default Homepage;
