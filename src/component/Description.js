import React from "react";
import Carduser from "./Carduser";

const Description = () => {
  return (
    <>
      <>
        <input
          type="checkbox"
          id="modal-Description"
          className="modal-toggle"
        />
        <label className="modal w-full " for="modal-Description">
          <label
            className="btn-clost-description  sm:hidden"
            for="modal-Description"
          >
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_277_5557)">
                <circle cx="64" cy="44" r="29" fill="white" />
              </g>
              <path
                d="M74.7083 33.2917L54.2916 53.7084"
                stroke="#FEA5B7"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M74.7083 53.7084L54.2916 33.2917"
                stroke="#FEA5B7"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_277_5557"
                  x="0"
                  y="0"
                  width="128"
                  height="128"
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
                  <feMorphology
                    radius="5"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_277_5557"
                  />
                  <feOffset dy="20" />
                  <feGaussianBlur stdDeviation="15" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_277_5557"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_277_5557"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </label>
          <div className="modal-box mt-3 sm:h/4/5  grid lg:grid-cols-2  grid-cols-1">
            <Carduser />
            <div className=" pt-5">
              <div className="grid grid-cols-2">
                <h1 className="text-3xl ">kanomroo</h1>
                <h1 className="text-3xl ml-auto">Age 21</h1>
              </div>
              <hr />
              <div className="my-3">
                <h3 className="text-xl ">higth : 160 cm.</h3>
                <h3 className="text-xl ">weigth : 48 kg.</h3>
                <h3 className="text-xl ">sex : women</h3>
                <h3 className="text-xl ">interested : men</h3>
              </div>
              <div className="text-3xl mt-3">
                <h1 className="text-3xl mb-2">Passions</h1>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                  <div className="text-color-black text-xl card-actions-passion-primary p-auto text-center">
                    Game
                  </div>
                  <div className="text-color-black text-xl card-actions-passion-primary text-center">
                    Music
                  </div>
                  <div className="text-color-black text-xl card-actions-passion-primary text-center">
                    Catlover
                  </div>
                  <div className="text-color-black text-xl card-actions-passion-secondary text-center">
                    Doglover
                  </div>
                  <div className="text-color-black text-xl card-actions-passion-secondary text-center">
                    Netflix
                  </div>
                </div>
              </div>
              <div className="text-3xl mt-3">
                <h1 className="text-3xl mb-2">Album</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                  <img src="https://cdn.discordapp.com/attachments/662893950687772684/938833115776974968/unknown.png" alt="..." className="bg-black user-description rounded-2xl"/>
                  <img src="https://cdn.discordapp.com/attachments/662893950687772684/938833115776974968/unknown.png" alt="..." className="bg-black user-description rounded-2xl"/>
                  <img src="https://cdn.discordapp.com/attachments/662893950687772684/938833115776974968/unknown.png" alt="..." className="bg-black user-description rounded-2xl"/>
                  <img src="https://cdn.discordapp.com/attachments/662893950687772684/938833115776974968/unknown.png" alt="..." className="bg-black user-description rounded-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </label>
      </>
    </>
  );
};

export default Description;
