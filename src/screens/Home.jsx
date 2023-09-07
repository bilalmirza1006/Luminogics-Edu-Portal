import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { weeks, Item } from "../constants/home";
import { Link } from "react-router-dom";

// const HandleWeek = () => {
//   // alert("hallo");
//   <Link to={"/week"}>hallo</Link>;
// };

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
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
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "90%",
            flexDirection: matches ? "row" : "column",
          }}
        >
          {weeks.map((week) => (
            <Grid
              item
              xs={4}
              key={week.name}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
              }}
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
                <Link to={`/week/${week.id}`}>
                  <Box>{week.name}</Box>
                  <Box>{week.list}</Box>
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
////////////////////////////////////////////////////////////////////
