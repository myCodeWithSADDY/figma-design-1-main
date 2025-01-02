import {
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { green } from "../../../Utils/color";

const DropDown = ({ data, title, icon }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget); // Set the anchor element to the button
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <Container>
      <Button
        variant="outlined"
        color="black"
        sx={{ fontWeight: "bold" }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {title}
        <Stack>{icon}</Stack>
      </Button>

      {/* Single Menu for all subjects */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {data.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            <Typography>{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default DropDown;
