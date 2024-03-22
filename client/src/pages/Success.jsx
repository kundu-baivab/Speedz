import React from "react";
import Navbar from "../components/Booking/Navbar";
import Lottie from "lottie-react";
import ps from "../payment success animation.json";

const Success = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <Lottie
              animationData={ps}
              className="m-2"
              // style={{ width: "300px", height: "1000px" }}
            ></Lottie>
             <div className="alert alert-success text-center">
              <h4 className="alert-heading">Payment Successful</h4>
            </div>
            <button>
              <a href="/">Back to Home</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
