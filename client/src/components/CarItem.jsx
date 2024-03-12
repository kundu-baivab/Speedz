// import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ carImage }) => {
  return (
    <div>
      <div className="item px-3">
        <div className="car-wrap rounded">
          <div
            className="img rounded d-flex align-items-end"
            style={{ backgroundImage: `url(${carImage})`}}
          ></div>
          <div className="text">
            <h2 className="mb-0">
              <Link to="#">Mercedes Grand Sedan</Link>
            </h2>
            <div className="d-flex mb-3">
              <span className="cat">Cheverolet</span>
              <p className="price ml-auto">
                $500 <span>/day</span>
              </p>
            </div>
            {/* <p class="d-flex mb-0 d-block">
              <Link to="#" class="btn btn-primary py-2 mr-1">
                Book now
              </Link>{" "}
              <Link to="#" class="btn btn-secondary py-2 ml-1">
                Details
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
