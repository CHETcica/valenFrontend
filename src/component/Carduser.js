import React from "react";

const Carduser = () => {
  return (
    <>
      <div className="card m-auto shadow-xl image-full  md:w-80">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div className="justify-end card-body mt-80">
          <h2 className="card-title">Image overlay</h2>
          <p>
            Rerum necessitatibus veritatis sed molestiae voluptates incidunt
            iure sapiente.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Carduser;
