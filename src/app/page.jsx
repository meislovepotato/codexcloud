"use client";

import { Box } from "@mui/material";
import { CodexCloud, Description, Github } from "./newcomponents";

export default function Home() {
  return (
    <Box>
      <CodexCloud />
      <Description />
      <Github />
    </Box>
  );
}
