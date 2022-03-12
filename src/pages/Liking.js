import React from 'react'
import EditPersonalmanu from "../component/EditPersonalmanu";
const Liking = () => {
    return (
        <>
            <div align="center" className='text-xl my-5'> <p>ความชอบ</p></div>
            <EditPersonalmanu title="กีฬา" />
            <EditPersonalmanu title="เพลง" />
            <EditPersonalmanu title="อาหาร" />
            <EditPersonalmanu title="สถานที่ท่องเที่ยว" />
        </>
    )
}
export default Liking