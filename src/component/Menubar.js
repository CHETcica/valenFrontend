import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="menubar navbar shadow-lg text-neutral-content h-7">
      <div className="mx-auto">
        <Link to={"/"} className="flex-1 mx-4 text-2xl">
          <div className="flex">
            <div className="flex-1">
              <svg
                width="39"
                height="41"
                viewBox="0 0 39 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.1003 16.2364L21.041 2.19702C20.176 1.44084 18.8845 1.44084 18.0195 2.19701L1.96021 16.2364C1.46234 16.6717 1.17676 17.3005 1.17676 17.9615V37.5507C1.17676 38.8166 2.2039 39.8429 3.47094 39.8429H12.6477C13.9147 39.8429 14.9419 38.8166 14.9419 37.5507V28.3821C14.9419 27.1162 15.969 26.09 17.236 26.09H21.8244C23.0915 26.09 24.1186 27.1162 24.1186 28.3821V37.5507C24.1186 38.8166 25.1457 39.8429 26.4128 39.8429H35.5895C36.8566 39.8429 37.8837 38.8166 37.8837 37.5507V17.9615C37.8837 17.3005 37.5981 16.6717 37.1003 16.2364Z"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="my-auto ml-2 lg:flex hidden">Home</div>
          </div>
        </Link>
        <Link to={"/chat"} className="flex-1 mx-4 text-2xl">
          <div className="flex">
            <div className="flex-1">
              <svg
                width="45"
                height="39"
                viewBox="0 0 45 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.28329 26.5426L8.81869 25.698C8.56495 25.5371 8.25235 25.4989 7.96732 25.5938L8.28329 26.5426ZM1.88257 28.6743L0.933969 28.3578C0.814095 28.7171 0.907512 29.1133 1.17527 29.3812C1.44303 29.6491 1.83918 29.7427 2.19854 29.623L1.88257 28.6743ZM4.01614 22.2792L4.96474 22.5957C5.05997 22.3103 5.02161 21.9971 4.86032 21.7431L4.01614 22.2792ZM15.6477 29.6743C23.8014 29.6743 30.4128 23.07 30.4128 14.9214H28.4128C28.4128 21.9638 22.6985 27.6743 15.6477 27.6743V29.6743ZM7.7479 27.3872C10.0329 28.8357 12.7438 29.6743 15.6477 29.6743V27.6743C13.134 27.6743 10.7929 26.9494 8.81869 25.698L7.7479 27.3872ZM7.96732 25.5938L1.56659 27.7255L2.19854 29.623L8.59927 27.4914L7.96732 25.5938ZM2.83117 28.9908L4.96474 22.5957L3.06754 21.9627L0.933969 28.3578L2.83117 28.9908ZM0.882568 14.9214C0.882568 17.8232 1.72207 20.5321 3.17197 22.8153L4.86032 21.7431C3.60789 19.7709 2.88257 17.4323 2.88257 14.9214H0.882568ZM15.6477 0.168457C7.49397 0.168457 0.882568 6.77272 0.882568 14.9214H2.88257C2.88257 7.87896 8.59686 2.16846 15.6477 2.16846V0.168457ZM30.4128 14.9214C30.4128 6.77272 23.8014 0.168457 15.6477 0.168457V2.16846C22.6985 2.16846 28.4128 7.87896 28.4128 14.9214H30.4128Z"
                  fill="#C58CF2"
                />
                <path
                  d="M16.4229 28.6508C18.3058 34.0048 23.4108 37.8432 29.4131 37.8432C32.1218 37.8432 34.648 37.0616 36.7774 35.7115L43.1782 37.8432L41.0446 31.4481L41.3705 30.9081C42.5208 28.8986 43.1782 26.5711 43.1782 24.0903C43.1782 16.4948 37.0153 10.3374 29.4131 10.3374L28.8971 10.3469L28.638 10.3606"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="my-auto ml-2 lg:flex hidden">Chat</div>
          </div>
        </Link>
        <label
          herf="#"
          className="flex-1 mx-4 text-2xl drawer-button"
          htmlFor="my-drawer-4"
        >
          <div className="flex">
            <div className="flex-1">
              <svg
                width="45"
                height="39"
                viewBox="0 0 45 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9419 33.2588H43.1779"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.88257 33.2588H8.76512"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.76514 37.8429L8.76514 28.6743"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.8838 19.5059H43.178"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.88257 19.5059H31.707"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.707 24.09L31.707 14.9214"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.1187 5.75293H43.1779"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.88257 5.75293H17.9419"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.9419 10.3371L17.9419 1.16846"
                  stroke="#C58CF2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="my-auto ml-2 lg:flex hidden">Setting</div>
          </div>
        </label>
        <div className="dropdown flex-1 mx-4 text-2xl ">
          <label className="flex" tabindex="0">
            <div className="flex-1">
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.2222 27.0599V27.5053L37.5533 27.8032L41.6311 31.4732L41.6324 31.4744C41.7571 31.5863 41.8496 31.7134 41.9104 31.8453C41.971 31.9768 42.0002 32.1135 42 32.2484V32.25V34.4C42 34.669 41.8822 34.9512 41.6313 35.177C41.377 35.4059 41.0115 35.55 40.6111 35.55H2.38889C1.98852 35.55 1.623 35.4059 1.36866 35.177C1.11779 34.9512 1 34.669 1 34.4L1 32.25L1 32.2484C0.999784 32.1135 1.02904 31.9768 1.08961 31.8453C1.15036 31.7134 1.24287 31.5863 1.36757 31.4744L1.36891 31.4732L5.44674 27.8032L5.77778 27.5053V27.0599V17.2C5.77778 10.8209 10.604 5.33895 17.3094 3.67527L17.7855 3.55714L17.9835 3.10831C18.5103 1.9141 19.8413 1 21.5 1C23.1587 1 24.4896 1.9141 25.0165 3.10831L25.2145 3.5573L25.6909 3.67534C32.3958 5.33686 37.2222 10.8207 37.2222 17.2V27.0599ZM21.5011 42H21.4989C20.2038 42.0015 18.9489 41.6393 17.9091 40.9751C17.3509 40.6185 16.8718 40.1861 16.4852 39.7H26.5148C26.1282 40.1861 25.6491 40.6185 25.0909 40.9751C24.0511 41.6393 22.7962 42.0015 21.5011 42Z"
                  stroke="#C58CF2"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="my-auto ml-2 lg:flex hidden">Warn</div>
          </label>
          <ul
            tabindex="0"
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-96"
          >
            <li>
              <a>
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212" />
                  </div>
                </div>
                <div className="">
                  <p className="text-xl">Successful Match</p>
                  <p className="text-xs">kanomroo match</p>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212" />
                  </div>
                </div>
                <div className="">
                  <p className="text-xl">Successful Match</p>
                  <p className="text-xs">LittleBeam match</p>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212" />
                  </div>
                </div>
                <div className="">
                  <p className="text-xl">SuperLike</p>
                  <p className="text-xs">Meijimill</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
