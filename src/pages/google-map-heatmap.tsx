import React, { memo } from "react";
import { Container, Grid } from "@mui/material";
import HeatMapBasicExample from "../components/examples/google/HeatMapBasicExample";

function GoogleMapHeatmap() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <HeatMapBasicExample />
        </Grid>
      </Grid>
    </Container>
  );
}

export default memo(GoogleMapHeatmap);
