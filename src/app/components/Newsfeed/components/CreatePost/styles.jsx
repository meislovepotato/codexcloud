import { Box, styled, TextField, Button } from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  margin: "auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

export const StyledInput = styled(TextField)(({ }) => ({
  width: "100%",
  marginBottom: "16px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: "10px",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const ErrorMessage = styled(Box)({
  color: "red",
  fontSize: "14px",
  marginBottom: "10px",
});

export const SuccessMessage = styled(Box)({
  color: "green",
  fontSize: "14px",
  marginBottom: "10px",
});