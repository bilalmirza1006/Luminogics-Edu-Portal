import React, { useState } from "react";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { AppRoutes } from "../routs/RoutConstant";
import { Link, useNavigate } from "react-router-dom";
function Otp() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState("true");
  const [showConfirmPassword, setShowConfirmPassword] = useState("true");
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validation = () => confirmPassword === password;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // const username = localStorage.getItem("username")
  // const email = localStorage.getItem("email")
  // const token = localStorage.getItem("token")
  // const decoded = jwt_decode(token)
  // console.log("decode", decoded.userId)
  const navigate = useNavigate();

  const passwordChangeHandel = () => {
    axios
      .post("http://localhost:6464/api/verify-otp", {
        email: email,
        otp: otp,
        newPassword: password,
      })
      .then((response) => {
        console.log("otpres", response);
        if (response.data.message === "Password reset successful.") {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          navigate(AppRoutes.SIGNIN);
        }
      })
      .catch((err) => {
        console.log("error", err);
        if (err.response.data.error === "User not found.") {
          toast.error(err.response.data.error, {
            // Use err.response.data.error
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else if (err.response.data.error === "Invalid or expired OTP.") {
          toast.error(err.response.data.error, {
            // Use err.response.data.error
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error("An unexpected error occurred", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
  };

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
              Chang your password
            </Typography>
            <TextField
              sx={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                marginBottom: "15px",
              }}
              label="Enter Email"
              variant="outlined"
              // disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                marginBottom: "15px",
              }}
              label="Enter OTP"
              variant="outlined"
              // disabled={loading}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <TextField
              sx={{
                // m: 2,
                mb: 2,
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              id="outlined-password-input"
              label="Password"
              variant="outlined"
              disabled={loading}
              value={password}
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
              id="outlined-password-input2"
              label="Confirm Password"
              variant="outlined" // disabled={loading}
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  // marginLeft: 2,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                }}
                variant="contained"
                disableElevation
                mb={2}
                onClick={passwordChangeHandel}
                // disabled={loading}
              >
                {/* <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={AppRoutes.SIGNIN}
                > */}
                Change Password
                {/* </Link> */}
              </Button>
            </Box>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default Otp;
