"use client";
import { useState } from "react";
import { apiRequest } from "../utils/apiRequest";

export default function TestConnection() {
  const [result, setResult] = useState("");

  const checkConnection = async () => {
    try {
      const response = await apiRequest("/api/status");
      setResult(response.message);
    } catch (error) {
      setResult(`Error: ${error.message}`);
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
