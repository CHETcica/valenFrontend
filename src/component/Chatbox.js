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
                    <g filter="url(#filter0_dd_652_10147)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.6006 10.0483C26.8437 9.58871 29.1566 9.58871 31.3997 10.0483C32.3699 10.2471 33.117 11.0237 33.278 12.0009L33.3593 12.4944C34.042 16.6369 34.042 20.8633 33.3593 25.0058L33.278 25.4993C33.117 26.4765 32.3699 27.2531 31.3997 27.4519C29.1566 27.9115 26.8437 27.9115 24.6006 27.4519C23.6304 27.2531 22.8833 26.4765 22.7223 25.4993L22.6409 25.0058C21.9582 20.8633 21.9582 16.6369 22.6409 12.4944L22.7223 12.0009C22.8833 11.0237 23.6304 10.2471 24.6006 10.0483ZM30.948 12.2525C29.003 11.854 26.9973 11.854 25.0522 12.2525C24.9955 12.2642 24.9517 12.3096 24.9423 12.3668L24.861 12.8603C24.2182 16.7605 24.2182 20.7397 24.861 24.64L24.9423 25.1334C24.9517 25.1906 24.9955 25.2361 25.0522 25.2477C26.9973 25.6463 29.003 25.6463 30.948 25.2477C31.0048 25.2361 31.0485 25.1906 31.058 25.1334L31.1393 24.64C31.7821 20.7397 31.7821 16.7605 31.1393 12.8603L31.058 12.3668C31.0485 12.3096 31.0048 12.2642 30.948 12.2525Z"
                      fill="black"
                    />
                    <path
                      d="M17.3423 22.8863C17.9575 22.7991 18.5268 23.2271 18.614 23.8423L19.2898 28.6112C19.4724 29.8997 20.4937 30.9072 21.7846 31.0721C25.9115 31.5992 30.0888 31.5992 34.2157 31.0721C35.5066 30.9072 36.5279 29.8997 36.7105 28.6112L37.3863 23.8423C37.4734 23.2271 38.0428 22.7991 38.658 22.8863C39.2732 22.9734 39.7012 23.5428 39.614 24.158L38.9383 28.9269C38.6135 31.2187 36.7968 33.0107 34.5008 33.3039C32.7154 33.532 30.9211 33.6657 29.1252 33.7051V39.7501C29.1252 40.3714 28.6215 40.8751 28.0002 40.8751C27.3789 40.8751 26.8752 40.3714 26.8752 39.7501V33.7051C25.0793 33.6657 23.2849 33.532 21.4995 33.3039C19.2035 33.0107 17.3868 31.2187 17.062 28.9269L16.3863 24.158C16.2991 23.5428 16.7271 22.9734 17.3423 22.8863Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_652_10147"
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
                          result="effect1_dropShadow_652_10147"
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
                          in2="effect1_dropShadow_652_10147"
                          result="effect2_dropShadow_652_10147"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_652_10147"
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
                    <g filter="url(#filter0_dd_652_10150)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      d="M24.6004 11.0483C26.8435 10.5887 29.1564 10.5887 31.3995 11.0483C32.3697 11.2471 33.1168 12.0237 33.2778 13.0009L33.3592 13.4944C33.4978 14.3355 33.6082 15.1801 33.6906 16.0267C33.7014 16.1377 33.6616 16.2475 33.5827 16.3264L32.1987 17.7104C31.9675 17.9416 31.5694 17.7869 31.5487 17.4605C31.4725 16.2561 31.3359 15.0545 31.1391 13.8603L31.0578 13.3668C31.0483 13.3096 31.0046 13.2642 30.9478 13.2525C29.0028 12.854 26.9971 12.854 25.0521 13.2525C24.9953 13.2642 24.9516 13.3096 24.9421 13.3668L24.8608 13.8603C24.2563 17.528 24.2203 21.2656 24.7527 24.9416C24.7698 25.0594 24.7307 25.1784 24.6465 25.2626L23.2695 26.6396C23.0815 26.8276 22.7653 26.7616 22.7221 26.4993L22.6408 26.0058C21.958 21.8633 21.958 17.6369 22.6408 13.4944L22.7221 13.0009C22.8831 12.0237 23.6302 11.2471 24.6004 11.0483Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.8062 21.9849L41.5455 14.2456C41.9848 13.8063 41.9848 13.0939 41.5455 12.6546C41.1062 12.2153 40.3938 12.2153 39.9545 12.6546L15.9545 36.6546C15.5152 37.0939 15.5152 37.8063 15.9545 38.2456C16.3938 38.6849 17.1062 38.6849 17.5455 38.2456L21.4885 34.3025C21.4921 34.303 21.4957 34.3035 21.4993 34.3039C23.2847 34.532 25.0791 34.6657 26.875 34.7051V40.7501C26.875 41.3714 27.3787 41.8751 28 41.8751C28.6213 41.8751 29.125 41.3714 29.125 40.7501V34.7051C30.9209 34.6657 32.7152 34.532 34.5006 34.3039C36.7966 34.0107 38.6133 32.2187 38.9381 29.9269L39.6138 25.158C39.701 24.5428 39.273 23.9734 38.6578 23.8863C38.0426 23.7991 37.4733 24.2271 37.3861 24.8423L36.7103 29.6112C36.5277 30.8997 35.5064 31.9072 34.2155 32.0721C30.6688 32.5251 27.085 32.5888 23.5279 32.2632L27.0227 28.7684C28.4857 28.853 29.9571 28.7475 31.3995 28.4519C32.3697 28.2531 33.1168 27.4765 33.2778 26.4993L33.3592 26.0058C33.5789 24.6723 33.7279 23.3302 33.8062 21.9849ZM31.311 24.4801L29.3023 26.4888C29.8538 26.4397 30.4032 26.3593 30.9478 26.2477C31.0046 26.2361 31.0483 26.1906 31.0578 26.1334L31.1391 25.64C31.2027 25.2541 31.26 24.8674 31.311 24.4801Z"
                      fill="black"
                    />
                    <path
                      d="M19.2896 29.6112C19.3161 29.7982 19.3602 29.9792 19.4203 30.1526C19.4713 30.2999 19.443 30.4661 19.3328 30.5763L18.1896 31.7195C18.022 31.8871 17.7421 31.8592 17.6293 31.6507C17.3451 31.1254 17.1493 30.5443 17.0618 29.9269L16.3861 25.158C16.2989 24.5428 16.7269 23.9734 17.3421 23.8863C17.9573 23.7991 18.5267 24.2271 18.6138 24.8423L19.2896 29.6112Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_652_10150"
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
                          result="effect1_dropShadow_652_10150"
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
                          in2="effect1_dropShadow_652_10150"
                          result="effect2_dropShadow_652_10150"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_652_10150"
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
                    className="swap-off"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_651_10249)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.2081 13.8623C30.7869 12.5467 33.1959 13.4973 33.4508 15.5366C34.2364 21.8212 34.2364 28.1791 33.4508 34.4637C33.1959 36.503 30.7869 37.4536 29.2081 36.138L22.697 30.7121C22.6296 30.6559 22.5447 30.6251 22.4569 30.6251H17C15.5503 30.6251 14.375 29.4499 14.375 28.0001V22.0001C14.375 20.5504 15.5503 19.3751 17 19.3751H22.4569C22.5447 19.3751 22.6296 19.3444 22.697 19.2882L29.2081 13.8623ZM31.2182 15.8156C31.184 15.5418 30.8605 15.4142 30.6485 15.5908L24.1374 21.0167C23.6657 21.4098 23.071 21.6251 22.4569 21.6251H17C16.7929 21.6251 16.625 21.793 16.625 22.0001V28.0001C16.625 28.2072 16.7929 28.3751 17 28.3751H22.4569C23.071 28.3751 23.6657 28.5904 24.1374 28.9836L30.6485 34.4095C30.8605 34.5861 31.184 34.4585 31.2182 34.1846C31.9806 28.0854 31.9806 21.9149 31.2182 15.8156Z"
                      fill="black"
                    />
                    <path
                      d="M40.8622 15.9188C41.4521 15.7237 42.0885 16.0437 42.2836 16.6336C43.1542 19.2661 43.625 22.0793 43.625 25.0002C43.625 27.921 43.1542 30.7342 42.2836 33.3667C42.0885 33.9566 41.4521 34.2766 40.8622 34.0815C40.2723 33.8864 39.9523 33.25 40.1474 32.6602C40.9436 30.2528 41.375 27.678 41.375 25.0002C41.375 22.3223 40.9436 19.7475 40.1474 17.3402C39.9523 16.7503 40.2723 16.1139 40.8622 15.9188Z"
                      fill="black"
                    />
                    <path
                      d="M38.0484 18.9217C37.8341 18.3385 37.1877 18.0394 36.6045 18.2537C36.0213 18.468 35.7222 19.1145 35.9365 19.6977C36.5432 21.3491 36.875 23.1346 36.875 25.0001C36.875 26.5476 36.6467 28.0396 36.2228 29.4456C36.1992 29.524 36.175 29.602 36.1502 29.6799C36.0833 29.8894 36.012 30.0971 35.9365 30.3026C35.7222 30.8858 36.0213 31.5323 36.6045 31.7466C37.1877 31.9609 37.8341 31.6618 38.0484 31.0786C38.1351 30.8427 38.2169 30.6044 38.2936 30.3639C38.3221 30.2746 38.3499 30.185 38.377 30.0951C38.8638 28.4808 39.125 26.77 39.125 25.0001C39.125 22.866 38.7451 20.8179 38.0484 18.9217Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_651_10249"
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
                          result="effect1_dropShadow_651_10249"
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
                          in2="effect1_dropShadow_651_10249"
                          result="effect2_dropShadow_651_10249"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_651_10249"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  {/* volume off icon */}
                  <svg
                    className="swap-on"
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_651_10252)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.1965 14.481C31.6876 13.2385 33.9628 14.1363 34.2035 16.0622C34.9455 21.9977 34.9455 28.0025 34.2035 33.9379C33.9628 35.8639 31.6876 36.7617 30.1965 35.5191L24.0472 30.3947C23.9835 30.3416 23.9033 30.3126 23.8204 30.3126H18.6667C17.2975 30.3126 16.1875 29.2026 16.1875 27.8334V22.1667C16.1875 20.7975 17.2975 19.6876 18.6667 19.6876H23.8204C23.9033 19.6876 23.9835 19.6585 24.0472 19.6055L30.1965 14.481ZM32.0949 16.3258C32.0626 16.0672 31.7571 15.9467 31.5569 16.1135L25.4076 21.238C24.962 21.6092 24.4004 21.8126 23.8204 21.8126H18.6667C18.4711 21.8126 18.3125 21.9711 18.3125 22.1667V27.8334C18.3125 28.029 18.4711 28.1876 18.6667 28.1876H23.8204C24.4004 28.1876 24.962 28.3909 25.4076 28.7622L31.5569 33.8867C31.7571 34.0535 32.0626 33.9329 32.0949 33.6743C32.815 27.9139 32.815 22.0862 32.0949 16.3258Z"
                      fill="black"
                    />
                    <path
                      d="M37.3694 21.7444C37.7843 21.3295 38.457 21.3295 38.872 21.7444L40.625 23.4975L42.378 21.7444C42.793 21.3295 43.4657 21.3295 43.8806 21.7444C44.2956 22.1594 44.2956 22.8321 43.8806 23.247L42.1276 25.0001L43.8806 26.7531C44.2956 27.168 44.2956 27.8408 43.8806 28.2557C43.4657 28.6706 42.793 28.6706 42.378 28.2557L40.625 26.5027L38.872 28.2557C38.457 28.6706 37.7843 28.6706 37.3694 28.2557C36.9544 27.8408 36.9544 27.168 37.3694 26.7531L39.1224 25.0001L37.3694 23.247C36.9544 22.8321 36.9544 22.1594 37.3694 21.7444Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_651_10252"
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
                          result="effect1_dropShadow_651_10252"
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
                          in2="effect1_dropShadow_651_10252"
                          result="effect2_dropShadow_651_10252"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_651_10252"
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
                    <g filter="url(#filter0_dd_652_10151)">
                      <circle cx="29" cy="25" r="25" fill="#FFF9F9" />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M45.2316 17.657C45.7034 17.8998 46 18.386 46 18.9167V33.0833C46 33.614 45.7034 34.1002 45.2316 34.343C44.7597 34.5858 44.1917 34.5446 43.7599 34.2361L33.8432 27.1528C33.471 26.8869 33.25 26.4575 33.25 26C33.25 25.5425 33.471 25.1131 33.8432 24.8472L43.7599 17.7639C44.1917 17.4554 44.7597 17.4142 45.2316 17.657ZM37.104 26L43.1667 30.3305V21.6695L37.104 26Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.25 17.4998C15.4676 17.4998 14.8333 18.1341 14.8333 18.9165V33.0832C14.8333 33.8656 15.4676 34.4998 16.25 34.4998H31.8333C32.6157 34.4998 33.25 33.8656 33.25 33.0832V18.9165C33.25 18.1341 32.6157 17.4998 31.8333 17.4998H16.25ZM12 18.9165C12 16.5693 13.9028 14.6665 16.25 14.6665H31.8333C34.1805 14.6665 36.0833 16.5693 36.0833 18.9165V33.0832C36.0833 35.4304 34.1805 37.3332 31.8333 37.3332H16.25C13.9028 37.3332 12 35.4304 12 33.0832V18.9165Z"
                      fill="black"
                    />
                    <defs>
                      <filter
                        id="filter0_dd_652_10151"
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
                          result="effect1_dropShadow_652_10151"
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
                          in2="effect1_dropShadow_652_10151"
                          result="effect2_dropShadow_652_10151"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_652_10151"
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
