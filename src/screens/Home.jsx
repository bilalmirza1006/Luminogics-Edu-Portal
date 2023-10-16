import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Item } from "../constants/home";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { AppRoutes } from "../routs/RoutConstant";

function Home() {
  const [data, setData] = useState([]);
  console.log("home", data);

  const location = useLocation();
  const userId = location.state && location.state.userId;

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
          // marginTop: "30px",
          paddingTop: "30px",
          backgroundColor: "#9FB1BCFF",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "90%",
          }}
        >
          {data.map((week) => {
            // console.log("week", week.name);
            return (
              // {return(

              //   )}
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={week.name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",

                    color: "black",
                    textDecoration: "none",
                  }}
                  to={AppRoutes.WEEK}
                  state={{
                    data: week.items,
                    userId: userId,
                    weekId: week._id,
                    weekName: week.name,
                  }}
                >
                  <Item
                    sx={{
                      width: "100%",
                      backgroundColor: "#6E8898FF",
                    }}
                  >
                    <Box
                    //  sx={{ backgroundColor: "blue" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          height: "40px",
                          alignItems: "center",
                        }}
                      >
                        <Typography>{week.name}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          height: "40px",
                          alignItems: "center",
                        }}
                      >
                        <Typography>
                          Number of tasks: {week.no_of_item}
                        </Typography>
                      </Box>
                      <Box>
                        {week.items.slice(0, 3).map((item) => (
                          <Box
                            key={item.name}
                            sx={{
                              width: "100%",
                              height: "50px",
                              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                              borderRadius: "5px",
                              display: "flex",
                              backgroundColor: "#D3D0CBFF",
                              // height: "40px",
                              justifyContent: "center",
                              // m: 2,
                              marginBottom: "10px",
                              alignItems: "center",
                            }}
                          >
                            {item.name}
                          </Box>
                        ))}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {week.items.length > 3 && (
                          <Box
                            sx={{
                              width: "100%",
                              height: "50px",
                              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            <Button
                              sx={{
                                width: "100%",
                                height: "50px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                                // display: "flex",
                                // alignItems: "center",
                                // justifyContent: "space-between",
                              }}
                              variant="contained"
                              disableElevation
                              mb={2}
                            >
                              {/* See more */}
                              {week.items.length > 3 ? (
                                <Box>
                                  <Typography>
                                    See More (+{week.items.length - 3} Items)
                                  </Typography>
                                </Box>
                              ) : null}
                            </Button>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Item>
                </Link>
              </Grid>
            );
          })}
          {/* // ))} */}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
