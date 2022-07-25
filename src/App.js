import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Other/Navbar";
import Menubar from "./component/Other/Menubar";
import Footer from "./component/Other/Footer";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Chatpage from "./pages/Chatpage"
import Alertpage from "./pages/Alertpage"
import Sex from "./component/Sex"
import Regispage from "./pages/Regispage"
import Login from "./pages/Login"
import EditPersonal from "./pages/EditPersonal";
import Liking from "./pages/Liking";
import Passion from "./component/Edit/EditPassion"


const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Menubar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/chat" element={<Chatpage />} />
            <Route path="/register" element={<Regispage />} />
            <Route path="/login" element={<Login />} />

            <Route path="/alert" element={<Alertpage/>} />
            <Route path="/editpersonal" element={<EditPersonal/>} />
            <Route path="/liking" element={<Passion/>} /> 
            <Route path="/sexul" element={<Sex/>} />
            <Route path="/editpassion" element={<Passion/>} />
          </Routes> 
        {/* <Footer/> */}

    </BrowserRouter>
  );
};
export default App;
