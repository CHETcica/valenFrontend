import React from "react";
import Carduser from "../component/Carduser";

const Chatbox = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-3 h-20   card bg-rose-400 rounded-box place-items-center text-white font-bold ">
            <div className="avatar online">
              <div className="rounded-full w-14 h-14">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLT8T2YiB1JqzuZ71lv_0v18oqPc_8Rckyeq1lar6Q=s900-c-k-c0x00ffffff-no-rj"
                  alt="Avatar Tailwind CSS Component "
                />
              </div>
            </div>
            <div className="font-bold col-span ">
              Kanomroo
              <div className="flex items-center space-x-3 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card text-center shadow-2xl">
        <figure className="px-10 pt-10">
          <img src="" className="rounded-xl " />
        </figure>
        <div className="card-body h-96">
          <div className="grid grid-rows-3 gap-3 w-full">
            <div className="mr-auto">
              {" "}
              <div className="avatar online">
                <div className="rounded-full w-14 h-14">
                  <img
                    src="https://yt3.ggpht.com/ytc/AKedOLT8T2YiB1JqzuZ71lv_0v18oqPc_8Rckyeq1lar6Q=s900-c-k-c0x00ffffff-no-rj"
                    alt="Avatar Tailwind CSS Component "
                  />
                </div>
              </div>
              สวัสดีค่าา
            </div>
            <div className="ml-auto ">สวัสดีครับ</div>
            <div className="mr-auto ">
              {" "}
              <div className="avatar online">
                <div className="rounded-full w-14 h-14">
                  <img
                    src="https://yt3.ggpht.com/ytc/AKedOLT8T2YiB1JqzuZ71lv_0v18oqPc_8Rckyeq1lar6Q=s900-c-k-c0x00ffffff-no-rj"
                    alt="Avatar Tailwind CSS Component "
                  />
                </div>
              </div>
              ชื่ออะไรเอ่ย
            </div>
          </div>
        </div>

      
            <div className="relative">
              <input
                type="text"
                placeholder="Massege"
                className="w-full pr-16 input input-primary input-bordered"
              />
              <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
                Enter
              </button>
              <div className="form-control"></div>
            </div>
          </div>
        </div>
    
  );
};

export default Chatbox;
