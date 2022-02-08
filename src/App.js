import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import Usersetting from "./component/Usersetting";

function App() {
  return (
    <>
      <Navbar/>
      <Menubar/>
        <Homepage/>
    </>
  );
}

export default App;
