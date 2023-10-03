import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Item } from "../constants/home";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6464/api/get-weeks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          minWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
          backgroundColor: "smokewhite",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "90%",
          }}
        >
          {data.map((week) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={week.name}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
              }}
            >
              <Link
                style={{
                  height: "80%",
                  width: "100%",
                  marginLeft: 5,
                  marginRight: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  textDecoration: "none",
                }}
                to={`/week`}
                state={{ data: week.items }}
              >
                <Item
                  sx={{
                    height: "80%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box>{week.name}</Box>
                  <Box>{week.no_of_item}</Box>
                </Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
