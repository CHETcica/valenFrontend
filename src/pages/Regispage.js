import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../action";
import {
  AlertPasswordsnotmatch,
  AlertPleaseenterpassword,
} from "../component/Alert";

const Reagispage = () => {
  const [submitted, setSubmitted] = useState(false);

  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const disPatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    disPatch(userSignup(username, email, password1, birthday));
    setSubmitted(true);
  }
  return (
    <>
      <div className="my-3 mb-10 container mx-auto grid md:grid-cols-2 sm:grid-cols-1  border-solid ">
        <div className="sm:hidden md:block p-3 m-3 mx-auto  h-full w-full bg-no-repeat bg-[url('https://i.pinimg.com/564x/ab/11/d2/ab11d2259be6bc12a112df7499026ed7.jpg')]">
          {submitted? password1 !== password2 ? <AlertPasswordsnotmatch /> : "" : ""}
          {password1 !== password2 ? <AlertPleaseenterpassword /> :""}
        </div>
        <div className=" p-3 m-3 mx-auto card  h-full w-full bg-white shadow-xl ">
          <form onSubmit={handleSubmit} className="block mx-auto  w-2/4">
            <h1 className="my-4 text-3xl ">Register</h1>

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
                name="firstname"
                placeholder="User name"
                aria-describedby="firstname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3  mx-auto flex border border-b-black  border-block-input">
              <div className="w-12 p-1">
                <svg
                  width="39"
                  height="27"
                  viewBox="0 0 39 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 15.2857L1 2.933C1 1.32743 2.99392 0.424278 4.36237 1.41L14.6338 8.80873C17.6431 10.9764 21.8569 10.9764 24.8662 8.80873L35.1376 1.41C36.5061 0.424279 38.5 1.32743 38.5 2.933V24.0706C38.5 25.1362 37.5673 26 36.4167 26L3.08334 26C1.93274 26 1 25.1362 1 24.0706L1 20.6429"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="form-control w-full"
                name="firstname"
                placeholder="E-mail"
                aria-describedby="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                name="firstname"
                placeholder="password"
                aria-describedby="firstname"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 w-full mx-auto flex border border-b-black  border-block-input">
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
                name="firstname"
                placeholder="Confirm Password"
                aria-describedby="firstname"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 w-full mx-auto flex border border-b-black  border-block-input">
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
                      d="M29.9999 6.66675H9.99992C6.31802 6.66675 3.33325 9.65152 3.33325 13.3334V30.0001C3.33325 33.682 6.31802 36.6667 9.99992 36.6667H29.9999C33.6818 36.6667 36.6666 33.682 36.6666 30.0001V13.3334C36.6666 9.65152 33.6818 6.66675 29.9999 6.66675Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3333 3.33337V10"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.6665 3.33337V10"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33325 16.6667H36.6666"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <input
                type="date"
                className="form-control w-full "
                name="birthday"
                placeholder="Born"
                aria-describedby="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </div>
            <div type="submit" className="">
              <button className="btn mt-3 mx-auto">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reagispage;
