import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { green } from "../../../Utils/color";

const Contact = () => {
  // Step 1: State management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); // Add a state for the subject
  const [message, setMessage] = useState(""); // Add a state for the message
  const [submitted, setSubmitted] = useState(false);

  // Step 2: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)

    if (name && email && subject && message) {
      // If form is valid (all fields are filled), submit the data
      console.log("Form Submitted:", { name, email, subject, message });
      setSubmitted(true); // Optionally, show a confirmation or reset the form
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "110vh",
        margin: "0 auto",
        padding: 3,
        bgcolor: green,
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3, maxWidth: "50%", margin: "0 auto" }}
      >
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on input change
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
          />

          <TextField
            label="Title/Subject"
            variant="outlined"
            fullWidth
            margin="normal"
            value={subject}
            onChange={(e) => setSubject(e.target.value)} // Update state on input change
          />

          {/* Message TextField with increased height */}
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline // Enables multi-line text input
            rows={6} // Increase the number of rows to make the height larger
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update state on input change
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2, px: "2rem" }}
          >
            Send
          </Button>
        </form>

        {submitted && (
          <Typography variant="h6" sx={{ marginTop: 2, color: "green" }}>
            Form submitted successfully!
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Contact;
