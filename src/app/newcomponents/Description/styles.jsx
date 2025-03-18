import { styled, Typography } from "@mui/material";

export const TypographyBox = styled(Typography)(({ theme }) => ({
    display: "flex",
    fontSize: 50,
    fontFamily: theme.typography.inter,
  }));
  
export const Text = styled(Typography)(({ theme }) => ({
    display: "flex",
    fontSize: 20,
    fontFamily: theme.typography.inter,
  }));