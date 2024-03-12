import React, { useContext } from "react";
import UserLocationContext from "../../context/UserLocationContext";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import SrcCoordsContext from "../../context/SrcCoordsContext";
import DestnCoordsContext from "../../context/DestnCoordsContext";

const Markers = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const { srcCoords, setSrcCoords } = useContext(SrcCoordsContext);
  const { destCoords, setDestCoords } = useContext(DestnCoordsContext);

  return (
    <div>
      {/* User Marker */}
      <Marker
        longitude={userLocation?.long}
        latitude={userLocation?.lat}
        anchor="bottom"
      >
        <img src="./loc.png" width={20} height={28} />
      </Marker>

      {/* Source Marker */}
      {srcCoords.length!=0 ? (
        <Marker
          longitude={srcCoords?.long}
          latitude={srcCoords?.lat}
          anchor="bottom"
        >
          <img src="./loc.png" width={20} height={28} />
        </Marker>
      ) : null}

      {/* Destination Marker */}
      {destCoords.length!=0 ? (
        <Marker
          longitude={destCoords?.long}
          latitude={destCoords?.lat}
          anchor="bottom"
        >
          <img src="./loc.png" width={20} height={28} />
        </Marker>
      ) : null}
    </div>
  );
};

export default Markers;
