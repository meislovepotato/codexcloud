import axios from "axios";
const API_URL = "http://localhost:5000";

export const checkLikeStatus = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/like/status/${postId}`);
    return response.data.liked; // Return true or false
  } catch (error) {
    console.error("Error checking like status:", error);
    return false; // Assume not liked on error
  }
};


// Toggle like for a specific post
export const toggleLike = async (postId) => {
  try {
    const response = await axios.post(`${API_URL}/like/toggle/${postId}`);
    return response.data; // Returns { liked: true/false }
  } catch (error) {
    console.error("Error toggling like:", error.response?.data || error.message);
    throw error;
  }
};