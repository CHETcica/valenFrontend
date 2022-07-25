import React, { useState } from 'react'

import { EditModal1 } from "./EditModal";


const EditLiking = (props) => {
    const { hobby, chosen } = props;
    //console.log(title);
    const [users, setUsers] = useState(
        {
            user: [
                {
                    user_details: {
                        Vaccine: ["AstraZinica ", "AstraZinica"],
                        job: ["นักศึกษา"],
                        LGho: ["กินบ้าง"],
                        smoke: ["ไม่สูบ"],
                        height: [181],
                        address: ["ดำเนิน"],
                        myGoal: ["หาเพื่อน"],
                        username: "CHETcica",
                        gender: "man",

                    },
                    born: "2000-08-17T00:00:00.000Z",
                    frind_id: [],
                    __v: 0,
                }

            ],
        });

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-4 text-x xl:mx-80 mx-5 my-4">
                    <div className="col-span-1 my-auto">{hobby}</div>
                    <div className="col-span-3 my-auto border-l-4 text-sky-400/75">
                    {chosen}
                    </div>
                    <div className="col-span-1 my-auto text-right">
                        <label
                            type="button"
                            htmlFor={hobby}
                            className="btn btn-outline btn-secondary modal-button text-x"
                        >
                            เพิ่ม
                        </label>
                    </div>
                </div>

                <EditModal1 hobby={hobby} chosen={chosen}/>
               

            </div>
        </>

    );


}
export default EditLiking;