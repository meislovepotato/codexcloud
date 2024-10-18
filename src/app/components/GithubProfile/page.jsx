"use client";

import { Box, Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  color: theme.palette.color.black,
}));

const ProfileLink = styled("a")({
  color: "inherit",
  textDecoration: "none",
  fontSize: "1.2rem",
  "&:hover": {
    textDecoration: "underline",
  },
});

const GitHubProfile = () => {
  return (
    <ProfileContainer>
      <Typography variant="body1">Creator:</Typography>
      <GitHubIcon sx={{ marginRight: 1, marginLeft: 1 }} />
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
