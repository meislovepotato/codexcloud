"use client";

import { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

const FeedNavbar = ({ onLogout }) => {
  const [anchor, setAnchor] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchor(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu} size="small">
        <Avatar alt="User Icon" />
      </IconButton>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={onLogout}>Log Out</MenuItem>
      </Menu>
    </>
  );
};

export default FeedNavbar;
