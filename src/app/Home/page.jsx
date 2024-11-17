"use client";

import { useState, useEffect } from "react";
import { Box, Tabs, Tab, Button, TextField } from "@mui/material";
import { Feed, MainNavbar, Post, SideBar } from "../Components";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Fetch user posts when page loads
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      // Redirect to login if not authenticated
      router.push("/login");
    } else {
      // Fetch posts from API
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    // Fetch posts from your API (replace with your actual API call)
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data.posts);
  };

  const handlePostSubmit = async () => {
    if (newPost.trim() === "") return;

    // Submit new post (replace with your actual API call)
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ content: newPost }),
    });

    const data = await response.json();
    setPosts([data.post, ...posts]);
    setNewPost(""); // Clear input after posting
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 3,
      }}
    >
      <MainNavbar />
      {/* Tabs for navigation */}
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="For You" />
        <Tab label="Following" />
        <Tab label="Settings" />
      </Tabs>

      {/* Conditional rendering based on selected tab */}
      {selectedTab === 0 && (
        <Box>
          {/* Post input box */}
          <Box sx={{ mt: 2, mb: 3 }}>
            <TextField
              label="What's on your mind?"
              fullWidth
              multiline
              rows={3}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handlePostSubmit}
            >
              Post
            </Button>
          </Box>

          {/* Feed for 'For You' section */}
          <Post posts={posts} />
        </Box>
      )}

      {selectedTab === 1 && (
        <Box>
          {/* Feed for 'Following' section */}
          <Feed />
        </Box>
      )}

      {selectedTab === 2 && (
        <Box>
          {/* Settings page */}
          <SideBar />
        </Box>
      )}
    </Box>
  );
}
