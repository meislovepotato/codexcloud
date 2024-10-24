"use client"; // This file is a client-side component

import { useState, useEffect } from "react";
import { FrontNavbar, MainNavbar } from ".";


export default function NavbarWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking localStorage)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? <MainNavbar /> : <FrontNavbar />}
    </>
  );
}
