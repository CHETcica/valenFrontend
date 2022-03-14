import React from "react";
import CheckboxEditManu from "../component/CheckboxEditManu";
import { Modalusername, Modalusername1 } from "./ModalForm";

function EditPersonalmanu(props) {
  const { title, value } = props;
  // let fuck = document.write(value.join(", "));
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-4 text-x xl:mx-80 mx-5 my-4">
        <div className="col-span-1 my-auto">{title}</div>
        <div className="col-span-3 my-auto border-l-4 text-sky-400/75">
        {value}
          { 
          // document.write(value.join(", "))
          // document.write(value)
           }
          {/* {value.type == [] ? document.write(value.join(", ")) : value} */}
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
      <Modalusername value={value} />
      <Modalusername1 />
      <div className="sm:mx-80 mx-4">
        <hr />
      </div>
    </div>
  );
}
export default EditPersonalmanu;
