import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
// import { weeks } from "../constants/home";
import { useLocation, useParams } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { CheckBox } from "@mui/icons-material";

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
  // const { items } = useParams();
  // const decodedArray = JSON.parse(decodeURIComponent(items));

  const {state}  = useLocation();
  const params = useParams()
  // console.log('myArray:', state);
  const newstate=state?.data


  // const location = useLocation();
  // const { myArray } = location.state || {}; // Access the data from state

  // // Now you can use `myArray` in this component
  // console.log('new',myArray);


  // Now, decodedArray contains the passed array of objects from Screen1
  // const history = useHis
  // const location = useLocation();
  // const {items} =  location.state||{}
  // console.log('new',items)
  // const params = useParams()
  // console.log( 'yoyoy',location, params);

  // const { id,items } = location.state || {};
  // console.log('new',id, items);
  // const { items }  = useParams();
  // console.log("item", JSON.stringify(items?.items));
  // const array = item.split(",");
  // console.log("array", array);
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography variant={matches ? "h3" : "h4"} sx={{ display: "flex" }}>
        List of Items
      </Typography>
      {loading >= 0 && (
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Typography variant="h5" sx={{ marginRight: "8px" }}>
            {loading === 100 ? "Completed" : `${loading.toFixed(2)}%`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={loading}
            sx={{
              flexGrow: 1,
              height: "10px",
              // border: "2px primary",
              borderRadius: "20px",
            }}
          />
        </Box>
      )}

      <List>
        {newstate.map((arr, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleItemCheck(index)}
            // button
            sx={{
              border: "2px solid gray",
              marginBottom: "4px",
              borderRadius: "100px",
            }}
          >
            <ListItemIcon>
              <Checkbox
                checked={selectedItems.includes(index)}
                onChange={() => handleItemCheck(index)}
              />
            </ListItemIcon>
            <ListItemText
              primary={arr.name}
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
        ))}
      </List>
    </Box>
  );
}

export default App;
///
////
////
