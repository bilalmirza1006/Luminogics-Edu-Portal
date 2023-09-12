import {
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

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
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
    axios
      .post("http://localhost:6464/api/add-weeks", {
        name: name,
        item: list,
      })
      .then((response) => {
        // setLoading(true);
        // alert('Product Add')
        // fetchApi();
        // console.log("hi", response)
      });
  };

  return (
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
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: "2px solid black",
          }}
        >
          <Typography variant={matches ? "h3" : "h6"} color="black" mb={2}>
            Add Weeks
          </Typography>

          <TextField
            label="Week Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box>
            <TextField
              sx={{ m: 2 }}
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
              size="medium"
              onClick={() => {
                if (category.trim() === "") {
                  alert("Please enter the Category");
                } else {
                  setList([...list, category]);
                  setCategory("");
                  // alert("clicked");
                  console.log("history", list);
                }
              }}
              sx={{ m: 2 }}
              variant="contained"
            >
              Add Category
            </Button>
          </Box>
          <Button variant="contained" onClick={handleApi}>
            Submit
          </Button>
          <Button variant="contained">reset</Button>
        </div>
      </Grid>
    </Box>
  );
}

export default AddWeeks;
