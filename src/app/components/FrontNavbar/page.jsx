"use client";

import { CodexCloudLogoWhite } from "@/components/images";
import { AppBar, Box, Button, styled } from "@mui/material";
import { useState } from "react";
import AuthDialog from "../AuthDialog/page";

const StyledNavBar = styled(AppBar)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  height: "80px",
  alignItems: "center",
  padding: "0 25px 0 25px",
  backgroundColor: "black",
});

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

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
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility
  const [isSignInMode, setIsSignInMode] = useState(true); // State to toggle between Sign Up and Log In

  const handleLogInClick = () => {
    setIsSignInMode(false);
    setOpenDialog(true);
  };

  const handleSignInClick = () => {
    setIsSignInMode(true);
    setOpenDialog(true);
  };

  return (
    <StyledNavBar>
      <LogoBox>
        <CodexCloudLogoWhite width={300} height={60} />
      </LogoBox>
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
    </StyledNavBar>
  );
};

export default FrontNavbar;
