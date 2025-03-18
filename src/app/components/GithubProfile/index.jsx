"use client";

import { GitHub, ProfileContainer, ProfileLink, TypographyStyles } from "./styles";

const GitHubProfile = () => {
  return (
    <ProfileContainer>
      <TypographyStyles>Creator:</TypographyStyles>
      <GitHub/>
      <ProfileLink
        href="https://github.com/meislovepotato"
        target="_blank"
        rel="noopener noreferrer"
      >
        meislovepotato
      </ProfileLink>
    </ProfileContainer>
  );
};

export default GitHubProfile;
