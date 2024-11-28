"use client";

import { Box } from "@mui/material";
import { Github, FrontNavbar } from "@/app/Components";

import CodexCloud from "./Components/CodexCloud/page";
import Description from "./Components/Description/page";

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
