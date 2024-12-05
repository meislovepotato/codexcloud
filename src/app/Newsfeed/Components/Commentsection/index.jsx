import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, Box } from "@mui/material";
import { createCommentService } from "../services/commentService";

const CommentSection = ({ postId, comments }) => {
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState(comments);

  const handleAddComment = async () => {
    try {
      const newComment = await createCommentService(postId, commentText);
      setAllComments([...allComments, newComment]);
      setCommentText("");
    } catch (error) {
      console.error("Failed to add comment:", error.message);
    }
  };

  return (
    <Box>
      <List>
        {allComments.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.content} secondary={comment.user.username} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
        <TextField
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          size="small"
          fullWidth
          placeholder="Add a comment..."
        />
        <Button onClick={handleAddComment} variant="contained" color="primary">
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CommentSection;
