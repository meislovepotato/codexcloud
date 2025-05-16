"use client";

import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { toggleLike } from "@/services/likeService";

const Post = ({ posts = [], error, onLikeChange }) => {
  const handleLikeToggle = async (postId) => {
    try {
      const result = await toggleLike(postId);
      if (onLikeChange) onLikeChange(); // Ask parent to refresh posts
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <Box style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        All Posts
      </Typography>
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        posts.map((post) => (
          <Card key={post.id} style={{ marginBottom: "16px" }}>
            <CardContent>
              <Typography variant="h6">{post.user.username}</Typography>
              <Typography variant="body1">{post.content}</Typography>
              <Typography variant="caption" color="textSecondary">
                Likes: {post.likeCount}
              </Typography>
              <Button
                variant="text"
                color="primary"
                onClick={() => handleLikeToggle(post.id)}
              >
                {post.liked ? "Unlike" : "Like"}
              </Button>
            </CardContent>
          </Card>
        ))
      )}
      {!posts.length && !error && (
        <Typography>No posts available. Try again later.</Typography>
      )}
    </Box>
  );
};

export default Post;
