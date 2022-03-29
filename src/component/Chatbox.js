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
    <div className="sm:h-full  md:h-3/4 w-3/4 bg-base-100 shadow-xl mt-3 mx-auto  bg-[url('https://api.lorem.space/image')]">
      <div className="card shadow-xl image-full  border-solid border-2 text-color-black">
        <div className="avatar mx-auto mt-9 userimage">
          <div className="w-24 h-24 rounded-full opacity-100">
            <img src="https://api.lorem.space/image/face?hash=92310" />
          </div>
        </div>
        <div className="justify-end card-body  mt-60 ">
          <h1 className="text-2xl userimage mx-auto">Kanomroo</h1>
          <h3 className="text-md userimage mx-auto ">กำลังเชื่อมต่อ...</h3>
          <div className="grid grid-cols-3 mx-auto mt-9 opacity-100">
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

export const Calling = () => {
  return (
    <div>
      <div className="artboard phone-1 artboard-demo bg-base-100 shadow-xl mt-3 mx-auto image-full rounded-xl ">
        <div className="w-full h-full bg-blur bg-[url('https://api.lorem.space/image')]"></div>

        <div className="content-on-bg-blur">
          <div className="avatar mx-auto">
            <div className="w-24 h-24 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <h1 className="text-2xl text-white userimage mx-auto">Kanomroo</h1>
          <h3 className="text-md text-white  userimage mx-auto ">10:11:11</h3>
          <div className="btn-groupt-call">
            <div className="grid grid-cols-4 mx-auto mt-9 opacity-100 ">
              <div className="mx-auto btn-micophorn ">
                <label className="swap">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />
                  {/* volume on icon */}
                  <svg
                    className="swap-on"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_641_10126)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <rect
                      x="22.0752"
                      y="9.8291"
                      width="13.8498"
                      height="22.2222"
                      rx="4"
                      fill="#2A2929"
                    />
                    <path
                      d="M17.6128 25.2134C17.6128 28.203 18.8156 31.0674 20.9526 33.1774C23.089 35.287 25.9841 36.4699 29.0001 36.4699C32.0162 36.4699 34.9112 35.287 37.0477 33.1774C39.1846 31.0674 40.3874 28.2029 40.3874 25.2134"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 42.3075V38.8887"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_641_10126"
                        x="0"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
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
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_641_10126"
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
                          in2="effect1_dropShadow_641_10126"
                          result="effect2_dropShadow_641_10126"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_641_10126"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  {/* volume off icon */}
                  <svg
                    className="swap-off"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_623_10126)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <rect
                      x="22.0752"
                      y="9.8291"
                      width="13.8498"
                      height="22.2222"
                      rx="4"
                      fill="#2A2929"
                    />
                    <path
                      d="M17.6128 25.2134C17.6128 28.203 18.8156 31.0674 20.9526 33.1774C23.089 35.287 25.9841 36.4699 29.0001 36.4699C32.0162 36.4699 34.9112 35.287 37.0477 33.1774C39.1846 31.0674 40.3874 28.2029 40.3874 25.2134"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 42.3075V38.8887"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.6221 4.65771L14.1573 44.4013"
                      stroke="#FF0101"
                      stroke-width="5"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_623_10126"
                        x="0"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
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
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_623_10126"
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
                          in2="effect1_dropShadow_623_10126"
                          result="effect2_dropShadow_623_10126"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_623_10126"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </label>
              </div>
              <div className="mx-auto btn-speaker ">
                <label className="swap">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />
                  {/* volume on icon */}
                  <svg
                    className="swap-on"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_642_10186)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      d="M15.0016 28.0537C13.8051 26.1938 13.8051 23.8064 15.0016 21.9464V21.9464C15.338 21.4236 15.8751 21.0626 16.4863 20.9486L19.4247 20.4005C19.591 20.3695 19.7424 20.2842 19.8551 20.158L25.1933 14.1837C26.3691 12.8678 26.957 12.2099 27.4717 12.4064C27.9864 12.6028 27.9864 13.4851 27.9864 15.2498L27.9864 34.7504C27.9864 36.515 27.9864 37.3973 27.4717 37.5938C26.957 37.7902 26.3691 37.1323 25.1933 35.8164L19.8551 29.8421C19.7424 29.7159 19.591 29.6307 19.4247 29.5997L16.4863 29.0516C15.8751 28.9376 15.338 28.5766 15.0016 28.0537V28.0537Z"
                      fill="#2A2929"
                    />
                    <path
                      d="M32.1983 19.5231C33.7478 20.9682 34.6222 22.9259 34.6308 24.9696C34.6394 27.0133 33.7817 28.9774 32.2444 30.4339"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M39.0439 16.2368C41.5231 18.549 42.922 21.6813 42.9358 24.9513C42.9497 28.2212 41.5772 31.3637 39.1176 33.6941"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_642_10186"
                        x="0"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
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
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_642_10186"
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
                          in2="effect1_dropShadow_642_10186"
                          result="effect2_dropShadow_642_10186"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_642_10186"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  {/* volume off icon */}
                  <svg
                    className="swap-off"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_642_10179)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      d="M15.0016 28.0537C13.8051 26.1938 13.8051 23.8064 15.0016 21.9464V21.9464C15.338 21.4236 15.8751 21.0626 16.4863 20.9486L19.4247 20.4005C19.591 20.3695 19.7424 20.2842 19.8551 20.158L25.1933 14.1837C26.3691 12.8678 26.957 12.2099 27.4717 12.4064C27.9864 12.6028 27.9864 13.4851 27.9864 15.2498L27.9864 34.7504C27.9864 36.515 27.9864 37.3973 27.4717 37.5938C26.957 37.7902 26.3691 37.1323 25.1933 35.8164L19.8551 29.8421C19.7424 29.7159 19.591 29.6307 19.4247 29.5997L16.4863 29.0516C15.8751 28.9376 15.338 28.5766 15.0016 28.0537V28.0537Z"
                      fill="#2A2929"
                    />
                    <path
                      d="M32.1983 19.5231C33.7478 20.9682 34.6222 22.9259 34.6308 24.9696C34.6394 27.0133 33.7817 28.9774 32.2444 30.4339"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M39.0439 16.2368C41.5231 18.549 42.922 21.6813 42.9358 24.9513C42.9497 28.2212 41.5772 31.3637 39.1176 33.6941"
                      stroke="#2A2929"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M41.6221 4.65771L14.1573 44.4013"
                      stroke="#FF0101"
                      stroke-width="5"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_642_10179"
                        x="0"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
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
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_642_10179"
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
                          in2="effect1_dropShadow_642_10179"
                          result="effect2_dropShadow_642_10179"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_642_10179"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </label>
              </div>
              <div className="mx-auto btn-camera ">
                <label className="swap">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />
                  {/* volume on icon */}
                  <svg
                   className="swap-on"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_649_10239)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.1186 15.9301C48.6598 16.2086 49 16.7663 49 17.375V33.625C49 34.2337 48.6598 34.7914 48.1186 35.0699C47.5773 35.3484 46.9258 35.3011 46.4305 34.9473L35.0555 26.8223C34.6284 26.5173 34.375 26.0248 34.375 25.5C34.375 24.9752 34.6284 24.4827 35.0555 24.1777L46.4305 16.0527C46.9258 15.6989 47.5773 15.6516 48.1186 15.9301ZM38.7958 25.5L45.75 30.4673V20.5327L38.7958 25.5Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.875 15.75C13.9775 15.75 13.25 16.4775 13.25 17.375V33.625C13.25 34.5225 13.9775 35.25 14.875 35.25H32.75C33.6475 35.25 34.375 34.5225 34.375 33.625V17.375C34.375 16.4775 33.6475 15.75 32.75 15.75H14.875ZM10 17.375C10 14.6826 12.1826 12.5 14.875 12.5H32.75C35.4424 12.5 37.625 14.6826 37.625 17.375V33.625C37.625 36.3174 35.4424 38.5 32.75 38.5H14.875C12.1826 38.5 10 36.3174 10 33.625V17.375Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_649_10239"
                        x="0"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
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
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_649_10239"
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
                          in2="effect1_dropShadow_649_10239"
                          result="effect2_dropShadow_649_10239"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_649_10239"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  {/* volume off icon */}
                  <svg
                   className="swap-off"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_649_10226)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <g clip-path="url(#clip0_649_10226)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.25 16.4998C15.8743 16.4998 15.5139 16.6491 15.2483 16.9148C14.9826 17.1804 14.8333 17.5408 14.8333 17.9165V32.0832C14.8333 32.4589 14.9826 32.8192 15.2483 33.0849C15.5139 33.3506 15.8743 33.4998 16.25 33.4998H31.8333C32.2091 33.4998 32.5694 33.3506 32.8351 33.0849C33.1007 32.8192 33.25 32.4589 33.25 32.0832V31.2533L18.4965 16.4998H16.25ZM13.2448 14.9113C14.0418 14.1143 15.1228 13.6665 16.25 13.6665H19.0833C19.4591 13.6665 19.8194 13.8158 20.0851 14.0814L35.6684 29.6648C35.9341 29.9304 36.0833 30.2908 36.0833 30.6665V32.0832C36.0833 33.2103 35.6356 34.2913 34.8385 35.0884C34.0415 35.8854 32.9605 36.3332 31.8333 36.3332H16.25C15.1228 36.3332 14.0418 35.8854 13.2448 35.0884C12.4478 34.2913 12 33.2103 12 32.0832V17.9165C12 16.7893 12.4478 15.7083 13.2448 14.9113ZM31.8333 16.4998H27.1017C26.3193 16.4998 25.685 15.8656 25.685 15.0832C25.685 14.3008 26.3193 13.6665 27.1017 13.6665H31.8333C32.9605 13.6665 34.0415 14.1143 34.8385 14.9113C35.6356 15.7083 36.0833 16.7893 36.0833 17.9165V22.0614L36.2313 22.2094L43.753 16.7686C44.1843 16.4567 44.7539 16.4128 45.2278 16.6549C45.7017 16.897 46 17.3843 46 17.9165V32.0832C46 32.8656 45.3657 33.4998 44.5833 33.4998C43.8009 33.4998 43.1667 32.8656 43.1667 32.0832V20.6897L36.9136 25.2127C36.3499 25.6204 35.5735 25.5585 35.0816 25.0666L33.6649 23.6499C33.3993 23.3842 33.25 23.0239 33.25 22.6482V17.9165C33.25 17.5408 33.1007 17.1804 32.8351 16.9148C32.5694 16.6491 32.2091 16.4998 31.8333 16.4998Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4149 8.41493C12.9682 7.86169 13.8652 7.86169 14.4184 8.41493L45.5851 39.5816C46.1383 40.1348 46.1383 41.0318 45.5851 41.5851C45.0318 42.1383 44.1348 42.1383 43.5816 41.5851L12.4149 10.4184C11.8617 9.86516 11.8617 8.96817 12.4149 8.41493Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_649_10226"
                        x="0"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
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
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_649_10226"
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
                          in2="effect1_dropShadow_649_10226"
                          result="effect2_dropShadow_649_10226"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_649_10226"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_649_10226">
                        <rect
                          width="34"
                          height="34"
                          fill="white"
                          transform="translate(12 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </label>
              </div>
              <div className="mx-auto btn-discall ">
                <svg
                  width="58"
                  height="59"
                  viewBox="0 0 58 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_644_10207)">
                    <circle cx="28.999" cy="25.0015" r="25" fill="#FF0505" />
                  </g>
                  <path
                    d="M37.1634 30.1907C34.5138 23.6175 31.9054 21.0442 25.3947 18.422L28.053 14.4255C35.5384 17.7209 39.4001 23.5544 41.2774 28.1429L37.1634 30.1907Z"
                    fill="white"
                  />
                  <path
                    d="M35.4102 39.4376C34.1067 39.4842 33.081 38.4309 33.1308 37.1998C33.2091 35.2624 33.0159 33.8725 32.56 32.1566C32.3095 31.214 32.777 30.2338 33.549 29.5874C34.5895 28.7162 35.3708 27.6234 35.9895 26.6844C36.8471 25.383 39.9406 25.3761 40.6682 26.7411C42.1636 29.5463 43.2826 34.7665 41.3442 38.3791C41.0397 38.9466 40.4002 39.2593 39.7281 39.2833L35.4102 39.4376Z"
                    fill="white"
                  />
                  <path
                    d="M14.9507 18.9781C14.8274 20.2048 15.8822 21.2321 17.1861 21.2551C19.238 21.2913 20.6959 21.5525 22.4834 22.08C23.4653 22.3698 24.5278 21.9845 25.2547 21.2931C26.2345 20.3613 27.4338 19.6864 28.4613 19.1562C29.8854 18.4213 30.0684 15.5039 28.6672 14.7401C25.7876 13.1703 20.3344 11.8183 16.4064 13.4413C15.7894 13.6963 15.4226 14.2816 15.359 14.9142L14.9507 18.9781Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_644_10207"
                      x="-0.000976562"
                      y="0.00146484"
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
                        result="effect1_dropShadow_644_10207"
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
                        in2="effect1_dropShadow_644_10207"
                        result="effect2_dropShadow_644_10207"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_644_10207"
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
    </div>
  );
};
