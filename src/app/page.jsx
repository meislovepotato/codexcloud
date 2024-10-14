"use client";

import { Box, Typography } from "@mui/material";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar/page";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ height: "150vh" }}>
        <Box>
          <Spline scene="https://prod.spline.design/sOSl1dkBxmqz557q/scene.splinecode" />
        </Box>

        {/* Website Description */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to CodexCloud
          </Typography>
          <Typography variant="body1">
            CodexCloud is a platform designed to help developers share code
            snippets, collaborate on projects, and discover new tools for web
            development. With a focus on modern frameworks like Next.js, we
            provide a seamless experience for managing your code, learning best
            practices, and showcasing your work in an interactive way.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Whether youre looking to enhance your skills or contribute to a
            growing community of developers, CodexCloud offers the tools and
            resources you need to elevate your coding journey. Explore 3D
            visualizations, coding tutorials, and project showcases all in one
            place!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
