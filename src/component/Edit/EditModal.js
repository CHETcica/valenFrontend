import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../action";

export const EditModal = (props) => {
  const { title, value } = props;

  return (
    <div>
      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{value}</p>

          <div className="modal-action">
            <label
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              กลับ
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditModal1 = (props) => {
  const { hobby, chosen } = props;

  return (
    <div>
      <input type="checkbox" id={hobby} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96">
          <h3 className="font-bold text-lg">{hobby}</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text border-l-4"> {chosen}</span>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  className="checkbox"
                />
              </label>
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor={hobby}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              กลับ
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditModal4 = (props) => {
  const usersignin = useSelector((state) => state.signs);
  const myid = usersignin.user._id;
  const { title, value } = props;
  const { register, handleSubmit } = useForm();
  const disPatch = useDispatch();
  const onSubmit = (data) => {
    disPatch(updateUser(myid, title, data));
    // console.log("Update")
  };

  return (
    <div>
      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box w-96">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register("value")}
          />

          <div className="modal-action">
            <button
              type="submit"
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              บันทึก
            </button>
            <label
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              กลับ
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export const EditModal5 = (props) => {
  const { title, value } = props;
  return (
    <div>
      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{value}</p>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">ไม่สูบ</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">สูบบ้าง</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">สูบทุกวัน</span>
            </label>
          </div>

          <div className="modal-action">
            <label
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              แก้ไข
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditModal6 = (props) => {
  const { title, value } = props;
  return (
    <div>
      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{value}</p>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">ไม่ดื่ม</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">ดื่มบ้าง</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">ดื่มทุกวัน</span>
            </label>
          </div>

          <div className="modal-action">
            <label
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              แก้ไข
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditModal7 = (props) => {
  const { title, value } = props;
  return (
    <div>
      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{value}</p>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">ชาย</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">หญิง</span>
            </label>
          </div>

          <div className="modal-action">
            <label
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              แก้ไข
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditModal8 = (props) => {
  const { title, value } = props;

  return (
    <div>
      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{value}</p>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">เข็ม1</span>
              <select className="select select-bordered w-60 max-w-xs">
                <option disabled="" selected="">
                  ชีดวัคซีนยี่ห้ออะไร
                </option>
                <option>Sinovac</option>
                <option>AstraZeneca</option>
                <option>Johnson&Johnson</option>
                <option>Moderna</option>
                <option>Sinopharm</option>
                <option>Pfizer/BioNtech</option>
                <option>ยังไม่ได้ชีด</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">เข็ม2</span>
              <select className="select select-bordered w-60 max-w-xs">
                <option disabled="" selected="">
                  ชีดวัคซีนยี่ห้ออะไร
                </option>
                <option>Sinovac</option>
                <option>AstraZeneca</option>
                <option>Johnson&Johnson</option>
                <option>Moderna</option>
                <option>Sinopharm</option>
                <option>Pfizer/BioNtech</option>
                <option>ยังไม่ได้ชีด</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">เข็ม3</span>
              <select className="select select-bordered w-60 max-w-xs">
                <option disabled="" selected="">
                  ชีดวัคซีนยี่ห้ออะไร
                </option>
                <option>Sinovac</option>
                <option>AstraZeneca</option>
                <option>Johnson&Johnson</option>
                <option>Moderna</option>
                <option>Sinopharm</option>
                <option>Pfizer/BioNtech</option>
                <option>ยังไม่ได้ชีด</option>
              </select>
            </label>
          </div>

          <div className="modal-action">
            <label
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              แก้ไข
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditModal9 = (props) => {
  const { title, value } = props;
  return (
    <div>
      <input type="checkbox" id={title} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{value}</p>

          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">หาเพื่อน</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">ออกเดท</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-pink-400"
                defaultChecked=""
              />
              <span className="label-text mr-44">คู่ครอง</span>
            </label>
          </div>
          <div className="modal-action">
            <label
              htmlFor={title}
              className="btn btn-outline btn-secondary modal-button text-x"
            >
              แก้ไข
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
