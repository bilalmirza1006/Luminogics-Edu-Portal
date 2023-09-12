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
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState("true");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelName = (event) => {
    setName(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const navigate = useNavigate();

  const handelApi = () => {
    console.log("signup", name, email, password);
    axios
      .post("http://localhost:6464/api/register-user", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data.success) {
          throw new Error("USER NOT FOUND");
        }
        console.log(response);
        navigate("/sign-in");
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
              width: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant={matches ? "h3" : "h6"} color="black" mb={2}>
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
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              variant="contained"
              disableElevation
              mb={2}
              onClick={handelApi}
            >
              Signin
            </Button>

            <Box
              sx={{
                display: "flex",
                p: 2,
              }}
            >
              <Box>
                <Typography>Already have an account?</Typography>
              </Box>
              <Link to={"/sign-in"}> SignIn.</Link>
            </Box>

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
