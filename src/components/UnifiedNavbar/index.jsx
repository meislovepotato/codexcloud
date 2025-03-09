"use client";

import { useRouter } from "next/navigation";
import { Logo, FrontNavbar, FeedNavbar } from "./components";
import { StyledNavBar } from "./styles";
import { useEffect, useState } from "react";
import { AuthDialog } from "@/app/Components";

const UnifiedNavbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("authToken"));
  }, []);

  const handleLogInClick = () => {
    setIsSignInMode(false);
    setOpenDialog(true);
  };

  const handleSignInClick = () => {
    setIsSignInMode(true);
    setOpenDialog(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/");
  };

  const handleAuthChange = () => {
    setIsLoggedIn(!!localStorage.getItem("authToken"));
  };

  if (typeof window !== "undefined" && isLoggedIn === null) {
    return null;
  }

  return (
    <StyledNavBar>
      <Logo />
      {isLoggedIn ? (
        <FeedNavbar onLogout={handleLogout} />
      ) : (
        <FrontNavbar onLogin={handleLogInClick} onSignUp={handleSignInClick} />
      )}

      <AuthDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        isSignIn={isSignInMode}
        onAuthChange={handleAuthChange}
      />
    </StyledNavBar>
  );
};

export default UnifiedNavbar;
