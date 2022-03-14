import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";
import EditPersonalmanu from "../component/EditPersonalmanu";

const Liking = () => {
    const [users, setUsers] = useState({
        user: [
          {
            sport:"CHETcica",
            song:"CHET",
          },
        ],
        user: [
            {
              sport:"CHETcica1",
              song:"CHET1",
            },
          ],
          user: [
            {
              sport:"CHETcica2",
              song:"CHET2",
            },
          ],
          frind_id: [],
        __v: 0,
      });
    return (
        <>
            <div align="center" className='text-xl my-5'> <p>ความชอบ</p></div>
            <EditPersonalmanu title="กีฬา" value={users.user[0].sport}/>
            <EditPersonalmanu title="เพลง" song/>
            <EditPersonalmanu title="อาหาร" />
            <EditPersonalmanu title="สถานที่ท่องเที่ยว" />
        </>
    )
}
export default Liking