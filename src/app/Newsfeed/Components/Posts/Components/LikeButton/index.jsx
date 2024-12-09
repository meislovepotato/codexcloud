import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";

const LikeButton = ({ postId }) => {
  const [liked, setLiked] = useState(false); // Track the like state
  const [likeCount, setLikeCount] = useState(0); // Track the like count
  const [loading, setLoading] = useState(true); // Track loading during initial fetch

  // Fetch the initial like state
  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/like/status/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        setLiked(response.data.liked); // Set the initial like state from the backend
        setLikeCount(response.data.likeCount); // Set initial like count
      } catch (error) {
        console.error("Error fetching like status:", error);
        alert("Failed to fetch like status.");
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchLikeStatus();
  }, [postId]);

  // Toggle like/unlike state and update like count
  const handleLikeToggle = async () => {
    setLoading(true); // Indicate loading during API call
    try {
      const response = await axios.post(
        `http://localhost:5000/like/toggle/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      const newLikedStatus = response.data.liked; // Update like state
      setLiked(newLikedStatus);
      setLikeCount((prevCount) => prevCount + (newLikedStatus ? 1 : -1)); // Adjust like count locally
    } catch (error) {
      console.error("Error toggling like:", error);
      alert("Failed to toggle like. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Box>
      <Typography>
        <Typography variant="body2">
          {likeCount} {likeCount === 1 ? "Like" : "Likes"}
        </Typography>
      </Typography>
      <Button
        onClick={handleLikeToggle}
        disabled={loading} // Disable button if liked or loading
        variant="contained"
        color={liked ? "primary" : "default"} // Change color based on like state
      >
        {liked ? "Unlike" : "Like"}
      </Button>
    </Box>
  );
};

export default LikeButton;
