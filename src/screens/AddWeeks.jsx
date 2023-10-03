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
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddWeeks() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleDelete = (currentItem) => {
    const updatedList = list.filter((item) => item.name !== currentItem.name);
    setList(updatedList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (category.trim() === "") {
        toast.error("Please Enter the Category", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else setList([...list, { name: category, completed: false }]);
      setCategory("");
    }
  };
  const handleApi = () => {
    setLoading(true);

    var data = {
      name: name,
      items: list,
    };

    var header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .post("http://localhost:6464/api/add-weeks", data, header)
      .then((response) => {
        if (!response.data.success) {
          throw new Error(response.data.msg);
        }
        toast.error("submitted", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.msg) {
          toast.error(error.response.data.msg, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error(
            "An error occurred while registering. Please try again later.",
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
        }
        setLoading(false);
      });
  };

  const handleReset = () => {
    setList([]);
    setName("");
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
              Add Weeks
            </Typography>
            <TextField
              sx={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                marginBottom: "15px",
              }}
              label="Week Name"
              variant="outlined"
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <Box> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: matches ? "row" : "column",
                width: "100%",
              }}
            >
              <TextField
                sx={{
                  width: "100%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  marginBottom: "15px",
                }}
                id="outlined-basic"
                label="category"
                variant="outlined"
                disabled={loading}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                sx={{
                  marginLeft: matches ? 2 : 0,
                  width: matches ? "50%" : "100%",
                  height: "55px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  marginBottom: 2,
                }}
                size="medium"
                onClick={() => {
                  if (category.trim() === "") {
                    toast.error("Please enter the Category", {
                      position: toast.POSITION.TOP_RIGHT,
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                  } else {
                    setList([...list, { name: category, completed: false }]);
                    setCategory("");
                  }
                }}
                variant="contained"
              >
                Add
              </Button>
            </Box>
            {list.length > 0 ? (
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: matches ? "row" : "column",
                  flexWrap: "wrap",
                  height: "70%",
                  width: "100%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  marginBottom: 2,
                  borderRadius: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid black",
                }}
                disabled={loading}
              >
                {list.map((item, i) => (
                  <Typography
                    key={item}
                    value={item}
                    display={"flex"}
                    justifyContent={"center"}
                    margin={"8px"}
                    disabled={loading}
                  >
                    <Stack alignItems={"center"} spacing={1}>
                      <Chip
                        label={item.name}
                        onDelete={() => handleDelete(item)}
                        variant="outlined"
                      />
                    </Stack>
                  </Typography>
                ))}
              </Typography>
            ) : null}

            {/* </Box> */}

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
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                }}
                variant="contained"
                disableElevation
                mb={2}
                onClick={handleApi}
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
                submit
              </Button>
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  marginLeft: 2,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                }}
                variant="contained"
                disableElevation
                mb={2}
                onClick={handleReset}
              >
                reset
              </Button>
            </Box>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default AddWeeks;
