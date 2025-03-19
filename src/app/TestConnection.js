"use client";
import { useState } from "react";

export default function TestConnection() {
  const [result, setResult] = useState("");

  const checkConnection = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
        credentials: "include",
      });
      const data = await response.json();
      console.log("✅ API Response:", data);
      setResult(data.message,  "Success!");
      alert(`✅ API Response: ${data.message || "Success!"}`);
    } catch (error) {
      console.error("❌ Connection error:", error);
      alert("❌ Connection failed!");
      setResult(data.message, "Failed!");
    }
  };

  return (
    <div>
      <h1>API Connection Test</h1>
      <button onClick={checkConnection}>Test API</button>
      <p>Result: {result}</p>
    </div>
  );
}
