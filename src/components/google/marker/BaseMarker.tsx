import React, { memo } from "react";
import { MarkerF, MarkerProps } from "@react-google-maps/api";

interface Props extends MarkerProps {}

function BaseMarker(props: Props) {
  const { ...rest } = props;
  return <MarkerF {...rest} />;
}

export default memo(BaseMarker);
