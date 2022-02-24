import React from "react";

export const Chatbox = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-3 h-20 card bg-rose-400 rounded-none rounded-tr-2xl place-items-center text-white font-bold ">
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
      <div className="card text-center ">
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

export const Call = () => {
  return (
    
      <div className="card sm:h-full  md:h-3/4 w-3/4 bg-base-100 shadow-xl mt-3 mx-auto  bg-[url('https://api.lorem.space/image')]">
        <div className="avatar mx-auto mt-9">
          <div className="w-24 h-24 rounded-full opacity-100">
            <img src="https://api.lorem.space/image/face?hash=92310" />
          </div>
        </div>
        <div className="card-body">
          <div className="mx-auto ">
            <h1 className="text-2xl ">Kanomroo</h1>
            <h3>กำลังเชื่อมต่อ...</h3>
          </div>
          <div className="justify-end card-actions">
            <div className="grid grid-cols-3 mx-auto opacity-100">
              <div className="mx-auto">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_552_10066)">
                    <path
                      d="M53 25C53 38.2548 42.2548 49 29 49C15.7452 49 5 38.2548 5 25C5 11.7452 15.7452 1 29 1C42.2548 1 53 11.7452 53 25Z"
                      fill="#FF0505"
                      stroke="white"
                      stroke-width="2"
                    />
                  </g>
                  <path
                    d="M42.6667 37.6665L16.0001 10.9998"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 37.6665L42.6667 10.9998"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_552_10066"
                      x="0"
                      y="0"
                      width="58"
                      height="58"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_552_10066"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_552_10066"
                        result="effect2_dropShadow_552_10066"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_552_10066"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div></div>
              <div className="mx-auto">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_552_10071)">
                    <path
                      d="M53 25C53 38.2548 42.2548 49 29 49C15.7452 49 5 38.2548 5 25C5 11.7452 15.7452 1 29 1C42.2548 1 53 11.7452 53 25Z"
                      fill="#28FE70"
                      stroke="white"
                      stroke-width="2"
                    />
                  </g>
                  <path
                    d="M14.5842 18.4166V14.5859C14.5842 12.3768 16.3751 10.5859 18.5842 10.5859H22.3302C24.5394 10.5859 26.3302 12.3768 26.3302 14.5859V16.7598C26.3302 17.8206 25.9088 18.838 25.1587 19.5882L24.2645 20.4824C22.7024 22.0445 22.7024 24.5771 24.2645 26.1392L26.4383 28.313C28.0004 29.8751 30.5331 29.8751 32.0952 28.313L32.9894 27.4189C33.7395 26.6687 34.7569 26.2473 35.8178 26.2473H37.9916C40.2007 26.2473 41.9916 28.0382 41.9916 30.2473V33.9933C41.9916 36.2025 40.2007 37.9933 37.9916 37.9933H34.1609C23.349 37.9933 14.5842 29.2285 14.5842 18.4166Z"
                    fill="#F7F0EA"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_552_10071"
                      x="0"
                      y="0"
                      width="58"
                      height="58"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_552_10071"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_552_10071"
                        result="effect2_dropShadow_552_10071"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_552_10071"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
