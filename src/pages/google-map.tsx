import React, { memo } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Container, Grid } from "@mui/material";
import BasicExample from "../components/examples/google/BasicExample";
import CustomMarkerExample from "../components/examples/google/CustomMarkerExample";

function GoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    language: "ko",
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          {isLoaded ? <BasicExample /> : <div>loading... 🚀</div>}
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          {isLoaded ? <CustomMarkerExample /> : <div>loading... 🚀</div>}
        </Grid>
      </Grid>
    </Container>
  );
}

export default memo(GoogleMap);
