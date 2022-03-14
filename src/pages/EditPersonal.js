import React, { useState } from 'react'
import EditPersonalImg from "../component/EditPersonalImg";

import EditPersonalmanu from "../component/EditPersonalmanu";

const EditPersonal = () => {

  const [users, setUsers] = useState(
    {
      user: [
        {
          user_details: {
            unlikes: [],
            taste: [],
            likes: [],
            unlike: [],
            likesMe: [],
            Vaccine: ["AstraZinica ", "AstraZinica"],
            job: ["นักศึกษา"],
            LGho: ["กินบ้าง"],
            smoke: ["ไม่สูบ"],
            height: [181],
            address: ["ดำเนิน"],
            myGoal:["หาเพื่อน"],
          },
          _id: "6214a044e543ba936f58d2ea",
          username: "CHETcica",
          email: "CHETcica@gmail.com",
          password:
            "$2a$12$ZwJaLXxBevU9LJ90OWwb6eehgPVYDgDAVa96QA.4X6TMk13U4h9JW",
          gender: "man",
          born: "2000-08-17T00:00:00.000Z",
          phone: "0823636036",
          location: [13.838598, 19.0398371],
          passion: {
            music: "5",
            koreanseries: "5",
          },
          interested: "woman",
          bio: "𝐆𝐎𝐓 𝟕💚",
          social: {
            Facebook: "CHETcica",
            Instagram: "cica.𝐢𝐧𝐠𝟐𝟎𝟎𝟎",
          },
          userimageprofile:
            ["https://cdn.discordapp.com/attachments/883000576416309262/898471943261528074/241884812_1242965226201537_5005935356375341774_n.jpg",
            "https://cdn.discordapp.com/attachments/883000576416309262/898471943261528074/241884812_1242965226201537_5005935356375341774_n.jpg",
            "https://cdn.discordapp.com/attachments/883000576416309262/952715910538469386/157305040_1121514778346583_6956340794524202543_n.png",
            "https://cdn.discordapp.com/attachments/883000576416309262/952716268165799957/243716903_1255232604974799_349286942364335730_n.png",
            "https://cdn.discordapp.com/attachments/883000576416309262/952716308175257670/34536741_399448503886551_8344643044015865856_n.png"],
          userimage: [
            "https://cdn.discordapp.com/attachments/792729018608648204/794089291360763914/profile.jpg",
          ],
          frind_id: [],
          __v: 0,
        }

      ],
    });
  const calculateAge = () => {
    var today = new Date();
    var birthDate = new Date(users.user[0].born);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <>
      <div align="center" className='text-xl my-5'> <p>แก้ไขข้อมูลส่วนตัว</p></div>
      <div className="grid justify-items-center grid-rows-1 gap-4">

        <div class="row-span-1">
          <div className="grid justify-items-center grid-flow-row grid-cols-4 gap-4 mb-5">
            <EditPersonalImg value={users.user[0].userimageprofile[0]} />
            <EditPersonalImg value={users.user[0].userimageprofile[1]}/>
            <EditPersonalImg value={users.user[0].userimageprofile[2]} />
            <EditPersonalImg value={users.user[0].userimageprofile[3]}/>
            <EditPersonalImg value={users.user[0].userimageprofile[4]} />
            <EditPersonalImg value={users.user[0].userimageprofile[5]}/>
            <EditPersonalImg value={users.user[0].userimageprofile[6]} />
            <EditPersonalImg value={users.user[0].userimageprofile[7]}/>

          </div>
        </div>

      </div>
      <EditPersonalmanu title="ชื่อ" value={users.user[0].username} />
      <EditPersonalmanu title="วันเกิด" value={calculateAge()} />
      <EditPersonalmanu title="ที่อยู่" value={users.user[0].user_details.address}/>
      <EditPersonalmanu title="อาชีพ"  value={users.user[0].user_details.job} />
      <EditPersonalmanu title="ส่วนสูง"  value={users.user[0].user_details.height}/>
      <EditPersonalmanu title="สูบบุหรี่" value={users.user[0].user_details.smoke}/>
      <EditPersonalmanu title="ดื่มเหล้า"  value={users.user[0].user_details.LGho}/>
      <EditPersonalmanu title="เพศที่สนใจ" value={users.user[0].interested} />
      <EditPersonalmanu title="วัคซีนโควิด"   value={users.user[0].user_details.Vaccine}/>
      <EditPersonalmanu title="เป้าหมาย" value={users.user[0].user_details.myGoal}/>


    </>
  )
}
export default EditPersonal