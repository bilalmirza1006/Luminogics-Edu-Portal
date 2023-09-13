import {
  Alert,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function AddWeeks() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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

  const handleClick = () => {
    console.info("You clicked the Chip.");
    alert("click handel");
  };

  const handleDelete = (itemToDelete) => {
    const updatedList = list.filter((item) => item !== itemToDelete);
    setList(updatedList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (category.trim() === "") {
        alert("Please Enter the Category");
      } else setList([...list, category]);
      setCategory("");
    }
  };

  const handleApi = () => {
    if (name.trim() === "" || list.length === 0) {
      // alert("hallo");
      // <Alert variant="outlined" severity="error">
      //   This is an error alert — check it out!
      // </Alert>;
      setShowAlert(true);
    } else {
      setName("");
      setList([]);
      axios
        .post("http://localhost:6464/api/add-weeks", {
          name: name,
          item: list,
        })
        .then((response) => {
          if (!response.data.success) {
            throw new Error("complet all the fields");
          }
          console.log(response);
          // navigate("/sign-in");
          alert("submitted");
        })
        .catch((error) => {
          alert(error);
          console.log("CATCH: ", error);
        });
      // setList([]);
      // setName("");
    }
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
            {showAlert && (
              <Alert variant="outlined" severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            <Typography variant={matches ? "h3" : "h6"} color="black" mb={2}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <Box> */}
            <TextField
              sx={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                marginBottom: "15px",
              }}
              id="outlined-basic"
              label="category"
              variant="outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {list.length > 0 ? (
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: matches ? "row" : "column",
                  flexWrap: "wrap",
                  // flex-wrap: wrap,
                  height: "70%",
                  width: "100%",
                  borderRadius: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid black",
                }}
              >
                {list.map((item, i) => (
                  <Typography
                    key={item}
                    value={item}
                    display={"flex"}
                    justifyContent={"center"}
                    margin={"8px"}
                  >
                    <Stack alignItems={"center"} spacing={1}>
                      <Chip
                        label={item}
                        onClick={handleClick}
                        onDelete={() => handleDelete(item)}
                        variant="outlined"
                      />
                    </Stack>
                  </Typography>
                ))}
              </Typography>
            ) : null}
            <Button
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                marginBottom: 2,
              }}
              size="medium"
              onClick={() => {
                if (category.trim() === "") {
                  alert("Please enter the Category");
                } else {
                  setList([...list, category]);
                  setCategory("");
                  console.log("history", list);
                }
              }}
              // sx={{ m: 2 }}
              variant="contained"
            >
              Add Category
            </Button>
            {/* </Box> */}
            <Box
              sx={{
                // width: "100%",

                width: "100%",
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                // height: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                // marginBottom: 2,
                // display: "flex",
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  boxShadow: "0px 4px 8px rgba( 0.5)",
                  // marginBottom: 2,
                  // display: "flex",
                }}
                variant="contained"
                onClick={handleApi}
              >
                Submit
              </Button>
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  boxShadow: "0px 4px 8px rgba( 0.5)",
                  // marginBottom: 2,
                  // display: "flex",
                }}
                variant="contained"
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
