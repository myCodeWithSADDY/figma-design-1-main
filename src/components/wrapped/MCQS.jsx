import { Container, Grid, List, ListItem, Pagination, Stack, Typography } from '@mui/material';
import React from 'react';
import Sideinfo from "./Sideinfo";
import mcqData from '../../../Utils/Data';

const MCQS = () => {
  return (
    <Grid container spacing={4} bgcolor={"#E4FBC4"} padding="2rem">
      {/* Left Section with MCQs */}
      <Grid
        item
        xs={12} // xs=12 ensures it takes full width on small screens
        md={8}
        mt="1rem"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" mb={2}>MCQs</Typography>

        {/* Map through mcqData and display each question */}
        {mcqData.map((item) => (
          <Stack key={item.id} spacing={2} mb={2} width={'100%'} >
            <Container sx={{ padding: "1rem",  backgroundColor: "#B7C5E3", borderRadius: "8px", boxShadow: 1 }}>
              <Typography variant="body1" mb={2}>{item.question}</Typography>

              {/* List of options */}
              <List>
                {item.options.map((option, index) => (
                  <ListItem key={index} sx={{ paddingLeft: "1.5rem" }}>
                    <Typography variant="body2">{option}</Typography>
                  </ListItem>
                ))}
              </List>

              {/* Display the answer (Optional) */}
              <Typography variant="body2" color="primary" sx={{ mt: 2 }}>
                Correct Answer: {item.answer}
              </Typography>
            </Container>
            <Stack spacing={2}>

      
    </Stack>
          </Stack>
        ))}
        <Pagination count={10} size="large" />
      </Grid>

      {/* Right Section with Sidebar Data */}
      <Grid item xs={12} md={3.9}>
        <Sideinfo />
      </Grid>
      
    </Grid>
  );
};

export default MCQS;
