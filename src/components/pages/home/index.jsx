import { Grid } from "@mui/material";
import React from "react";
import Aside from "./aside";
import Main from "./main";
import Sidebar from "./sidebar";

function HomePageTemplate() {
  return (
    <Grid container className="h-full" spacing={5}>
      <Grid item xs={2.5}>
        <Sidebar />
      </Grid>
      <Grid item xs={6}>
        <Main />
      </Grid>
      <Grid item xs={3.5}>
        <Aside />
      </Grid>
    </Grid>
  );
}

export default HomePageTemplate;
