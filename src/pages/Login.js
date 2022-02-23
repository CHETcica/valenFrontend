import React from "react";

const Login = () => {
  return (
    <>
      <div className="my-3 mb-10 container mx-auto grid md:grid-cols-2 sm:grid-cols-1  border-solid ">
        <div className="sm:hidden md:block p-3 m-3 mx-auto  h-full w-full "></div>
        <div className=" p-3 m-3 mx-auto card  h-full w-full bg-white shadow-xl ">
          <form className="block mx-auto  w-2/4">
            <h1 className="my-4 text-3xl ">Login</h1>

            <div className=" mb-3 w-full mx-auto flex border border-b-black  border-block-input">
              <div className="w-12 p-1">
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8058 22.0833C30.6337 22.0833 35.1475 30.137 37.4128 36.1417C37.8937 37.4163 36.9207 38.75 35.5584 38.75H6.87827M18.8058 22.0833C15.5528 22.0833 7.96259 20 7.96259 11.6667C7.96259 5.41667 12.2999 1.25 18.8058 1.25C25.3117 1.25 29.6489 5.41667 29.6489 11.6667C29.6489 15.8333 26.6129 22.0833 18.8058 22.0833ZM18.8058 22.0833C7.97626 22.0833 3.27819 28.8347 0.823485 34.5833"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="form-control w-full  bg-inherit"
                name="username"
                placeholder="User name"
                aria-describedby="username"
              />
            </div>
            <div className="mb-3  mx-auto flex border border-b-black  border-block-input">
              <div className="w-12 p-1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M13.3333 30L16.6666 26.6667H19.9999L22.2666 24.4C24.5835 25.2072 27.1059 25.204 29.4208 24.391C31.7356 23.5779 33.706 22.0031 35.0093 19.9243C36.3126 17.8456 36.8716 15.386 36.5949 12.9481C36.3183 10.5102 35.2222 8.23848 33.4862 6.50466C31.7502 4.77084 29.4771 3.67765 27.0389 3.40402C24.6007 3.1304 22.1418 3.69253 20.0646 4.99842C17.9875 6.30432 16.4152 8.27662 15.605 10.5925C14.7949 12.9084 14.7948 15.4308 15.6049 17.7467L3.33325 30V36.6667H9.99992L13.3333 33.3334V30Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3332 13.3333C29.2536 13.3333 29.9998 12.5871 29.9998 11.6667C29.9998 10.7462 29.2536 10 28.3332 10C27.4127 10 26.6665 10.7462 26.6665 11.6667C26.6665 12.5871 27.4127 13.3333 28.3332 13.3333Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <input
                type="password"
                className="form-control w-full"
                name="password"
                placeholder="password"
                aria-describedby="password"
              />
            </div>
            <div className="flex  mx-auto">
              <svg
                width="186"
                height="61"
                viewBox="0 0 186 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_524_10081)">
                  <path
                    d="M27.2988 18.1289H31.2891V38.6953C31.7812 38.6953 32.291 38.6895 32.8184 38.6777C33.3574 38.666 33.8906 38.6543 34.418 38.6426C34.957 38.6309 35.4785 38.6191 35.9824 38.6074C36.498 38.584 36.9844 38.5605 37.4414 38.5371C38.5195 38.4902 39.5742 38.4434 40.6055 38.3965C40.6055 38.5957 40.5762 38.8945 40.5176 39.293C40.4707 39.6914 40.4121 40.0957 40.3418 40.5059C40.2715 40.9043 40.2012 41.2559 40.1309 41.5605C40.0723 41.8535 40.0254 42 39.9902 42H27.2988V18.1289ZM43.3301 33.0176C43.3301 31.4707 43.5352 30.1055 43.9453 28.9219C44.3672 27.7383 44.9531 26.748 45.7031 25.9512C46.4648 25.1543 47.3672 24.5508 48.4102 24.1406C49.4648 23.7305 50.625 23.5254 51.8906 23.5254C53.1914 23.5254 54.3633 23.7188 55.4062 24.1055C56.4492 24.4805 57.334 25.0547 58.0605 25.8281C58.7871 26.6016 59.3438 27.5684 59.7305 28.7285C60.1172 29.877 60.3105 31.2246 60.3105 32.7715C60.3105 34.3184 60.1113 35.6895 59.7129 36.8848C59.3262 38.0801 58.7637 39.082 58.0254 39.8906C57.2988 40.6992 56.4141 41.3145 55.3711 41.7363C54.3398 42.1465 53.1797 42.3516 51.8906 42.3516C50.5547 42.3516 49.3535 42.1582 48.2871 41.7715C47.2324 41.373 46.3359 40.7871 45.5977 40.0137C44.8711 39.2285 44.3086 38.2559 43.9102 37.0957C43.5234 35.9238 43.3301 34.5645 43.3301 33.0176ZM51.8906 39.4512C52.6641 39.4512 53.332 39.2871 53.8945 38.959C54.4688 38.6191 54.9375 38.1562 55.3008 37.5703C55.6641 36.9727 55.9336 36.2695 56.1094 35.4609C56.2852 34.6406 56.373 33.7441 56.373 32.7715C56.373 30.6738 56.0156 29.0742 55.3008 27.9727C54.5859 26.8711 53.4492 26.3203 51.8906 26.3203C51.1055 26.3203 50.4199 26.4902 49.834 26.8301C49.2598 27.1582 48.7793 27.6211 48.3926 28.2188C48.0176 28.8164 47.7363 29.5254 47.5488 30.3457C47.3613 31.166 47.2676 32.0566 47.2676 33.0176C47.2676 35.1387 47.6426 36.7441 48.3926 37.834C49.1543 38.9121 50.3203 39.4512 51.8906 39.4512ZM65.3906 41.2793C65.1211 40.9512 64.916 40.5645 64.7754 40.1191C64.6348 39.6621 64.5645 39.1875 64.5645 38.6953C64.5645 38.1562 64.5996 37.6875 64.6699 37.2891C64.752 36.8789 64.8398 36.5391 64.9336 36.2695C65.0391 35.9531 65.1621 35.6836 65.3027 35.4609V34.6523C64.7402 34.0898 64.2891 33.4277 63.9492 32.666C63.6211 31.9043 63.457 30.9785 63.457 29.8887C63.457 28.9043 63.627 28.0254 63.9668 27.252C64.3066 26.4668 64.7871 25.8047 65.4082 25.2656C66.041 24.7148 66.8027 24.293 67.6934 24C68.584 23.707 69.5801 23.5605 70.6816 23.5605H70.6992C71.4727 23.5605 72.1113 23.5898 72.6152 23.6484C73.1309 23.707 73.5469 23.7715 73.8633 23.8418C74.2383 23.9238 74.5312 24.0176 74.7422 24.123L79.6992 23.5957V26.4434H76.834C76.9863 26.5957 77.1445 26.7949 77.3086 27.041C77.4727 27.2871 77.6191 27.5625 77.748 27.8672C77.8887 28.1719 78 28.5 78.082 28.8516C78.1758 29.1914 78.2227 29.5371 78.2227 29.8887C78.2227 30.8613 78.0352 31.7461 77.6602 32.543C77.2852 33.3281 76.7637 34.0078 76.0957 34.582C75.4277 35.1562 74.6309 35.6016 73.7051 35.918C72.791 36.2344 71.7891 36.3926 70.6992 36.3926H70.6816C70.4355 36.3926 70.1719 36.3867 69.8906 36.375C69.6094 36.3516 69.3223 36.3281 69.0293 36.3047C68.7363 36.2695 68.4551 36.2344 68.1855 36.1992C67.916 36.1523 67.6699 36.0996 67.4473 36.041V38.4668C67.4473 38.5957 67.4883 38.707 67.5703 38.8008C67.6523 38.8945 67.752 38.9766 67.8691 39.0469C67.998 39.1055 68.1387 39.1523 68.291 39.1875C68.4434 39.2227 68.5898 39.2402 68.7305 39.2402H75.6738C76.5059 39.2402 77.2031 39.3574 77.7656 39.5918C78.3398 39.8262 78.8027 40.1543 79.1543 40.5762C79.5059 40.9863 79.7578 41.4844 79.9102 42.0703C80.0625 42.6562 80.1387 43.3008 80.1387 44.0039C80.1387 44.8945 79.9395 45.7441 79.541 46.5527C79.1543 47.3613 78.5801 48.0703 77.8184 48.6797C77.0566 49.2891 76.1074 49.7695 74.9707 50.1211C73.8457 50.4844 72.5449 50.666 71.0684 50.666H71.0508C69.832 50.666 68.7422 50.5312 67.7812 50.2617C66.8203 50.0039 66.0059 49.6406 65.3379 49.1719C64.6816 48.7148 64.1777 48.1699 63.8262 47.5371C63.4746 46.9043 63.2988 46.2188 63.2988 45.4805C63.2988 44.9883 63.4043 44.5137 63.6152 44.0566C63.8262 43.5996 64.0664 43.1953 64.3359 42.8438C64.6406 42.4336 64.9922 42.0469 65.3906 41.6836V41.2793ZM70.6992 33.7734C71.3906 33.7734 71.9824 33.709 72.4746 33.5801C72.9668 33.4395 73.3711 33.2168 73.6875 32.9121C74.0039 32.6074 74.2324 32.209 74.373 31.7168C74.5254 31.2246 74.6016 30.6152 74.6016 29.8887C74.6016 28.5645 74.2969 27.6152 73.6875 27.041C73.0781 26.4668 72.082 26.1797 70.6992 26.1797H70.6816C69.9785 26.1797 69.3926 26.25 68.9238 26.3906C68.4551 26.5195 68.0859 26.7363 67.8164 27.041C67.5469 27.334 67.3535 27.7148 67.2363 28.1836C67.1309 28.6523 67.0781 29.2207 67.0781 29.8887C67.0781 30.5449 67.1309 31.1191 67.2363 31.6113C67.3418 32.0918 67.5293 32.4961 67.7988 32.8242C68.0801 33.1406 68.4492 33.3809 68.9062 33.5449C69.375 33.6973 69.9668 33.7734 70.6816 33.7734H70.6992ZM66.7441 44.8301C66.7441 45.1348 66.791 45.457 66.8848 45.7969C66.9785 46.1367 67.1777 46.4473 67.4824 46.7285C67.7988 47.0098 68.2441 47.2383 68.8184 47.4141C69.3926 47.6016 70.166 47.6953 71.1387 47.6953H71.1562C72.082 47.6953 72.8906 47.584 73.582 47.3613C74.2734 47.1504 74.8418 46.8691 75.2871 46.5176C75.7441 46.166 76.084 45.7734 76.3066 45.3398C76.5293 44.9062 76.6406 44.4727 76.6406 44.0391C76.6406 43.4883 76.5293 43.0605 76.3066 42.7559C76.0957 42.4629 75.7793 42.3164 75.3574 42.3164H67.5C67.3594 42.4688 67.1953 42.7676 67.0078 43.2129C66.832 43.6582 66.7441 44.1973 66.7441 44.8301ZM85.623 20.9941C85.2949 20.9941 84.9844 20.9355 84.6914 20.8184C84.4102 20.7012 84.1582 20.543 83.9355 20.3438C83.7246 20.1445 83.5547 19.916 83.4258 19.6582C83.2969 19.3887 83.2324 19.1016 83.2324 18.7969C83.2324 18.4805 83.2969 18.1875 83.4258 17.918C83.5547 17.6484 83.7246 17.4141 83.9355 17.2148C84.1582 17.0156 84.4102 16.8633 84.6914 16.7578C84.9844 16.6406 85.2949 16.582 85.623 16.582C85.9512 16.582 86.2617 16.6406 86.5547 16.7578C86.8477 16.8633 87.0996 17.0156 87.3105 17.2148C87.5332 17.4141 87.709 17.6484 87.8379 17.918C87.9668 18.1875 88.0312 18.4805 88.0312 18.7969C88.0312 19.1016 87.9668 19.3887 87.8379 19.6582C87.709 19.916 87.5332 20.1445 87.3105 20.3438C87.0996 20.543 86.8477 20.7012 86.5547 20.8184C86.2617 20.9355 85.9512 20.9941 85.623 20.9941ZM83.6016 24.0352H87.2578V39.0469L88.2949 39.7852V42H87.293L87.2578 41.9648V42C86.0977 42 85.1953 41.7656 84.5508 41.2969C83.918 40.8281 83.6016 40.0547 83.6016 38.9766V24.0352ZM92.9707 27.252L91.582 25.8281V23.8418H94.8164L96.3281 25.2129L96.8379 25.1074C96.9199 25.0371 97.1074 24.9141 97.4004 24.7383C97.7051 24.5625 98.0742 24.3867 98.5078 24.2109C98.9531 24.0352 99.457 23.8828 100.02 23.7539C100.582 23.6133 101.174 23.543 101.795 23.543C102.779 23.543 103.652 23.6895 104.414 23.9824C105.188 24.2754 105.838 24.6973 106.365 25.248C106.893 25.7871 107.291 26.4375 107.561 27.1992C107.83 27.9609 107.965 28.8164 107.965 29.7656V42H104.186V30.1348C104.186 28.8574 103.916 27.9199 103.377 27.3223C102.85 26.7129 102.006 26.4082 100.846 26.4082C100.271 26.4082 99.7383 26.4609 99.2461 26.5664C98.7539 26.6602 98.3203 26.7715 97.9453 26.9004C97.5117 27.041 97.1074 27.2051 96.7324 27.3926V42H92.9707V27.252Z"
                    fill="#262626"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M155.5 55.9167C169.537 55.9167 180.917 44.5373 180.917 30.5C180.917 16.4628 169.537 5.08337 155.5 5.08337C141.798 5.08337 130.628 15.9263 130.103 29.5H158.169L147.168 18.4988L148.582 17.0846L161.29 29.7929L161.998 30.5L161.29 31.2071L148.582 43.9155L147.168 42.5013L158.169 31.5H130.103C130.628 45.0738 141.798 55.9167 155.5 55.9167Z"
                  fill="#FEA5B7"
                />
                <defs>
                  <filter
                    id="filter0_d_524_10081"
                    x="23.2988"
                    y="16.582"
                    width="88.666"
                    height="42.084"
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
                      result="effect1_dropShadow_524_10081"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_524_10081"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="divider divider-horizontal">OR</div>
              <div className="">
                <button className="">Register</button>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-3 h-20 card bg-base-300 rounded-box place-items-center">
                <div className="">
                  <svg
                    width="39"
                    height="42"
                    viewBox="0 0 39 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39 21C39 9.40201 30.2696 0 19.5 0C8.73044 0 0 9.40201 0 21C0 31.4815 7.13083 40.1695 16.4531 41.7449V27.0703H11.502V21H16.4531V16.3734C16.4531 11.1103 19.3644 8.20312 23.8186 8.20312C25.9514 8.20312 28.1836 8.61328 28.1836 8.61328V13.7812H25.7248C23.3025 13.7812 22.5469 15.4001 22.5469 17.0625V21H27.9551L27.0905 27.0703H22.5469V41.7449C31.8692 40.1695 39 31.4815 39 21Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M27.0905 27.0703L27.9551 21H22.5469V17.0625C22.5469 15.4018 23.3025 13.7812 25.7248 13.7812H28.1836V8.61328C28.1836 8.61328 25.9521 8.20312 23.8186 8.20312C19.3644 8.20312 16.4531 11.1103 16.4531 16.3734V21H11.502V27.0703H16.4531V41.7449C18.4721 42.085 20.5279 42.085 22.5469 41.7449V27.0703H27.0905Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="col-span-2 text-left ml-0">facebook</div>
              </div>
              <div className="divider">OR</div>
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                google
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
