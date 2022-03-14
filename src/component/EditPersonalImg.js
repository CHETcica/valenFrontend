import React from "react";

function EditPersonalImg(props) {
    const { value } = props;
    return (
        <>



            <div className='w-40 h-40'>
                
                    <img className="bg-cover bg-center" src={value} alt="" />
               
             </div>
        </>
    );
};
export default EditPersonalImg;
