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
