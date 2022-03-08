import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Usersetting from "../component/Usersetting";
import Userdescription from "../component/Description"

const Homepage = () => {
  
  return (
      <>
        <Usersetting/>
        <Userdescription/>
      </>
  );
};

export default Homepage;
