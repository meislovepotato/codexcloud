"use client";

import { Roboto, Inter, K2D } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
  subsets: ["latin"],
});

const k2d = K2D({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

const theme = createTheme({
  spacing: 3,
  typography: {
    inter: inter.style.fontFamily,
    k2d: k2d.style.fontFamily,
  },
  palette: {
    color: {
      white: "#f3f3f3",
      black: "#141414",
      grey: "#242424",
    },
  },
});

export default theme;
