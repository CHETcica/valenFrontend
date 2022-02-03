import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
function App() {
  return (
    <>
      <Navbar/>
      <Menubar/>
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
