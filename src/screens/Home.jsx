import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Item } from "../constants/home";
import { Link } from "react-router-dom";
import axios from "axios";
// import { weeks } from "../constants/home";

// const HandleWeek = () => {
//   // alert("hallo");
//   <Link to={"/week"}>hallo</Link>;
// };
function Home() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [data, setData] = useState([]);
  // console.log("data",data)
  useEffect(() => {
    // setLoading(true);
    axios
      .get("http://localhost:6464/api/get-weeks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setData(response.data))
      // console.log('hihiiiii', res.data)
      .catch((error) => console.log(error.message));
    // setLoading(false);
  }, []);
  console.log("homedata", data);
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
            // console.log('week',week.items)
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
                  // backgroundColor: "red",
                }}
                // to={`/week/${week._id}/${week.items}`}
                // params={{ items: week.items }}
                // to={`/week/${week._id}/${encodeURIComponent(JSON.stringify(week.items))}`}

                //   to={{ pathname: `/week/${week._id}`,
                //   query: { items: week.items },
                //   state: { items: week.items }
                //  }}
                //  to={{ pathname: '/week/${week._id}', query: { the: 'query' } }}
                // to={{ pathname: `/week`, query: {test: 'safdasd'}, state: { myArray: 'week.items' } }}
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
////////////////////////////////////////////////////////////////////
