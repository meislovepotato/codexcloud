"use client";

import { CodexCloudLogoWhite } from "@/components/images";
import { Box, Button, styled } from "@mui/material";

const StyledNavBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "auto",
  height: "80px",
  alignItems: "center",
  padding: " 0 25px 0 25px",
  backgroundColor: "black",
  position: "sticky",
  top: 0,
  zIndex: 10,
});

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const ButtonBox = styled(Box)({
  display: "flex",
  gap: "10px", // Add spacing between buttons
});

const LogInBox = styled(Button)({
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

const SignInBox = styled(Button)({
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

const Navbar = () => {
  return (
    <StyledNavBar>
      <LogoBox>
        <CodexCloudLogoWhite width={300} height={60} />
      </LogoBox>
      <ButtonBox>
        <LogInBox>Log in</LogInBox>
        <SignInBox>Sign in</SignInBox>
      </ButtonBox>
    </StyledNavBar>
  );
};

export default Navbar;
