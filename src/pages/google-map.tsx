import React, { useCallback, useState } from "react";
import BaseMap from "../components/google/BaseMap";
import { useJsApiLoader } from "@react-google-maps/api";
import { useCurrentLocation } from "../hooks/useCurrentLocation";

function GoogleMap() {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 35.1795543,
    lng: 129.0756416,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    language: "ko",
  });

  useCurrentLocation(
    useCallback(({ lat, lng }) => {
      setCenter({ lat, lng });
    }, [])
  );

  return (
    <>
      {isLoaded ? (
        <BaseMap zoom={13} center={center} onClick={console.log} />
      ) : (
        <div>loading... 🚀</div>
      )}
    </>
  );
}

export default GoogleMap;
