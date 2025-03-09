"use client";

import { ButtonBox, LogInButton, SignInButton } from "./styles";

const FrontNavbar = ({ onLogin, onSignUp }) => {
  return (
    <ButtonBox>
      <LogInButton onClick={onLogin}>Log in</LogInButton>
      <SignInButton onClick={onSignUp}>Sign up</SignInButton>
    </ButtonBox>
  );
};

export default FrontNavbar;
