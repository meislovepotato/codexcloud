import axios from "axios";

// Base API URL
const API_URL = process.env.REACT_APP_API_URL;

// Function to set Authorization token dynamically
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("authToken", token); // Store token in localStorage
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Set token in Axios headers
  } else {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    delete axios.defaults.headers.common["Authorization"]; // Remove token from Axios headers
  }
};

// Register a new user
export const signUp = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Registration failed";
  }
};

// Log in an existing user
export const logIn = async (identifier, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      identifier,
      password,
    });
    return response.data; // Returns token and user data
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};
