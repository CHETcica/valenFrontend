import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";

const Profilemanu = () => {
  const users = useSelector((state) => state.signs);
  
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 my-40">
        <div className="col-span-1 mx-auto">
          <div className="avatar online">
            <div className="rounded-full w-24 h-24">
              <img src={users.user.userimageprofile} />
            </div>
          </div>
        </div>
        <div className="col-span-1 pl-10 w-3/4">
          <p className="truncate text-2xl my-9 pl-5">{users.user.username}</p>

          <p className="truncate text-2xl my-9 pl-5">
            <link to={"/editpersonal"} className="flex ">
              Chetsadakorn Mueangnam
            </link>
          </p>

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
