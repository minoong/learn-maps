import React, { useCallback, useState } from "react";
import BaseMap from "../components/google/map/BaseMap";
import { useJsApiLoader } from "@react-google-maps/api";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import { getRandomCoordinates } from "../utils";
import BaseMarker from "../components/google/marker/BaseMarker";

const GEN_MARKER = Array(20)
  .fill(null)
  .map(() => getRandomCoordinates("Guanak"));

function GoogleMap() {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(
    getRandomCoordinates("Guro")
  );
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
        <BaseMap zoom={13} center={center} onClick={console.log}>
          {GEN_MARKER.map((pos, index) => (
            <BaseMarker key={JSON.stringify(pos) + index} position={pos} />
          ))}
        </BaseMap>
      ) : (
        <div>loading... 🚀</div>
      )}
    </>
  );
}

export default GoogleMap;
