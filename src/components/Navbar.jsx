import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ExpandMore, Notifications, Menu as MenuIcon } from "@mui/icons-material";
import { navData } from "../../Utils/DataSeeders"; // Adjust the path based on your file structure
import NotificationDialog from "./dialogs/NotificationDialog";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu anchor
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks currently open dropdown menu
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationAnchor = useRef(null); // Reference for notification button

  const toggleNotification = (e) => {
    setIsNotificationOpen((prev) => !prev); // Toggle notification dialog visibility
    setAnchorEl(e.currentTarget); // Set anchor for the notification dialog
  };

  const handleCloseMenu = () => {
    setOpenDropdown(null); // Close the dropdown menu
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Access the theme using useTheme
  const theme = useTheme();
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Function to render the navigation links
  const renderNavLinks = () => {
    return navData.map((item) => (
      <React.Fragment key={item.id}>
        {/* Render Dropdown or Regular Link */}
        {item.isDropDown ? (
          <Box>
            <Button
              endIcon={<ExpandMore />}
              onClick={(e) => setOpenDropdown(item.id)} // Open specific dropdown
              sx={{ textTransform: "none", color: "White" }}
            >
              {item.label}
            </Button>
            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={openDropdown === item.id}
              onClose={handleCloseMenu}
            >
              {item.options.map((option, index) => (
                <MenuItem
                  key={index}
                  component={Link}
                  to={option.route}
                  onClick={handleCloseMenu}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Button
            component={Link}
            to={item.route}
            sx={{ textTransform: "none", color: "white" }}
          >
            {item.label}
          </Button>
        )}
      </React.Fragment>
    ));
  };

  const closeNotificationDialog = () => {
    setIsNotificationOpen(false); // Close notification dialog
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#E4FBC4",
        borderBottom: "1px solid #ddd",
       
        py: 2,
      }}
    >
      <Container>
        <Grid container  alignItems="center"  justifyContent='space-evenly' >
          {/* Logo Section */}
          <Grid item xs={2}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                
              }}
            >
              Logo
            </Typography>
          </Grid>

          {/* Navbar Section */}
          <Grid
            item
            xs={isMobile || isPad ? 10 : 8}
            sx={{
              backgroundColor: isMobile || isPad ? "#E4FBC4" : "#876CE8"  ,
              padding: "0.5rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: isMobile || isPad ? "flex-end" : "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Mobile & Tablet Hamburger Icon */}
            {(isMobile || isPad) && (
              <IconButton
                onClick={() => toggleDrawer(true)}
                sx={{ color: isMobile || isPad ? "black" : "white"  }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop Navbar Links */}
            {!(isMobile || isPad) && renderNavLinks()}
          </Grid>

          {/* Notification Icon Section */}
          <Grid item xs={2} sx={{ display: isMobile ? "none" : "flex",  justifyContent: 'flex-end'  }}>
            {(isPad || !isMobile) && (
              <IconButton
                onClick={toggleNotification}
                ref={notificationAnchor}
                sx={{ display: isMobile || isPad?  'none' : "flex"}} // Attach the ref to the icon
              >
                <Notifications sx={{ color: "#876CE8",  }} />
              </IconButton>
            )}
          </Grid>
        </Grid>

        {/* Notification Dialog - Attached to the Notification Icon */}
        {isNotificationOpen && (
          <NotificationDialog
            closehandler={closeNotificationDialog}
            anchorEl={notificationAnchor.current} // Attach the ref to the dialog
          />
        )}

        {/* Mobile and Tablet Drawer for Navigation Links */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <Box
            sx={{ width: 250, padding: 2 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              {navData.map((item) => (
                <ListItem button key={item.id} component={Link} to={item.route}>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
