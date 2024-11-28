import axios from "axios";

const API_BASE_URL = "http://your-backend-url/api"; // Replace with your backend URL

export const fetchAllPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/post/getallposts`);
  return response.data;
};
