import { Paper, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import BaseMap from "../../google/map/BaseMap";
import { getRandomCoordinates } from "../../../utils";
import { useCurrentLocation } from "../../../hooks/useCurrentLocation";
import BaseMarker from "../../google/marker/BaseMarker";
import Supercluster from "supercluster";
import { useAtom } from "jotai";
import { customMarkerAtom, postData } from "../../../stores/atoms";
import { loadable } from "jotai/utils";
import CustomMarker from "../../google/marker/CustomMarker";
import useCluster from "../../../hooks/useCluster";

function getLabel(pointCount: number): google.maps.MarkerLabel {
  return { text: pointCount.toString(), color: "#f3f3f3", fontWeight: "bold" };
}

function ClusterCustomMarkerExample() {
  const [customMarker, setCustomMarker] = useAtom(customMarkerAtom);
  const [value] = useAtom(loadable(postData));

  const { clusters, handleBoundsChanged, handleMapLoad, handleZoomChanged } =
    useCluster(new Supercluster({ radius: 30 }), customMarker);

  const [center, setCenter] = useState<google.maps.LatLngLiteral>(
    getRandomCoordinates("Guro")
  );

  useEffect(() => {
    if (value.state === "hasData") {
      setCustomMarker(value.data);
    }
  }, [value]);

  useCurrentLocation(
    useCallback(({ lat, lng }) => {
      setCenter({ lat, lng });
    }, [])
  );

  return (
    <Paper sx={{ p: 2 }}>
      <Typography component="h2" variant="h6" color="primary">
        🛰️ Supercluster Custom Hook
      </Typography>
      <BaseMap
        onLoadCallback={handleMapLoad}
        onBoundsChanged={handleBoundsChanged}
        onZoomChanged={handleZoomChanged}
        zoom={13}
        center={center}
        onClick={console.log}
        mapContainerStyle={{
          width: "100%",
          height: "400px",
        }}
      >
        {clusters?.map(({ id, geometry, properties }) => {
          const [lng, lat] = geometry.coordinates;
          const { cluster, point_count, ...rest } = properties;

          return cluster ? (
            <BaseMarker
              key={`cluster-${id}`}
              position={{ lat, lng }}
              label={getLabel(point_count)}
            />
          ) : (
            <CustomMarker key={`task-${properties.id}`} data={rest} />
          );
        })}
      </BaseMap>
    </Paper>
  );
}

export default React.memo(ClusterCustomMarkerExample);
