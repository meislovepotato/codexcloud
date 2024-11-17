"use client";

import { Box, styled, Typography } from "@mui/material";
import Spline from "@splinetool/react-spline";
import { Github, FrontNavbar } from "@/app/Components";

const TypographyBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: 50,
  fontFamily: theme.typography.inter,
}));

const Description = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: 20,
  fontFamily: theme.typography.inter,
}));

export default function Home() {
  return (
    <Box>
      <FrontNavbar />
      <Box sx={{ height: "150vh" }}>
        <Box>
          <Spline scene="https://prod.spline.design/sOSl1dkBxmqz557q/scene.splinecode" />
        </Box>

        {/* Website Description */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <TypographyBox variant="h4">Welcome to CodexCloud</TypographyBox>
          <Description>
            CodexCloud is an innovative platform designed for book lovers and
            avid readers to share their passion for literature. Whether you're
            diving into a timeless classic or discovering the latest bestseller,
            CodexCloud provides a space for you to connect, reflect, and engage
            with a vibrant community.
          </Description>
          <Description>
            At CodexCloud, users can easily log in and post about any book,
            whether it's available online or offline. Share your thoughts and
            insights by writing detailed reviews that help others make informed
            reading choices. You can even include links to the books you're
            discussing, making it easier for fellow readers to find and explore
            them.
          </Description>
          <Description>
            But that's not all—CodexCloud is also a social hub where readers can
            interact with one another. Like and comment on posts, engage in
            meaningful discussions, and discover new perspectives on literature.
            With our platform, you'll find a wealth of recommendations tailored
            to your interests, whether you're seeking books in a specific genre
            or looking to explore different themes and stories.
          </Description>
          <Description>
            Join us at CodexCloud and be part of a growing community that
            celebrates the written word. Together, let's explore the world of
            books, share our stories, and inspire one another to read more!
          </Description>
        </Box>
      </Box>
      <Github />
    </Box>
  );
}
