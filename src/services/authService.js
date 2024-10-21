const BASE_URL = "http://localhost:5000/auth"; // URL for your backend API

export const fetchUserData = async () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No authentication token found.");
  }

  const response = await fetch(`${BASE_URL}/user-profile`, {
    // replace with your protected route
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  const data = await response.json();
  return data;
};

// Sign In (Register) function
export const signUp = async (username, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Sign up failed");
    }

    return data;
  } catch (error) {
    console.error("Sign up error:", error.message);
    throw error;
  }
};

// Log In function
export const logIn = async (identifier, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Log in failed");
    }

    return data; // Returns token and user data
  } catch (error) {
    console.error("Log in error:", error.message);
    throw error;
  }
};
