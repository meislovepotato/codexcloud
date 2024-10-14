"use client";

import { CodexCloudLogoWhite } from "@/components/images";
import { Box, styled } from "@mui/material";

const StyledNavBar = styled(Box)({
  display: "flex",
  width: "100%",
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

const Navbar = () => {
  return (
    <StyledNavBar>
      <LogoBox>
        <CodexCloudLogoWhite width={300} height={60} />
      </LogoBox>
    </StyledNavBar>
  );
};

export default Navbar;
