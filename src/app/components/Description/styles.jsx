import { styled, Typography, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  maxWidth: 800,
  margin: "0 auto",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down(1025)]: {
    gap: theme.spacing(3),
    padding: theme.spacing(2.5),
    maxWidth: 720,
  },
  [theme.breakpoints.down(426)]: {
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: "100%",
  },
}));

export const TypographyBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: 28,
  fontFamily: theme.typography.inter,
  fontWeight: 700,
  lineHeight: 1.25,
  letterSpacing: 0.2,
  textAlign: "center",
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.up("sm")]: {
    fontSize: 34,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 40,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 48,
  },
  [theme.breakpoints.down(1025)]: {
    fontSize: 32,
  },
  [theme.breakpoints.down(426)]: {
    fontSize: 24,
    letterSpacing: 0.1,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: 15,
  fontFamily: theme.typography.inter,
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  letterSpacing: 0.1,
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "justify",
  [theme.breakpoints.up("sm")]: {
    fontSize: 16,
    maxWidth: 680,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 17,
    maxWidth: 760,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 18,
    maxWidth: 820,
  },
  [theme.breakpoints.down(1025)]: {
    fontSize: 16,
    maxWidth: 680,
  },
  [theme.breakpoints.down(426)]: {
    fontSize: 15,
    maxWidth: "100%",
    textAlign: "left",
  },
}));
