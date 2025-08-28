import { styled, Typography } from "@mui/material";

export const TypographyBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: 50,
  fontFamily: theme.typography.inter,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: 0.5,
  textAlign: "center",
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: 20,
  fontFamily: theme.typography.inter,
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
  letterSpacing: 0.15,
  maxWidth: 900,
  margin: "0 auto",
  textAlign: "justify",
}));
