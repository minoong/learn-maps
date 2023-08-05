import React, { useCallback, useMemo, useRef } from "react";
import { googleMapAtom } from "../../../stores/atoms";
import { useSetAtom } from "jotai";
import { GoogleMap } from "@react-google-maps/api";
import { GOOGLE_MAPS } from "../../../constants/googleMaps";

interface Props extends Omit<GoogleMap["props"], "onLoad" | "onUnmount"> {
  onLoadCallback?: (map: google.maps.Map) => void;
  onUnmountCallback?:
    | ((map: google.maps.Map) => void | Promise<void>)
    | undefined;
}

function BaseMap(props: Props) {
  const {
    mapContainerStyle = GOOGLE_MAPS.defaultMapContainerStyle,
    options = GOOGLE_MAPS.defaultOptions,
    onLoadCallback,
    onUnmountCallback,
    center,
    children,
    ...rest
  } = props;
  const setGoogleMap = useSetAtom(googleMapAtom);
  const cacheCenter = useMemo(() => center, [center]);

  const callbackRef = useRef({
    onLoadCallbackRef: onLoadCallback,
    onUnmountCallbackRef: onUnmountCallback,
  });

  const onLoadFn = useCallback(
    function callback(map: google.maps.Map) {
      setGoogleMap(map);

      callbackRef.current.onLoadCallbackRef?.(map);
    },
    [setGoogleMap]
  );

  const onUnmountFn = useCallback(
    function callback(map: google.maps.Map) {
      setGoogleMap(null);
      callbackRef.current.onUnmountCallbackRef?.(map);
    },
    [setGoogleMap]
  );

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      options={options}
      {...(cacheCenter && { center: cacheCenter })}
      onLoad={onLoadFn}
      onUnmount={onUnmountFn}
      {...rest}
    >
      {children}
    </GoogleMap>
  );
}

export default BaseMap;
