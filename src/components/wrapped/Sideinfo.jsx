import React from "react";
import {
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Divider,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Info as InfoIcon, Search as SearchIcon } from "@mui/icons-material";
import { Sidebar } from "../../../Utils/DataSeeders";
import { useNavigate } from "react-router-dom";

const Sideinfo = () => {
  const navigate = useNavigate();

  // Function to render a category
  const renderCategory = (category, categoryName) => {
    return (
      <>
        {/* Category Heading */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            {categoryName}
          </Typography>
        </Grid>

        {/* Category Items */}
        {Sidebar[category].map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "0.5rem",
                boxShadow: 3,
              }}
            >
              {/* Icon Section */}
              <Box sx={{ padding: "8px" }}>
                <InfoIcon color="primary" />
              </Box>

              {/* Content Section */}
              <CardContent
              
                sx={{
                  flexGrow: 1,
                  padding: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  height: '30vh'
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, cursor: "pointer" }}
                  onClick={() => navigate(item.route)}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <>
      {/* Search Field */}
      <TextField
        fullWidth
        label="Search Results"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ my: 2, backgroundColor: "#B7C5E3" }}
      />

      {/* Sidebar List */}
      <Box sx={{ bgcolor: "#B7C5E3", padding: "1rem",  }}>
        <Grid container spacing={2}>
          {/* Render Categories with Headings */}
          {[
            { key: "mcqs", name: "MCQs" },
            { key: "pastPapers", name: "Past Papers" },
            { key: "notes", name: "Notes" },
            { key: "blogs", name: "Blogs" },
          ].map((category) => (
            <React.Fragment key={category.key}>
              {renderCategory(category.key, category.name)}
              <Divider sx={{ width: "100%", margin: "1rem 0" }} />
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Sideinfo;
