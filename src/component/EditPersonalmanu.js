import React from "react";
import CheckboxEditManu from "../component/CheckboxEditManu";

function EditPersonalmanu(props) {
    const { title } = props;
    return (
        <div className="container mx-auto">


            <div className="grid grid-cols-5 gap-4 text-x xl:mx-80 mx-5 my-4">
                <div className="col-span-1 my-auto">{title}</div>
                <div className="col-span-3 my-auto border-l-4 text-sky-400/75">The quick brown fox</div>
                <div className="col-span-1 my-auto text-right"><label type="button" htmlFor="my-modal" className="btn btn-outline btn-secondary modal-button text-x">เพิ่ม</label></div>
            </div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                    {title}
                    </h3>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <div className="grid grid-cols-2 gap-4">

                                <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                    className="checkbox checkbox-secondary"
                                />
                                <span className="label-text">รอประเภท</span>
                            </div>
                        </label>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                            Yay!
                        </label>
                    </div>
                </div>
            </div>




            <div className="sm:mx-80 mx-4"><hr /></div>

        </div>
    );
};
export default EditPersonalmanu;
