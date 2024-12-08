"use client";

import { Box } from "@mui/material";
import FeedHeader from "./Components/FeedHeader";
import Posts from "./Components/Posts";

const Newsfeed = () => {
  return (
    <Box>
      <FeedHeader />
      <Posts />
    </Box>
  );
};

export default Newsfeed;
