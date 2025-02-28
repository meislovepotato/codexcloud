"use client";

import { Box } from "@mui/material";
import { CodexCloudLogoWhite } from "../images";
import { LogoBox, StyledNavBar } from "./styles";

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
