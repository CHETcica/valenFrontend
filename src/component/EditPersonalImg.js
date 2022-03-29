import React from "react";

function EditPersonalImg(props) {
    const { value } = props;
    return (
        <>
            <div className="avatar w-40 h-52 ">
                <img src={value} />
            </div>

        </>
    );
};
export default EditPersonalImg;
