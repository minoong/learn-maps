const defaultMapContainerStyle: React.CSSProperties = {
  width: "100vh",
  height: "100vh",
};

const defaultOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

export const GOOGLE_MAPS = { defaultMapContainerStyle, defaultOptions };
