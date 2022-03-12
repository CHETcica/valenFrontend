import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import Footer from "./component/Footer";
import Profile from "./pages/Profile";
import EditPersonal from "./pages/EditPersonal";
import Liking from "./pages/Liking";

function App() {
  return (
    <>
      <Navbar />
      <Menubar />
      <EditPersonal />
      <Footer />
        <Liking />
      <Footer />
      
    </>
  );
}

export default App;
