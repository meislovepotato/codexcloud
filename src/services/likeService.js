import axios from "axios";
const API_URL = "http://localhost:5000";

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