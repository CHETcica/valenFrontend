import React from "react";
import BinGroupt, { BtnGroupt } from "./BtnGroupt";
const Carduser = () => {
  return (
    <>
      <div className=" m-auto md:w-80 my-6">
        <div className="card shadow-xl image-full border-card-solid border-solid border-2 text-color-black">
          <figure className="userimage">
            <img src="https://cdn.discordapp.com/attachments/662893950687772684/938833115776974968/unknown.png" />
          </figure>
          <div className="justify-end card-body mt-80 ">
            <div className="grid grid-cols-2 ">
              <h2 className="card-title my-auto text-color-black">Kanomroo</h2>
              <label
                className="my-auto ml-auto modal-button"
                htmlFor="modal-Description"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.74924 19C14.3294 19 18.0423 14.9706 18.0423 10C18.0423 5.02944 14.3294 1 9.74924 1C5.16911 1 1.45618 5.02944 1.45618 10C1.45618 14.9706 5.16911 19 9.74924 19Z"
                    stroke="#C58CF2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.74924 9V14"
                    stroke="#C58CF2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.70335 6H9.79549V6.1H9.70335V6Z"
                    stroke="#C58CF2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
            </div>
            <p className="text-color-black">
              Rerum necessitatibus veritatis iure sapiente.
            </p>
            <hr className="text-color-black" />
            <div className="lx:hidden card-actions ">
              <div className="text-color-black card-actions-passion ">Game</div>
              <div className="text-color-black card-actions-passion ">
                Music
              </div>
            </div>
            <div className="sm:card-actions md:hidden ">
              <BtnGroupt/>
            </div>
          </div>
        </div>
        <div className="btn-groupt-hidden">
          <BtnGroupt/>
        </div>
      </div>
    </>
  );
};

export default Carduser;
