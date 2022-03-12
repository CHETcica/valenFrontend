import React from "react";


function CheckboxEditManu() {

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4">
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Congratulations random Interner user!
                        </h3>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Remember me</span>
                                <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                    className="checkbox checkbox-secondary"
                                />
                            </label>
                        </div>

                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">
                                Yay!
                            </label>
                        </div>
                    </div>
                </div>
                <div className="sm:mx-80 mx-4"><hr />
                </div>
            </div>
        </div >
    );
};
export default CheckboxEditManu;
