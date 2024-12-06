"use client";

import { Box } from "@mui/material";
import { CodexCloud, Description, FrontNavbar, Github } from "./Components";

export default function Home() {
  return (
    <Box>
      <FrontNavbar />
      <CodexCloud />
      <Description />
      <Github />
    </Box>
  );
}
