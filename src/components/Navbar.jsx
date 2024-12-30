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
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [dropdownId, setDropdownId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [menu, setMenu] = useState(null); // To manage the anchor for the notification
  const anchor = useRef(null); // Reference for the notification button

  const toggleNotification = (e) => {
    setIsNotification(!isNotification);
    setMenu(e.currentTarget); // Set the notification icon as the anchor element
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setDropdownId(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Access the theme using useTheme
  const theme = useTheme();
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderNavLinks = () => {
    return navData.map((item) => (
      <React.Fragment key={item.id}>
        {/* Render Dropdown or Regular Link */}
        {item.isDropDown ? (
          <Box>
            <Button
              endIcon={<ExpandMore />}
              onClick={(e) => handleOpenMenu(e, item.id)}
              sx={{ textTransform: "none", color: "White" }}
            >
              {item.label}
            </Button>
            {/* Dropdown Menu */}
            <Menu
              anchorEl={menu}
              open={dropdownId === item.id}
              onClose={handleCloseMenu}
            >
              {item.options.map((option, index) => (
                <MenuItem
                  key={index}
                  component={Link}
                  to={option.route}
                  color="white"
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
    setIsNotification(false); // Close notification dialog
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
        <Grid container alignItems="center" justifyContent="space-between">
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
            xs={isMobile || isPad ? 8 : 8} // Adjust width for mobile and tablet screens
            sx={{
              backgroundColor: "#876CE8",
              padding: "0.5rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: isMobile || isPad ? "flex-start" : "center", // Align left for mobile/tablet
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Mobile & Tablet Hamburger Icon */}
            {(isMobile || isPad) && (
              <IconButton
                onClick={() => toggleDrawer(true)}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop Navbar Links */}
            {!(isMobile || isPad) && renderNavLinks()}
          </Grid>

          {/* Notification Icon Section */}
          <Grid item xs={2} textAlign="right">
            {(isPad || !isMobile) && ( // Notification visible on tablets and desktops
              <IconButton
                onClick={toggleNotification}
                ref={anchor} // Attach the ref to the icon
              >
                <Notifications sx={{ color: "#876CE8" }} />
              </IconButton>
            )}
          </Grid>
        </Grid>

        {/* Notification Dialog - Attached to the Notification Icon */}
        {isNotification && (
          <NotificationDialog
            closehandler={closeNotificationDialog}
            anchorEl={menu} // Attach the menu (notification icon) as the anchor element
          />
        )}

        {/* Mobile and Tablet Drawer for Navigation Links */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
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
