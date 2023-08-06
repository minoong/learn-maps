import { Paper, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import BaseMap from "../../google/map/BaseMap";
import { getRandomCoordinates } from "../../../utils";
import { useCurrentLocation } from "../../../hooks/useCurrentLocation";
import { loadable } from "jotai/utils";
import CustomMarkerList from "../../google/marker/CustomMarkerList";
import { LoadingButton } from "@mui/lab";
import { useAtom, useSetAtom } from "jotai";
import { postData, postId } from "../../../stores/atoms";
import SearchIcon from "@mui/icons-material/Search";

function RefetchButton() {
  const setPostId = useSetAtom(postId);
  const [value] = useAtom(loadable(postData));
  return (
    <LoadingButton
      size="small"
      sx={{ mb: 3 }}
      onClick={() => setPostId((id) => id + 1)}
      endIcon={<SearchIcon />}
      loading={value.state === "loading"}
      loadingPosition="end"
      variant="contained"
    >
      <span>Refetch</span>
    </LoadingButton>
  );
}

function CustomMarkerExample() {
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
        🍎 CustomMarker Google Maps
      </Typography>
      <RefetchButton />
      <BaseMap
        zoom={13}
        center={center}
        onClick={console.log}
        mapContainerStyle={{
          width: "100%",
          height: "400px",
        }}
      >
        <CustomMarkerList />
      </BaseMap>
    </Paper>
  );
}

export default React.memo(CustomMarkerExample);
