import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { subject } from '../../../Utils/Data';

// Example of importing SVG files
import exampleSvg1 from '../../../src/assets/Rectangle 35.svg';

// Update the subject data to include the imported SVGs
const updatedSubject = subject.map((item, index) => ({
  ...item,
  image: exampleSvg1 // Alternate between exampleSvg1 and exampleSvg2
}));

const Subject = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {updatedSubject.map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.id}> {/* 2 items per row on sm and md */}
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack image and content vertically
                alignItems: 'center', // Center items horizontally
                padding: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px', // Limit the card size
                margin: '0 auto' // Center the card
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: '100%', // Ensure image takes up full card width
                  height: '150px',
                  objectFit: 'contain',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Subject;
