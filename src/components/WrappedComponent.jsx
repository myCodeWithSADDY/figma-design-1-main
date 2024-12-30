import {
  Grid,
  Typography
} from "@mui/material";
import React from "react";
import Sideinfo from "./wrapped/Sideinfo";
import Subject from "./wrapped/Subject";

const WrappedComponent = () => {

  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#E4FBC4" }}>
      {/* Left Section with Subject */}
      <Grid item xs={12} md={8} mt={"4rem"} sx={{display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:"center"}}>
        <Typography variant="h5" >
          Subjects
        </Typography>
        <Subject />
      </Grid>

      {/* Right Section with Sidebar Data */}
      <Grid item xs={12} md={4}>
        <Sideinfo/>
      </Grid>
    </Grid>
  );
};

export default WrappedComponent;
