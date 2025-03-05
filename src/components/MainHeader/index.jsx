"use client";

import { Box } from "@mui/material";
import { StyledNavBar } from "./styles";
import Logo from "./components";

const MainHeader = ({ children }) => {
  return (
    <StyledNavBar>
      <Logo />
      <Box>{children}</Box>
    </StyledNavBar>
  );
};

export default MainHeader;
