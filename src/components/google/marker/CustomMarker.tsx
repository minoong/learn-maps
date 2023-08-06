import React, { memo } from "react";
import { CustomMarker } from "../../../types";
import BaseMarker from "./BaseMarker";
import { useSetAtom } from "jotai";
import {
  updateFocusMarkerAtom,
  updateMarkerPositionAtom,
} from "../../../stores/atoms";

interface Props {
  data: CustomMarker;
}

function CustomMarker(props: Props) {
  const { data } = props;

  const updateFocusMarker = useSetAtom(updateFocusMarkerAtom);
  const updateMarkerPosition = useSetAtom(updateMarkerPositionAtom);

  return (
    <BaseMarker
      draggable
      onDragEnd={(e) => {
        e.latLng &&
          updateMarkerPosition({ id: data.id, pos: e.latLng.toJSON() });
      }}
      options={{
        icon: {
          url: data.url[data.isActive ? 1 : 0],
        },
      }}
      animation={
        data.isActive ? window.google.maps.Animation.BOUNCE : undefined
      }
      position={{ lat: data.lat, lng: data.lng }}
      onClick={() => updateFocusMarker(data.id)}
    />
  );
}

export default memo(
  CustomMarker,
  (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
);
