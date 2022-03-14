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
          vacen:["asstra ","sinovac ","sinofram "]
        },
        _id: "6214a044e543ba936f58d2ea",
        username: "BOWcica",
        email: "supansa@gmail.com",
        
        
        
        
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
      {/* <EditPersonalmanu title="username" value={users.user[0].username}/>
      <EditPersonalmanu title="username1" value="3"/>
      <EditPersonalmanu title="วันเกิด" value={calculateAge()}/>
      <EditPersonalmanu title="มาจาก"/>
      <EditPersonalmanu title="อาชีพ"/>
      <EditPersonalmanu title="ส่วนสูง"/>
      <EditPersonalmanu title="สูบบุหรี่"/>
      <EditPersonalmanu title="ดื่มเหล้า"/>
      <EditPersonalmanu title="เพศที่สนใจ"/> */}
      <EditPersonalmanu title="วัคซีนโควิด" value={users.user[0].user_details.vacen}/>
      <EditPersonalmanu title="รสนิยม"/>
    </>
  )
}
export default EditPersonal