import { useEffect, useRef } from "react";
import { getCurrentLocation } from "../utils";

export function useCurrentLocation(
  callback: (location: google.maps.LatLngLiteral) => void
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        callbackRef.current({
          lat: location.latitude,
          lng: location.longitude,
        });
      })
      .catch((error) => {
        console.error("Error getting current location:", error.message);
      });
  }, []);
}
