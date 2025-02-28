import { styled, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


export const ProfileContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    color: theme.palette.color.black,
  }));
  
export const ProfileLink = styled("a")({
    color: "inherit",
    textDecoration: "none",
    fontSize: "1.2rem",
    "&:hover": {
      textDecoration: "underline",
    },
  });

export const TypographyStyles = styled(Typography)(({ theme }) => ({
    display: "flex",
    fontSize: 18,
    fontFamily: theme.typography.inter,
  }));

  export const GitHub = styled(GitHubIcon)(({ theme }) => ({
    fontFamily: theme.typography.inter,
    fontSize: 22,
    marginLeft: 4,
}));