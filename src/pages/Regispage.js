import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../action";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  AlertPasswordsnotmatch,
  AlertPleaseenterpassword,
} from "../component/Alert";

const Reagispage = () => {
  // const [submitted, setSubmitted] = useState(false);
  // const [username, setUsername] = useState("");
  // const [password1, setPassword1] = useState("");
  // const [password2, setPassword2] = useState("");
  // const [email, setEmail] = useState("");
  // const [birthday, setBirthday] = useState("");
  // const navigate = useNavigate();
  // const disPatch = useDispatch();
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   disPatch(userSignup(username, email, password1, birthday));
  //   setSubmitted(true);
  //   navigate("/login")
  // }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="my-3 mb-10 container mx-auto grid md:grid-cols-2 sm:grid-cols-1  border-solid ">
      <div className="sm:hidden md:block p-3 m-3 mx-auto  h-full w-full bg-no-repeat bg-[url('https://i.pinimg.com/564x/ab/11/d2/ab11d2259be6bc12a112df7499026ed7.jpg')]">
        {/* {submitted? password1 !== password2 ? <AlertPasswordsnotmatch /> : "" : ""}
          {!password1 || !password2 ? <AlertPleaseenterpassword /> :""} */}
      </div>
      <div className=" p-3 m-3 mx-auto card  h-full w-full bg-white shadow-xl ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="block mx-auto  w-2/4"
        >
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
              {...register("firstname")}
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
              type="email"
              className="form-control w-full"
              {...register("email")}
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
              {...register("password")}
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
              placeholder="Confirm Password"
              {...register("confirmpassword")}
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
              className="form-control w-full grid grid-cols-2 "
              placeholder="Born"
              {...register("birthday")}
            />
          </div>
          <div className="">
            <button type="submit" className=" h-18 mt-3 px-auto">
              <svg
                width="135"
                height="42"
                viewBox="0 0 135 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_12_10)">
                  <path
                    d="M4.96484 27.4258C4.98047 27.2461 5.00781 27.043 5.04688 26.8164C5.08594 26.6289 5.13672 26.4062 5.19922 26.1484C5.26953 25.8828 5.37109 25.5977 5.50391 25.293C5.92578 25.4336 6.35547 25.5586 6.79297 25.668C7.16797 25.7617 7.57812 25.8477 8.02344 25.9258C8.46875 26.0039 8.89453 26.043 9.30078 26.043C9.91797 26.043 10.4336 25.9961 10.8477 25.9023C11.2695 25.8086 11.6055 25.6719 11.8555 25.4922C12.1133 25.3047 12.2969 25.0742 12.4062 24.8008C12.5156 24.5195 12.5703 24.1953 12.5703 23.8281C12.5703 23.4141 12.5117 23.0625 12.3945 22.7734C12.2852 22.4844 12.1133 22.2344 11.8789 22.0234C11.6523 21.8125 11.3594 21.6328 11 21.4844C10.6406 21.3359 10.2148 21.1914 9.72266 21.0508C8.86328 20.8164 8.13672 20.5625 7.54297 20.2891C6.94922 20.0078 6.46484 19.6875 6.08984 19.3281C5.72266 18.9688 5.45703 18.5625 5.29297 18.1094C5.12891 17.6484 5.04688 17.125 5.04688 16.5391C5.04688 15.6953 5.17578 14.9727 5.43359 14.3711C5.69922 13.7695 6.07031 13.2773 6.54688 12.8945C7.03125 12.5117 7.61328 12.2305 8.29297 12.0508C8.98047 11.8711 9.74609 11.7812 10.5898 11.7812C11.2383 11.7812 11.8047 11.832 12.2891 11.9336C12.7812 12.0352 13.1953 12.1445 13.5312 12.2617C13.9219 12.4023 14.2617 12.5625 14.5508 12.7422C14.5273 12.9219 14.4805 13.1172 14.4102 13.3281C14.3477 13.5078 14.2617 13.7188 14.1523 13.9609C14.043 14.2031 13.8906 14.4648 13.6953 14.7461C13.4609 14.5898 13.1875 14.4492 12.875 14.3242C12.6016 14.2148 12.2695 14.1172 11.8789 14.0312C11.4961 13.9375 11.0508 13.8906 10.543 13.8906C9.98828 13.8906 9.51953 13.9336 9.13672 14.0195C8.76172 14.1055 8.45312 14.2422 8.21094 14.4297C7.96875 14.6094 7.79297 14.8398 7.68359 15.1211C7.58203 15.3945 7.53125 15.7227 7.53125 16.1055C7.53125 16.5352 7.58594 16.8945 7.69531 17.1836C7.80469 17.4648 7.98047 17.707 8.22266 17.9102C8.46484 18.1055 8.77734 18.2773 9.16016 18.4258C9.55078 18.5742 10.0195 18.7266 10.5664 18.8828C11.3867 19.1094 12.0859 19.3516 12.6641 19.6094C13.2422 19.8672 13.7109 20.168 14.0703 20.5117C14.4375 20.8555 14.7031 21.2656 14.8672 21.7422C15.0391 22.2109 15.125 22.7773 15.125 23.4414C15.125 24.2617 15.0195 24.9766 14.8086 25.5859C14.5977 26.1875 14.2617 26.6914 13.8008 27.0977C13.3398 27.5039 12.7461 27.8047 12.0195 28C11.293 28.2031 10.418 28.3047 9.39453 28.3047C8.78516 28.3047 8.21094 28.2578 7.67188 28.1641C7.13281 28.0781 6.66406 27.9805 6.26562 27.8711C5.78906 27.7383 5.35547 27.5898 4.96484 27.4258ZM19.3906 13.9961C19.1719 13.9961 18.9648 13.957 18.7695 13.8789C18.582 13.8008 18.4141 13.6953 18.2656 13.5625C18.125 13.4297 18.0117 13.2773 17.9258 13.1055C17.8398 12.9258 17.7969 12.7344 17.7969 12.5312C17.7969 12.3203 17.8398 12.125 17.9258 11.9453C18.0117 11.7656 18.125 11.6094 18.2656 11.4766C18.4141 11.3438 18.582 11.2422 18.7695 11.1719C18.9648 11.0938 19.1719 11.0547 19.3906 11.0547C19.6094 11.0547 19.8164 11.0938 20.0117 11.1719C20.207 11.2422 20.375 11.3438 20.5156 11.4766C20.6641 11.6094 20.7812 11.7656 20.8672 11.9453C20.9531 12.125 20.9961 12.3203 20.9961 12.5312C20.9961 12.7344 20.9531 12.9258 20.8672 13.1055C20.7812 13.2773 20.6641 13.4297 20.5156 13.5625C20.375 13.6953 20.207 13.8008 20.0117 13.8789C19.8164 13.957 19.6094 13.9961 19.3906 13.9961ZM18.043 16.0234H20.4805V26.0312L21.1719 26.5234V28H20.5039L20.4805 27.9766V28C19.707 28 19.1055 27.8438 18.6758 27.5312C18.2539 27.2188 18.043 26.7031 18.043 25.9844V16.0234ZM25.0039 27.5195C24.8242 27.3008 24.6875 27.043 24.5938 26.7461C24.5 26.4414 24.4531 26.125 24.4531 25.7969C24.4531 25.4375 24.4766 25.125 24.5234 24.8594C24.5781 24.5859 24.6367 24.3594 24.6992 24.1797C24.7695 23.9688 24.8516 23.7891 24.9453 23.6406V23.1016C24.5703 22.7266 24.2695 22.2852 24.043 21.7773C23.8242 21.2695 23.7148 20.6523 23.7148 19.9258C23.7148 19.2695 23.8281 18.6836 24.0547 18.168C24.2812 17.6445 24.6016 17.2031 25.0156 16.8438C25.4375 16.4766 25.9453 16.1953 26.5391 16C27.1328 15.8047 27.7969 15.707 28.5312 15.707H28.543C29.0586 15.707 29.4844 15.7266 29.8203 15.7656C30.1641 15.8047 30.4414 15.8477 30.6523 15.8945C30.9023 15.9492 31.0977 16.0117 31.2383 16.082L34.543 15.7305V17.6289H32.6328C32.7344 17.7305 32.8398 17.8633 32.9492 18.0273C33.0586 18.1914 33.1562 18.375 33.2422 18.5781C33.3359 18.7812 33.4102 19 33.4648 19.2344C33.5273 19.4609 33.5586 19.6914 33.5586 19.9258C33.5586 20.5742 33.4336 21.1641 33.1836 21.6953C32.9336 22.2188 32.5859 22.6719 32.1406 23.0547C31.6953 23.4375 31.1641 23.7344 30.5469 23.9453C29.9375 24.1562 29.2695 24.2617 28.543 24.2617H28.5312C28.3672 24.2617 28.1914 24.2578 28.0039 24.25C27.8164 24.2344 27.625 24.2188 27.4297 24.2031C27.2344 24.1797 27.0469 24.1562 26.8672 24.1328C26.6875 24.1016 26.5234 24.0664 26.375 24.0273V25.6445C26.375 25.7305 26.4023 25.8047 26.457 25.8672C26.5117 25.9297 26.5781 25.9844 26.6562 26.0312C26.7422 26.0703 26.8359 26.1016 26.9375 26.125C27.0391 26.1484 27.1367 26.1602 27.2305 26.1602H31.8594C32.4141 26.1602 32.8789 26.2383 33.2539 26.3945C33.6367 26.5508 33.9453 26.7695 34.1797 27.0508C34.4141 27.3242 34.582 27.6562 34.6836 28.0469C34.7852 28.4375 34.8359 28.8672 34.8359 29.3359C34.8359 29.9297 34.7031 30.4961 34.4375 31.0352C34.1797 31.5742 33.7969 32.0469 33.2891 32.4531C32.7812 32.8594 32.1484 33.1797 31.3906 33.4141C30.6406 33.6562 29.7734 33.7773 28.7891 33.7773H28.7773C27.9648 33.7773 27.2383 33.6875 26.5977 33.5078C25.957 33.3359 25.4141 33.0938 24.9688 32.7812C24.5312 32.4766 24.1953 32.1133 23.9609 31.6914C23.7266 31.2695 23.6094 30.8125 23.6094 30.3203C23.6094 29.9922 23.6797 29.6758 23.8203 29.3711C23.9609 29.0664 24.1211 28.7969 24.3008 28.5625C24.5039 28.2891 24.7383 28.0312 25.0039 27.7891V27.5195ZM28.543 22.5156C29.0039 22.5156 29.3984 22.4727 29.7266 22.3867C30.0547 22.293 30.3242 22.1445 30.5352 21.9414C30.7461 21.7383 30.8984 21.4727 30.9922 21.1445C31.0938 20.8164 31.1445 20.4102 31.1445 19.9258C31.1445 19.043 30.9414 18.4102 30.5352 18.0273C30.1289 17.6445 29.4648 17.4531 28.543 17.4531H28.5312C28.0625 17.4531 27.6719 17.5 27.3594 17.5938C27.0469 17.6797 26.8008 17.8242 26.6211 18.0273C26.4414 18.2227 26.3125 18.4766 26.2344 18.7891C26.1641 19.1016 26.1289 19.4805 26.1289 19.9258C26.1289 20.3633 26.1641 20.7461 26.2344 21.0742C26.3047 21.3945 26.4297 21.6641 26.6094 21.8828C26.7969 22.0938 27.043 22.2539 27.3477 22.3633C27.6602 22.4648 28.0547 22.5156 28.5312 22.5156H28.543ZM25.9062 29.8867C25.9062 30.0898 25.9375 30.3047 26 30.5312C26.0625 30.7578 26.1953 30.9648 26.3984 31.1523C26.6094 31.3398 26.9062 31.4922 27.2891 31.6094C27.6719 31.7344 28.1875 31.7969 28.8359 31.7969H28.8477C29.4648 31.7969 30.0039 31.7227 30.4648 31.5742C30.9258 31.4336 31.3047 31.2461 31.6016 31.0117C31.9062 30.7773 32.1328 30.5156 32.2812 30.2266C32.4297 29.9375 32.5039 29.6484 32.5039 29.3594C32.5039 28.9922 32.4297 28.707 32.2812 28.5039C32.1406 28.3086 31.9297 28.2109 31.6484 28.2109H26.4102C26.3164 28.3125 26.207 28.5117 26.082 28.8086C25.9648 29.1055 25.9062 29.4648 25.9062 29.8867ZM37.2734 18.168L36.3477 17.2188V15.8945H38.5039L39.5117 16.8086L39.8516 16.7383C39.9062 16.6914 40.0312 16.6094 40.2266 16.4922C40.4297 16.375 40.6758 16.2578 40.9648 16.1406C41.2617 16.0234 41.5977 15.9219 41.9727 15.8359C42.3477 15.7422 42.7422 15.6953 43.1562 15.6953C43.8125 15.6953 44.3945 15.793 44.9023 15.9883C45.418 16.1836 45.8516 16.4648 46.2031 16.832C46.5547 17.1914 46.8203 17.625 47 18.1328C47.1797 18.6406 47.2695 19.2109 47.2695 19.8438V28H44.75V20.0898C44.75 19.2383 44.5703 18.6133 44.2109 18.2148C43.8594 17.8086 43.2969 17.6055 42.5234 17.6055C42.1406 17.6055 41.7852 17.6406 41.457 17.7109C41.1289 17.7734 40.8398 17.8477 40.5898 17.9336C40.3008 18.0273 40.0312 18.1367 39.7812 18.2617V28H37.2734V18.168ZM56.9844 16.0234H59.4922V23.8516C59.4922 24.6875 59.6562 25.3086 59.9844 25.7148C60.3125 26.1133 60.8633 26.3125 61.6367 26.3125C62.0117 26.3125 62.3516 26.2812 62.6562 26.2188C62.9609 26.1562 63.2266 26.082 63.4531 25.9961C63.7109 25.9023 63.9414 25.793 64.1445 25.668V16.0234H66.6641V26.0664L67.707 27.2617V28H65.4453L64.5195 27.0742H64.0742C64.0117 27.1211 63.8945 27.207 63.7227 27.332C63.5508 27.457 63.3281 27.5898 63.0547 27.7305C62.7891 27.8633 62.4805 27.9805 62.1289 28.082C61.7773 28.1836 61.3945 28.2344 60.9805 28.2344C60.3242 28.2344 59.7461 28.1367 59.2461 27.9414C58.7461 27.7461 58.3281 27.4688 57.9922 27.1094C57.6562 26.7422 57.4023 26.3047 57.2305 25.7969C57.0664 25.2812 56.9844 24.707 56.9844 24.0742V16.0234ZM72.582 32.7461H70.0742V17.582L69.1484 16.6328V15.8945H71.293L72.2188 16.7031L72.6523 16.7266C72.6992 16.6797 72.8008 16.6016 72.957 16.4922C73.1211 16.375 73.3359 16.2578 73.6016 16.1406C73.8672 16.0156 74.1836 15.9102 74.5508 15.8242C74.918 15.7305 75.3281 15.6836 75.7812 15.6836C76.3594 15.6836 76.9219 15.7773 77.4688 15.9648C78.0234 16.1523 78.5117 16.4766 78.9336 16.9375C79.3633 17.3984 79.707 18.0234 79.9648 18.8125C80.2227 19.5938 80.3516 20.582 80.3516 21.7773C80.3516 22.8086 80.1914 23.7266 79.8711 24.5312C79.5586 25.3359 79.1367 26.0117 78.6055 26.5586C78.0742 27.1055 77.4531 27.5234 76.7422 27.8125C76.0391 28.0938 75.2969 28.2344 74.5156 28.2344C74.3125 28.2344 74.0938 28.2266 73.8594 28.2109C73.6328 28.1953 73.4258 28.1758 73.2383 28.1523C73.0117 28.1289 72.793 28.1016 72.582 28.0703V32.7461ZM72.582 26.2656C72.7148 26.3047 72.8945 26.3398 73.1211 26.3711C73.3477 26.4023 73.5977 26.418 73.8711 26.418C74.457 26.418 74.9883 26.3086 75.4648 26.0898C75.9414 25.8633 76.3438 25.5508 76.6719 25.1523C77.0078 24.7461 77.2656 24.2578 77.4453 23.6875C77.6328 23.1172 77.7266 22.4805 77.7266 21.7773C77.7266 20.9102 77.6484 20.207 77.4922 19.668C77.3438 19.1211 77.125 18.6953 76.8359 18.3906C76.5547 18.0781 76.2109 17.8672 75.8047 17.7578C75.3984 17.6484 74.9453 17.5938 74.4453 17.5938C74.2266 17.5938 74.0078 17.6289 73.7891 17.6992C73.5703 17.7617 73.3711 17.8359 73.1914 17.9219C72.9805 18.0156 72.7773 18.1211 72.582 18.2383V26.2656Z"
                    fill="#262626"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M114 38.5C123.665 38.5 131.5 30.665 131.5 21C131.5 11.335 123.665 3.5 114 3.5C104.671 3.5 97.0463 10.8003 96.5281 20H115.086L108.043 12.9571L109.457 11.5429L118.207 20.2929L118.914 21L118.207 21.7071L109.457 30.4571L108.043 29.0429L115.086 22H96.5281C97.0463 31.1997 104.671 38.5 114 38.5Z"
                  fill="#FEA5B7"
                />
                <defs>
                  <filter
                    id="filter0_d_12_10"
                    x="0.964844"
                    y="11.0547"
                    width="83.3867"
                    height="30.7227"
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
                      result="effect1_dropShadow_12_10"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_12_10"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Reagispage;
