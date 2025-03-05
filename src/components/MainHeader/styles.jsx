import { styled, AppBar, Box } from "@mui/material";

export const StyledNavBar = styled(AppBar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "80px",
    alignItems: "center",
    padding: "0 25px 0 25px",
    backgroundColor: "black",
  }));
