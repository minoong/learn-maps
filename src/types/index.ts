export type Coordinates = {
  lat: number;
  lng: number;
};

export interface BaseMarkerSVGProps {
  fill: string;
  text: string;
  isActive: boolean;
}

export interface BadgeMarkerSVGProps extends BaseMarkerSVGProps {
  badgeText: string;
}

export interface MarkerSVGProps extends BaseMarkerSVGProps {
  isWarning: boolean;
  isBadge: boolean;
  badgeText?: string;
}

export type CustomMarker = {
  id: string;
  badgeText: string;
  isWarning: boolean;
  isBadge: boolean;
  url: [string, string];
} & Coordinates &
  BaseMarkerSVGProps;
