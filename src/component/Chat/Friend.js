import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Friend = () => {
  return (
    <div className=" p-2 w-full shadow-md">
      <div className="w-full grid grid-cols-1">
        <div className="text-xl">Friend List</div>
        <div className="text-xl mb-2 chat_columchat--chatdetail">
          <div className="flex flex-initial">
            <div className=""></div>
            <input
              type="text"
              placeholder="Serch"
              className="input input-bordered w-full max-w-xs  ml-auto"
            />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online ">
              <div className="rounded-full w-20 h-20 ">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLT8T2YiB1JqzuZ71lv_0v18oqPc_8Rckyeq1lar6Q=s900-c-k-c0x00ffffff-no-rj"
                  alt="Avatar Tailwind CSS Component "
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail flex">
              <div className="font-bold flex-initial w-64">Kanomroo </div>
              <div class="dropdown dropdown-right flex-initial  ">
                <label tabindex="0" className="btn btn-ghost">
                  ...
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>เลิกเป็นเพื่อน</a>
                  </li>
                  <li>
                    <a>ดูโปรไฟล์</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-20 h-20">
                <img
                  src="http://sv6.postjung.com/picpost/data/228/228864-51ab20fa2a61a.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Brice Swyre</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-20 h-20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3KWUdiQA6zbIKNZjcgsZM_fFDgUnxweBKQtOYuM0bEyfjmnTZN-QH8Nqr0hOwcnI7qw&usqp=CAU"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Marjy Ferencz</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-20 h-20">
                <img
                  src="https://thethaiger.com/th/wp-content/uploads/sites/9/2020/12/image-41.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Milli</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-20 h-20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqoylbBIikJ2AHIT49pgreY88s3Fa3cOjuD8AB9PR5LJe0jhf25WMvmANX-yiYylG9Xc&usqp=CAU"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Hart Hagerty</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3">
            <div className="avatar online">
              <div className="rounded-full w-20 h-20">
                <img
                  src="https://men.mthai.com/app/uploads/2019/12/Wonderframe-2.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Wonderframe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




