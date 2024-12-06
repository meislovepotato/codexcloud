// authService.js
import { apiRequest } from "../utils/apiRequest";

export const signUp = async (username, email, password) => {
  return apiRequest("/auth/register", "POST", { username, email, password });
};

export const logIn = async (identifier, password) => {
  return apiRequest("/auth/login", "POST", { identifier, password });
};
