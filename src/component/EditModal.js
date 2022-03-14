
import React from "react";

export const EditModal = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id={title1} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>

                    <div className="modal-action">
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            กลับ
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const EditModal1 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id={title1} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
                    <div className="modal-action">
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const EditModal2 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id={title1} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
                    <div className="modal-action">
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            กลับ
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const EditModal3 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id={title1} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
                    <div className="modal-action">
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const EditModal4 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id="ส่วนสูง" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <div className="modal-action">
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};;

export const EditModal5 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id={title1} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
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
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};;

export const EditModal6 = (props) => {

    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id={title1} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
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
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

};;

export const EditModal7 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id="เพศที่สนใจ" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
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
                        <label htmlFor="เพศที่สนใจ" className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};;

export const EditModal8 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id="วัคซีนโควิด" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>
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
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};;

export const EditModal9 = (props) => {
    const { title1, value } = props;
    return (
        <div>
            <input type="checkbox" id="เป้าหมาย" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-96">
                    <h3 className="font-bold text-lg">
                        {title1}
                    </h3>
                    <p className="py-4">
                        {value}
                    </p>

                    <div className="form-control">
                        <label className="cursor-pointer label">
                            
                            <input
                                type="checkbox"
                                defaultChecked=""
                                className="checkbox checkbox-secondary"
                            />
                            <span className="label-text mr-52">หาเพื่อน</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="cursor-pointer label">
                            
                            <input
                                type="checkbox"
                                defaultChecked=""
                                className="checkbox checkbox-secondary"
                            />
                            <span className="label-text mr-52">ออกเดท</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="cursor-pointer label">
                            
                            <input
                                type="checkbox"
                                defaultChecked=""
                                className="checkbox checkbox-secondary"
                            />
                            <span className="label-text mr-52">คู่ครอง</span>
                        </label>
                    </div>


                    <div className="modal-action">
                        <label htmlFor={title1} className="btn btn-outline btn-secondary modal-button text-x">
                            แก้ไข
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};