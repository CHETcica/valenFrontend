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
      <label htmlFor="my-modal" className="btn modal-button">
        open modal
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to use
            Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
