import { Box, Button, styled } from "@mui/material";

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  [theme.breakpoints.down(1025)]: {
    height: "auto",
    width: "auto",
  },
  [theme.breakpoints.down(426)]: {
    gap: "5px",
  },
}));

export const LogInButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  [theme.breakpoints.down(1025)]: {
    fontSize: "12px",
    padding: "4px 8px",
  },
  [theme.breakpoints.down(426)]: {
    fontSize: "8px",
    height: "20px",
    padding: 0,
  },
}));

export const SignInButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  [theme.breakpoints.down(1025)]: {
    fontSize: "12px",
    padding: "4px 8px",
  },
  [theme.breakpoints.down(426)]: {
    fontSize: "8px",
    height: "20px",
    padding: 0,
  },
}));
