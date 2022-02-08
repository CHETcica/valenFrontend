import React from "react";
import Carduser from "../component/Carduser";

const Chatpage = () => {
  return (
    <div className="overflow-x-auto"> 
    <table className="table w-full">
      <thead>
        <tr>
          <th>
          </th>
          <th>Match</th>

          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="w-12 h-12 mask mask-squircle">
                  <img
                    src=""
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
        
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="w-12 h-12 mask mask-squircle">
                  <img
                    src="/tailwind-css-component-profile-3@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">Brice Swyre</div>
                <div className="text-sm opacity-50">China</div>
              </div>
            </div>
          </td>
         
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="w-12 h-12 mask mask-squircle">
                  <img
                    src="/tailwind-css-component-profile-4@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">Marjy Ferencz</div>
                <div className="text-sm opacity-50">Russia</div>
              </div>
            </div>
          </td>
         
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="w-12 h-12 mask mask-squircle">
                  <img
                    src="/tailwind-css-component-profile-5@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">Yancy Tear</div>
                <div className="text-sm opacity-50">Brazil</div>
              </div>
            </div>
          </td>
        
        </tr>
      </tbody>
    </table>
  </div>
  


  );
};

export default Chatpage;
