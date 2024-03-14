import React from "react";
import { useEffect, useState } from "react";
import Cars from "./Cars";
import Cards from "./Cards";
import MapBoxMap from "../Map/MapBoxMap";
import UserLocationContext from "../../context/UserLocationContext";
import SrcCoordsContext from "../../context/SrcCoordsContext";
import DestnCoordsContext from "../../context/DestnCoordsContext";
import DirectionDataContext from "../../context/DirectionDataContext";
import { useNavigate } from "react-router-dom";
import SelectedCarAmtContext from "../../context/SelectedCarAmtContext";
import { loadStripe } from "@stripe/stripe-js";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest?";
const MAPBOX_RETREIVE_URL =
  "https://api.mapbox.com/search/searchbox/v1/retrieve/";
const Mapbox_token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Body = () => {
  //search box fns
  const [source, setSource] = useState("");
  const [destn, setDestn] = useState("");

  const [sourceChange, setSourceChange] = useState(false);
  const [destnChange, setDestnChange] = useState(false);

  const [addressList, setAddressList] = useState([]);

  const [srcCoords, setSrcCoords] = useState([]);
  const [destCoords, setDestCoords] = useState([]);
  const [directionData, setDirectionData] = useState([]);
  const [carAmt, setCarAmt] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delay);
  }, [source, destn]);

  const getAddressList = async () => {
    try {
      setAddressList([]);
      const query = sourceChange ? source : destn;
      const response = await fetch(
        `${BASE_URL}q=${query}&language=en&limit=4&session_token=[GENERATED-UUID]&country=IN&access_token=${Mapbox_token}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setAddressList(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //mapbox location fns
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  };

  //search box coordinates fns
  const onSourceAddressClick = async (item) => {
    setSource(item.name, item.place_formatted),
      setAddressList([]),
      setSourceChange(false);

    const res = await fetch(
      `${MAPBOX_RETREIVE_URL}${item.mapbox_id}?session_token=[GENERATED-UUID]&access_token=${Mapbox_token}`
    );

    const result = await res.json();

    setSrcCoords({
      long: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
  };

  const onDestinationAddressClick = async (item) => {
    setDestn(item.name, item.place_formatted),
      setAddressList([]),
      setDestnChange(false);

    const res = await fetch(
      `${MAPBOX_RETREIVE_URL}${item.mapbox_id}?session_token=[GENERATED-UUID]&access_token=${Mapbox_token}`
    );

    const result = await res.json();

    setDestCoords({
      long: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
  };

  return (
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SrcCoordsContext.Provider value={{ srcCoords, setSrcCoords }}>
          <DestnCoordsContext.Provider value={{ destCoords, setDestCoords }}>
            <DirectionDataContext.Provider
              value={{ directionData, setDirectionData }}
            >
              <SelectedCarAmtContext.Provider value={{ carAmt, setCarAmt }}>
                <div className="row w-100">
                  <div className="col-md-4 pl-5 mb-5">
                    <h4
                      className="font-weight-bold"
                      style={{ marginTop: "6rem" }}
                    >
                      Booking
                    </h4>
                    <div className="border rounded p-4">
                      <div className="mt-3">
                        <label htmlFor="">Where from?</label>
                        <input
                          className="form-control mb-2"
                          type="text"
                          value={source}
                          onChange={(e) => {
                            setSource(e.target.value), setSourceChange(true);
                          }}
                        />
                        {addressList?.suggestions && sourceChange ? (
                          <div className="options p-1">
                            {addressList?.suggestions.map((item, index) => (
                              <p
                                key={index}
                                className="option"
                                onClick={() => {
                                  onSourceAddressClick(item);
                                }}
                              >
                                {item.name},{item.place_formatted}
                              </p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-3">
                        <label htmlFor="">Where to?</label>
                        <input
                          className="form-control "
                          type="text"
                          value={destn}
                          onChange={(e) => {
                            setDestn(e.target.value), setDestnChange(true);
                          }}
                        />
                        {addressList?.suggestions && destnChange ? (
                          <div className="options p-1">
                            {addressList?.suggestions.map((item, index) => (
                              <p
                                key={index}
                                className="option"
                                onClick={() => {
                                  onDestinationAddressClick(item);
                                }}
                              >
                                {item.name},{item.place_formatted}
                              </p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <Cars />
                      <Cards />
                      <button
                        className="mt-2 w-100 p-2"
                        style={{ backgroundColor: !carAmt ? "gray" : "black" }}
                        disabled={!carAmt}
                        onClick={
                          () => {
                          {
                            navigate(`https://speedz.vercel.app/payment?amount=${Math.round(carAmt)}`);
                          }
                        }
                        }
                      >
                        Book
                      </button>
                    </div>
                  </div>
                  <div className="col-md-8 px-5 pb-5">
                    <h4 className="font-weight-bold map-section">Map</h4>
                    <MapBoxMap />
                    {/* <Lottie
                      animationData={anir}
                      className="p-0 m-0"
                      style={{ width: "400px", height: "400px", margin:"0" }}
                    ></Lottie> */}
                  </div>
                </div>
              </SelectedCarAmtContext.Provider>
            </DirectionDataContext.Provider>
          </DestnCoordsContext.Provider>
        </SrcCoordsContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
};

export default Body;
