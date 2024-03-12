import React from "react";
import Navbar from "../components/Booking/Navbar";

const Success = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="alert alert-success text-center">
              <h4 className="alert-heading">Payment Successfull</h4>
            </div>
            <button><a href="/">Back to Home</a></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
