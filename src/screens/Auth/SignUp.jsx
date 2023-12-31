import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState("true");
  const [showConfirmPassword, setShowConfirmPassword] = useState("true");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelName = (event) => {
    setName(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validation = () => confirmPassword === password;
  const navigate = useNavigate();

  const handleApi = () => {
    setLoading(true);
    if (!validation()) {
      alert("Passwords must  match.");
      setLoading(false);
    } else {
      axios
        .post("http://localhost:6464/api/register-user", {
          name: name,
          email: email,
          password: password,
        })

        .then((response) => {
          if (!response.data.success) {
            throw new Error(response.data.msg);
          } else {
            console.log("Registration successful");
            alert("Registration successful");
            navigate("/sign-in");
          }
          setLoading(false);
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.msg
          ) {
            alert(error.response.data.msg);
            setLoading(false);
          } else {
            alert(
              "An error occurred while registering. Please try again later."
            );
          }
          // console.error("Error: ", error);
          setLoading(false);
        });
      // if (validation()) {
      //   setLoading(false);
      // } else {
      //   setLoading(true);
      // }
    }
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
        {/* <Grid sx={{ width: "40%" }}> */}
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
              SignUp
            </Typography>
            <TextField
              sx={{
                width: "100%",
                marginBottom: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              id="filled-basic"
              label="Name"
              variant="filled"
              disabled={loading}
              mb={2}
              value={name}
              onChange={handelName}
            />
            <TextField
              sx={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              id="filled-basic"
              label="Email"
              variant="filled"
              disabled={loading}
              mb={2}
              value={email}
              onChange={handelEmail}
            />
            <TextField
              sx={{
                m: 2,
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              id="outlined-password-input"
              label="Password"
              variant="filled"
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
              id="outlined-password-input"
              label="Password"
              variant="filled"
              disabled={loading}
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

            <Button
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              variant="contained"
              disableElevation
              mb={2}
              onClick={handleApi}
              disabled={loading}
            >
              {loading && (
                <CircularProgress
                  size={24}
                  style={{
                    color: "black",
                    marginRight: "5px",
                  }}
                />
              )}
              SignIn
            </Button>

            {/* <Box
              sx={{
                display: "flex",
                p: 2,
              }}
            > */}
            <Box>
              <Typography sx={{ marginTop: "10px" }}>
                Have an account already?
              </Typography>
            </Box>
            <Link to={"/sign-in"}> SignIn.</Link>
            {/* </Box> */}

            <Typography>or signUp with</Typography>
            <Box
              sx={{
                display: "flex",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "#0A66C2",
                  display: "flex",
                  alignItems: "center",
                  margin: "4px",

                  justifyContent: "center",
                }}
              >
                <LinkedInIcon />
              </div>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "#EA4335",
                  display: "flex",
                  alignItems: "center",
                  margin: "4px",

                  justifyContent: "center",
                }}
              >
                <GoogleIcon />
              </div>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "#93ccea",
                  display: "flex",
                  alignItems: "center",
                  margin: "4px",

                  justifyContent: "center",
                }}
              >
                <FacebookIcon />
              </div>
            </Box>
          </div>
        </Grid>
        {/* </Grid> */}
      </Box>
    </div>
  );
}

export default SignUp;
