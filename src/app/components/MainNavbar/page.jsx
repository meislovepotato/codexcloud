import { AppBar, Toolbar, Button, styled, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { CodexCloudLogoWhite } from "../../../components/images";

const StyledNavBar = styled(AppBar)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  height: "80px",
  alignItems: "center",
  padding: "0 25px 0 25px",
  backgroundColor: "black",
});

const ButtonBox = styled(Box)({
  display: "flex",
  gap: "10px", // Add spacing between buttons
});

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const MainNavbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear auth token on logout
    router.push("/"); // Redirect to front page
  };

  return (
    <StyledNavBar>
      <Toolbar>
        <LogoBox>
          <CodexCloudLogoWhite width={300} height={60} />
        </LogoBox>
        <Button color="inherit" onClick={() => router.push("/home")}>
          For You
        </Button>
        <Button color="inherit" onClick={() => router.push("/following")}>
          Following
        </Button>
        <Button color="inherit" onClick={() => router.push("/settings")}>
          Settings
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </StyledNavBar>
  );
};

export default MainNavbar;
