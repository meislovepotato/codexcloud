"use client";

import { Box } from "@mui/material";
import { Github, FrontNavbar, CodexCloud, Description } from "@/app/Components";

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
