import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Sideinfo from "./wrapped/Sideinfo";
import Subject from "./wrapped/Subject";

// Accept `sx` as a prop and apply it directly to the Container
const WrappedComponent = ({ sx }) => {
  return (
      <Grid container spacing={2} bgcolor={"#E4FBC4"}>
        {/* Left Section with Subject */}
        <Grid
          item
          xs={12} // xs=12 ensures it takes full width on small screens
          md={8}
          mt="2rem"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Subjects</Typography>
          <Subject />
        </Grid>

        {/* Right Section with Sidebar Data */}
        <Grid item xs={12} md={3.9} >
          <Sideinfo />
        </Grid>
      </Grid>
  );
};

export default WrappedComponent;
