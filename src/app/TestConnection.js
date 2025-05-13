"use client";

const testConnection = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/status`,
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
