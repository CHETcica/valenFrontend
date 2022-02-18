import React from "react";

const Login = () => {
  return (
    <>
      <div className="my-3 mb-10 container mx-auto grid md:grid-cols-2 sm:grid-cols-1  border-solid ">
        <div className="sm:hidden md:block p-3 m-3 mx-auto bg-red h-full w-full "></div>

        <div className=" p-3 m-3 mx-auto card  h-full w-full bg-base-100 shadow-xl ">
          <form className="block mx-auto  w-2/4">
            <h1 className="mt-4 text-3xl "> LOGIN </h1>
            <hr className="my-3"></hr>
            <div className=" mb-3 w-full mx-auto flex border ">
              <svg
                className="flex-none"
                width="54"
                height="51"
                viewBox="0 0 54 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3419 27.625C39.4402 27.625 44.0362 35.8858 46.3405 42.0159C46.8198 43.2911 45.8472 44.625 44.4849 44.625H15.1759M27.3419 27.625C24.0239 27.625 16.2819 25.5 16.2819 17C16.2819 10.625 20.7059 6.375 27.3419 6.375C33.978 6.375 38.402 10.625 38.402 17C38.402 21.25 35.3052 27.625 27.3419 27.625ZM27.3419 27.625C16.2958 27.625 11.5038 34.5114 9 40.375"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="text"
                className="form-control w-full border border-inherit bg-inherit"
                name="firstname"
                placeholder="User name"
                aria-describedby="firstname"
              />
            </div>
            
            <div className="mb-3 w-full mx-auto flex">
              <svg
                flex-none
                w-14
                h-14
                width="44"
                height="33"
                viewBox="0 0 44 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M13.3333 25.6638L17.4444 22.5805H21.5555L24.3511 20.4838C27.2087 21.2305 30.3195 21.2275 33.1746 20.4755C36.0296 19.7234 38.4597 18.2667 40.0671 16.3438C41.6745 14.421 42.364 12.1459 42.0227 9.89082C41.6815 7.63578 40.3297 5.5344 38.1887 3.93062C36.0476 2.32683 33.2441 1.31564 30.2369 1.06253C27.2298 0.809422 24.1972 1.3294 21.6354 2.53735C19.0736 3.7453 17.1344 5.56968 16.1352 7.71189C15.136 9.85411 15.1359 12.1873 16.135 14.3295L1 25.6638V31.8305H9.22222L13.3333 28.7472V25.6638Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.8334 10.2472C32.9687 10.2472 33.889 9.55693 33.889 8.70549C33.889 7.85405 32.9687 7.16382 31.8334 7.16382C30.6982 7.16382 29.7778 7.85405 29.7778 8.70549C29.7778 9.55693 30.6982 10.2472 31.8334 10.2472Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <label for="firstname" className="form-label"></label>
              <input
                type="password"
                className="form-control w-full border border-b-black bg-inherit"
                name="firstname"
                placeholder="password"
                aria-describedby="firstname"
              />
            </div>
            <div className=""> 
              <button className="btn mt-3 mx-auto">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
