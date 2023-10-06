import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";

function ResetPassword() {
  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState("true");
  const [showConfirmPassword, setShowConfirmPassword] = useState("true");
  const [confirmPassword, setConfirmPassword] = useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const leftSideStyle = {
    backgroundColor: "white",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: matches ? "80%" : "70%",
    border: "2px solid black",
    width: matches ? "50%" : "80%",
    borderRadius: "20px",
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handelPassword = (event) => {
    setNewPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validation = () => confirmPassword === newpassword;

  // const token = localStorage.getItem("token");
  // const token = localStorage.getItem("token");
  const token = localStorage.getItem("token");
  // try {
  //   const decodedToken = jwt_decode(token);
  //   if (decodedToken.exp < Date.now() / 1000) {
  //     console.log("Token has expired.");
  //   } else {
  //     const userId = decodedToken.sub;
  //     console.log("User ID:", userId);
  //   }
  // } catch (error) {
  //   console.error("Error decoding JWT:", error);
  // }

  // const token = "eyJ0eXAiO.../// jwt token";
  const decoded = jwt_decode(token);
  console.log("decode", decoded.userId);

  const changPasswordApi = () => {
    axios
      .post(`http://localhost:6464/api/reset-password/${decoded.userId}`, {
        currentPassword: currentpassword,
        newPassword: newpassword,
      })
      .then((response) => {
        console.log("then", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right bottom,  #525252, #3d72b4)",
        }}
      >
        <Grid item xs={12} sm={6} sx={leftSideStyle}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant={matches ? "h3" : "h4"} color="black" mb={2}>
              Reset-Password
            </Typography>
            <TextField
              sx={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                // marginBottom: "15px",
              }}
              label="Current Password"
              variant="outlined"
              // disabled={loading}
              value={currentpassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
              sx={{
                m: 2,
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              id="outlined-password-input"
              label="New Password"
              variant="outlined" // disabled={loading}
              value={newpassword}
              onChange={handelPassword}
              autoComplete="current-password"
              type={showPassword ? "password" : "text"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              sx={{
                mb: 2,
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              id="outlined-password-input"
              label="Confirm Password"
              variant="outlined"
              s // disabled={loading}
              helperText={
                confirmPassword &&
                !validation() && (
                  <p style={{ color: "red" }}>Passwords do not match</p>
                )
              }
              value={confirmPassword}
              onChange={handelConfirmPassword}
              autoComplete="current-password"
              type={showConfirmPassword ? "password" : "text"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                }}
                variant="contained"
                mb={2}
                onClick={changPasswordApi}
                // disabled={loading}
              >
                Chang Password
              </Button>
            </Box>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default ResetPassword;
