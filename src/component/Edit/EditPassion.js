import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassion } from "../../action";
import { useNavigate, Link } from "react-router-dom";
import { updateUserPassion } from "../../action/update";
import { Alertsuccess } from "../Alert";

const EditPassion = () => {
  const passions = useSelector((state) => state.passions);
  const usersignin = useSelector((state) => state.signs);
  const myid = usersignin.user._id;
  let status = false;
  const [count, setCount] = useState(0);
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    disPatch(updateUserPassion(myid, data.Passion));
    ShowAlert()
    // navigate("/profile");
  };

  const ShowAlert = () => {
    var button = document.getElementById("alertsuccess");
    button.style.display === "none"
      ? (button.style.display = "block").setTimeout(() => {
          button.style.display = "none";
        }, 300)
      : (button.style.display = "none");
  };
  const passion1 = passions.passion;
  const passion = [
    {
      _id: "62a2cecd685b9f2480878d7f",
      name: "reading",
      nameTH: "การอ่าน",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2cfcd685b9f2480878d81",
      name: "writing",
      nameTH: "การเขียน",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2cfe5685b9f2480878d83",
      name: "runing",
      nameTH: "การวิ่ง",
      type: "sport+exercise",
      __v: 0,
    },
    {
      _id: "62a2d0a9685b9f2480878d85",
      name: "cycling",
      nameTH: "การปั่นจักรยาน",
      type: "sport+exercise",
      __v: 0,
    },
    {
      _id: "62a2d0bb685b9f2480878d87",
      name: "skating",
      nameTH: "เซิร์ฟสเก็ต",
      type: "sport+exercise",
      __v: 0,
    },
  ];

  useEffect(() => {
    disPatch(fetchPassion());
  }, []);
  return (
    <div className="container mx-auto w-100%">
      <div id="alertsuccess" className="card__passion--alertsuccess">
        <Alertsuccess />
      </div>
      <div className="card__passion--bg mx-auto mt-5 drop-shadow-2xl">
        <h1 className="card__passion--title text-center">Passion</h1>
        <h3 className="card__passion--subtitle text-center mt-2">
          Let the world know what you like Add Passion to your profile.
        </h3>
        <div className="m-5 ">
          <form onSubmit={handleSubmit(onSubmit)} class="container">
            <ul class="ks-cboxtags">
              {passion.map((el) => (
                <li>
                  <input
                    type="checkbox"
                    id={el.name}
                    value={el.name}
                    defaultChecked={status}
                    {...register("Passion")}
                  />
                  <label for={el.name}>{el.name}</label>
                </li>
              ))}
            </ul>
            <div className="w-100% text-center mb-5">
              <button
                type="submit"
                className="card__passion--submit mx-auto mb-5 w-100% text-center"
              >
                {"Next(" + count + "/5)"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditPassion;
