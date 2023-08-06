import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { customMarkerAtom, postData } from "../../../stores/atoms";
import CustomMarker from "./CustomMarker";
import { loadable } from "jotai/utils";

function CustomMarkerList() {
  const [customMarker, setCustomMarker] = useAtom(customMarkerAtom);

  const [value] = useAtom(loadable(postData));

  useEffect(() => {
    if (value.state === "hasData") {
      setCustomMarker(value.data);
    }
  }, [value]);

  return (
    <>
      {customMarker.map((marker) => (
        <CustomMarker key={marker.id} data={marker} />
      ))}
    </>
  );
}

export default CustomMarkerList;
