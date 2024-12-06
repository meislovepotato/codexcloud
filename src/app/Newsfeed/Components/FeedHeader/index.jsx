"use client";

import { useState } from "react";
import MainHeader from "../../../../components/MainHeader";

import { Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";

const FeedHeader = () => {
  const [anchor, setAnchor] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchor(null);
  };

  const handleLogout = () => {
    console.log("Logged out");
    // Add logout logic here
    handleCloseMenu();
  };

  return (
    <MainHeader>
      <IconButton onClick={handleOpenMenu} size="small">
        <Avatar alt="User Icon" />
      </IconButton>
      <Menu
        anchor={anchor}
        open={Boolean(anchor)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </MainHeader>
  );
};

export default FeedHeader;
