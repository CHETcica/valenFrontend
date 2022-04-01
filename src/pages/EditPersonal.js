import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditPersonalImg from "../component/EditPersonalImg";
import EditPersonalmanu from "../component/EditPersonalmanu";

const EditPersonal = () => {
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

  // const [usersignin] = useState(
  //   {
  //     user: [
  //       {
  //         user_details: {
  //           unlikes: [],
  //           taste: [],
  //           likes: [],
  //           unlike: [],
  //           likesMe: [],
  //           Vaccine: ["AstraZinica ", "AstraZinica"],
  //           job: ["นักศึกษา"],
  //           LGho: ["ดื่มบ้าง"],
  //           smoke: ["ไม่สูบ"],
  //           height: [181],
  //           address: ["ดำเนิน"],
  //           myGoal: ["หาเพื่อน"],
  //         },
  //         _id: "6214a044e543ba936f58d2ea",
  //         username: "CHETcica",
  //         email: "CHETcica@gmail.com",
  //         password:
  //           "$2a$12$ZwJaLXxBevU9LJ90OWwb6eehgPVYDgDAVa96QA.4X6TMk13U4h9JW",
  //         gender: "man",
  //         born: "2000-08-17T00:00:00.000Z",
  //         phone: "0823636036",
  //         location: [13.838598, 19.0398371],
  //         passion: {
  //           music: "5",
  //           koreanseries: "5",
  //         },
  //         interested: "หญิง",
  //         bio: "𝐆𝐎𝐓 𝟕💚",
  //         social: {
  //           Facebook: "CHETcica",
  //           Instagram: "cica.𝐢𝐧𝐠𝟐𝟎𝟎𝟎",
  //         },
  //         userimageprofile:
  //           "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
  //         userimage: [
  //            ["https://cdn.discordapp.com/attachments/883000576416309262/898471943261528074/241884812_1242965226201537_5005935356375341774_n.jpg",
  //             "https://cdn.discordapp.com/attachments/883000576416309262/898471943261528074/241884812_1242965226201537_5005935356375341774_n.jpg",
  //             "https://cdn.discordapp.com/attachments/883000576416309262/952715910538469386/157305040_1121514778346583_6956340794524202543_n.png",
  //             "https://cdn.discordapp.com/attachments/883000576416309262/952716268165799957/243716903_1255232604974799_349286942364335730_n.png",
  //             ]
  //         ],
  //         frind_id: [],
  //         __v: 0,
  //       }

  //     ],
  //   }
  //   );

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

  return (
    <>
      <div align="center" className="text-xl my-5">
        <p>แก้ไขข้อมูลส่วนตัว</p>
      </div>
      <div className="grid justify-items-center grid-rows-1 gap-4">
        <div class="row-span-1">
          <div className="grid justify-items-center grid-flow-row grid-cols-4 gap-4 mb-5">
            <EditPersonalImg value={usersignin.user.userimageprofile} />
            <EditPersonalImg
              value={
                usersignin.user.userimage[0] ? usersignin.user.userimage[0] : ""
              }
            />
            <EditPersonalImg
              value={
                usersignin.user.userimage[1] ? usersignin.user.userimage[1] : ""
              }
            />
            <EditPersonalImg value={usersignin.user.userimage[2]} />
            <EditPersonalImg value={usersignin.user.userimage[3]} />
            <EditPersonalImg value={usersignin.user.userimage[4]} />
            <EditPersonalImg value={usersignin.user.userimage[5]} />
            <EditPersonalImg value={usersignin.user.userimage[6]} />
          </div>
        </div>
        <p id="demo"></p>
      </div>

      <EditPersonalmanu title="username" value={usersignin.user.username} />
      <EditPersonalmanu title="age" value={calculateAge()} />
      <EditPersonalmanu
        title="address"
        value={usersignin.user.userDetails.address}
      />
      <EditPersonalmanu title="job" value={usersignin.user.userDetails.job} />
      <EditPersonalmanu
        title="height"
        value={usersignin.user.userDetails.height}
      />
      <EditPersonalmanu
        title="smoke"
        value={usersignin.user.userDetails.smoke}
      />
      <EditPersonalmanu title="LGho" value={usersignin.user.userDetails.LGho} />
      <EditPersonalmanu title="interested" value={usersignin.user.interested} />
      <EditPersonalmanu
        title="Vaccine"
        value={usersignin.user.userDetails.Vaccine}
      />
      <EditPersonalmanu
        title="myGoal"
        value={usersignin.user.userDetails.myGoal}
      />
    </>
  );
};
export default EditPersonal;
