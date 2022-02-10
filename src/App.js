import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Menubar/>
        <Homepage/>
      <Footer/>  
    </>
  );
}

export default App;
