import React, { useContext, useEffect, useRef } from "react";
import Map from "react-map-gl";
import UserLocationContext from "../../context/UserLocationContext";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import SrcCoordsContext from "../../context/SrcCoordsContext";
import DestnCoordsContext from "../../context/DestnCoordsContext";
import DirectionDataContext from "../../context/DirectionDataContext";
import MapBoxRoute from "./MapBoxRoute";
import DistanceTime from "./DistanceTime";

const MapBoxMap = () => {
  const MAPBOX_DRIVING_ENDPOINT =
    "https://api.mapbox.com/directions/v5/mapbox/driving/";

  const Mapbox_token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  const { srcCoords, setSrcCoords } = useContext(SrcCoordsContext);
  const { destCoords, setDestCoords } = useContext(DestnCoordsContext);

  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  const mapRef = useRef();

  // Use to fly to Src Marker
  useEffect(() => {
    if (srcCoords) {
      mapRef.current?.flyTo({
        center: [srcCoords.long, srcCoords.lat],
        duration: 2500,
      });
    }
  }, [srcCoords]);

  // Use to fly to Destn Marker
  useEffect(() => {
    if (destCoords) {
      mapRef.current?.flyTo({
        center: [destCoords.long, destCoords.lat],
        duration: 2500,
      });
    }

    if (srcCoords && destCoords) {
      getDirectionRoute();
    }
  }, [destCoords]);

  const getDirectionRoute = async () => {
    const res = await fetch(
      `${MAPBOX_DRIVING_ENDPOINT}${srcCoords.long},${srcCoords.lat};${destCoords.long},${destCoords.lat}?overview=full&geometries=geojson&access_token=${Mapbox_token}`,
      {
        headers: {
          "Content-Type": "application.json",
        },
      }
    );
    const result = await res.json();
    setDirectionData(result);
  };

  return (
    <div className="border rounded map">
      {userLocation ? (
        <Map
          ref={mapRef}
          mapboxAccessToken={Mapbox_token}
          initialViewState={{
            longitude: userLocation?.long,
            latitude: userLocation?.lat,
            zoom: 14,
          }}
          style={{ width: "100%", height: 450 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Markers />
          {directionData?.routes ? (
            <MapBoxRoute
              coordinates={directionData?.routes[0]?.geometry?.coordinates}
            />
          ) : null}
        </Map>
      ) : null}
      <div className="distag">
        <DistanceTime/>
      </div>
    </div>
  );
};

export default MapBoxMap;
