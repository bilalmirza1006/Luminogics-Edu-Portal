import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
// import { weeksssss } from "../constants/home";
import { useParams } from "react-router-dom";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(0);

  const handleItemCheck = (itemId) => {
    const updatedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((item) => item !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedItems);

    const completionPercentage = (updatedItems.length / weeksssss.length) * 100;

    setLoading(completionPercentage);
  };

  const weeksssss = [
    { name: "Week One", list: ["To Do List"], id: 6 },
    { name: "Week Two", list: ["To Do List"], id: 6 },
    { name: "Week Three", list: ["To Do List"], id: 6 },
    { name: "Week Four", list: ["To Do List"], id: 6 },
    { name: "Week Five", list: ["To Do List"], id: 6 },
    { name: "Week Six", list: ["To Do List"], id: 6 },
  ];

  const { id } = useParams();
  return (
    <Box sx={{ margin: "20px" }}>
      {loading >= 0 && (
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Typography variant="h6" sx={{ marginRight: 0 }}>
            {/* {loading === 100 ? "Completed" : `${loading.toFixed(2)}%`} */}
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
      <Typography variant="h6">List of Items</Typography>
      {weeksssss.map((item) => (
        <Box key={item.id} display="flex" alignItems="center">
          <Checkbox
            checked={selectedItems.includes(item.id)}
            onChange={() => handleItemCheck(item.id)}
          />
          <Typography>`${item.id}`</Typography>
          <Typography
            variant="body1"
            sx={{
              textDecoration: selectedItems.includes(item.id)
                ? "line-through"
                : "none",
            }}
          >
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default App;
