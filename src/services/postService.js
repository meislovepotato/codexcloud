const BASE_URL = "http://localhost:5000/posts"; // Adjust this to match your backend

export const createPost = async (content) => {
  const token = localStorage.getItem("authToken");
  const response = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });
  if (!response.ok) {
    throw new Error("Failed to create post");
  }
};

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return data;
};
