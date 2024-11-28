import axios from "axios";

const API_BASE_URL = "http://your-backend-url/api"; // Replace with your backend URL

// Toggle like on a post
export const toggleLikeService = async (postId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/like/toggle/${postId}`);
    return response.data; // { liked: true/false }
  } catch (error) {
    console.error("Error toggling like:", error.message);
    throw error;
  }
};
