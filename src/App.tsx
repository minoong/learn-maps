import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import { Typography } from "@mui/material";
import GoogleMap from "./pages/google-map";
import Mapbox from "./pages/mapbox";
import GoogleMapHeatmap from "./pages/google-map-heatmap";
import GoogleMapClear from "./pages/google-map-clear";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",

        element: (
          <Typography component="h1">
            Google Maps and mapbox Example. 🏖️
          </Typography>
        ),
      },
      {
        path: "google-maps",
        element: <GoogleMap />,
      },
      {
        path: "google-maps-heatmap",
        element: <GoogleMapHeatmap />,
      },
      {
        path: "google-maps/clear",
        element: <GoogleMapClear />,
      },
      {
        path: "mapbox",
        element: <Mapbox />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
