import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { AppRoutes } from "../routs/RoutConstant";

function ForgetPassword() {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);

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

  const ResetPasswordHandel = () => {
    axios
      .post("http://localhost:6464/api/forgot-password", {
        email: email,
      })
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);
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
          ></div>
          <Typography variant={matches ? "h3" : "h4"} color="black" mb={2}>
            {" "}
            For reset password
          </Typography>
          <TextField
            sx={{
              width: "100%",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              marginBottom: "15px",
            }}
            label="Enter your Email"
            variant="outlined"
            // disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box>
            <Button
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              variant="contained"
              mb={2}
              onClick={ResetPasswordHandel}
              // disabled={loading}
            >
              {/* {loading && (
            <CircularProgress
              size={24}
              style={{
                color: "white",
                marginRight: "5px",
              }}
            />
          )} */}
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={AppRoutes.OTP}
              >
                Send otp
              </Link>
            </Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default ForgetPassword;
