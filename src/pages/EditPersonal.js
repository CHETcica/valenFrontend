import React from 'react'
import EditPersonalImg from "../component/EditPersonalImg";
//import CheckboxEditManu from "../component/CheckboxEditManu";
import EditPersonalmanu from "../component/EditPersonalmanu";
const EditPersonal = () => {
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
      <EditPersonalmanu title="ชื่อ"/>
      <EditPersonalmanu title="วันเกิด"/>
      <EditPersonalmanu title="มาจาก"/>
      <EditPersonalmanu title="อาชีพ"/>
      <EditPersonalmanu title="ส่วนสูง"/>
      <EditPersonalmanu title="สูบบุหรี่"/>
      <EditPersonalmanu title="ดื่มเหล้า"/>
      <EditPersonalmanu title="เพศที่สนใจ"/>
      <EditPersonalmanu title="วัคซีนโควิด"/>
      <EditPersonalmanu title="รสนิยม"/>
    </>
  )
}
export default EditPersonal