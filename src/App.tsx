import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import { Typography } from "@mui/material";
import GoogleMap from "./pages/google-map";
import Mapbox from "./pages/mapbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Typography component="h1">
            Google Maps and mapbox deep dive 🏖️
          </Typography>
        ),
      },
      {
        path: "google-maps",
        element: <GoogleMap />,
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
