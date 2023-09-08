import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { weeks, Item } from "../constants/home";
import { Link } from "react-router-dom";

// const HandleWeek = () => {
//   // alert("hallo");
//   <Link to={"/week"}>hallo</Link>;
// };

function Home() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("lg"));
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
          // justifyContent: "center",
          backgroundColor: "smokewhite",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "90%",
            // flexDirection: matches ? "row" : "column",
          }}
          // sm
          // xl
          // md
          // lg
        >
          {weeks.map((week) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              // md={matches : 4}
              // xs={4}
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
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={`/week/${week.id}`}
                >
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
