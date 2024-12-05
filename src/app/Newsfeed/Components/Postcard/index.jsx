import React, { useState } from "react";
import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import { toggleLikeService } from "../services/likeService";
import CommentSection from "./CommentSection";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked); // Assuming `isLiked` comes from backend
  const [likeCount, setLikeCount] = useState(post.likeCount);

  const handleLike = async () => {
    try {
      const result = await toggleLikeService(post.id);
      setLiked(result.liked);
      setLikeCount(result.liked ? likeCount + 1 : likeCount - 1);
    } catch (error) {
      console.error("Failed to toggle like:", error.message);
    }
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.user.username}</Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleLike} variant={liked ? "contained" : "outlined"} color="primary">
          {liked ? "Unlike" : "Like"}
        </Button>
        <Typography variant="body2" color="textSecondary">
          {likeCount} {likeCount === 1 ? "Like" : "Likes"}
        </Typography>
      </CardActions>
      <Box sx={{ padding: 2 }}>
        <CommentSection postId={post.id} comments={post.comments} />
      </Box>
    </Card>
  );
};

export default PostCard;
