import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { weeks } from "../constants/home";
import { useParams } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(0);

  const handleItemCheck = (itemId) => {
    const updatedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((item) => item !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedItems);

    const completionPercentage = (updatedItems.length / weeks.length) * 100;

    setLoading(completionPercentage);
  };

  const { id, item } = useParams();
  // console.log("item", item);
  const array = item.split(",");
  console.log("array", array);
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography variant="h3" sx={{ display: "flex" }}>
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
        {weeks.map((arr) => (
          <ListItem
            key={arr.id}
            disablePadding
            onClick={() => handleItemCheck(arr.id)}
            button
            sx={{
              border: "2px solid gray",
              marginBottom: "4px",
              borderRadius: "100px",
            }}
          >
            <ListItemIcon>
              <Checkbox
                checked={selectedItems.includes(arr.id)}
                onChange={() => handleItemCheck(arr.id)}
              />
              {/* <Typography>`${id}`</Typography> */}
            </ListItemIcon>
            {/* {array.map((arr) => ( */}
            <ListItemText
              primary={arr.name}
              primaryTypographyProps={{
                variant: "h5",
                sx: {
                  textDecoration: selectedItems.includes(arr.id)
                    ? "line-through"
                    : "none",
                  color: "gray",
                },
              }}
            />
            {/* ))} */}
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
