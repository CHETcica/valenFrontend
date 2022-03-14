import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";
import { EditModal,EditModal1,EditModal2,EditModal3,EditModal4,EditModal5,EditModal6,EditModal7,EditModal8,EditModal9 } from "../component/EditModal";


const EditPersonalmanu = (props) => {
  const { title, value } = props;
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
        
        <EditModal  title1={title} value={value}/>
        <EditModal1 title1={title} value={value}/>
        <EditModal2 title1={title} value={value}/>
        <EditModal3 title1={title} value={value}/>
        <EditModal4 title1={title} value={value}/>
        <EditModal5 title1={title} value={value}/>
        <EditModal6 title1={title} value={value}/>
        <EditModal7 title1={title} value={value}/>
        <EditModal8 title1={title} value={value}/>
        <EditModal9 title1={title} value={value}/>
      </div>
    </>

  );


}
export default EditPersonalmanu;
