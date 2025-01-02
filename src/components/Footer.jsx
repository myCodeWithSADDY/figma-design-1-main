import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "30vh",
        width: "100%",
        backgroundColor: "#314F8E",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        marginTop: "auto", // Ensure footer stays at the bottom of the page
      }}
    >
      {/* Top Section: Links */}
      <Grid container spacing={4} justifyContent="center" mb={2}>
        <Grid item>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
        </Grid>
        <Grid item>
          <Link href="/about" color="inherit" underline="hover">
            About Us
          </Link>
        </Grid>
        <Grid item>
          <Link href="/contact" color="inherit" underline="hover">
            Contact Us
          </Link>
        </Grid>
        <Grid item>
          <Link href="/privacy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box mb={2}>
        <IconButton color="inherit" href="https://facebook.com" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://instagram.com"
          target="_blank"
        >
          <Instagram />
        </IconButton>
      </Box>

      {/* Bottom Section: Copyright */}
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
