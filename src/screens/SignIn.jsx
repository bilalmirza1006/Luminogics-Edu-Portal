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
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState("true");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  const handelApi = () => {
    console.log("signin", email, password);
    navigate("/");
    axios
      .post("http://localhost:6464/api/login", {
        // name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data.success) {
          throw new Error("USER NOT FOUND");
        }
        console.log(response);
        navigate("/");
        alert("submitted");
      })
      .catch((error) => {
        alert(error);
        console.log("CATCH: ", error);
      });
  };

  const leftSideStyle = {
    backgroundColor: "white",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: matches ? "80vh" : "70vh",
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
          backgroundColor: "gray",
        }}
      >
        {/* <Grid sx={{ width: "40%" }}> */}
        <Grid item xs={12} sm={6} sx={leftSideStyle}>
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="black" mb={2}>
              Signin
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="filled-basic"
              label="Email"
              variant="filled"
              mb={2}
              value={email}
              onChange={handelEmail}
            />
            <TextField
              sx={{
                m: 2,
                width: "100%",
              }}
              id="outlined-password-input"
              label="Password"
              variant="filled"
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
            <Button
              sx={{ width: "100%", height: "50px" }}
              variant="contained"
              disableElevation
              mb={2}
              onClick={handelApi}
            >
              Signin
            </Button>

            <Box
              sx={{
                display: "block",
                p: 2,
              }}
            >
              {/* <Link to={"/signup"}> Signup.</Link> */}
            </Box>

            <Typography variant="body2">or sign in with</Typography>
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

export default SignIn;
