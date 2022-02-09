import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import Footer from "./component/Footer";
import Userdescriptionpage from "./pages/Userdescriptionpage";
function App() {
  return (
    <>
      <Navbar/>
      <Menubar/>
        <Homepage/>
        <Userdescriptionpage/>
      <Footer/>  
    </>
  );
}

export default App;
