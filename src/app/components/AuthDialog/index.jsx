import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { logIn, signUp } from "../../../services/authService";
import { useRouter } from "next/navigation";


const AuthDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isSignIn) {
        const response = await signUp(
          formData.username,
          formData.email,
          formData.password
        );
        console.log("Sign Up Success:", response);
        alert("Sign up successful!"); 
      } else {
        const { token, user } = await logIn(
          formData.identifier,
          formData.password
        );
       
        console.log("Login Success:", user);

        localStorage.setItem("authToken", token);

        router.push("/Newsfeed");
      }
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAuthMode = () => {
    setIsSignIn((prev) => !prev);
    setFormData({ identifier: "", username: "", email: "", password: "" });
    setError(null); // Reset error on switch
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isSignIn ? "Sign Up" : "Log In"}</DialogTitle>
      <DialogContent>
        {error && <Typography color="error">{error}</Typography>}
        {isSignIn && (
          <TextField
            margin="dense"
            label="Username"
            name="username"
            fullWidth
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
          />
        )}
        {isSignIn && (
          <TextField
            margin="dense"
            label="Email"
            name="email"
            type="email" // Ensure it's an email input
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        )}
        {!isSignIn && (
          <TextField
            margin="dense"
            label="Username or Email"
            name="identifier"
            fullWidth
            variant="outlined"
            value={formData.identifier}
            onChange={handleChange}
          />
        )}
        <TextField
          margin="dense"
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
                  style={{ marginLeft: "8px" }} // Add some spacing
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Typography
          onClick={toggleAuthMode}
          variant="body2"
          sx={{ mt: 2, cursor: "pointer", color: "blue" }}
        >
          {isSignIn
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {isSignIn ? "Sign Up" : "Log In"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;
