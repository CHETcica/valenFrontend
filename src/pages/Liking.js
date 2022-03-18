import React, { useState } from "react";
import EditLiking from "../component/EditLiking";

const Liking = () => {
    const [users, setUsers] = useState({
        user: [
          {
            user_liking: {
              sport: ["ฟุตบอล"],
              song: ["แร็ป"],
              food: ["ก๋วยเตี๋ยว"],
              unlike: ["ทะเล"],
            },
          },
        ],
          frind_id: [],
        __v: 0,
      });
    return (
        <>
            <div align="center" className='text-xl my-5'> <p>ความชอบ</p></div>
            <EditLiking hobby="กีฬา"chosen="ฟุตบอล"/>
            <EditLiking hobby="เพลง"chosen="แร็ป"/>
            <EditLiking hobby="อาหาร"chosen="ก๋วยเตี๋ยว"/>
            <EditLiking hobby="ที่ท่องเที่ยว"chosen="ทะเล"/>
        </>
    )
}
export default Liking