import { Paper, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import BaseMap from "../../google/map/BaseMap";
import { getRandomCoordinates } from "../../../utils";
import { useCurrentLocation } from "../../../hooks/useCurrentLocation";
import BaseMarker from "../../google/marker/BaseMarker";

const GEN_MARKER = Array(20)
  .fill(null)
  .map(() => getRandomCoordinates("Guanak"));

function BasicExample() {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(
    getRandomCoordinates("Guanak")
  );

  useCurrentLocation(
    useCallback(({ lat, lng }) => {
      setCenter({ lat, lng });
    }, [])
  );

  return (
    <Paper sx={{ p: 2 }}>
      <Typography component="h2" variant="h6" color="primary">
        ⛄️ Basic Google Maps
      </Typography>
      <BaseMap
        zoom={13}
        center={center}
        onClick={console.log}
        mapContainerStyle={{
          width: "100%",
          height: "400px",
        }}
      >
        {GEN_MARKER.map((pos, index) => (
          <BaseMarker key={JSON.stringify(pos) + index} position={pos} />
        ))}
      </BaseMap>
    </Paper>
  );
}

export default React.memo(BasicExample);
