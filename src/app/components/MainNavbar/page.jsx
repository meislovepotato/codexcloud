import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const MainNavbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear auth token on logout
    router.push("/"); // Redirect to front page
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CodexCloud
        </Typography>
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
    </AppBar>
  );
};

export default MainNavbar;
