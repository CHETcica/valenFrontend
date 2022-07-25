import React from "react";

export const Modalusername = ({ value }) => {
  return (
    <>
      <input type="checkbox" id="username" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">username</h3>
          <div className="form-control">
            <label className="cursor-pointer label">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  className="checkbox checkbox-secondary"
                />
                <span className="label-text">{value}</span>
              </div>
            </label>
          </div>
            
          <div className="modal-action">
            <label htmlFor="username" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export const Modalusername1 = () => {
    return (
      <>
        <input type="checkbox" id="username1" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">username1</h3>
            <div className="form-control">
              <label className="cursor-pointer label">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    className="checkbox checkbox-secondary"
                  />
                  <span className="label-text">value</span>
                </div>
              </label>
            </div>
  
            <div className="modal-action">
              <label htmlFor="username1" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </>
    );
  };
