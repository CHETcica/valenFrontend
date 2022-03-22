import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action";
import { Link } from "react-router-dom";
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
          <p className="truncate text-2xl my-9 pl-5">
            {users.user.username}
          </p>

          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/editPersonal"}>
              แก้ไขข้อมูลส่วนตัว
            </Link>
          </p>
          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/Liking"}>
              ความชอบ
            </Link>
          </p>
          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/Liking"}>
              นโยบาย
            </Link>
          </p>
          <hr />
          <p className="text-lg my-3 pl-5">
            <Link className="link-hover" to={"/Liking"}>
              ข้อเสนอแนะ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profilemanu;
