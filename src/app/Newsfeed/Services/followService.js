import axios from "axios";

const API_BASE_URL = "http://your-backend-url/api"; // Replace with your backend URL

// Follow a user
export const followUserService = async (followingId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/follow/follow/${followingId}`);
    return response.data; // Success message or follow info
  } catch (error) {
    console.error("Error following user:", error.message);
    throw error;
  }
};

// Unfollow a user
export const unfollowUserService = async (followingId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/follow/unfollow/${followingId}`);
    return response.data; // Success message or unfollow info
  } catch (error) {
    console.error("Error unfollowing user:", error.message);
    throw error;
  }
};

// Get followers of a user
export const getUserFollowersService = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/follow/followers/${userId}`);
    return response.data; // List of followers
  } catch (error) {
    console.error("Error fetching followers:", error.message);
    throw error;
  }
};

// Get users followed by a user
export const getUserFollowingService = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/follow/following/${userId}`);
    return response.data; // List of users followed
  } catch (error) {
    console.error("Error fetching following:", error.message);
    throw error;
  }
};
