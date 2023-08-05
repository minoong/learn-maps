import { atom } from "jotai";
import "@react-google-maps/api";

export const googleMapAtom = atom<google.maps.Map | null>(null);
export const googleMarkersAtom = atom<{
  [key: string]: google.maps.Marker;
}>({});
