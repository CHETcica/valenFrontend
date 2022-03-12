import React,{ useState } from 'react'
import EditPersonalImg from "../component/EditPersonalImg";
//import CheckboxEditManu from "../component/CheckboxEditManu";
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
        },
        _id: "6214a044e543ba936f58d2ea",
        username: "BOWcica",
        email: "supansa@gmail.com",
        password:
          "$2a$12$ZwJaLXxBevU9LJ90OWwb6eehgPVYDgDAVa96QA.4X6TMk13U4h9JW",
        gender: "woman",
        born: "2002-02-05T00:00:00.000Z",
        phone: "0823636036",
        location: [13.838598, 19.0398371],
        passion: {
          music: "5",
          koreanseries: "5",
        },
        interested: "man",
        bio: "𝐆𝐎𝐓 𝟕💚",
        social: {
          Facebook: "Bow Supansa",
          Instagram: "𝐛𝐨𝐰𝐥.𝐢𝐧𝐠𝟐𝟎𝟎𝟐",
        },
        userimageprofile:
          "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
        userimage: [
          "https://cdn.discordapp.com/attachments/792729018608648204/796720785279811614/135865438_224714649180167_1622948695454171292_n.jpg",
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
    <div align="center"className='text-xl my-5'> <p>แก้ไขข้อมูลส่วนตัว</p></div>
    <div className="grid justify-items-center grid-rows-1 gap-4">
                
                <div class="row-span-1">
                    <div className="grid justify-items-center grid-flow-row grid-cols-4 gap-4 mb-5">
                      <EditPersonalImg/>
                      <EditPersonalImg/>
                      <EditPersonalImg/>
                      <EditPersonalImg/>
                      <EditPersonalImg/>
                      <EditPersonalImg/>
                      <EditPersonalImg/>
                      <EditPersonalImg/>
                    </div>
                </div>

            </div>
      <EditPersonalmanu title="ชื่อ" value={users.user[0].username}/>
      <EditPersonalmanu title="2" value="3"/>
      {/* <EditPersonalmanu title="วันเกิด" value={calculateAge()}/>
      <EditPersonalmanu title="มาจาก"/>
      <EditPersonalmanu title="อาชีพ"/>
      <EditPersonalmanu title="ส่วนสูง"/>
      <EditPersonalmanu title="สูบบุหรี่"/>
      <EditPersonalmanu title="ดื่มเหล้า"/>
      <EditPersonalmanu title="เพศที่สนใจ"/>
      <EditPersonalmanu title="วัคซีนโควิด"/>
      <EditPersonalmanu title="รสนิยม"/> */}
    </>
  )
}
export default EditPersonal