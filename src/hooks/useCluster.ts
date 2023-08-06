/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from "react";
import Supercluster, { ClusterFeature, PointFeature } from "supercluster";

type Map = google.maps.Map & { zoom: number };

function formatDataToGeoJsonPoints<T extends Array<any>>(
  data: T
): GeoJSON.Feature<GeoJSON.Point>[] {
  return data.map((task) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [task.lng, task.lat],
    },
    properties: { cluster: false, ...task },
  }));
}

function useCluster<T extends Array<any>>(
  supercluster: Supercluster<Supercluster.AnyProps, Supercluster.AnyProps>,
  data: T
) {
  const superclusterCached = useMemo(() => supercluster, []);
  const mapRef = useRef<Map>();

  const [zoom, setZoom] = useState<number>(13);
  const [bounds, setBounds] = useState<GeoJSON.BBox>([0, 0, 0, 0]);
  const [clusters, setClusters] = useState<ClusterFeature<any>[]>();

  useEffect(() => {
    if (data.length && mapRef.current) {
      superclusterCached.load(
        formatDataToGeoJsonPoints(data) as PointFeature<
          GeoJSON.Feature<GeoJSON.Point>
        >[]
      );
      setClusters(superclusterCached.getClusters(bounds, zoom));
    }
  }, [superclusterCached, bounds, zoom, data]);

  function handleBoundsChanged() {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds()?.toJSON();
      setBounds([
        bounds?.west || 0,
        bounds?.south || 0,
        bounds?.east || 0,
        bounds?.north || 0,
      ]);
    }
  }

  function handleZoomChanged() {
    if (mapRef.current) {
      setZoom(mapRef.current.zoom);
    }
  }

  function handleMapLoad(map: google.maps.Map) {
    mapRef.current = map as Map;
  }

  return {
    clusters,
    handleBoundsChanged,
    handleZoomChanged,
    handleMapLoad,
  } as const;
}

export default useCluster;
