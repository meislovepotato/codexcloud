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
import { useRouter } from "next/navigation"; // Use the correct `useRouter` from Next.js
import { logIn, signUp, setAuthToken } from "@/services/authService"; // Corrected path for services

const AuthDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    username: "",
    email: "",
  }); // Consolidated all fields into one state object

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isSignIn, setIsSignIn] = useState(false); // State to switch between Sign In and Sign Up
  const [error, setError] = useState(null); // State to display error messages
  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        // Call the Sign-Up API
        const response = await signUp(
          formData.username,
          formData.email,
          formData.password
        );
        console.log("Sign Up Success:", response);
        alert("Sign up successful!");
      } else {
        // Call the Login API
        const { token, user } = await logIn(
          formData.identifier,
          formData.password
        );
        console.log("Login Success:", user);

        setAuthToken(token); // Save token and set headers
        router.push("/newsfeed"); // Navigate to the newsfeed page
      }
      onClose(); // Close the dialog after success
    } catch (error) {
      setError(error); // Display error message
    }
  };

  // Toggle between Sign In and Sign Up modes
  const toggleAuthMode = () => {
    setIsSignIn((prev) => !prev);
    setFormData({ identifier: "", username: "", email: "", password: "" }); // Reset fields
    setError(null); // Clear errors
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
            type="email"
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
                <Button onClick={() => setShowPassword((prev) => !prev)}>
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
