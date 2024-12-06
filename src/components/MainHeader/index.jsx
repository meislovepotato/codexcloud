"use client";

import { AppBar, Box, styled } from "@mui/material";
import { CodexCloudLogoWhite } from "../images";

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

const MainHeader = ({ children }) => {
  return (
    <StyledNavBar>
      <LogoBox>
        <CodexCloudLogoWhite width={300} height={60} />
      </LogoBox>
      <Box>{children}</Box>
    </StyledNavBar>
  );
};

export default MainHeader;