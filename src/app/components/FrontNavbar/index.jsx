"use client";

import { Box, Button, styled } from "@mui/material";
import { useState } from "react";
import AuthDialog from "../AuthDialog";
import MainHeader from "@/components/MainHeader";

const ButtonBox = styled(Box)({
  display: "flex",
  gap: "10px", // Add spacing between buttons
});

const LogInButton = styled(Button)({
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

const SignInButton = styled(Button)({
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

const FrontNavbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isSignInMode, setIsSignInMode] = useState(true); 

  const handleLogInClick = () => {
    setIsSignInMode(false);
    setOpenDialog(true);
  };

  const handleSignInClick = () => {
    setIsSignInMode(true);
    setOpenDialog(true);
  };

  return (
    <MainHeader>
      <ButtonBox>
        <LogInButton onClick={handleLogInClick}>Log in</LogInButton>
        <SignInButton onClick={handleSignInClick}>Sign up</SignInButton>
      </ButtonBox>

      {/* Render AuthDialog and pass the open and mode states */}
      <AuthDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        isSignIn={isSignInMode}
      />
    </MainHeader>
  );
};

export default FrontNavbar;
