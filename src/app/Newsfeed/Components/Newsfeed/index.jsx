import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../services/postService";
import PostCard from "./PostCard";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

const Newsfeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Newsfeed
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </Container>
  );
};

export default Newsfeed;
