import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import React from "react";
import { subject } from "../../../Utils/Data";
import { blogs } from "../../../Utils/DataSeeders";
import { useNavigate } from "react-router-dom";
import Blogs from "../navbar/Blogs";

const papers = [
  {
    id: 1,
    title: "Paper 1",
    image: "https://picsum.photos/500/400",
  },
  {
    id: 2,
    title: "Paper 2",
    image: "https://picsum.photos/500/400",
  },
  {
    id: 3,
    title: "Paper 3",
    image: "https://picsum.photos/500/400",
  },
  {
    id: 4,
    title: "Paper 4",
    image: "https://picsum.photos/500/400",
  },
];

const Subject = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      {/* Subject Section */}
      <Grid container spacing={3}>
        {subject.map((subject) => (
          <Grid item xs={12} sm={6} key={subject.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 150, // Adjust height for square shape
                boxShadow: 3,
                bgcolor: "#CAF8A3",
              }}
            >
              <CardActionArea
                onClick={() => navigate(subject.route)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%", // Match card height
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Smaller Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: 50, // Set smaller width for the image
                    height: 50, // Maintain square aspect ratio
                    mb: 1,
                  }}
                  image={subject.image}
                  alt={subject.label}
                />
                {/* Title Section */}
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {subject.label}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Papers Section */}
      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
            Tests
          </Typography>
        </Grid>
        {papers.map((paper) => (
          <Grid item xs={12} sm={6} key={paper.id}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 150, // Adjust height for square shape
                boxShadow: 3,
                bgcolor: "#CAF8A3",
              }}
            >
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%", // Match card height
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Smaller Image */}
                <CardMedia
                  component="img"
                  sx={{
                    width: 50, // Set smaller width for the image
                    height: 50, // Maintain square aspect ratio
                    mb: 1,
                  }}
                  image={paper.image}
                  alt={paper.title}
                />
                {/* Title Section */}
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {paper.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Blogs Section */}

      <Blogs />
    </Box>
  );
};

export default Subject;
