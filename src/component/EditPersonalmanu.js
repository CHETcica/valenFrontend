import React, { useState } from 'react'

import { EditModal, EditModal1, EditModal2, EditModal3, EditModal4, EditModal5, EditModal6, EditModal7, EditModal8, EditModal9 } from "../component/EditModal";


const EditPersonalmanu = (props) => {
  const { title, value } = props;
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
  };*/
 //typei: ["username", "age", "address", "job", "height", "smoke", "LGho", "interested", "Vaccine", "myGoal"]
  //cars = ["username", "age", "address", "job", "height", "smoke", "LGho", "interested", "Vaccine", "myGoal"];

 
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
        
        <EditModal title="username" value={users.user[0].user_details.username} />
        <EditModal title="age" value={calculateAge()} />
        <EditModal title="address" value={users.user[0].user_details.address} />
        <EditModal4 title="job" value={users.user[0].user_details.job} />
        <EditModal4 title="height" value={users.user[0].user_details.height} />
        <EditModal5 title="smoke" value={users.user[0].user_details.smoke} />
        <EditModal6 title="LGho" value={users.user[0].user_details.LGho} />
        <EditModal7 title="interested" value={users.user[0].user_details.interested} />
        <EditModal8 title="Vaccine" value={users.user[0].user_details.Vaccine} />

        <EditModal9 title="myGoal" value={users.user[0].user_details.myGoal} />

      </div>
    </>

  );


}
export default EditPersonalmanu;
