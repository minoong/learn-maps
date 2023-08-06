import { Paper, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { getRandomCoordinates } from "../../../utils";
import { useCurrentLocation } from "../../../hooks/useCurrentLocation";
import { GoogleMap, HeatmapLayer } from "@react-google-maps/api";
import { GOOGLE_MAPS } from "../../../constants/googleMaps";
import LoadScriptOnlyIfNeeded from "../../google/LoadScriptOnlyIfNeeded";

function HeatMapBasicExample() {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(
    getRandomCoordinates("Guanak")
  );

  const [show, setShow] = useState(false);

  useCurrentLocation(
    useCallback(({ lat, lng }) => {
      setCenter({ lat, lng });
    }, [])
  );

  return (
    <Paper sx={{ p: 2 }}>
      <Typography component="h2" variant="h6" color="primary">
        🛁 HeatMap Basic Google Maps
      </Typography>
      <LoadScriptOnlyIfNeeded
        onLoad={() => console.log(123)}
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={["visualization"]}
      >
        <GoogleMap
          onLoad={() => {
            queueMicrotask(() => {
              setShow(true);
            });
          }}
          id="heatmap-layer-example"
          zoom={13}
          center={center}
          mapContainerStyle={{
            width: "100vh",
            height: "100vh",
          }}
          options={GOOGLE_MAPS.defaultOptions}
        >
          {show && (
            <HeatmapLayer
              data={[
                ...Array(200)
                  .fill(null)
                  .map(() => {
                    const { lat, lng } = getRandomCoordinates("Guanak");
                    return new google.maps.LatLng(lat, lng);
                  }),
                ...Array(200)
                  .fill(null)
                  .map(() => {
                    const { lat, lng } = getRandomCoordinates("Guro");
                    return new google.maps.LatLng(lat, lng);
                  }),
              ]}
            />
          )}
        </GoogleMap>
      </LoadScriptOnlyIfNeeded>
    </Paper>
  );
}

export default React.memo(HeatMapBasicExample);
