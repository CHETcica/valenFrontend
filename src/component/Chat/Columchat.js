import React from "react";

const Columchat = () => {
  return (
    <div className=" p-2 w-full shadow-md">
      <div className="w-full grid grid-cols-1">
        <div className="text-xl">Match</div>
        <div className="text-xl mb-2 chat_columchat--chatdetail">
          <div className="-space-x-3 avatar-group">
            <div className="avatar online">
              <div className="w-10 h-10">
                <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-10 h-10">
                <img src="http://daisyui.com/tailwind-css-component-profile-2@40w.png" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-10 h-10">
                <img src="http://daisyui.com/tailwind-css-component-profile-3@40w.png" />
              </div>
            </div>
            <div className="avatar online">
              <div className="w-10 h-10">
                <img src="http://daisyui.com/tailwind-css-component-profile-5@40w.png" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-10 h-10 rounded-full bg-neutral-focus text-neutral-content">
                <span>+20</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:grid">
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online ">
              <div className="rounded-full w-14 h-14 ">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLT8T2YiB1JqzuZ71lv_0v18oqPc_8Rckyeq1lar6Q=s900-c-k-c0x00ffffff-no-rj"
                  alt="Avatar Tailwind CSS Component "
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold ">Kanomroo </div>
              <div className="text-sm opacity-50 ">??????????????????????????????...</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-14 h-14">
                <img
                  src="http://sv6.postjung.com/picpost/data/228/228864-51ab20fa2a61a.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">??????????????? ????????????????????????</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-14 h-14">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3KWUdiQA6zbIKNZjcgsZM_fFDgUnxweBKQtOYuM0bEyfjmnTZN-QH8Nqr0hOwcnI7qw&usqp=CAU"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">?????????????????????????????????????????????</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-14 h-14">
                <img
                  src="https://thethaiger.com/th/wp-content/uploads/sites/9/2020/12/image-41.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Milli</div>
              <div className="text-sm opacity-50">???????????????????????????</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3 mr-1">
            <div className="avatar online">
              <div className="rounded-full w-14 h-14">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqoylbBIikJ2AHIT49pgreY88s3Fa3cOjuD8AB9PR5LJe0jhf25WMvmANX-yiYylG9Xc&usqp=CAU"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">??????????????????????????????????????? ?????????????????????</div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="flex items-center space-x-3 my-3">
            <div className="avatar online">
              <div className="rounded-full w-14 h-14">
                <img
                  src="https://men.mthai.com/app/uploads/2019/12/Wonderframe-2.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="chat_columchat--chatdetail">
              <div className="font-bold">Wonderframe</div>
              <div className="text-sm opacity-50">??????????????????????????????</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Columchat;
