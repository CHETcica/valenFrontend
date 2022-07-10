import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassion } from "../../action";

const EditPassion = () => {
  const passions = useSelector((state) => state.passions);
  // console.log(passions.passion);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data.Passion);
  console.log(errors);

  // var numberOfChecked = "input:checkbox:checked".length;
  // document.getElementById("Next").innerHTML = "Next("+numberOfChecked+"/5)";

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

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(
      fetchPassion()
      // numberOfChecked = "input:checkbox:checked".length
    );
    // console.log(numberOfChecked);
  }, []);
  return (
    <div className="container mx-auto w-100%">
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
                    {...register("Passion")}
                  />
                  <label for={el.name}>{el.name}</label>
                </li>
              ))}
            </ul>
            <div className="w-100% text-center ">
              <button className="card__passion--submit mx-auto mb-5" id="Next">
                Next(0/5)
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditPassion;
