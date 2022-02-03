import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Carduser from "./component/Carduser";
function App() {
  return (
    <>
      <Navbar/>
      <Menubar/>
      <div className="container mx-auto">
          <div className="grid">
            <Carduser/>
          </div>
      </div>
      
    </>
    // <BrowserRouter>
    //   <div className="container mx-auto">
    //     <Navbar/>
    //     <Routes>
    //       <Route path="/" element={<Homepage />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
