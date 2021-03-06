import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  randomUser,
  likeUser,
  superlikeUser,
  unlikeUser,
  checkMatch,
  toggleMatchModal,
} from "../../action";

export const BtnGroupt = (props) => {
  const usersignin = useSelector((state) => state.signs);
  const propsSetting = props.setting;
  let Setting = [];
  if (propsSetting) {
    Setting = propsSetting;
  }
  console.log("setting_" + Setting);

  const taketid = props.user.user._id;
  const taketdata = props.user.user;
  const myid = usersignin.user._id;
  const disPatch = useDispatch();

  const ShowBtnText = (btnname) => {
    // console.log(btnname, id);
    var button = document.getElementById(btnname);
    button.style.display === "none"
      ? (button.style.display = "block").setTimeout(() => {
          button.style.display = "none";
          console.log("ปิดการแสดงปุ่ม");
        }, 300)
      : // ,countdown(btnname)
        (button.style.display = "none");
  };

  // const handleLike = () => {
  //   let likes = usersignin.user.userDetails.likes;
  //   const found = likes.find((el) => el === taketid);
  //   if (!found) {
  //     likes.push(taketid);
  //   }

  //   let randomUser = randomUser(
  //     usersignin.user.interested,
  //     usersignin.user.passion,
  //     usersignin.user.friendId,
  //     likes,
  //     usersignin.user.userDetails.unlikes,
  //     usersignin.user.userDetails.superlikes,
  //     usersignin.user.location.coordinates,
  //     usersignin.user.userSetting.MaxDistance * 1000
  //   );
  //   let likeUser = likeUser(likes, myid);
  //   let ShowBtnText = ShowBtnText("like");
  //   let checkMatch = checkMatch(myid, taketid, taketdata);
  //   disPatch(await Promise.all([randomUser, likeUser, ShowBtnText, checkMatch]));
  // };

  const handleLike = () => {
    let likes = usersignin.user.userDetails.likes;
    const found = likes.find((el) => el === taketid);
    if (!found) {
      likes.push(taketid);
    }

    disPatch(
      randomUser(
        usersignin.user.interested,
        usersignin.user.passion,
        usersignin.user.friendId,
        likes,
        usersignin.user.userDetails.unlikes,
        usersignin.user.userDetails.superlikes,
        usersignin.user.location.coordinates,
        usersignin.user.userSetting.MaxDistance * 1000
      ),
      likeUser(likes, myid),
      ShowBtnText("like"),
      checkMatch(myid, taketid, taketdata)
    );
  };

  const handleUnLike = () => {
    let unlikes = usersignin.user.userDetails.unlikes;
    const found = unlikes.find((el) => el === taketid);
    if (!found) {
      unlikes.push(taketid);
    }
    // console.log(unlikes);
    disPatch(
      randomUser(
        usersignin.user.interested,
        usersignin.user.passion,
        usersignin.user.friendId,
        usersignin.user.userDetails.likes,
        unlikes,
        usersignin.user.userDetails.superlikes,
        usersignin.user.location.coordinates,
        usersignin.user.userSetting.MaxDistance * 1000
      ),
      unlikeUser(unlikes, myid),
      ShowBtnText("unlike")
    );
  };

  const handleSuperlike = () => {
    let superlikes = usersignin?.user?.userDetails?.superlikes
      ? usersignin.user.userDetails.superlikes
      : [];
    const found = superlikes.find((el) => el === taketid);
    if (!found) {
      superlikes.push(taketid);
    }
    disPatch(
      randomUser(
        usersignin.user.interested,
        usersignin.user.passion,
        usersignin.user.friendId,
        usersignin.user.userDetails.likes,
        usersignin.user.userDetails.unlikes,
        superlikes,
        usersignin.user.location.coordinates,
        usersignin.user.userSetting.MaxDistance * 1000
      ),
      superlikeUser(superlikes, myid),
      ShowBtnText("superlike"),
      checkMatch(myid, taketid, taketdata),
      
    );
  };

  return (
    <div className="mt-2 grid grid-cols-3 ">
      <div
        onClick={(e) => handleUnLike()}
        className="mx-auto button_groupt button_groupt-unlike "
      >
        <svg
          width="87"
          height="87"
          viewBox="0 0 87 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.1163 43.31C86.1163 66.9533 66.9504 86.12 43.3082 86.12C19.6659 86.12 0.5 66.9533 0.5 43.31C0.5 19.6667 19.6659 0.5 43.3082 0.5C66.9504 0.5 86.1163 19.6667 86.1163 43.31Z"
            fill="white"
            stroke="#FEA5B7"
          />
          <line
            x1="24.364"
            y1="24.7222"
            x2="62.3371"
            y2="62.6953"
            stroke="#FEA5B7"
            stroke-width="9"
            stroke-linecap="round"
          />
          <line
            x1="62.3648"
            y1="23.364"
            x2="24.3916"
            y2="61.3371"
            stroke="#FEA5B7"
            stroke-width="9"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        onClick={(e) => handleSuperlike()}
        className="mx-auto button_groupt button_groupt-superlike"
      >
        <svg
          width="88"
          height="87"
          viewBox="0 0 88 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.8475 43.31C86.8475 66.9533 67.6816 86.12 44.0393 86.12C20.397 86.12 1.23114 66.9533 1.23114 43.31C1.23114 19.6667 20.397 0.5 44.0393 0.5C67.6816 0.5 86.8475 19.6667 86.8475 43.31Z"
            fill="white"
            stroke="#FFEF61"
          />
          <path
            d="M44.5 67.4223L42.3103 71.3537C43.6716 72.1119 45.3283 72.1119 46.6896 71.3537L44.5 67.4223ZM44.5 32.4256L40.3584 34.1855C41.0644 35.8469 42.6948 36.9256 44.5 36.9256C46.3051 36.9256 47.9356 35.8469 48.6415 34.1855L44.5 32.4256ZM15.4664 37.3601C15.4664 47.6548 22.9961 56.3362 29.2393 61.8999C32.5041 64.8094 35.7481 67.1562 38.166 68.7723C39.3794 69.5833 40.3958 70.2176 41.1172 70.6538C41.4782 70.8721 41.7662 71.0413 41.9689 71.1588C42.0703 71.2175 42.1504 71.2633 42.2078 71.2959C42.2365 71.3122 42.2595 71.3252 42.2767 71.3348C42.2853 71.3396 42.2924 71.3436 42.298 71.3468C42.3008 71.3483 42.3032 71.3497 42.3053 71.3509C42.3063 71.3514 42.3076 71.3521 42.3081 71.3524C42.3093 71.3531 42.3103 71.3537 44.5 67.4223C46.6896 63.491 46.6905 63.4915 46.6913 63.4919C46.6915 63.492 46.6922 63.4924 46.6924 63.4926C46.693 63.4929 46.6932 63.493 46.693 63.4929C46.6927 63.4927 46.6909 63.4917 46.6877 63.4899C46.6813 63.4863 46.6691 63.4794 46.6514 63.4694C46.6159 63.4492 46.5583 63.4163 46.48 63.371C46.3234 63.2802 46.0842 63.1398 45.7744 62.9525C45.1542 62.5774 44.2538 62.016 43.1672 61.2897C40.9851 59.8313 38.0956 57.7372 35.2271 55.1808C29.2035 49.8128 24.4664 43.4631 24.4664 37.3601H15.4664ZM48.6415 30.6656C45.1002 22.332 36.9764 18.4053 29.5453 19.4789C25.8095 20.0186 22.2242 21.8303 19.5858 24.9747C16.9352 28.1338 15.4664 32.3634 15.4664 37.3601H24.4664C24.4664 34.158 25.3828 32.0677 26.4803 30.7597C27.5902 29.437 29.116 28.6344 30.8321 28.3864C34.3049 27.8847 38.4479 29.6896 40.3584 34.1855L48.6415 30.6656ZM64.5336 37.3601C64.5336 43.4631 59.7965 49.8128 53.7729 55.1808C50.9043 57.7372 48.0149 59.8313 45.8328 61.2897C44.7461 62.016 43.8458 62.5774 43.2256 62.9525C42.9158 63.1398 42.6766 63.2802 42.5199 63.371C42.4416 63.4163 42.384 63.4492 42.3486 63.4694C42.3309 63.4794 42.3187 63.4863 42.3122 63.4899C42.309 63.4917 42.3072 63.4927 42.3069 63.4929C42.3067 63.493 42.3069 63.4929 42.3075 63.4926C42.3078 63.4924 42.3085 63.492 42.3086 63.4919C42.3094 63.4915 42.3103 63.491 44.5 67.4223C46.6896 71.3537 46.6907 71.3531 46.6919 71.3524C46.6924 71.3521 46.6936 71.3514 46.6947 71.3509C46.6967 71.3497 46.6992 71.3483 46.702 71.3468C46.7076 71.3436 46.7147 71.3396 46.7233 71.3348C46.7404 71.3252 46.7634 71.3122 46.7921 71.2959C46.8495 71.2633 46.9297 71.2175 47.0311 71.1588C47.2338 71.0413 47.5217 70.8721 47.8827 70.6538C48.6042 70.2176 49.6205 69.5833 50.8339 68.7723C53.2519 67.1562 56.4959 64.8094 59.7607 61.8999C66.0039 56.3362 73.5336 47.6548 73.5336 37.3601H64.5336ZM48.6415 34.1855C50.5521 29.6896 54.6951 27.8847 58.1678 28.3864C59.884 28.6344 61.4098 29.437 62.5196 30.7597C63.6172 32.0677 64.5336 34.158 64.5336 37.3601H73.5336C73.5336 32.3634 72.0648 28.1338 69.4142 24.9747C66.7758 21.8303 63.1904 20.0186 59.4547 19.4789C52.0236 18.4053 43.8998 22.332 40.3584 30.6656L48.6415 34.1855Z"
            fill="#FFEF61"
          />
          <path
            d="M56.5001 3.30774L58.1611 8.14186L58.176 8.18527L58.2186 8.20226L62.7299 10L58.2186 11.7977L58.176 11.8147L58.1611 11.8581L56.5001 16.6923L54.839 11.8581L54.8241 11.8147L54.7815 11.7977L50.2702 10L54.7815 8.20226L54.8241 8.18527L54.839 8.14186L56.5001 3.30774Z"
            fill="#FFEF61"
            stroke="#608CFF"
            stroke-width="0.2"
          />
          <path
            d="M71.0001 14.3848L71.9839 18.0405L71.9954 18.0835L72.0351 18.1036L74.7795 19.5L72.0351 20.8964L71.9954 20.9165L71.9839 20.9595L71.0001 24.6152L70.0163 20.9595L70.0047 20.9165L69.965 20.8964L67.2206 19.5L69.965 18.1036L70.0047 18.0835L70.0163 18.0405L71.0001 14.3848Z"
            fill="#FFEF61"
            stroke="#608CFF"
            stroke-width="0.2"
          />
          <path
            d="M29.5001 65.2882L31.702 71.2389L31.718 71.2821L31.7611 71.298L37.7119 73.5L31.7611 75.702L31.718 75.7179L31.702 75.7611L29.5001 81.7118L27.2981 75.7611L27.2821 75.7179L27.239 75.702L21.2882 73.5L27.239 71.298L27.2821 71.2821L27.2981 71.2389L29.5001 65.2882Z"
            fill="#FFEF61"
            stroke="#608CFF"
            stroke-width="0.2"
          />
          <path
            d="M16.5001 53.3113L17.8909 57.4116L17.9056 57.455L17.9481 57.4722L21.7329 59L17.9481 60.5278L17.9056 60.545L17.8909 60.5884L16.5001 64.6887L15.1093 60.5884L15.0945 60.545L15.052 60.5278L11.2672 59L15.052 57.4722L15.0945 57.455L15.1093 57.4116L16.5001 53.3113Z"
            fill="#FFEF61"
            stroke="#608CFF"
            stroke-width="0.2"
          />
          <path
            d="M44.5001 39.624L46.3666 44.6686L51.4109 46.5352L46.3666 48.4018L44.5001 53.4464L42.6335 48.4018L37.5892 46.5352L42.6335 44.6686L44.5001 39.624Z"
            fill="#FFEF61"
          />
        </svg>
      </div>
      <div
        onClick={(e) => handleLike()}
        // onClick={(e) => toggleMatchModal()}
        className="mx-auto button_groupt button_groupt-like"
      >
        <svg
          width="87"
          height="87"
          viewBox="0 0 87 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.5 43.31C86.5 66.9533 67.3341 86.12 43.6918 86.12C20.0495 86.12 0.883667 66.9533 0.883667 43.31C0.883667 19.6667 20.0495 0.5 43.6918 0.5C67.3341 0.5 86.5 19.6667 86.5 43.31Z"
            fill="white"
            stroke="#C58CF2"
          />
          <path
            d="M44.1525 67.4223L41.9629 71.3537C43.3242 72.1119 44.9808 72.1119 46.3422 71.3537L44.1525 67.4223ZM44.1525 32.4256L40.0109 34.1855C40.7169 35.8469 42.3474 36.9256 44.1525 36.9256C45.9576 36.9256 47.5881 35.8469 48.2941 34.1855L44.1525 32.4256ZM15.1189 37.3601C15.1189 47.6548 22.6486 56.3362 28.8918 61.8999C32.1566 64.8094 35.4006 67.1562 37.8186 68.7723C39.0319 69.5833 40.0483 70.2176 40.7698 70.6538C41.1308 70.8721 41.4187 71.0413 41.6214 71.1588C41.7228 71.2175 41.803 71.2633 41.8604 71.2959C41.889 71.3122 41.9121 71.3252 41.9292 71.3348C41.9378 71.3396 41.9449 71.3436 41.9505 71.3468C41.9533 71.3483 41.9557 71.3497 41.9578 71.3509C41.9588 71.3514 41.9601 71.3521 41.9606 71.3524C41.9618 71.3531 41.9629 71.3537 44.1525 67.4223C46.3422 63.491 46.343 63.4915 46.3438 63.4919C46.344 63.492 46.3447 63.4924 46.345 63.4926C46.3455 63.4929 46.3457 63.493 46.3456 63.4929C46.3452 63.4927 46.3435 63.4917 46.3402 63.4899C46.3338 63.4863 46.3216 63.4794 46.3039 63.4694C46.2685 63.4492 46.2108 63.4163 46.1325 63.371C45.9759 63.2802 45.7367 63.1398 45.4269 62.9525C44.8067 62.5774 43.9063 62.016 42.8197 61.2897C40.6376 59.8313 37.7482 57.7372 34.8796 55.1808C28.856 49.8128 24.1189 43.4631 24.1189 37.3601H15.1189ZM48.2941 30.6656C44.7527 22.332 36.6289 18.4053 29.1978 19.4789C25.462 20.0186 21.8767 21.8303 19.2383 24.9747C16.5877 28.1338 15.1189 32.3634 15.1189 37.3601H24.1189C24.1189 34.158 25.0353 32.0677 26.1329 30.7597C27.2427 29.437 28.7685 28.6344 30.4847 28.3864C33.9574 27.8847 38.1004 29.6896 40.0109 34.1855L48.2941 30.6656ZM64.1861 37.3601C64.1861 43.4631 59.449 49.8128 53.4254 55.1808C50.5568 57.7372 47.6674 59.8313 45.4853 61.2897C44.3987 62.016 43.4983 62.5774 42.8781 62.9525C42.5683 63.1398 42.3291 63.2802 42.1725 63.371C42.0942 63.4163 42.0366 63.4492 42.0011 63.4694C41.9834 63.4794 41.9712 63.4863 41.9648 63.4899C41.9616 63.4917 41.9598 63.4927 41.9594 63.4929C41.9593 63.493 41.9595 63.4929 41.96 63.4926C41.9603 63.4924 41.961 63.492 41.9612 63.4919C41.962 63.4915 41.9629 63.491 44.1525 67.4223C46.3422 71.3537 46.3432 71.3531 46.3444 71.3524C46.3449 71.3521 46.3462 71.3514 46.3472 71.3509C46.3493 71.3497 46.3517 71.3483 46.3545 71.3468C46.3601 71.3436 46.3672 71.3396 46.3758 71.3348C46.3929 71.3252 46.416 71.3122 46.4447 71.2959C46.502 71.2633 46.5822 71.2175 46.6836 71.1588C46.8863 71.0413 47.1742 70.8721 47.5352 70.6538C48.2567 70.2176 49.2731 69.5833 50.4864 68.7723C52.9044 67.1562 56.1484 64.8094 59.4132 61.8999C65.6564 56.3362 73.1861 47.6548 73.1861 37.3601H64.1861ZM48.2941 34.1855C50.2046 29.6896 54.3476 27.8847 57.8204 28.3864C59.5365 28.6344 61.0623 29.437 62.1721 30.7597C63.2697 32.0677 64.1861 34.158 64.1861 37.3601H73.1861C73.1861 32.3634 71.7173 28.1338 69.0667 24.9747C66.4283 21.8303 62.843 20.0186 59.1072 19.4789C51.6761 18.4053 43.5523 22.332 40.0109 30.6656L48.2941 34.1855Z"
            fill="#C58CF2"
          />
        </svg>
      </div>
    </div>
  );
};
