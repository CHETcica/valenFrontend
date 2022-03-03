import React from "react";
import { Alertmatch, Alertwarning, Alertmicrophone, Alertcannotconnect, Alertcamera, Alertsuccess, Alertaccountisblock, Alertmessage, Alertinfo, Alerterror, Alertusernameorpassword, AlertPasswordsnotmatch, AlertPleaseenterpassword, Alertpassion } from "../component/Alert";

const Alertpage = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2">
      <Alertmatch/>
      <Alertwarning/>
      <Alertmicrophone/>
      <Alertcannotconnect/>
      <Alertcamera/>
      <Alertsuccess/>
      <Alertaccountisblock/>
      <Alertmessage/>
      <Alertinfo/>
      <Alerterror/>
      <Alertusernameorpassword/>
      <AlertPasswordsnotmatch/>
      <AlertPleaseenterpassword/>
      <Alertpassion/>
    </div>
  );
};
export default Alertpage;
