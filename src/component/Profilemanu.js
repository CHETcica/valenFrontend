import React from "react";

const Profilemanu = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 my-40">
        <div className="col-span-1 mx-auto">
          <div className="avatar online">
            <div className="rounded-full w-24 h-24">
              <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
            </div>
          </div>
        </div>
        <div className="col-span-1 pl-10 w-3/4">
          <p className="truncate text-2xl my-9 pl-5"><a href="/EditPersonal.js" className="flex "> Chetsadakorn Mueangnam</a></p>
          <hr />
          <p className="text-lg my-3 pl-5">แก้ไขข้อมูลส่วนตัว</p>
          <hr />
          <p className="text-lg my-3 pl-5">นโยบาย</p>
          <hr />
          <p className="text-lg my-3 pl-5">ข้อเสนอแนะ</p>
        </div>
      </div>
    </div>
  );
};
export default Profilemanu;
