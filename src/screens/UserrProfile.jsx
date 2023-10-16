import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoutes } from "../routs/RoutConstant";

function UserrProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const localStorageUserName = localStorage.getItem("username");
  const localStorageEmail = localStorage.getItem("email");
  // console.log("username", userName);
  // const location = useLocation();
  // const userId = location.state && location.state.userId;
  // const { userId } = props;
  // console.log("userid", userId);

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
                Profile
              </Typography>
              <TextField
                sx={{
                  width: "100%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  marginBottom: "15px",
                }}
                label="User Name"
                variant="outlined"
                disabled={loading}
                value={localStorageUserName}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                sx={{
                  width: "100%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  marginBottom: "15px",
                }}
                label="User Email"
                variant="outlined"
                // disabled={disabled}
                disabled={true}
                value={localStorageEmail}
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
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={AppRoutes.EDIT_PROFILE}
                  >
                    Edit Profile
                  </Link>
                </Button>
              </Box>
            </div>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default UserrProfile;
