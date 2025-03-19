"use client";

const testConnection = async () => {
  try {
    const response = await fetch(
      "https://codexcloudai-api.vercel.app/api/status",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) throw new Error("Failed to connect");

    const data = await response.json();
    console.log("✅ Connection successful:", data);
  } catch (error) {
    console.error("❌ Connection error:", error);
  }
};

testConnection();
