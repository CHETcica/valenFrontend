import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import Columchat from "./component/Columchat";
import Chatbox from "./component/Chatbox";

function App() {
  return (
    <>
      <Navbar/>
      <Menubar/>
        <Chatpage/>
      
    </>
    // <BrowserRouter>
    //   <div className="container mx-auto">
    //     <Navbar/>
    //     <Routes>
    //       <Route path="/" element={<Homepage />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

    // <div className="container mx-auto">
    //       <div className="grid">
    //         <Carduser/>
    //       </div>
    //   </div>
  );
}

export default App;
