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
import "@fontsource/lexend/400.css";
import { Font } from "google-fonts";

import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import useHistory from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState("true");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [loading, setLoading] = useState(false);

  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  // const history = useHistory();

  // console.log("data", data);
  const handleApi = () => {
    setLoading(true);
    axios
      .post("http://localhost:6464/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data.success) {
          throw new Error(response.data.result);
        }
        console.log("SignIn", response.data.user._id);

        localStorage.setItem("token", response.data.token);
        // history.push(`/home?userId=${response.data.user._id}`);
        navigate("/home", { state: { userId: response.data.user._id } });

        // navigate("/home");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.result
        ) {
          toast.error(error.response.data.result, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error("An error occurred.", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        setLoading(false);
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
              Signin
            </Typography>

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
            <Button
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              variant="contained"
              mb={2}
              onClick={handleApi}
              disabled={loading}
            >
              {loading && (
                <CircularProgress
                  size={24}
                  style={{
                    color: "white",
                    marginRight: "5px",
                  }}
                />
              )}
              SignIn
            </Button>

            <Box>
              <Typography sx={{ marginTop: "10px" }}>
                Don't have an account yet?:
              </Typography>
            </Box>
            <Link to={"/"}> Signup.</Link>
            {/* </Box> */}

            <Typography>or sign in with</Typography>
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
                <GoogleOAuthProvider clientId="962911055677-djnrn95cl6bbvs5h9ou7qqc4hrggs9fs.apps.googleusercontent.com">
                  {/* <Google /> */}
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {}}
                    onError={() => {}}
                  />
                </GoogleOAuthProvider>
                {/* <GoogleIcon /> */}
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
      </Box>
    </div>
  );
}

export default SignIn;
