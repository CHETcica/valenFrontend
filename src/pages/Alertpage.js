import React from "react";
import { Alertmatch, Alertwarning } from "../component/Alert";

const Alertpage = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2">
      <Alertmatch/>
      <Alertwarning/>
      
    </div>
  );
};
export default Alertpage;
