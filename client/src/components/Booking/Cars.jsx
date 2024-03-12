import React, { useState, useContext } from "react";
import CarList from "../../data/CarList";
import DirectionDataContext from "../../context/DirectionDataContext";
import SelectedCarAmtContext from "../../context/SelectedCarAmtContext";

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  const {carAmt,setCarAmt}=useContext(SelectedCarAmtContext)

  const getCost = (charges) => {
    return (charges*directionData.routes[0].distance*0.000621371192*30).toFixed(2)
  };

  return (
    <div>
      <div className="mt-3">
        <h5 className="font-weight-bold">Select Car</h5>
        <div className="row w-100 ml-2">
          {CarList.map((item, index) => (
            <div
              key={index}
              className="carimg m-1 p-1"
              style={{
                borderColor: index == selectedCar ? "blue" : null,
              }}
              onClick={() => {setSelectedCar(index);
              setCarAmt(getCost(item.charges))}}
            >
              <img src={item.image} width={100} height={60} alt={item.name} />
              <p className="d-flex justify-content-between align-items-center pb-0 mb-0">
                {item.name}
                {directionData.routes ? (
                  <span style={{ color: "black", fontSize:"15px" }}>
                    ₹{getCost(item.charges)}
                  </span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
