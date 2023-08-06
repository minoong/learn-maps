import { atom } from "jotai";
import "@react-google-maps/api";
import { CustomMarker } from "../../types";
import {
  delay,
  getRandomBoolean,
  getRandomCoordinates,
  getRandomHexColor,
  getRandomInt,
} from "../../utils";
import MarkerSVG from "../../components/marker/GroupMarker";
import { renderToString } from "react-dom/server";
import SvgToImageUrlWorker from "../../utils/svgToImageUrlWorker?worker";

export const googleMapAtom = atom<google.maps.Map | null>(null);
export const googleMarkersAtom = atom<{
  [key: string]: google.maps.Marker;
}>({});

export const postId = atom(0);
export const postData = atom(async (get) => {
  get(postId);

  await delay(500);

  const data = Array(200)
    .fill(null)
    .map((_, i) => {
      const id = "#" + String(i).padStart(5, "0");
      const badgeText = String(getRandomInt(1, 11));
      const text = String(getRandomInt(1, 11));
      const fill = getRandomHexColor();
      const isActive = false;
      const isWarning = getRandomBoolean();
      const isBadge = getRandomBoolean();
      const { lat, lng } = getRandomCoordinates("Guanak");

      return Promise.all([
        svgToImageUrlWithWebWorker(
          MarkerSVG({
            badgeText,
            text,
            fill,
            isActive,
            isWarning,
            isBadge,
          })
        ),
        svgToImageUrlWithWebWorker(
          MarkerSVG({
            badgeText,
            text,
            fill,
            isActive: true,
            isWarning,
            isBadge,
          })
        ),
      ]).then((urls) => {
        console.log("urls", urls);

        return {
          id,
          badgeText,
          text,
          fill,
          isActive,
          isWarning,
          isBadge,
          lat,
          lng,
          url: urls,
        };
      });
    });
  return Promise.all(data);
});

export const customMarkerAtom = atom<CustomMarker[]>([]);

export const updateFocusMarkerAtom = atom(null, (get, set, update: string) => {
  const data = get(customMarkerAtom);

  const result = data.map((v) => ({
    ...v,
    isActive: v.id === update,
  }));

  set(customMarkerAtom, result);
});

export const updateMarkerPositionAtom = atom(
  null,
  (get, set, update: { id: string; pos: google.maps.LatLngLiteral }) => {
    const data = get(customMarkerAtom);

    const result = data.map((v) => {
      if (v.id !== update.id) return v;

      return {
        ...v,
        lat: update.pos.lat,
        lng: update.pos.lng,
      };
    });

    set(customMarkerAtom, result);
  }
);

function svgToImageUrlWithWebWorker(svgComponent: React.ReactElement) {
  const svgToImageUrlWorker = new SvgToImageUrlWorker();
  const svg = renderToString(svgComponent);

  svgToImageUrlWorker.postMessage(svg);
  return new Promise<string>((resolve, reject) => {
    svgToImageUrlWorker.onmessage = (event: MessageEvent) => {
      const { imageData } = event.data;

      svgToImageUrlWorker.terminate();

      resolve(imageData);
    };
    svgToImageUrlWorker.onerror = (error) => {
      reject(error);
    };
  });
}
