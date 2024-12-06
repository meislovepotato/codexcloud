"use client";

import { useState } from "react";
import MainHeader from "../../../../components/MainHeader";

import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const FeedHeader = () => {
  const [anchor, setAnchor] = useState(null);
  const router = useRouter();

  const handleOpenMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchor(null);
  };

  const handleLogout = async() => {
    try {
      localStorage.removeItem("authToken");
      
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }

    handleCloseMenu()
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
