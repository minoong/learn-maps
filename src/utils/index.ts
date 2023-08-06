import { renderToString } from "react-dom/server";
import {
  SEOUL_GUANAK_LATITUDE_RANGE,
  SEOUL_GUANAK_LONGITUDE_RANGE,
  SEOUL_GURO_LATITUDE_RANGE,
  SEOUL_GURO_LONGITUDE_RANGE,
} from "../constants/common";
import { Coordinates } from "../types";

export function getCurrentLocation(): Promise<{
  latitude: number;
  longitude: number;
}> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

function getRandomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getRandomCoordinates(which: "Guanak" | "Guro"): Coordinates {
  const latitudeRange =
    which === "Guanak"
      ? SEOUL_GUANAK_LATITUDE_RANGE
      : SEOUL_GURO_LATITUDE_RANGE;
  const longitudeRange =
    which === "Guanak"
      ? SEOUL_GUANAK_LONGITUDE_RANGE
      : SEOUL_GURO_LONGITUDE_RANGE;

  const lat = getRandomNumberInRange(latitudeRange[0], latitudeRange[1]);
  const lng = getRandomNumberInRange(longitudeRange[0], longitudeRange[1]);

  return { lat, lng };
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomBoolean(): boolean {
  const randomInt: number = getRandomInt(0, 2);

  return randomInt === 1;
}

export function getRandomHexColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + ("000000" + randomColor).slice(-6);
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function svgToImageUrl(svgComponent: React.ReactElement) {
  return new Promise<string>((resolve, reject) => {
    const svg = renderToString(svgComponent);
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const image = new Image();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    image.src = url;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context?.drawImage(image, 0, 0);
      resolve(canvas.toDataURL());
      canvas.remove();
      URL.revokeObjectURL(url);
    };
    image.onerror = () => {
      reject();
      canvas.remove();
      URL.revokeObjectURL(url);
    };
  });
}
