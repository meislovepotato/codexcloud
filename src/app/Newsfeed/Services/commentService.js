import axios from "axios";

const API_BASE_URL = "http://your-backend-url/api"; // Replace with your backend URL

// Create a new comment
export const createCommentService = async (postId, content) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/comment/${postId}`, { content });
    return response.data; // Returns the created comment
  } catch (error) {
    console.error("Error creating comment:", error.message);
    throw error;
  }
};

// Edit an existing comment
export const editCommentService = async (commentId, content) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/comment/${commentId}`, { content });
    return response.data; // Returns the updated comment
  } catch (error) {
    console.error("Error editing comment:", error.message);
    throw error;
  }
};

// Delete a comment
export const deleteCommentService = async (commentId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/comment/${commentId}`);
    return response.data; // Success message or status
  } catch (error) {
    console.error("Error deleting comment:", error.message);
    throw error;
  }
};
