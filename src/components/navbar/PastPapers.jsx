import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { subject } from "../../../Utils/Data"; // Assuming `subject` is an array of objects
import DropDown from "../shared/DropDown"; // Assuming `DropDown` is your custom component
import { green } from "../../../Utils/color"; // Assuming green is a predefined color in your project
import { test } from "../../../Utils/DataSeeders"; // Assuming these are other data sources
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Data for years
export const Years = [
  { id: 1, label: "2023" },
  { id: 2, label: "2022" },
  { id: 3, label: "2021" },
  { id: 4, label: "2020" },
  { id: 5, label: "2019" },
  { id: 6, label: "2018" },
  { id: 7, label: "2017" },
  { id: 8, label: "2016" },
  { id: 9, label: "2015" },
  { id: 10, label: "2014" },
  { id: 11, label: "2013" },
  { id: 12, label: "2012" },
];

const PastPapers = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4" bgcolor={green} textAlign={"center"} py={2}>
        Past Papers
      </Typography>
      <Grid
        container
        bgcolor={green}
        height="100vh"
        justifyContent="center" // Horizontally center the content
        sx={{
          padding: { xs: "1rem", sm: "2rem" }, // Add padding on small screens
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger
            justifyContent: "space-between",
            width: "100%", // Full width on mobile
            maxWidth: "1000px", // Optional: limit the max width on large screens
            padding: "2rem",
          }}
        >
          {/* Left Dropdown: Subjects */}
          <Grid item xs={12} sm={3} sx={{ mb: { xs: 2, sm: 0 } }}>
            <DropDown data={subject} title={"Subjects"} icon={<ExpandMore />} />
          </Grid>

          {/* Middle Dropdown: Tests */}
          <Grid item xs={12} sm={3} sx={{ mb: { xs: 2, sm: 0 } }}>
            <DropDown data={test} title={"Tests"} icon={<ExpandMore />} />
          </Grid>

          {/* Right Dropdown: Years */}
          <Grid item xs={12} sm={3} sx={{ mb: { xs: 2, sm: 0 } }}>
            <DropDown data={Years} title={"Years"} icon={<ExpandMore />} />
          </Grid>

          {/* Button */}
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              sx={{
                px: "3rem",
                py: "0.8rem",
                width: { xs: "100%", sm: "auto" }, // Full width on small screens, auto width on larger screens
              }}
              onClick={() => navigate("/contact")}
            >
              GO!
            </Button>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default PastPapers;
