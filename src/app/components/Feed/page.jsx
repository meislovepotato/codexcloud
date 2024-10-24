import { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { fetchPosts } from "@/services/postService"; // You need to create this service

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      {posts.map((post, index) => (
        <Paper key={index} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="body1">{post.content}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Feed;
