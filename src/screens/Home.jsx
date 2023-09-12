import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Item } from "../constants/home";
import { Link } from "react-router-dom";
import axios from "axios";

// const HandleWeek = () => {
//   // alert("hallo");
//   <Link to={"/week"}>hallo</Link>;
// };

function Home() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [data, setData] = useState([]);
  useEffect(() => {
    // setLoading(true);
    axios
      .get("http://localhost:6464/api/get-weeks")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.message));
    // setLoading(false);
  }, []);
  console.log("data", data);
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
          {data.map((week) => (
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
                  to={`/week/${week._id}/${week.item}`}
                >
                  <Box>{week.name}</Box>
                  <Box>{week.no_of_item}</Box>
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
