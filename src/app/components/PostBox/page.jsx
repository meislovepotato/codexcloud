import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { createPost } from "@/services/postService"; // You need to create this service

const PostBox = () => {
  const [postContent, setPostContent] = useState("");

  const handlePost = async () => {
    if (postContent) {
      try {
        await createPost(postContent);
        setPostContent(""); // Clear the post content after submitting
        alert("Post created successfully");
      } catch (error) {
        console.error("Failed to post", error);
      }
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={3}
        placeholder="What's on your mind?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <Button onClick={handlePost} variant="contained" color="primary" sx={{ mt: 1 }}>
        Post
      </Button>
    </Box>
  );
};

export default PostBox;
