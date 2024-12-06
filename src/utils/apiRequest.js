const BASE_URL = "http://localhost:5000"; 

export const apiRequest = async (endpoint, method = "GET", body = null, headers = {}) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "An error occurred");
  }

  return response.json();
};
