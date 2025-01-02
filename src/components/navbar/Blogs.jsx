import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { blogs } from "../../../Utils/DataSeeders";
import { green } from "../../../Utils/color";

const Blogs = () => {
  // Fallback in case data is undefined or not an array
  if (!Array.isArray(blogs)) {
    return (
      <Typography variant="h6" color="error">
        No blogs available
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} bgcolor={green} sx={{ pb: 5, pt: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
          Blogs
        </Typography>
      </Grid>
      {blogs.map((blog) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          key={blog.id}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              maxWidth: 345,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={blog.image}
                title={blog.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
