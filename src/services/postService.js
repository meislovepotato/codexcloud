import axios from "axios";

const API_URL = "http://localhost:5000"; // Base API URL

// Set default Authorization header from token in localStorage
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");  // Get the token from localStorage
  console.log("Token from localStorage:", token);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;  // Set Authorization header
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Fetch all posts
export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/getallposts`);
    return response.data; // Returns posts data
  } catch (error) {
    console.error("Error fetching posts:", error.response?.data || error.message);
    throw error.response?.data?.error || "Failed to fetch posts";
  }
};
