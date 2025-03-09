"use client";

import React, { useState } from "react";
import { createPost } from "@/services/postService";
import { Typography } from "@mui/material";
import {
  FormContainer,
  StyledInput,
  StyledButton,
  ErrorMessage,
  SuccessMessage,
} from "./styles";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await createPost(post);
      setSuccess("Post created successfully!");
      setPost({ title: "", content: "" });
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <FormContainer>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Create Post
      </Typography>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}

      <form onSubmit={handleSubmit}>
        <StyledInput
          label="Title"
          variant="outlined"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
        <StyledInput
          label="Content"
          variant="outlined"
          name="content"
          multiline
          rows={4}
          value={post.content}
          onChange={handleChange}
          required
        />
        <StyledButton type="submit" variant="contained">
          Create Post
        </StyledButton>
      </form>
    </FormContainer>
  );
};

export default CreatePost;
