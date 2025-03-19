import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || 'https://codexcloudai-api.vercel.app' || 'https://codexcloudai-api-meislovepotatos-projects.vercel.app';

export const apiRequest = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  const token = localStorage.getItem("authToken");

  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      data: body,
    });

    return response.data; // Return the payload from the response
  } catch (error) {
    throw new Error(error.response?.data?.error || "An error occurred");
  }
};
