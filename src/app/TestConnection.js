"use client";
import { useState } from "react";

export default function TestConnection() {
  const [result, setResult] = useState("");

  const checkConnection = async () => {
    try {
      const response = await fetch('https://codexcloudai-api.vercel.app/api/status', {
        method: "GET",
        credentials: "include",
        mode: "cors",
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const data = await response.json();
      console.log("✅ API Response:", data);
    
      setResult(data.message, "Success!");
      alert(`✅ API Response: ${data.message || "Success!"}`);
    } catch (error) {
      console.error("❌ Connection error:", error);
      alert("❌ Connection failed!");
      setResult("Failed!");
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
