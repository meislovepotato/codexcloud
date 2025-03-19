"use client";

import { Box } from "@mui/material";
import { CodexCloud, Description, Github } from "./components";
import TestConnection from "./TestConnection";

export default function Home() {
  return (
    <Box>
      <CodexCloud />
      <Description />
      <TestConnection />
      <Github />
    </Box>
  );
}
