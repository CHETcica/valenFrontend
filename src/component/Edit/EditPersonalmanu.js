import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Modalusername, Modalusername1 } from "./ModalForm";

import {
  EditModal,
  EditModal4,
  EditModal5,
  EditModal6,
  EditModal7,
  EditModal8,
  EditModal9,
  EditModalAddress,
} from "./EditModal";

const EditPersonalmanu = (props) => {
  const { title, value } = props;
  const usersignin = useSelector((state) => state.signs);
  // const [usersignin, setUsers] = useState({
  //   user: {
  //     userDetails: {
  //       Vaccine: ["AstraZinica ", "AstraZinica"],
  //       job: ["นักศึกษา"],
  //       LGho: ["ดื่มบ้าง"],
  //       smoke: ["ไม่สูบ"],
  //       height: [181],
  //       address: ["ดำเนิน"],
  //       myGoal: ["หาเพื่อน"],
  //       gender: "gayqueen",
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
  //console.log(title);
  // const [usersignin] = useState({
  //   user: [
  //     {
  //       user_details: {
  //         Vaccine: ["AstraZinica ", "AstraZinica"],
  //         job: ["นักศึกษา"],
  //         LGho: ["ดื่มบ้าง"],
  //         smoke: ["ไม่สูบ"],
  //         height: [181],
  //         address: ["ดำเนิน"],
  //         myGoal: ["หาเพื่อน"],
  //         username: "Aum",
  //         gender: "man",
  //       },
  //       born: "2000-08-17T00:00:00.000Z",
  //       frind_id: [],
  //       __v: 0,
  //     },
  //   ],
  // });
  const calculateAge = () => {
    var today = new Date();
    var birthDate = new Date(usersignin.user.born);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  /* function checkAdult(age) {
    return age == [title];
  }
  function myFunction() {
    document.getElementById("demo").innerHTML = typei.filter(checkAdult);
  }


  console.log(typeii)
   // function myFunction() {
     // document.getElementById("demo").innerHTML = typeii.fill(title);
     // console.log(title)
     // let typei = (title)
  //console.log(typei)
  const myFunction = () => {
    document.getElementById("demo").innerHTML = typeii.fill(title);
    console.log(title)
    let typei = (title)
    console.log(typei)
  };
typei: ["username", "age", "address", "job", "height", "smoke", "LGho", "interested", "Vaccine", "myGoal"]
 cars = ["username", "age", "address", "job", "height", "smoke", "LGho", "interested", "Vaccine", "myGoal"];*/
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4 text-x xl:mx-80 mx-5 my-4">
          <div className="col-span-1 my-auto">{title}</div>
          <div className="col-span-3 my-auto border-l-4 text-sky-400/75">
            {value}
          </div>
          <div className="col-span-1 my-auto text-right">
            <label
              type="button"
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              เพิ่ม
            </label>
          </div>
        </div>
        <EditModal title="username" value={usersignin.user.username} />
        <EditModal title="age" value={calculateAge()} />
        <EditModalAddress
          title="address"
          value={
            usersignin?.user?.userDetails?.address
              ? usersignin.user.userDetails.address
              : "null"
          }
        />
        <EditModal4 title="role" value={usersignin.user.userDetails.role} />
        <EditModal4 title="height" value={usersignin.user.userDetails.height} />
        <EditModal5 title="smoke" value={usersignin.user.userDetails.smoke} />
        <EditModal6 title="LGho" value={usersignin.user.userDetails.LGho} />
        <EditModal7
          title="interested"
          value={usersignin.user.userDetails.interested}
        />
        <EditModal8
          title="Vaccine"
          value={usersignin.user.userDetails.Vaccine}
        />
        <EditModal9 title="myGoal" value={usersignin.user.userDetails.myGoal} />
      </div>
    </>
  );
};
export default EditPersonalmanu;
