import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Usersetting from "../component/Usersetting";
import Userdescription from "../component/Description"
import { randomUser } from "../action";

const Homepage = () => {
  const users = useSelector((state) => state.users);
  // const [users, setUsers] = useState({
  //   user: 
  //     {
  //       _id: "6214a044e543ba936f58d2ea",
  //       username: "BOWcica",
  //       email: "supansa@gmail.com",
  //       gender: "woman",
  //       born: "2002-02-05T00:00:00.000Z",
  //       phone: "0823636036",
  //       passion: [
  //         "music",
  //         "series",
  //       ],
  //       interested: "man",
  //       bio: "𝐆𝐎𝐓 𝟕💚",
  //       userimageprofile:
  //         "",
  //       userimage: [
  //         "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
  //       ],
  //       frind_id: [],
  //       __v: 0,
  //     },
  // });

  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(randomUser("woman"));
    console.log("randomUser")
  },[]);

  return (
      <>
        <Usersetting users={users}/>
        <Userdescription users={users}/>
      </>
  );
};

export default Homepage;
