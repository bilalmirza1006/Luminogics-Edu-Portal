import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "../routs/RoutConstant";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleItemCheck = (index) => {
    const updatedItems = selectedItems.includes(index)
      ? selectedItems.filter((item) => item !== index)
      : [...selectedItems, index];

    setSelectedItems(updatedItems);

    const completionPercentage = (updatedItems.length / newstate.length) * 100;

    setLoading(completionPercentage);
  };
  const navigate = useNavigate();

  const deleteWeekHandel = () => {
    axios
      .delete(`http://localhost:6464/api/delete-week/${state.weekId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log("home", response.data.message);
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate("/home");

        // navigate("/home");
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  const { state } = useLocation();
  const newstate = state?.data;

  console.log("weekname", state.weekName);
  const weekItemUpdateApi = (itemsId) => {
    axios
      .put(
        `http://localhost:6464/api/weeks/${state.userId}/${state.weekId}/items/${itemsId}`,
        {
          // Add your request data here (productname, category, price, etc.)
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("Response", response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <Box
      sx={{
        // margin: "20px",
        paddingTop: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
      }}
    >
      <Box sx={{ display: "flex", width: "97%" }}>
        <Typography variant={matches ? "h3" : "h4"} sx={{ display: "flex" }}>
          List of Items
        </Typography>
      </Box>
      {loading >= 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 2,
            width: "97%",
          }}
        >
          <Typography variant="h5" sx={{ marginRight: "8px" }}>
            {loading === 100 ? "Completed" : `${loading.toFixed(2)}%`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={loading}
            sx={{
              flexGrow: 1,
              height: "10px",
              borderRadius: "20px",
            }}
          />
        </Box>
      )}
      <List sx={{ display: "flex", flexDirection: "column", width: "97%" }}>
        {newstate.map((weekItem, index) => {
          return (
            <Box sx={{ display: "flex", width: "100%" }}>
              <ListItem
                key={index}
                disablePadding
                onClick={() => handleItemCheck(index)}
                sx={{
                  border: "2px solid gray",
                  marginBottom: "4px",
                  borderRadius: "100px",
                }}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={selectedItems.includes(index)}
                    onChange={() => {
                      handleItemCheck(index);
                    }}
                    onClick={() => {
                      weekItemUpdateApi(weekItem._id);
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  onClick={() => {
                    weekItemUpdateApi(weekItem._id);
                  }}
                  primary={weekItem.name}
                  primaryTypographyProps={{
                    variant: "h5",
                    sx: {
                      textDecoration: selectedItems.includes(index)
                        ? "line-through"
                        : "none",
                      color: "gray",
                    },
                  }}
                />
              </ListItem>
            </Box>
          );
        })}
      </List>
      <Box
        sx={{
          display: "flex",
          width: "25%",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <Button
          sx={{
            width: "50px",
            height: "50px",
            m: 2,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
          variant="contained"
          // mb={2}
          onClick={deleteWeekHandel}
          // disabled={loading}
        >
          {/* {loading && (
            <CircularProgress
              size={24}
              style={{
                color: "white",
                marginRight: "5px",
              }}
            />
          )} */}
          Delete
        </Button>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            m: 2,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
          variant="contained"
          // mb={2}
          // onClick={deleteWeekHandel}
          // disabled={loading}
        >
          <Link
            to={AppRoutes.EDIT_WEEK}
            state={{ weekItems: newstate, weekName: state.weekName }}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            edit
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default App;
////////////////////
