import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import jwt_decode from "jwt-decode";
import axios from "axios";

function EditProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // const username = localStorage.getItem("username");
  // const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  console.log("decode", decoded.userId);

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

  const EditProfileHandel = () => {
    axios
      .put(`http://localhost:6464/api/edit-profile/${decoded.userId}`, {
        name: username,
      })
      .then((response) => {
        console.log("response", response.data.msg);
        toast.success(response.data.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((err) => {
        // console.log("err", err);
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
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
              Edit Profile
            </Typography>
            <TextField
              sx={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                marginBottom: "15px",
              }}
              label="User Name"
              variant="outlined"
              // disabled={loading}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                onClick={EditProfileHandel}
                // disabled={loading}
              >
                Save / Update
              </Button>
            </Box>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default EditProfile;
