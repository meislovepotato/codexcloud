import { styled, AppBar, Box } from "@mui/material";

export const StyledNavBar = styled(AppBar)({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "80px",
    alignItems: "center",
    padding: "0 25px 0 25px",
    backgroundColor: "black",
  });
  
export const LogoBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });