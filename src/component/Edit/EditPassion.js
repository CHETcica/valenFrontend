import React from "react";

const EditPassion = () => {
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
    {
      _id: "62a2d0d7685b9f2480878d89",
      name: "yoga",
      nameTH: "โยคะ",
      type: "sport+exercise",
      __v: 0,
    },
    {
      _id: "62a2d0e3685b9f2480878d8b",
      name: "dancing",
      nameTH: "การเต้น",
      type: "sport+exercise",
      __v: 0,
    },
    {
      _id: "62a2d120685b9f2480878d8d",
      name: "football",
      nameTH: "เล่นบอล",
      type: "sport+exercise",
      __v: 0,
    },
    {
      _id: "62a2d149685b9f2480878d8f",
      name: "gardening",
      nameTH: "การทำสวน",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d15b685b9f2480878d91",
      name: "fishing",
      nameTH: "ตกปลา",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d172685b9f2480878d93",
      name: "camping",
      nameTH: "ตั้งแคมป์",
      type: "travel",
      __v: 0,
    },
    {
      _id: "62a2d188685b9f2480878d95",
      name: "social",
      nameTH: "เล่นโซเชียล",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d1b4685b9f2480878d97",
      name: "drawing",
      nameTH: "การวาดภาพ",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d1c0685b9f2480878d99",
      name: "photography",
      nameTH: "ถ่ายภาพ",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d1cc685b9f2480878d9b",
      name: "knitting",
      nameTH: "ถักผ้า",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d1d8685b9f2480878d9d",
      name: "cooking",
      nameTH: "ทำอาหาร",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d1e7685b9f2480878d9f",
      name: "baking",
      nameTH: "ทำขนม",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d1fd685b9f2480878da1",
      name: "Gaming",
      nameTH: "เล่นเกม",
      type: "sport+exercise",
      __v: 0,
    },
    {
      _id: "62a2d228685b9f2480878da3",
      name: "playing music",
      nameTH: "เล่นดนตรี",
      type: "music",
      __v: 0,
    },
    {
      _id: "62a2d265685b9f2480878da5",
      name: "Coding",
      nameTH: "หัดเขียนโค้ด",
      type: "study",
      __v: 0,
    },
    {
      _id: "62a2d280685b9f2480878da7",
      name: "editing",
      nameTH: "ทำคลิปวิดีโอ",
      type: "art",
      __v: 0,
    },
    {
      _id: "62a2d29f685b9f2480878da9",
      name: "listening to podcasts",
      nameTH: "ฟังพอดแคสต์",
      type: "music",
      __v: 0,
    },
    {
      _id: "62a2d2ba685b9f2480878dab",
      name: "watching movies",
      nameTH: "ดูหนัง",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d2d2685b9f2480878dad",
      name: "listening to music",
      nameTH: "ฟังเพลง",
      type: "music",
      __v: 0,
    },
    {
      _id: "62a2d381685b9f2480878daf",
      name: "volunteer",
      nameTH: "อาสาสมัคร",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d399685b9f2480878db1",
      name: "invest",
      nameTH: "ลงทุน",
      type: "study",
      __v: 0,
    },
    {
      _id: "62a2d3ad685b9f2480878db3",
      name: "singing",
      nameTH: "ร้องเพลง",
      type: "music",
      __v: 0,
    },
    {
      _id: "62a2d3bf685b9f2480878db5",
      name: "acting",
      nameTH: "ฝึกฝนการแสดง",
      type: "art",
      __v: 0,
    },
    {
      _id: "62a2d3cd685b9f2480878db7",
      name: "Pottery",
      nameTH: "ปั้นดินเผา",
      type: "art",
      __v: 0,
    },
    {
      _id: "62a2d3da685b9f2480878db9",
      name: "handicraft",
      nameTH: "ทำงานฝีมือ",
      type: "art",
      __v: 0,
    },
    {
      _id: "62a2d3f7685b9f2480878dbb",
      name: "Join the club",
      nameTH: "เข้าร่วมชมรมคนรักสิ่งต่างๆ",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d404685b9f2480878dbd",
      name: "sleeping",
      nameTH: "นอนหลับ",
      type: "rest",
      __v: 0,
    },
    {
      _id: "62a2d505685b9f2480878dbf",
      name: "racing",
      nameTH: "แข่งรถ",
      type: "sport+exercise",
      __v: 0,
    },
    {
      _id: "62a2d51b685b9f2480878dc1",
      name: "practice language",
      nameTH: "ฝึกภาษาใหม่ๆ",
      type: "study",
      __v: 0,
    },
  ];

  return (
    <div className="container mx-auto w-100%">
      <div className="card__passion--bg mx-auto mt-5 drop-shadow-2xl">
        <h1 className="card__passion--title text-center">Passion</h1>
        <h3 className="card__passion--subtitle text-center mt-2">
          Let the world know what you like Add Passion to your profile.
        </h3>
        <div className="m-5 ">
          <div class="container">
            <ul class="ks-cboxtags">
              {passion.map((el) => (
                <li>
                  <input
                    type="checkbox"
                    id={el.name}
                    value={el.name}
                  />
                  <label for="checkboxOne">{el.name}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-100% text-center ">
          <button className="card__passion--submit mx-auto mb-5">
            Next(3/5)
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditPassion;
